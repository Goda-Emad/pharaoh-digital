/* ============================================================
   PHARAOH DIGITAL — main.js
   ============================================================

   CONFIGURATION — edit contact details here only.
   ============================================================ */

const CONFIG = {
  wa: {
    mx: {
      number: '5215540554733',
      display: '+52 1 55 4055 4733',
      flag:   '🇲🇽',
      label:  'Mexico',
    },
    eg: {
      number: '201126242932',
      display: '+20 112 624 2932',
      flag:   '🇪🇬',
      label:  'Egypt',
    },
  },
};

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const T = {
  en: {
    page_title:       'Pharaoh Digital — Software, AI & Automation',
    meta_desc:        'We build smart software that grows your business. Custom systems, AI integrations, mobile apps, and design — serving Mexico and the USA.',
    nav_services:     'Services',
    nav_process:      'Process',
    nav_work:         'Work',
    nav_about:        'About',
    nav_contact:      'Contact',
    nav_cta:          'Get a free consultation',
    hero_eyebrow:     'Software · AI · Automation',
    hero_h1:          'We build smart software\nthat grows your business.',
    hero_sub:         'From websites to AI integrations — Pharaoh Digital delivers modern, reliable solutions for businesses in Mexico and the USA.',
    hero_cta1:        'Get a free consultation',
    hero_cta2:        'See our services',
    wa_choose:        'Choose your region:',
    wa_msg:           "Hi Pharaoh Digital, I'd like to talk about a project.",
    services_h2:      'What we build',
    services_sub:     'End-to-end digital services — from idea to launch.',
    svc1_title:  'Website Development',
    svc1_desc:   'Fast, modern websites that convert visitors into customers.',
    svc2_title:  'Mobile App Development',
    svc2_desc:   'iOS and Android apps built for real users, not just demos.',
    svc3_title:  'Custom Systems',
    svc3_desc:   'Tailor-made software that fits your exact business process.',
    svc4_title:  'CRM Systems',
    svc4_desc:   'Manage leads, deals, and clients with a CRM built for your team.',
    svc5_title:  'Dashboards & Reports',
    svc5_desc:   'Interactive dashboards and Power BI reports that turn data into decisions.',
    svc6_title:  'System Integration & APIs',
    svc6_desc:   'Connect your tools and platforms with clean, well-documented APIs.',
    svc7_title:  'UI/UX & Graphic Design',
    svc7_desc:   'Beautiful, intuitive interfaces and brand visuals that your users will love.',
    svc8_title:  'AI, Chatbots & Assistants',
    svc8_desc:   'Embed AI into your product — smart chatbots, copilots, and recommendation engines.',
    svc9_title:  'Process Automation',
    svc9_desc:   'Automate repetitive tasks so your team focuses on what matters.',
    svc10_title: 'AI Video & Video Ads',
    svc10_desc:  'AI-generated videos and high-converting video ads — produced fast.',
    why_h2:      'Why Pharaoh Digital?',
    why_sub:     'We built this company to do things differently.',
    why1_title:  'Bilingual Team',
    why1_desc:   'We communicate in English and Spanish so nothing gets lost in translation — ever.',
    why2_title:  'Fast Delivery',
    why2_desc:   'Lean processes and clear milestones mean you see working software quickly.',
    why3_title:  'Modern Technology',
    why3_desc:   'We build with current stacks and AI tools — no legacy frameworks, no shortcuts.',
    why4_title:  'Ongoing Support',
    why4_desc:   'We stay after launch — updates, improvements, and support when you need it.',
    process_h2:  'How we work',
    process_sub: 'A clear, proven process — from first call to live product.',
    step1_title: 'Discovery',
    step1_desc:  'We learn your business, goals, and users. Then we scope the project and align on what success looks like.',
    step2_title: 'Design',
    step2_desc:  'We create wireframes and high-fidelity UI designs — you approve before a single line of code is written.',
    step3_title: 'Build',
    step3_desc:  'We develop in short sprints with regular demos. You always know what\'s happening and can give feedback in real time.',
    step4_title: 'Launch & Support',
    step4_desc:  'We deploy, monitor, and hand over full documentation. Then we stay available for improvements and growth.',
    work_h2:    'Our work',
    work_sub:   'A selection of what we\'ve been building.',
    badge_soon: 'Coming soon',
    proj1_title: 'Business Website',
    proj1_desc:  'A modern, SEO-optimised marketing site for a service business in Mexico City.',
    proj2_title: 'Service Management App',
    proj2_desc:  'A cross-platform mobile app for scheduling and tracking field service orders.',
    proj3_title: 'AI Sales Assistant',
    proj3_desc:  'A WhatsApp chatbot that qualifies leads and books meetings automatically for a retail business.',
    proj4_title: 'Operations Dashboard',
    proj4_desc:  'A real-time Power BI dashboard connecting sales, inventory, and logistics data in one view.',
    about_h2:   'Built in Egypt.\nGrowing in the Americas.',
    about_p1:   'Pharaoh Digital was founded by an Egyptian team with a mission that travels: help small and medium businesses in Mexico and the USA build technology that actually works for them.',
    about_p2:   'We combine software engineering, modern design, and artificial intelligence into one focused studio. No handoffs between agencies, no communication gaps — just one team that handles everything from strategy to code to launch.',
    about_p3:   'We chose the name Pharaoh Digital as a nod to our roots and to our ambition: to build things that last, with precision and purpose.',
    tag_egypt:  '🇪🇬 Egypt',
    tag_mexico: '🇲🇽 Mexico',
    tag_usa:    '🇺🇸 USA',
    contact_h2:    'Let\'s talk',
    contact_sub:   'Tell us about your project — we\'ll get back to you fast.',
    wa_direct:     'Message us directly on WhatsApp',
    branch_eg_name: 'Egypt Office',
    branch_eg_addr: 'Fifth Settlement, New Cairo, Egypt',
    branch_mx_name: 'Mexico Office',
    branch_mx_addr: 'Mexico City, Mexico',
    form_name:      'Your name',
    form_name_err:  'Please enter your name.',
    form_email:     'Email address',
    form_email_err: 'Please enter a valid email.',
    form_msg:       'Tell us about your project',
    form_msg_err:   'Please describe your project.',
    form_send:      'Send via WhatsApp',
    footer_tagline:      'Software · AI · Automation',
    footer_links_title:  'Quick links',
    footer_contact_title:'Contact',
    footer_addr_eg:      'Fifth Settlement, New Cairo, Egypt',
    footer_addr_mx:      'Mexico City, Mexico',
    footer_copy:         '© 2026 Pharaoh Digital. All rights reserved.',
  },

  es: {
    page_title:  'Pharaoh Digital — Software, IA y Automatización',
    meta_desc:   'Creamos software inteligente que hace crecer tu negocio. Sistemas a medida, integraciones de IA, apps móviles y diseño — para México y EUA.',
    nav_services:'Servicios',
    nav_process: 'Proceso',
    nav_work:    'Proyectos',
    nav_about:   'Nosotros',
    nav_contact: 'Contacto',
    nav_cta:     'Consulta gratuita',
    hero_eyebrow:'Software · IA · Automatización',
    hero_h1:     'Creamos software inteligente\nque hace crecer tu negocio.',
    hero_sub:    'De sitios web a integraciones de IA — Pharaoh Digital entrega soluciones modernas y confiables para negocios en México y EUA.',
    hero_cta1:   'Consulta gratuita',
    hero_cta2:   'Ver servicios',
    wa_choose:   'Elige tu región:',
    wa_msg:      'Hola Pharaoh Digital, me gustaría hablar sobre un proyecto.',
    services_h2: 'Lo que construimos',
    services_sub:'Servicios digitales de principio a fin — desde la idea hasta el lanzamiento.',
    svc1_title:  'Desarrollo Web',
    svc1_desc:   'Sitios rápidos y modernos que convierten visitantes en clientes.',
    svc2_title:  'Desarrollo de Apps Móviles',
    svc2_desc:   'Apps para iOS y Android pensadas para usuarios reales, no solo demos.',
    svc3_title:  'Sistemas a Medida',
    svc3_desc:   'Software personalizado que se adapta exactamente a tu proceso de negocio.',
    svc4_title:  'Sistemas CRM',
    svc4_desc:   'Gestiona prospectos, tratos y clientes con un CRM hecho para tu equipo.',
    svc5_title:  'Dashboards y Reportes',
    svc5_desc:   'Dashboards interactivos y reportes en Power BI que convierten datos en decisiones.',
    svc6_title:  'Integración de Sistemas y APIs',
    svc6_desc:   'Conecta tus herramientas y plataformas con APIs limpias y bien documentadas.',
    svc7_title:  'Diseño UI/UX y Gráfico',
    svc7_desc:   'Interfaces hermosas e intuitivas y visuales de marca que tus usuarios van a amar.',
    svc8_title:  'IA, Chatbots y Asistentes',
    svc8_desc:   'Integra IA en tu producto — chatbots inteligentes, copilotos y motores de recomendación.',
    svc9_title:  'Automatización de Procesos',
    svc9_desc:   'Automatiza tareas repetitivas para que tu equipo se enfoque en lo que importa.',
    svc10_title: 'Video con IA y Anuncios en Video',
    svc10_desc:  'Videos generados con IA y anuncios de alto impacto — producidos rápido.',
    why_h2:     '¿Por qué Pharaoh Digital?',
    why_sub:    'Construimos esta empresa para hacer las cosas diferente.',
    why1_title: 'Equipo Bilingüe',
    why1_desc:  'Nos comunicamos en inglés y español para que nada se pierda en la traducción — nunca.',
    why2_title: 'Entregas Rápidas',
    why2_desc:  'Procesos ágiles y metas claras significa que ves software funcionando pronto.',
    why3_title: 'Tecnología Moderna',
    why3_desc:  'Usamos stacks actuales y herramientas de IA — sin frameworks obsoletos ni atajos.',
    why4_title: 'Soporte Continuo',
    why4_desc:  'Nos quedamos después del lanzamiento — actualizaciones, mejoras y soporte cuando lo necesitas.',
    process_h2: 'Cómo trabajamos',
    process_sub:'Un proceso claro y probado — desde la primera llamada hasta el producto en vivo.',
    step1_title:'Descubrimiento',
    step1_desc: 'Entendemos tu negocio, objetivos y usuarios. Luego definimos el alcance y alineamos qué significa el éxito.',
    step2_title:'Diseño',
    step2_desc: 'Creamos wireframes y diseños de alta fidelidad — tú apruebas antes de que se escriba una sola línea de código.',
    step3_title:'Desarrollo',
    step3_desc: 'Desarrollamos en sprints cortos con demos regulares. Siempre sabes qué está pasando y puedes dar retroalimentación en tiempo real.',
    step4_title:'Lanzamiento y Soporte',
    step4_desc: 'Desplegamos, monitoreamos y entregamos documentación completa. Luego seguimos disponibles para mejoras y crecimiento.',
    work_h2:   'Nuestro trabajo',
    work_sub:  'Una selección de lo que hemos estado construyendo.',
    badge_soon:'Próximamente',
    proj1_title:'Sitio Web Empresarial',
    proj1_desc: 'Un sitio de marketing moderno y optimizado para SEO para un negocio de servicios en la Ciudad de México.',
    proj2_title:'App de Gestión de Servicios',
    proj2_desc: 'App multiplataforma para agendar y dar seguimiento a órdenes de servicio en campo.',
    proj3_title:'Asistente de Ventas con IA',
    proj3_desc: 'Un chatbot de WhatsApp que califica prospectos y agenda citas automáticamente para un negocio de retail.',
    proj4_title:'Dashboard de Operaciones',
    proj4_desc: 'Un dashboard en tiempo real en Power BI que conecta ventas, inventario y logística en una sola vista.',
    about_h2:  'Creados en Egipto.\nCreciendo en las Américas.',
    about_p1:  'Pharaoh Digital fue fundada por un equipo egipcio con una misión que viaja: ayudar a pequeñas y medianas empresas en México y EUA a construir tecnología que realmente funcione para ellas.',
    about_p2:  'Combinamos ingeniería de software, diseño moderno e inteligencia artificial en un solo estudio. Sin intermediarios entre agencias, sin brechas de comunicación — solo un equipo que maneja todo, desde la estrategia hasta el código y el lanzamiento.',
    about_p3:  'Elegimos el nombre Pharaoh Digital como un guiño a nuestras raíces y a nuestra ambición: construir cosas que duren, con precisión y propósito.',
    tag_egypt: '🇪🇬 Egipto',
    tag_mexico:'🇲🇽 México',
    tag_usa:   '🇺🇸 EUA',
    contact_h2:    '¿Hablamos?',
    contact_sub:   'Cuéntanos sobre tu proyecto — te respondemos rápido.',
    wa_direct:     'Escríbenos directamente por WhatsApp',
    branch_eg_name:'Oficina Egipto',
    branch_eg_addr:'Fifth Settlement, Nuevo Cairo, Egipto',
    branch_mx_name:'Oficina México',
    branch_mx_addr:'Ciudad de México, México',
    form_name:     'Tu nombre',
    form_name_err: 'Por favor ingresa tu nombre.',
    form_email:    'Correo electrónico',
    form_email_err:'Por favor ingresa un correo válido.',
    form_msg:      'Cuéntanos sobre tu proyecto',
    form_msg_err:  'Por favor describe tu proyecto.',
    form_send:     'Enviar por WhatsApp',
    footer_tagline:      'Software · IA · Automatización',
    footer_links_title:  'Accesos rápidos',
    footer_contact_title:'Contacto',
    footer_addr_eg:      'Fifth Settlement, Nuevo Cairo, Egipto',
    footer_addr_mx:      'Ciudad de México, México',
    footer_copy:         '© 2026 Pharaoh Digital. Todos los derechos reservados.',
  },
};

