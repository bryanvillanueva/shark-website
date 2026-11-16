import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduce = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis: Lenis | null = null;
let ctx: gsap.Context | null = null;
let lastY = 0;

function setupLenis() {
  if (lenis || reduce()) return;
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

function splitWords(el: HTMLElement) {
  if (el.dataset.splitDone) return;
  const walk = (node: Node): DocumentFragment => {
    const frag = document.createDocumentFragment();
    node.childNodes.forEach((child) => {
      if (child.nodeType === 3) {
        (child.textContent || '').split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) return frag.appendChild(document.createTextNode(' '));
          const outer = document.createElement('span');
          outer.className = 'split-word';
          const inner = document.createElement('span');
          inner.textContent = w;
          outer.appendChild(inner);
          frag.appendChild(outer);
        });
      } else if (child.nodeType === 1) {
        const clone = (child as HTMLElement).cloneNode(false) as HTMLElement;
        clone.appendChild(walk(child));
        frag.appendChild(clone);
      }
    });
    return frag;
  };
  const label = el.textContent?.trim() || '';
  const frag = walk(el);
  el.replaceChildren(frag);
  el.setAttribute('aria-label', label);
  el.querySelectorAll('.split-word').forEach((n) => n.setAttribute('aria-hidden', 'true'));
  el.dataset.splitDone = '1';
}

function init() {
  ctx?.revert();
  ScrollTrigger.getAll().forEach((s) => s.kill());
  document.documentElement.classList.add('js');
  setupLenis();
  lenis?.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);

  const header = document.querySelector<HTMLElement>('.header');
  const motion = !reduce();

  ctx = gsap.context(() => {
    // headings
    document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
      splitWords(el);
      el.classList.add('ready');
      if (!motion) return;
      const words = el.querySelectorAll('.split-word > span');
      const isHero = el.hasAttribute('data-hero');
      gsap.set(words, { yPercent: 115, rotate: 4 });
      const play = () => gsap.to(words, { yPercent: 0, rotate: 0, duration: 1.1, ease: 'expo.out', stagger: 0.06, delay: isHero ? 0.25 : 0 });
      if (isHero) play();
      else ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: play });
    });

    if (motion) {
      // simple reveals
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: Number(el.dataset.delay || 0), scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
      });
      gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((g) => {
        gsap.to(g.children, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: g, start: 'top 85%', once: true } });
      });

      // parallax
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const amt = Number(el.dataset.parallax || 0.15) * 100;
        gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: 'none', scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: true } });
      });

      // hero depth on scroll
      const hero = document.querySelector<HTMLElement>('.hero');
      if (hero) {
        gsap.to('.hero-media', { scale: 1.18, yPercent: 8, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
        gsap.to('.hero-inner', { yPercent: -14, opacity: 0.1, ease: 'none', scrollTrigger: { trigger: hero, start: '15% top', end: 'bottom top', scrub: true } });
      }

      // service stack: earlier cards shrink as the next slides over
      const cards = gsap.utils.toArray<HTMLElement>('.svc-card');
      if (cards.length) {
        const mm = gsap.matchMedia();
        mm.add('(min-width: 801px)', () => {
          cards.forEach((card, i) => {
            const next = cards[i + 1];
            if (!next) return;
            gsap.to(card, { scale: 0.93, filter: 'brightness(0.78)', ease: 'none', scrollTrigger: { trigger: next, start: 'top 90%', end: 'top 20%', scrub: true } });
          });
        });
      }

      // horizontal scroll portfolio
      const hs = document.querySelector<HTMLElement>('[data-hscroll]');
      if (hs) {
        const track = hs.querySelector<HTMLElement>('.htrack')!;
        const bar = hs.parentElement?.querySelector<HTMLElement>('.progress i');
        const mm = gsap.matchMedia();
        mm.add('(min-width: 900px)', () => {
          const dist = () => Math.max(0, track.scrollWidth - window.innerWidth + 40);
          gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: hs, start: 'top 18%', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1, onUpdate: (s) => bar && gsap.set(bar, { scaleX: s.progress }) } });
        });
      }

      // counters
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const raw = el.dataset.count || '0';
        const num = parseFloat(raw);
        const suffix = raw.replace(/[0-9.]/g, '');
        const o = { v: 0 };
        gsap.to(o, { v: num, duration: 1.8, ease: 'power2.out', onUpdate: () => (el.textContent = Math.round(o.v) + suffix), scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
      });

      // magnetic buttons
      if (window.matchMedia('(hover: hover)').matches) {
        document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
          const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' });
          const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' });
          el.addEventListener('pointermove', (e) => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * 0.25);
            yTo((e.clientY - r.top - r.height / 2) * 0.35);
          });
          el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
        });
      }
    }
  });

  // header: hide on scroll down, show on up; glass strengthens
  const onScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('scrolled', y > 40);
    const menuOpen = document.body.classList.contains('menu-open');
    header?.classList.toggle('hide', !menuOpen && y > 400 && y > lastY + 4);
    if (y < lastY - 4) header?.classList.remove('hide');
    lastY = y;
  };
  window.removeEventListener('scroll', (window as any).__sharkScroll);
  (window as any).__sharkScroll = onScroll;
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // videos: respect reduced motion + pause offscreen
  document.querySelectorAll<HTMLVideoElement>('video[data-bg]').forEach((v) => {
    if (reduce()) { v.pause(); v.removeAttribute('autoplay'); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause())), { threshold: 0.05 });
    io.observe(v);
  });

  ScrollTrigger.refresh();
}

function menu() {
  const btn = document.querySelector<HTMLButtonElement>('.burger');
  const close = () => { document.body.classList.remove('menu-open'); btn?.setAttribute('aria-expanded', 'false'); lenis?.start(); };
  btn?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', String(open));
    open ? lenis?.stop() : lenis?.start();
  });
  document.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && close());
}

function forms() {
  document.querySelectorAll<HTMLFormElement>('form[data-contact]').forEach((form) => {
    const err = form.querySelector<HTMLElement>('.err')!;
    const build = () => {
      const d = new FormData(form);
      const name = String(d.get('name') || '').trim();
      const email = String(d.get('email') || '').trim();
      const topic = String(d.get('topic') || '').trim();
      const message = String(d.get('message') || '').trim();
      if (!name || !message) { err.textContent = form.dataset.required || ''; return null; }
      err.textContent = '';
      const body = `${form.dataset.hello}\n\n${name}${email ? ' (' + email + ')' : ''}\n${topic}\n\n${message}`;
      return { body, subject: topic || 'Shark Agency' };
    };
    form.querySelector('[data-wa]')?.addEventListener('click', () => {
      const r = build(); if (!r) return;
      window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(r.body)}`, '_blank', 'noopener');
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const r = build(); if (!r) return;
      window.location.href = `mailto:${form.dataset.mail}?subject=${encodeURIComponent(r.subject)}&body=${encodeURIComponent(r.body)}`;
    });
  });
}

document.addEventListener('astro:page-load', () => { init(); menu(); forms(); });
document.addEventListener('astro:before-swap', () => { document.body.classList.remove('menu-open'); });
