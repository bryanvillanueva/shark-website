export type Lang = 'en' | 'es';

export const WHATSAPP = '610415738214';
export const EMAIL = 'info@sharkagency.co';
export const PHONES = [
  { display: '+57 319 4117603', tel: '+573194117603' },
  { display: '+61 0415 738 214', tel: '+61415738214' },
];
export const ADDRESS = ['Barranquilla, Colombia'];
// Add real profile URLs here; empty ones are hidden.
export const SOCIAL = { instagram: '', facebook: '', x: '' };

export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

export const routes = {
  home: { en: '/', es: '/es/' },
  about: { en: '/about/', es: '/es/quienes-somos/' },
  services: { en: '/services/', es: '/es/servicios/' },
  portfolio: { en: '/portfolio/', es: '/es/portafolio/' },
  contact: { en: '/contact/', es: '/es/contacto/' },
} as const;
export type RouteKey = keyof typeof routes;

export const t = {
  en: {
    meta: {
      home: ['Shark Digital Agency | Custom software, apps, web & AI', 'Custom software and mobile apps, web development, AI automation, chatbots and advanced AI. Dive into the future with Shark.'],
      about: ['About Us | Shark Digital Agency', 'Our vision, mission and values: digital innovation with a commitment to clean water and sustainability.'],
      services: ['Services | Shark Digital Agency', 'Custom software & mobile apps, web development, AI automation, chatbots and advanced AI.'],
      portfolio: ['Portfolio | Shark Digital Agency', 'A selection of web, mobile and AI products built by Shark.'],
      contact: ['Contact | Shark Digital Agency', 'Tell us about your project. Reach us on WhatsApp, email or phone.'],
    },
    nav: { home: 'Home', about: 'About Us', services: 'Services', portfolio: 'Portfolio', contact: 'Contact', cta: "Let's talk", menu: 'Menu', close: 'Close', skip: 'Skip to content', switch: 'Español' },
    hero: {
      eyebrow: 'Shark Digital Agency',
      line1: 'Dive into the',
      line2: 'future',
      sub: 'We build custom software, mobile apps, websites and AI that connect, sell, learn and grow with your business.',
      cta1: 'Start a project',
      cta2: 'See our work',
      scroll: 'Scroll',
    },
    marquee: ['Custom Software', 'Mobile Apps', 'Web Development', 'AI Automation', 'Chatbots', 'WhatsApp API', 'Advanced AI', 'Meta Ads', 'E-Commerce'],
    services: {
      eyebrow: 'What we do',
      title: 'Built to measure. Powered by AI.',
      sub: 'We build smart tools that connect, sell, learn and grow with your business.',
      more: 'Learn more',
      items: [
        { id: 'software', title: 'Custom Software & Mobile Apps', short: 'Bespoke platforms, web apps and iOS/Android apps shaped around your workflows and goals.', long: 'Every business is unique, and so should be its technology. We design and build business platforms, customer-facing web apps and native-quality mobile apps that fit your processes, not the other way around. Agile delivery, clean architecture and long-term performance.', bullets: ['Business management platforms, CRMs and internal tools', 'iOS & Android apps and cross-platform web apps', 'APIs, integrations and cloud infrastructure', 'Scalable architecture with agile, transparent delivery'] },
        { id: 'web', title: 'Web Development', short: 'Fast, beautiful, conversion-focused websites and online stores that grow with you.', long: 'Your website is your best salesperson. We craft high-performance websites, landing pages and e-commerce stores with modern design, flawless mobile experience and SEO built in from day one.', bullets: ['Corporate sites, landing pages and portfolios', 'E-commerce and subscription stores', 'SEO, speed optimisation and analytics', 'Multilingual sites and easy content management'] },
        { id: 'automation', title: 'AI & Process Automation', short: 'Intelligent workflows that remove repetitive work, reduce errors and free your team.', long: 'We design and implement intelligent automations that help your business work smarter, not harder. From connecting your tools to automating reports, onboarding, invoicing and lead follow-up, we give your team time back for strategic growth.', bullets: ['Workflow automation across your existing tools', 'Document, email and data processing with AI', 'Lead qualification and CRM automation', 'Dashboards and reporting that update themselves'] },
        { id: 'chatbots', title: 'Chatbots & WhatsApp Business API', short: 'Assistants that answer, qualify and sell 24/7 on WhatsApp, web and social channels.', long: 'As certified experts in WhatsApp Business API and Meta advertising, we turn your communication channels into revenue-generating tools: automated replies, lead qualification, sales funnels and campaigns that drive real conversions.', bullets: ['WhatsApp Business API setup and verification', 'AI chatbots trained on your business knowledge', 'Click-to-WhatsApp Meta Ads campaigns', 'Human hand-off, CRM sync and analytics'] },
        { id: 'ai', title: 'Advanced AI Solutions', short: 'Custom AI agents and private models trained on your data, running where you need them.', long: 'From custom AI agents to fully customised models trained to operate locally, we make sure your data remains secure and private. We help you adopt AI that is useful, measurable and built around your business, not a generic demo.', bullets: ['Custom AI agents and copilots', 'Private and local models for sensitive data', 'RAG: AI that knows your documents and systems', 'Computer vision, text and image generation'] },
      ],
      also: { title: 'And everything around it', items: ['Graphic design & branding', 'SEO', 'Meta Ads', 'E-commerce', 'Hosting & maintenance'] },
    },
    process: {
      eyebrow: 'How we work',
      title: 'From first idea to launch day',
      steps: [
        ['Discover', 'We listen, map your goals and define what success looks like.'],
        ['Design', 'Prototypes and visual direction you can see and react to early.'],
        ['Build', 'Agile sprints with demos every step of the way.'],
        ['Launch', 'Testing, deployment and a smooth go-live.'],
        ['Grow', 'Support, analytics and continuous improvement.'],
      ],
    },
    why: {
      eyebrow: 'Why choose us',
      title: 'Why Choose Us?',
      items: [
        ['Tailored Solutions', "We don't believe in one-size-fits-all. Every project we undertake is unique and customised to fit your specific business needs and goals."],
        ['Client-Focused Approach', 'Your success is our priority. We work closely with you every step of the way to ensure the final product aligns with your vision and objectives.'],
        ['Global Reach', "Our team works remotely from different parts of the world, bringing diverse perspectives and ideas to your project. We're proud to offer our services to clients worldwide."],
        ['Future-Ready', 'We stay ahead of the curve by constantly evolving with the latest trends and technologies, to keep your business ahead of the competition.'],
      ],
      cta: 'Get started',
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Our Latest Projects',
      sub: 'Websites, web apps and AI products we have designed and built.',
      view: 'View all projects',
      drag: 'Drag or scroll',
      items: {
        guardaguas: ['Guardaguas Fundation', 'Website', 'Website for a non-profit foundation dedicated to the care and protection of water in Barranquilla, Colombia.'],
        csk: ['College of Skills & Knowledge', 'Website', 'Website for a well-known trade college located in the city of Melbourne.'],
        limpia: ['Limpia Cleaning', 'Website', 'Website for a cleaning & gardening company located in Melbourne, Australia.'],
        kipo: ['Kipo', 'Web app & mobile app', 'A personal finance app that automatically tracks your expenses by reading bank notifications.'],
        tondo: ['Tondo', 'AI web app', 'Create a brand with colours and imagery, and an AI assistant generates visuals always tailored to your business and brand.'],
        telocompro: ['Te lo compro', 'Landing page', 'Landing page for a subscription-based shopping service.'],
        orion: ['Orion AI', 'AI writing assistant', 'An online writing assistant that works in any app, wherever you write.'],
        bryanglen: ['Bryan Glen', 'Personal portfolio', 'Personal portfolio website.'],
      },
    },
    impact: {
      eyebrow: 'Our mission',
      title: '10% of every project protects our water.',
      body: 'We are driven by two commitments: delivering exceptional digital solutions and contributing to a sustainable future. We support Bocas de Ceniza Waterkeeper in their fight for clean water and environmental justice.',
      cta: 'Our story',
    },
    cta: {
      title: 'Ready to dive in?',
      sub: 'Tell us about your project and we will get back to you fast.',
      b1: 'Chat on WhatsApp',
      b2: 'Send a message',
      wa: 'Hi Shark Agency! I would like to talk about a project.',
    },
    about: {
      eyebrow: 'About us',
      title: 'Digital innovation with purpose',
      sub: 'Shark Digital Agency is a remote-first team building software, web and AI, with a commitment to the planet we all share.',
      visionTitle: 'Our Vision',
      vision: 'We envision a future where Shark Digital Agency is recognized as a global leader in digital innovation and sustainability.',
      v5: ['Next 5 years', 'We see ourselves not only as a digital agency but as a product creator, developing our own solutions to revolutionize the industry. Our goal is to create cutting-edge tools and technologies that help businesses optimize their operations in a smooth and efficient way.'],
      v10: ['Next 10 years', 'We aim to expand our impact beyond our current efforts, becoming a global partner in sustainability programs like Bocas de Ceniza. We will actively support and promote initiatives that protect the environment, ensuring that technology and sustainability go hand in hand.'],
      visionClose: 'By combining innovation, creativity and responsibility, we are shaping a future where digital solutions drive both business success and global sustainability.',
      missionTitle: 'Our Mission',
      mission: [
        'At Shark Digital Agency, we are driven by two core commitments: delivering exceptional digital solutions and contributing to a sustainable future. We believe that businesses have a responsibility beyond innovation, one that includes protecting our planet.',
        'As part of our mission, we actively support Bocas de Ceniza Waterkeeper in their fight for clean water and environmental justice. Through education, advocacy and research, we contribute to the defense of the fundamental right to clean water and a healthy environment for present and future generations.',
      ],
      tenPct: ['10%', 'of every project we undertake goes directly toward initiatives that protect our oceans, rivers and water sources.'],
      missionClose: "By partnering with us, you're not just investing in digital excellence, you're also helping to safeguard the natural world for generations to come.",
      valuesTitle: 'Our Values',
      values: [
        ['Innovation', "We are constantly pushing the boundaries of what's possible, leveraging the latest technology and trends."],
        ['Collaboration', 'The best solutions come from working closely with our clients, understanding their needs and delivering results that exceed expectations.'],
        ['Excellence', 'We are committed to delivering high-quality work that stands out in a crowded digital landscape.'],
        ['Freedom', 'We believe in the power of remote work, giving our team the freedom to work from anywhere in the world, which fosters creativity and innovation.'],
        ['Sustainability', 'We are committed to environmental responsibility, dedicating resources to initiatives that protect our oceans, rivers and water sources for future generations.'],
        ['Social Responsibility', 'We use our expertise and influence to contribute to a better world, supporting causes that align with our values and mission.'],
      ],
      stats: [['5+', 'Core services'], ['8', 'Featured projects'], ['10%', 'To water protection'], ['24/7', 'Remote, worldwide']],
    },
    servicesPage: {
      eyebrow: 'Services',
      title: 'Software, web and AI, built around you',
      sub: 'Custom software and mobile apps are our core. Around it, we build the web presence, automations and AI that make your business run smarter.',
      cta: 'Request a quote',
      wa: 'Hi Shark Agency! I would like a quote for: ',
    },
    contact: {
      eyebrow: 'Contact us',
      title: "Let's build something great",
      sub: 'Worldwide presence, local impact. Tell us what you have in mind.',
      info: 'Contact info',
      follow: 'Follow us',
      form: { name: 'Name', namePh: 'Tell us who you are', email: 'Email', emailPh: 'Where can we reach you?', topic: 'How can we help?', topics: ['Custom software / mobile app', 'Website / e-commerce', 'AI automation', 'Chatbot / WhatsApp API', 'Advanced AI', 'Something else'], message: 'Message', messagePh: "What's on your mind?", send: 'Send the Shark Signal!', viaWa: 'Send via WhatsApp', viaMail: 'Send by email', or: 'or', hint: 'We will open WhatsApp or your email app with your message ready to send.', required: 'Please fill in your name and message.' },
      waHello: 'Hi Shark Agency! ',
    },
    footer: { links: 'Useful links', services: 'Services', rights: 'Copyright Shark Agency. All Rights Reserved. ABN Number 859 549 54060', tag: 'Dive into the future', top: 'Back to top' },
    a11y: { whatsapp: 'Chat with us on WhatsApp', help: 'How can I help you?' },
    notFound: ['Lost at sea', 'This page swam away.', 'Back home'],
  },
  es: {
    meta: {
      home: ['Shark Digital Agency | Software a la medida, apps, web e IA', 'Software y apps móviles a la medida, desarrollo web, automatización con IA, chatbots e IA avanzada. Sumérgete en el futuro con Shark.'],
      about: ['Quiénes somos | Shark Digital Agency', 'Nuestra visión, misión y valores: innovación digital con compromiso por el agua limpia y la sostenibilidad.'],
      services: ['Servicios | Shark Digital Agency', 'Software y apps móviles a la medida, desarrollo web, automatización con IA, chatbots e IA avanzada.'],
      portfolio: ['Portafolio | Shark Digital Agency', 'Una selección de productos web, móviles y de IA creados por Shark.'],
      contact: ['Contacto | Shark Digital Agency', 'Cuéntanos sobre tu proyecto. Escríbenos por WhatsApp, correo o teléfono.'],
    },
    nav: { home: 'Inicio', about: 'Quiénes somos', services: 'Servicios', portfolio: 'Portafolio', contact: 'Contacto', cta: 'Hablemos', menu: 'Menú', close: 'Cerrar', skip: 'Saltar al contenido', switch: 'English' },
    hero: {
      eyebrow: 'Shark Digital Agency',
      line1: 'Sumérgete en el',
      line2: 'futuro',
      sub: 'Creamos software a la medida, apps móviles, sitios web e IA que conectan, venden, aprenden y crecen con tu negocio.',
      cta1: 'Inicia un proyecto',
      cta2: 'Ver nuestro trabajo',
      scroll: 'Desliza',
    },
    marquee: ['Software a la medida', 'Apps móviles', 'Desarrollo web', 'Automatización con IA', 'Chatbots', 'API de WhatsApp', 'IA avanzada', 'Meta Ads', 'E-Commerce'],
    services: {
      eyebrow: 'Qué hacemos',
      title: 'Hecho a tu medida. Impulsado por IA.',
      sub: 'Construimos herramientas inteligentes que conectan, venden, aprenden y crecen con tu negocio.',
      more: 'Saber más',
      items: [
        { id: 'software', title: 'Software y Apps Móviles a la Medida', short: 'Plataformas, web apps y apps iOS/Android diseñadas alrededor de tus procesos y objetivos.', long: 'Cada negocio es único, y su tecnología también debería serlo. Diseñamos y construimos plataformas de gestión, aplicaciones web para clientes y apps móviles de calidad nativa que se adaptan a tus procesos, no al revés. Entrega ágil, arquitectura limpia y rendimiento a largo plazo.', bullets: ['Plataformas de gestión, CRMs y herramientas internas', 'Apps iOS y Android y aplicaciones web multiplataforma', 'APIs, integraciones e infraestructura en la nube', 'Arquitectura escalable con entrega ágil y transparente'] },
        { id: 'web', title: 'Desarrollo Web', short: 'Sitios y tiendas online rápidos, hermosos y enfocados en convertir, que crecen contigo.', long: 'Tu sitio web es tu mejor vendedor. Creamos sitios de alto rendimiento, landing pages y tiendas e-commerce con diseño moderno, experiencia móvil impecable y SEO integrado desde el primer día.', bullets: ['Sitios corporativos, landing pages y portafolios', 'E-commerce y tiendas por suscripción', 'SEO, optimización de velocidad y analítica', 'Sitios multilingües y gestión de contenido sencilla'] },
        { id: 'automation', title: 'Automatización con IA y de Procesos', short: 'Flujos inteligentes que eliminan tareas repetitivas, reducen errores y liberan a tu equipo.', long: 'Diseñamos e implementamos automatizaciones inteligentes para que tu negocio trabaje mejor, no más duro. Desde conectar tus herramientas hasta automatizar reportes, onboarding, facturación y seguimiento de clientes, le devolvemos tiempo a tu equipo para crecer.', bullets: ['Automatización de flujos entre tus herramientas actuales', 'Procesamiento de documentos, correos y datos con IA', 'Calificación de leads y automatización de CRM', 'Dashboards y reportes que se actualizan solos'] },
        { id: 'chatbots', title: 'Chatbots y API de WhatsApp Business', short: 'Asistentes que responden, califican y venden 24/7 en WhatsApp, web y redes.', long: 'Como expertos certificados en la API de WhatsApp Business y publicidad en Meta, convertimos tus canales de comunicación en herramientas que generan ingresos: respuestas automáticas, calificación de leads, embudos de venta y campañas que convierten de verdad.', bullets: ['Configuración y verificación de WhatsApp Business API', 'Chatbots con IA entrenados con el conocimiento de tu negocio', 'Campañas de Meta Ads con clic a WhatsApp', 'Traspaso a humano, integración con CRM y analítica'] },
        { id: 'ai', title: 'Soluciones de IA Avanzada', short: 'Agentes de IA y modelos privados entrenados con tus datos, donde los necesites.', long: 'Desde agentes de IA personalizados hasta modelos totalmente a la medida entrenados para operar de forma local, nos aseguramos de que tus datos permanezcan seguros y privados. Te ayudamos a adoptar una IA útil, medible y construida alrededor de tu negocio, no una demo genérica.', bullets: ['Agentes y copilotos de IA personalizados', 'Modelos privados y locales para datos sensibles', 'RAG: IA que conoce tus documentos y sistemas', 'Visión por computador, texto y generación de imágenes'] },
      ],
      also: { title: 'Y todo lo que lo rodea', items: ['Diseño gráfico y branding', 'SEO', 'Meta Ads', 'E-commerce', 'Hosting y mantenimiento'] },
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'De la primera idea al día del lanzamiento',
      steps: [
        ['Descubrir', 'Te escuchamos, mapeamos tus metas y definimos cómo se ve el éxito.'],
        ['Diseñar', 'Prototipos y dirección visual que puedes ver y comentar desde el inicio.'],
        ['Construir', 'Sprints ágiles con demos en cada paso del camino.'],
        ['Lanzar', 'Pruebas, despliegue y una salida a producción sin sobresaltos.'],
        ['Crecer', 'Soporte, analítica y mejora continua.'],
      ],
    },
    why: {
      eyebrow: 'Por qué elegirnos',
      title: '¿Por qué elegirnos?',
      items: [
        ['Soluciones a la medida', 'No creemos en lo genérico. Cada proyecto es único y se personaliza para tus necesidades y objetivos de negocio.'],
        ['Enfoque en el cliente', 'Tu éxito es nuestra prioridad. Trabajamos de cerca contigo en cada paso para que el producto final esté alineado con tu visión y objetivos.'],
        ['Alcance global', 'Nuestro equipo trabaja de forma remota desde distintas partes del mundo, aportando perspectivas e ideas diversas a tu proyecto. Ofrecemos nuestros servicios a clientes en todo el mundo.'],
        ['Listos para el futuro', 'Evolucionamos constantemente con las últimas tendencias y tecnologías para mantener tu negocio por delante de la competencia.'],
      ],
      cta: 'Comenzar',
    },
    work: {
      eyebrow: 'Trabajo seleccionado',
      title: 'Nuestros últimos proyectos',
      sub: 'Sitios web, aplicaciones y productos de IA que hemos diseñado y construido.',
      view: 'Ver todos los proyectos',
      drag: 'Arrastra o desliza',
      items: {
        guardaguas: ['Fundación Guardaguas', 'Sitio web', 'Sitio web de una fundación sin ánimo de lucro dedicada al cuidado y la protección del agua en Barranquilla, Colombia.'],
        csk: ['College of Skills & Knowledge', 'Sitio web', 'Sitio web de un reconocido colegio técnico en la ciudad de Melbourne.'],
        limpia: ['Limpia Cleaning', 'Sitio web', 'Sitio web de una empresa de limpieza y jardinería en Melbourne, Australia.'],
        kipo: ['Kipo', 'Web app y app móvil', 'Una app de finanzas personales que registra tus gastos automáticamente leyendo las notificaciones bancarias.'],
        tondo: ['Tondo', 'Web app con IA', 'Crea una marca con colores e imágenes y un asistente genera visuales siempre a la medida de tu negocio y tu marca.'],
        telocompro: ['Te lo compro', 'Landing page', 'Landing page para un servicio de compras por suscripción.'],
        orion: ['Orion AI', 'Asistente de escritura con IA', 'Un asistente de escritura en línea que funciona en cualquier app, donde sea que escribas.'],
        bryanglen: ['Bryan Glen', 'Portafolio personal', 'Sitio web de portafolio personal.'],
      },
    },
    impact: {
      eyebrow: 'Nuestra misión',
      title: 'El 10% de cada proyecto protege nuestra agua.',
      body: 'Nos mueven dos compromisos: ofrecer soluciones digitales excepcionales y contribuir a un futuro sostenible. Apoyamos a Bocas de Ceniza Waterkeeper en su lucha por el agua limpia y la justicia ambiental.',
      cta: 'Nuestra historia',
    },
    cta: {
      title: '¿Listo para sumergirte?',
      sub: 'Cuéntanos sobre tu proyecto y te respondemos rápido.',
      b1: 'Escríbenos por WhatsApp',
      b2: 'Enviar un mensaje',
      wa: '¡Hola Shark Agency! Quiero hablar sobre un proyecto.',
    },
    about: {
      eyebrow: 'Quiénes somos',
      title: 'Innovación digital con propósito',
      sub: 'Shark Digital Agency es un equipo remoto que crea software, web e IA, con un compromiso por el planeta que todos compartimos.',
      visionTitle: 'Nuestra Visión',
      vision: 'Visualizamos un futuro en el que Shark Digital Agency sea reconocida como líder global en innovación digital y sostenibilidad.',
      v5: ['Próximos 5 años', 'Nos vemos no solo como una agencia digital, sino como creadores de producto, desarrollando nuestras propias soluciones para revolucionar la industria. Nuestro objetivo es crear herramientas y tecnologías de vanguardia que ayuden a las empresas a optimizar sus operaciones de forma fluida y eficiente.'],
      v10: ['Próximos 10 años', 'Buscamos ampliar nuestro impacto más allá de lo actual, convirtiéndonos en un aliado global de programas de sostenibilidad como Bocas de Ceniza. Apoyaremos y promoveremos activamente iniciativas que protejan el medio ambiente, haciendo que tecnología y sostenibilidad vayan de la mano.'],
      visionClose: 'Combinando innovación, creatividad y responsabilidad, damos forma a un futuro donde las soluciones digitales impulsan tanto el éxito empresarial como la sostenibilidad global.',
      missionTitle: 'Nuestra Misión',
      mission: [
        'En Shark Digital Agency nos mueven dos compromisos esenciales: ofrecer soluciones digitales excepcionales y contribuir a un futuro sostenible. Creemos que las empresas tienen una responsabilidad más allá de la innovación, una que incluye proteger nuestro planeta.',
        'Como parte de nuestra misión, apoyamos activamente a Bocas de Ceniza Waterkeeper en su lucha por el agua limpia y la justicia ambiental. A través de la educación, la incidencia y la investigación, contribuimos a la defensa del derecho fundamental al agua limpia y a un ambiente sano para las generaciones presentes y futuras.',
      ],
      tenPct: ['10%', 'de cada proyecto que realizamos va directamente a iniciativas que protegen nuestros océanos, ríos y fuentes de agua.'],
      missionClose: 'Al trabajar con nosotros no solo inviertes en excelencia digital, también ayudas a proteger el mundo natural para las generaciones futuras.',
      valuesTitle: 'Nuestros Valores',
      values: [
        ['Innovación', 'Empujamos constantemente los límites de lo posible, aprovechando la última tecnología y tendencias.'],
        ['Colaboración', 'Las mejores soluciones nacen de trabajar de cerca con nuestros clientes, entender sus necesidades y entregar resultados que superen las expectativas.'],
        ['Excelencia', 'Nos comprometemos a entregar un trabajo de alta calidad que se destaque en un panorama digital saturado.'],
        ['Libertad', 'Creemos en el poder del trabajo remoto, dándole a nuestro equipo la libertad de trabajar desde cualquier lugar del mundo, lo que fomenta la creatividad y la innovación.'],
        ['Sostenibilidad', 'Nos comprometemos con la responsabilidad ambiental, dedicando recursos a iniciativas que protegen nuestros océanos, ríos y fuentes de agua para las futuras generaciones.'],
        ['Responsabilidad social', 'Usamos nuestra experiencia e influencia para contribuir a un mundo mejor, apoyando causas alineadas con nuestros valores y misión.'],
      ],
      stats: [['5+', 'Servicios principales'], ['8', 'Proyectos destacados'], ['10%', 'Para proteger el agua'], ['24/7', 'Remoto, en todo el mundo']],
    },
    servicesPage: {
      eyebrow: 'Servicios',
      title: 'Software, web e IA, hechos a tu medida',
      sub: 'El software y las apps móviles a la medida son nuestro núcleo. Alrededor construimos la presencia web, las automatizaciones y la IA que hacen que tu negocio funcione mejor.',
      cta: 'Solicitar cotización',
      wa: '¡Hola Shark Agency! Quisiera una cotización para: ',
    },
    contact: {
      eyebrow: 'Contáctanos',
      title: 'Construyamos algo grande',
      sub: 'Presencia mundial, impacto local. Cuéntanos qué tienes en mente.',
      info: 'Información de contacto',
      follow: 'Síguenos',
      form: { name: 'Nombre', namePh: 'Dinos quién eres', email: 'Correo', emailPh: '¿Dónde podemos escribirte?', topic: '¿Cómo podemos ayudarte?', topics: ['Software / app móvil a la medida', 'Sitio web / e-commerce', 'Automatización con IA', 'Chatbot / API de WhatsApp', 'IA avanzada', 'Otra cosa'], message: 'Mensaje', messagePh: '¿Qué tienes en mente?', send: '¡Envía la señal Shark!', viaWa: 'Enviar por WhatsApp', viaMail: 'Enviar por correo', or: 'o', hint: 'Abriremos WhatsApp o tu app de correo con tu mensaje listo para enviar.', required: 'Por favor completa tu nombre y mensaje.' },
      waHello: '¡Hola Shark Agency! ',
    },
    footer: { links: 'Enlaces útiles', services: 'Servicios', rights: 'Copyright Shark Agency. Todos los derechos reservados. ABN 859 549 54060', tag: 'Sumérgete en el futuro', top: 'Volver arriba' },
    a11y: { whatsapp: 'Escríbenos por WhatsApp', help: '¿En qué puedo ayudarte?' },
    notFound: ['Perdidos en el mar', 'Esta página se fue nadando.', 'Volver al inicio'],
  },
} as const;

export type Dict = (typeof t)['en'];

export const projects = [
  { key: 'guardaguas', imgs: ['guardaguas-1', 'guardaguas-2'], url: '' },
  { key: 'kipo', imgs: ['kipo-1', 'kipo-2'], url: '' },
  { key: 'tondo', imgs: ['tondo-1', 'tondo-2'], url: '' },
  { key: 'orion', imgs: ['orion-1', 'orion-2'], url: '' },
  { key: 'telocompro', imgs: ['telocompro-1', 'telocompro-2'], url: '' },
  { key: 'csk', imgs: ['csk-1', 'csk-2'], url: '' },
  { key: 'limpia', imgs: ['limpia-1', 'limpia-2'], url: '' },
  { key: 'bryanglen', imgs: ['bryanglen-1', 'bryanglen-1'], url: '' },
] as const;