/* ============================================================
   STATE
   ============================================================ */
let currentLang  = 'en';
let currentTheme = 'light'; // 'light' | 'dark'

/* ============================================================
   SAFE LOCALSTORAGE
   ============================================================ */
function lsGet(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, val); } catch { /* silent */ }
}

/* ============================================================
   LANGUAGE
   ============================================================ */
function detectLang() {
  const saved = lsGet('pd_lang');
  if (saved === 'en' || saved === 'es') return saved;
  const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return browser.startsWith('es') ? 'es' : 'en';
}

function applyLang(lang) {
  currentLang = lang;
  lsSet('pd_lang', lang);

  const dict = T[lang];

  // Update html lang
  document.documentElement.lang = lang;

  // Update title & meta
  document.title = dict.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict.meta_desc);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', dict.page_title);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', dict.meta_desc);

  // Translate all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!dict[key]) return;
    // Preserve line breaks for h1/h2
    if (el.tagName === 'H1' || el.tagName === 'H2') {
      el.innerHTML = dict[key].replace(/\n/g, '<br>');
    } else {
      el.textContent = dict[key];
    }
  });

  // Update WhatsApp links with language-specific message
  updateAllWaLinks();

  // Update lang button states
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-es').classList.toggle('active', lang === 'es');
  document.getElementById('btn-en').setAttribute('aria-pressed', String(lang === 'en'));
  document.getElementById('btn-es').setAttribute('aria-pressed', String(lang === 'es'));
}

