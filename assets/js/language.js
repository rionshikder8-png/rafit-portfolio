/* ==========================================================================
   LANGUAGE ENGINE — English / বাংলা
   --------------------------------------------------------------------------
   Every piece of visible copy lives in the dictionary below.
   Add a key to BOTH languages, then reference it in the HTML with
   data-i18n="your.key"  (text),  data-i18n-html="your.key"  (markup) or
   data-i18n-attr="placeholder:your.key,aria-label:your.key".
   ========================================================================== */

(function () {
  'use strict';

  var DICT = {
    en: {
      'meta.title': 'Rafit Hasan Rion — Web Developer, Freelancer & Founder of Adverune',
      'meta.description': 'Rafit Hasan Rion is a web developer, freelancer and the founder of Adverune. He builds modern websites, e-commerce platforms and practical web applications.',

      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',
      'nav.cta': "Let's Talk",
      'nav.menu': 'Open menu',
      'nav.close': 'Close menu',
      'nav.lang': 'Language',
      'badge.founder': 'FOUNDER OF ADVERUNE',

      'hero.label': "HELLO, I'M",
      'hero.name': 'Rafit Hasan Rion',
      'hero.role': 'Web Developer | Freelancer | Founder of Adverune',
      'hero.headline': 'Building Digital Experiences That Make a Difference.',
      'hero.intro': "I'm Rafit Hasan Rion, a web developer, freelancer, and founder of Adverune. I build modern digital experiences, professional websites, and practical software solutions.",
      'hero.ctaWork': 'Explore My Work',
      'hero.ctaContact': 'Contact Me',
      'hero.ctaCv': 'Download CV',
      'hero.availability': 'Available for new projects',
      'hero.cardFounder': 'FOUNDER OF ADVERUNE',
      'hero.cardRole': 'WEB DEVELOPER',
      'hero.scroll': 'Scroll',

      'about.eyebrow': 'ABOUT ME',
      'about.title': 'Designing and building for the real world.',
      'about.lead': 'I work where clean design meets dependable code.',
      'about.p1': "I'm a full-stack web developer working with individuals, startups and growing businesses. My focus is simple: understand the real problem, then build something fast, clear and genuinely useful.",
      'about.p2': 'As a freelancer I have learned to work independently, communicate clearly and deliver on time. Every project starts with listening, and ends with something the client can actually run and grow.',
      'about.p3': 'Through Adverune, the studio I founded, I take on brand and product work that needs both engineering and design thinking — from e-commerce storefronts to internal tools.',
      'about.p4': 'I care about the parts people never notice: fast loading, sensible structure, accessibility, and code the next developer can read.',
      'about.card1.t': 'Developer',
      'about.card1.d': 'Clean, maintainable front-end and back-end code.',
      'about.card2.t': 'Freelancer',
      'about.card2.d': 'Direct communication and dependable delivery.',
      'about.card3.t': 'Entrepreneur',
      'about.card3.d': 'Building products, not just pages.',
      'about.card4.t': 'Founder of Adverune',
      'about.card4.d': 'Running a studio for brand and web work.',

      'social.eyebrow': 'CONNECT',
      'social.title': 'Find Me Across The Internet',
      'social.sub': 'Freelance profiles, social pages and direct contact — whichever suits you best.',
      'social.upwork.d': 'Hire me for web development projects.',
      'social.fiverr.d': 'Order fixed-scope website and front-end work.',
      'social.linkedin.d': 'Professional background and updates.',
      'social.facebook.d': "Adverune's page on Facebook.",
      'social.whatsapp.d': 'The fastest way to reach me.',
      'social.email.d': 'For briefs, quotes and detailed questions.',

      'services.eyebrow': 'SERVICES',
      'services.title': 'What I Do',
      'services.sub': 'End-to-end web work, from a single landing page to a complete storefront.',
      'services.learn': 'Learn more',
      'services.web.t': 'Website Development',
      'services.web.d': 'Fast, responsive marketing sites and business websites built to convert.',
      'services.app.t': 'Web Application Development',
      'services.app.d': 'Custom dashboards, portals and tools shaped around how you actually work.',
      'services.ecom.t': 'E-commerce Website Development',
      'services.ecom.d': 'Catalogues, carts, checkout and order flows that stay simple to manage.',
      'services.frontend.t': 'Frontend Development',
      'services.frontend.d': 'Pixel-accurate interfaces in clean HTML, CSS and JavaScript.',
      'services.backend.t': 'Backend Development',
      'services.backend.d': 'APIs, authentication and business logic that hold up under real use.',
      'services.php.t': 'Custom PHP Development',
      'services.php.d': 'Tailored PHP systems, integrations and improvements to legacy code.',
      'services.database.t': 'Database Development',
      'services.database.d': 'Well-structured MySQL, MariaDB and NoSQL data models.',
      'services.optimize.t': 'Website Optimization',
      'services.optimize.d': 'Speed, Core Web Vitals, SEO structure and accessibility fixes.',
      'services.maintain.t': 'Website Maintenance',
      'services.maintain.d': 'Updates, backups, fixes and ongoing care for live sites.',

      'projects.eyebrow': 'WORK',
      'projects.title': 'Selected Projects',
      'projects.sub': 'Platforms and products I have designed and built. Tap any mark to open it.',
      'projects.visit': 'Open project',
      'projects.row1': 'Projects, first row',
      'projects.row2': 'Projects, second row',

      'tech.eyebrow': 'TOOLKIT',
      'tech.title': 'Technologies & Tools',
      'tech.sub': 'The stack I reach for when a project has to be fast, stable and easy to extend.',
      'tech.row1': 'Technologies, first row',
      'tech.row2': 'Technologies, second row',

      'contact.eyebrow': 'CONTACT',
      'contact.title': "Let's Work Together",
      'contact.sub': 'Tell me what you are building. I reply to serious enquiries within one business day.',
      'contact.formTitle': 'Start a project',
      'contact.formNote': 'This form opens WhatsApp with your message ready to send. Nothing is stored on a server.',
      'contact.whatsappLabel': 'WhatsApp',
      'contact.emailLabel': 'Email',
      'contact.phoneLabel': 'Phone',
      'contact.facebookLabel': 'Facebook',
      'contact.linkedinLabel': 'LinkedIn',

      'form.name': 'Full Name',
      'form.namePh': 'Your name',
      'form.email': 'Email Address',
      'form.emailPh': 'you@example.com',
      'form.subject': 'Subject',
      'form.subjectPh': 'What do you need?',
      'form.message': 'Message',
      'form.messagePh': 'A few lines about your project, timeline and budget.',
      'form.send': 'Send Message',
      'form.success': 'WhatsApp is opening with your message. Press send there to deliver it.',
      'form.fallback': 'Your mail app is opening with the message filled in.',
      'form.notConfigured': 'Contact details are not configured yet. Add them in assets/js/config.js.',
      'form.errorName': 'Please enter your name.',
      'form.errorEmail': 'Please enter a valid email address.',
      'form.errorSubject': 'Please add a short subject.',
      'form.errorMessage': 'Please write at least 10 characters.',
      'form.errorSummary': 'Please check the highlighted fields and try again.',

      'footer.tagline': 'Web Developer | Freelancer | Founder of Adverune',
      'footer.explore': 'Explore',
      'footer.connect': 'Connect',
      'footer.rights': '© 2026 Rafit Hasan Rion. All rights reserved.',
      'footer.powered': 'Powered By Adverune',

      'misc.backToTop': 'Back to top',
      'misc.notSet': 'Not set — add in config.js',
      'misc.newTab': '(opens in a new tab)'
    },

    bn: {
      'meta.title': 'রাফিত হাসান রিয়ন — ওয়েব ডেভেলপার, ফ্রিল্যান্সার ও Adverune-এর প্রতিষ্ঠাতা',
      'meta.description': 'রাফিত হাসান রিয়ন একজন ওয়েব ডেভেলপার, ফ্রিল্যান্সার এবং Adverune-এর প্রতিষ্ঠাতা। তিনি আধুনিক ওয়েবসাইট, ই-কমার্স প্ল্যাটফর্ম ও কার্যকর ওয়েব অ্যাপ্লিকেশন তৈরি করেন।',

      'nav.home': 'হোম',
      'nav.about': 'পরিচিতি',
      'nav.services': 'সার্ভিস',
      'nav.projects': 'প্রজেক্ট',
      'nav.skills': 'স্কিল',
      'nav.contact': 'যোগাযোগ',
      'nav.cta': 'কথা বলুন',
      'nav.menu': 'মেনু খুলুন',
      'nav.close': 'মেনু বন্ধ করুন',
      'nav.lang': 'ভাষা',
      'badge.founder': 'ADVERUNE-এর প্রতিষ্ঠাতা',

      'hero.label': 'হ্যালো, আমি',
      'hero.name': 'রাফিত হাসান রিয়ন',
      'hero.role': 'ওয়েব ডেভেলপার | ফ্রিল্যান্সার | Adverune-এর প্রতিষ্ঠাতা',
      'hero.headline': 'আধুনিক প্রযুক্তিতে তৈরি করি সুন্দর ও কার্যকর ডিজিটাল অভিজ্ঞতা।',
      'hero.intro': 'আমি রাফিত হাসান রিয়ন। একজন ওয়েব ডেভেলপার, ফ্রিল্যান্সার এবং Adverune-এর প্রতিষ্ঠাতা। আমি আধুনিক, কার্যকরী এবং প্রফেশনাল ডিজিটাল সলিউশন তৈরি করতে কাজ করি।',
      'hero.ctaWork': 'আমার কাজ দেখুন',
      'hero.ctaContact': 'যোগাযোগ করুন',
      'hero.ctaCv': 'সিভি ডাউনলোড',
      'hero.availability': 'নতুন প্রজেক্টের জন্য উপলব্ধ',
      'hero.cardFounder': 'ADVERUNE-এর প্রতিষ্ঠাতা',
      'hero.cardRole': 'ওয়েব ডেভেলপার',
      'hero.scroll': 'স্ক্রল করুন',

      'about.eyebrow': 'আমার সম্পর্কে',
      'about.title': 'বাস্তব প্রয়োজনের জন্য ডিজাইন ও ডেভেলপমেন্ট।',
      'about.lead': 'পরিচ্ছন্ন ডিজাইন আর নির্ভরযোগ্য কোডের মিলনস্থলে আমার কাজ।',
      'about.p1': 'আমি একজন ফুল-স্ট্যাক ওয়েব ডেভেলপার। ব্যক্তি, স্টার্টআপ এবং বাড়তে থাকা ব্যবসার সঙ্গে কাজ করি। আমার লক্ষ্য সহজ: সমস্যাটা ঠিকভাবে বুঝে এমন কিছু তৈরি করা যা দ্রুত, পরিষ্কার এবং সত্যিকারভাবে কাজে লাগে।',
      'about.p2': 'ফ্রিল্যান্সার হিসেবে আমি স্বাধীনভাবে কাজ করা, পরিষ্কারভাবে যোগাযোগ করা এবং সময়মতো ডেলিভারি দেওয়া শিখেছি। প্রতিটি প্রজেক্ট শুরু হয় শোনা দিয়ে, আর শেষ হয় এমন কিছু দিয়ে যা ক্লায়েন্ট নিজেই চালাতে ও বড় করতে পারেন।',
      'about.p3': 'আমার প্রতিষ্ঠিত স্টুডিও Adverune-এর মাধ্যমে আমি এমন ব্র্যান্ড ও প্রোডাক্টের কাজ করি যেখানে ইঞ্জিনিয়ারিং ও ডিজাইন—দুটোই দরকার। ই-কমার্স স্টোরফ্রন্ট থেকে ইন্টারনাল টুল, সবই এর মধ্যে পড়ে।',
      'about.p4': 'ব্যবহারকারীরা যেসব বিষয় খেয়াল করেন না, সেগুলোতেও আমার যত্ন থাকে: দ্রুত লোডিং, গোছানো স্ট্রাকচার, অ্যাক্সেসিবিলিটি এবং এমন কোড যা পরের ডেভেলপার সহজে পড়তে পারেন।',
      'about.card1.t': 'ডেভেলপার',
      'about.card1.d': 'পরিচ্ছন্ন ও রক্ষণাবেক্ষণযোগ্য ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড কোড।',
      'about.card2.t': 'ফ্রিল্যান্সার',
      'about.card2.d': 'সরাসরি যোগাযোগ এবং নির্ভরযোগ্য ডেলিভারি।',
      'about.card3.t': 'উদ্যোক্তা',
      'about.card3.d': 'শুধু পেজ নয়, প্রোডাক্ট তৈরি করি।',
      'about.card4.t': 'Adverune-এর প্রতিষ্ঠাতা',
      'about.card4.d': 'ব্র্যান্ড ও ওয়েব কাজের একটি স্টুডিও পরিচালনা করছি।',

      'social.eyebrow': 'কানেক্ট',
      'social.title': 'ইন্টারনেটে আমাকে খুঁজুন',
      'social.sub': 'ফ্রিল্যান্স প্রোফাইল, সোশ্যাল পেজ অথবা সরাসরি যোগাযোগ — যেটা আপনার জন্য সহজ।',
      'social.upwork.d': 'ওয়েব ডেভেলপমেন্ট প্রজেক্টের জন্য আমাকে হায়ার করুন।',
      'social.fiverr.d': 'নির্দিষ্ট স্কোপের ওয়েবসাইট ও ফ্রন্ট-এন্ড কাজ অর্ডার করুন।',
      'social.linkedin.d': 'পেশাগত পরিচিতি ও নিয়মিত আপডেট।',
      'social.facebook.d': 'ফেসবুকে Adverune-এর পেজ।',
      'social.whatsapp.d': 'আমার সঙ্গে যোগাযোগের সবচেয়ে দ্রুত উপায়।',
      'social.email.d': 'ব্রিফ, কোটেশন ও বিস্তারিত প্রশ্নের জন্য।',

      'services.eyebrow': 'সার্ভিসসমূহ',
      'services.title': 'আমার সার্ভিসসমূহ',
      'services.sub': 'একটি ল্যান্ডিং পেজ থেকে সম্পূর্ণ স্টোরফ্রন্ট — শুরু থেকে শেষ পর্যন্ত ওয়েব কাজ।',
      'services.learn': 'বিস্তারিত',
      'services.web.t': 'ওয়েবসাইট ডেভেলপমেন্ট',
      'services.web.d': 'দ্রুত ও রেসপন্সিভ মার্কেটিং সাইট এবং ব্যবসার ওয়েবসাইট।',
      'services.app.t': 'ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট',
      'services.app.d': 'আপনার কাজের ধরন অনুযায়ী কাস্টম ড্যাশবোর্ড, পোর্টাল ও টুল।',
      'services.ecom.t': 'ই-কমার্স ওয়েবসাইট ডেভেলপমেন্ট',
      'services.ecom.d': 'ক্যাটালগ, কার্ট, চেকআউট ও অর্ডার ফ্লো — সহজে ম্যানেজ করার মতো।',
      'services.frontend.t': 'ফ্রন্টএন্ড ডেভেলপমেন্ট',
      'services.frontend.d': 'পরিচ্ছন্ন HTML, CSS ও JavaScript দিয়ে নিখুঁত ইন্টারফেস।',
      'services.backend.t': 'ব্যাকএন্ড ডেভেলপমেন্ট',
      'services.backend.d': 'API, অথেন্টিকেশন ও বিজনেস লজিক যা ব্যবহারে টিকে থাকে।',
      'services.php.t': 'কাস্টম PHP ডেভেলপমেন্ট',
      'services.php.d': 'আপনার প্রয়োজন অনুযায়ী PHP সিস্টেম, ইন্টিগ্রেশন ও পুরোনো কোডের উন্নয়ন।',
      'services.database.t': 'ডেটাবেজ ডেভেলপমেন্ট',
      'services.database.d': 'গোছানো MySQL, MariaDB ও NoSQL ডেটা মডেল।',
      'services.optimize.t': 'ওয়েবসাইট অপটিমাইজেশন',
      'services.optimize.d': 'স্পিড, Core Web Vitals, SEO স্ট্রাকচার ও অ্যাক্সেসিবিলিটি ঠিক করা।',
      'services.maintain.t': 'ওয়েবসাইট মেইনটেন্যান্স',
      'services.maintain.d': 'লাইভ সাইটের আপডেট, ব্যাকআপ, ফিক্স ও নিয়মিত যত্ন।',

      'projects.eyebrow': 'কাজ',
      'projects.title': 'আমার তৈরি প্রজেক্টসমূহ',
      'projects.sub': 'আমি ডিজাইন ও তৈরি করা প্ল্যাটফর্ম এবং প্রোডাক্ট। যেকোনো লোগোতে ক্লিক করে দেখুন।',
      'projects.visit': 'প্রজেক্ট খুলুন',
      'projects.row1': 'প্রজেক্ট, প্রথম সারি',
      'projects.row2': 'প্রজেক্ট, দ্বিতীয় সারি',

      'tech.eyebrow': 'টুলকিট',
      'tech.title': 'যেসব প্রযুক্তি নিয়ে কাজ করি',
      'tech.sub': 'প্রজেক্ট দ্রুত, স্থিতিশীল ও সহজে সম্প্রসারণযোগ্য রাখতে আমি যে স্ট্যাক ব্যবহার করি।',
      'tech.row1': 'প্রযুক্তি, প্রথম সারি',
      'tech.row2': 'প্রযুক্তি, দ্বিতীয় সারি',

      'contact.eyebrow': 'যোগাযোগ',
      'contact.title': 'চলুন একসাথে কাজ করি',
      'contact.sub': 'আপনি কী তৈরি করতে চান, জানান। গুরুত্বপূর্ণ যোগাযোগে এক কর্মদিবসের মধ্যে উত্তর দিই।',
      'contact.formTitle': 'প্রজেক্ট শুরু করুন',
      'contact.formNote': 'এই ফর্ম আপনার বার্তা নিয়ে সরাসরি WhatsApp খোলে। সার্ভারে কিছু সংরক্ষণ করা হয় না।',
      'contact.whatsappLabel': 'WhatsApp',
      'contact.emailLabel': 'ইমেইল',
      'contact.phoneLabel': 'ফোন',
      'contact.facebookLabel': 'ফেসবুক',
      'contact.linkedinLabel': 'লিংকডইন',

      'form.name': 'পূর্ণ নাম',
      'form.namePh': 'আপনার নাম',
      'form.email': 'ইমেইল ঠিকানা',
      'form.emailPh': 'you@example.com',
      'form.subject': 'বিষয়',
      'form.subjectPh': 'আপনার কী প্রয়োজন?',
      'form.message': 'বার্তা',
      'form.messagePh': 'আপনার প্রজেক্ট, সময়সীমা ও বাজেট নিয়ে কয়েক লাইন লিখুন।',
      'form.send': 'বার্তা পাঠান',
      'form.success': 'আপনার বার্তা নিয়ে WhatsApp খোলা হচ্ছে। পাঠাতে সেখানে Send চাপুন।',
      'form.fallback': 'আপনার মেইল অ্যাপে বার্তাটি লিখে খোলা হচ্ছে।',
      'form.notConfigured': 'যোগাযোগের তথ্য এখনো সেট করা হয়নি। assets/js/config.js-এ যোগ করুন।',
      'form.errorName': 'অনুগ্রহ করে আপনার নাম লিখুন।',
      'form.errorEmail': 'সঠিক ইমেইল ঠিকানা লিখুন।',
      'form.errorSubject': 'সংক্ষিপ্ত একটি বিষয় লিখুন।',
      'form.errorMessage': 'কমপক্ষে ১০ অক্ষরের একটি বার্তা লিখুন।',
      'form.errorSummary': 'চিহ্নিত ঘরগুলো ঠিক করে আবার চেষ্টা করুন।',

      'footer.tagline': 'ওয়েব ডেভেলপার | ফ্রিল্যান্সার | Adverune-এর প্রতিষ্ঠাতা',
      'footer.explore': 'দেখুন',
      'footer.connect': 'যোগাযোগ',
      'footer.rights': '© ২০২৬ রাফিত হাসান রিয়ন। সর্বস্বত্ব সংরক্ষিত।',
      'footer.powered': 'Powered By Adverune',

      'misc.backToTop': 'উপরে ফিরুন',
      'misc.notSet': 'সেট করা হয়নি — config.js-এ যোগ করুন',
      'misc.newTab': '(নতুন ট্যাবে খুলবে)'
    }
  };

  var STORAGE_KEY = 'rhr-language';
  var current = 'en';

  function t(key) {
    var pack = DICT[current] || DICT.en;
    if (typeof pack[key] !== 'undefined') return pack[key];
    if (typeof DICT.en[key] !== 'undefined') return DICT.en[key];
    return key;
  }

  function applyAttributes(root) {
    root.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length !== 2) return;
        el.setAttribute(bits[0].trim(), t(bits[1].trim()));
      });
    });
  }

  function apply(lang, opts) {
    var next = lang === 'bn' ? 'bn' : 'en';
    current = next;

    var html = document.documentElement;
    html.setAttribute('lang', next === 'bn' ? 'bn' : 'en');
    html.setAttribute('data-lang', next);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    applyAttributes(document);

    // Document metadata
    document.title = t('meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title'));
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', t('meta.description'));
    var twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', t('meta.title'));
    var twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', t('meta.description'));

    // Switcher state
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang-btn') === next;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    try {
      if (!opts || opts.persist !== false) {
        if (window.SITE_CONFIG && window.SITE_CONFIG.features.rememberLanguage) {
          localStorage.setItem(STORAGE_KEY, next);
        }
      }
    } catch (e) { /* storage blocked — language still works for this session */ }

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: next } }));
  }

  function set(lang) {
    apply(lang);
  }

  function init() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }

    // A ?lang=bn / ?lang=en link wins over the remembered choice.
    var fromUrl = null;
    try {
      fromUrl = new URLSearchParams(window.location.search).get('lang');
    } catch (e) { fromUrl = null; }

    var initial = fromUrl === 'bn' || fromUrl === 'en' ? fromUrl : (saved === 'bn' ? 'bn' : 'en');
    apply(initial, { persist: false });

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        set(btn.getAttribute('data-lang-btn'));
      });
    });
  }

  window.Language = {
    t: t,
    set: set,
    apply: apply,
    init: init,
    get current() { return current; },
    dictionary: DICT
  };
})();