/* ============================================================
   WHATSAPP LINKS
   ============================================================ */
function buildWaUrl(number, lang) {
  const msg = encodeURIComponent(T[lang].wa_msg);
  return `https://wa.me/${number}?text=${msg}`;
}

// Map of element IDs to WA regions
const WA_LINK_MAP = {
  // Floating popup
  'float-wa-mx':  'mx',
  'float-wa-eg':  'eg',
  // Hero inline popup
  'hero-wa-mx':   'mx',
  'hero-wa-eg':   'eg',
  // Contact section
  'contact-wa-mx':'mx',
  'contact-wa-eg':'eg',
};

function updateAllWaLinks() {
  Object.entries(WA_LINK_MAP).forEach(([id, region]) => {
    const el = document.getElementById(id);
    if (el) el.href = buildWaUrl(CONFIG.wa[region].number, currentLang);
  });
}

/* ============================================================
   THEME
   ============================================================ */
function detectTheme() {
  const saved = lsGet('pd_theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  currentTheme = theme;
  lsSet('pd_theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  // Swap logos: try logo-dark.png for dark mode, fall back to logo.png with CSS backing
  const logos = document.querySelectorAll('.site-logo, #about-logo, .footer-logo');
  logos.forEach(img => {
    if (theme === 'dark') {
      const darkSrc = img.src.replace('logo.png', 'logo-dark.png');
      // Try to load dark version; on error fall back silently
      const testImg = new Image();
      testImg.onload  = () => { img.src = darkSrc; };
      testImg.onerror = () => { /* CSS --logo-bg provides white backing */ };
      testImg.src = darkSrc;
    } else {
      img.src = img.src.replace('logo-dark.png', 'logo.png');
    }
  });
}

/* ============================================================
   MOBILE MENU
