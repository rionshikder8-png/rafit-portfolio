/* ==========================================================================
   RAFIT HASAN RION — CENTRAL CONFIGURATION
   --------------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT FOR CONTENT AND LINKS.

   Anything marked  TODO:  is a placeholder that has NOT been invented for you.
   Fill it in with your real details, save, and refresh the page.

   What is read at runtime:
     site.canonicalUrl, media.portrait, media.ogImage, adverune.url,
     contact.*, links.*, projects[].url, technologies[], features.*

   Visible copy (headings, paragraphs, buttons) lives in language.js.
   Page markup lives in index.html. This file is data and links only.

   Rules of this file:
   - Keep the quotes and commas exactly as they are.
   - An empty string  ""  means "not configured yet". The site will show a
     discreet "not set" chip instead of a broken link.
   - Do not paste API keys or passwords here. This file is public.
   ========================================================================== */

window.SITE_CONFIG = {
  /* ------------------------------------------------------------------
     1. SITE / SEO
     ------------------------------------------------------------------ */
  site: {
    // TODO: your live domain, with a trailing slash. Used for canonical,
    // Open Graph URLs, sitemap and structured data.
    canonicalUrl: 'https://your-domain.com/',

    // Reference copy for the page title / meta description.
    // The strings the browser actually renders are meta.title and
    // meta.description in assets/js/language.js (one per language).
    title: 'Rafit Hasan Rion — Web Developer, Freelancer & Founder of Adverune',
    titleBn: 'রাফিত হাসান রিয়ন — ওয়েব ডেভেলপার, ফ্রিল্যান্সার ও Adverune-এর প্রতিষ্ঠাতা',

    description:
      'Rafit Hasan Rion is a web developer, freelancer and the founder of Adverune. He builds modern websites, e-commerce platforms and practical web applications.',
    descriptionBn:
      'রাফিত হাসান রিয়ন একজন ওয়েব ডেভেলপার, ফ্রিল্যান্সার এবং Adverune-এর প্রতিষ্ঠাতা। তিনি আধুনিক ওয়েবসাইট, ই-কমার্স প্ল্যাটফর্ম ও কার্যকর ওয়েব অ্যাপ্লিকেশন তৈরি করেন.',

    // Social share image (1200x630). Replace with your own when ready.
    ogImage: 'assets/images/og-image.webp',

    themeColor: '#FFFFFF',
    locale: 'en_US',
    localeBn: 'bn_BD'
  },

  /* ------------------------------------------------------------------
     2. PERSON
     ------------------------------------------------------------------ */
  person: {
    fullName: 'Rafit Hasan Rion',
    fullNameBn: 'রাফিত হাসান রিয়ন',
    shortName: 'Rafit Hasan Rion',
    initials: 'RHR',
    role: 'Web Developer | Freelancer | Founder of Adverune',
    roleBn: 'ওয়েব ডেভেলপার | ফ্রিল্যান্সার | Adverune-এর প্রতিষ্ঠাতা',
    // Used in the JSON-LD Person schema.
    jobTitle: 'Full-Stack Web Developer',
    // TODO: your city, e.g. 'Dhaka, Bangladesh'. Leave empty to omit.
    location: ''
  },

  /* ------------------------------------------------------------------
     3. ADVERUNE IDENTITY
     ------------------------------------------------------------------ */
  adverune: {
    name: 'Adverune',
    // TODO: Adverune's official website. Leave empty until you have it.
    url: '',
    logo: 'assets/logos/adverune.svg',
    wordmark: 'assets/logos/adverune-wordmark.svg',
    role: 'Founder'
  },

  /* ------------------------------------------------------------------
     4. IMAGES
     ------------------------------------------------------------------ */
  media: {
    // Put your real photograph at assets/images/profile-original.jpg,
    // then export a polished 4:5 WebP to assets/images/profile-portrait.webp.
    // The shipped files are neutral placeholders, not a stock person.
    portrait: 'assets/images/profile-portrait.webp',
    portraitOriginal: 'assets/images/profile-original.jpg',
    portraitAlt: 'Portrait of Rafit Hasan Rion',
    heroBackground: 'assets/images/hero-background.webp',
    ogImage: 'assets/images/og-image.webp'
  },

  /* ------------------------------------------------------------------
     5. CONTACT + FREELANCE PROFILES
     Every external link on the site comes from here.
     Leave a value empty ( '' ) until you have the real one.
     ------------------------------------------------------------------ */
  contact: {
    // International format, digits only for the wa.me link.
    // TODO: e.g. '+8801XXXXXXXXX'
    whatsapp: '',
    // Human-readable version shown on the page. TODO: e.g. '+880 1XXX-XXXXXX'
    phoneDisplay: '',
    // TODO: e.g. 'hello@your-domain.com'
    email: '',
    // Where the contact form sends people when WhatsApp is not configured.
    // Leave empty to fall back to the visitor's own mail client.
    formFallbackEmail: '',

    // Pre-filled WhatsApp message from the contact form.
    whatsappIntro: 'Hello Rafit, I found your portfolio.'
  },

  links: {
    // TODO: your full profile URLs.
    upwork: '',
    fiverr: '',
    linkedin: '',
    facebook: '',
    // TODO: link to your CV file, e.g. 'assets/files/rafit-hasan-rion-cv.pdf'
    cv: ''
  },

  /* ------------------------------------------------------------------
     6. PROJECTS
     row: 1 = top marquee (moves right → left)
     row: 2 = bottom marquee (moves left → right)
     brand: the colour revealed on hover.
     url:   the destination opened in a new tab.  TODO for each project.
     ------------------------------------------------------------------ */
  projects: [
    {
      id: 'aps-payment',
      name: 'APS Payment',
      logo: 'assets/logos/aps-payment.svg',
      brand: '#1D4ED8',
      url: '', // TODO
      row: 1
    },
    {
      id: 'adverune',
      name: 'Adverune',
      logo: 'assets/logos/adverune-wordmark.svg',
      brand: '#6D3AF0',
      url: '', // TODO
      row: 1
    },
    {
      id: 'amar-bazar-demo',
      name: 'Amar Bazar Demo',
      logo: 'assets/logos/amar-bazar.svg',
      brand: '#0E9F6E',
      url: '', // TODO
      row: 1
    },
    {
      id: 'international-ecommerce',
      name: 'International E-Commerce',
      logo: 'assets/logos/international-ecommerce.svg',
      brand: '#F97316',
      url: '', // TODO
      row: 2
    },
    {
      id: 'dorahost',
      name: 'Dorahost',
      logo: 'assets/logos/dorahost.svg',
      brand: '#0EA5E9',
      url: '', // TODO
      row: 2
    },
    {
      id: 'a-mail',
      name: 'A-Mail by Adverune',
      logo: 'assets/logos/a-mail.svg',
      brand: '#7C3AED',
      url: '', // TODO
      row: 2
    }
  ],

  /* ------------------------------------------------------------------
     7. TECHNOLOGIES
     row: 1 = top marquee (moves right → left)
     row: 2 = bottom marquee (moves left → right)
     ------------------------------------------------------------------ */
  technologies: [
    { name: 'HTML5', logo: 'assets/logos/technologies/html5.svg', brand: '#E34F26', row: 1 },
    { name: 'CSS3', logo: 'assets/logos/technologies/css3.svg', brand: '#1572B6', row: 1 },
    { name: 'JavaScript', logo: 'assets/logos/technologies/javascript.svg', brand: '#F7DF1E', row: 1 },
    { name: 'PHP', logo: 'assets/logos/technologies/php.svg', brand: '#777BB4', row: 1 },
    { name: 'MySQL', logo: 'assets/logos/technologies/mysql.svg', brand: '#4479A1', row: 1 },
    { name: 'NoSQL', logo: 'assets/logos/technologies/nosql.svg', brand: '#334155', row: 2 },
    { name: 'MongoDB', logo: 'assets/logos/technologies/mongodb.svg', brand: '#47A248', row: 2 },
    { name: 'MariaDB', logo: 'assets/logos/technologies/mariadb.svg', brand: '#003545', row: 2 },
    { name: 'React.js', logo: 'assets/logos/technologies/react.svg', brand: '#61DAFB', row: 2 },
    { name: 'Next.js', logo: 'assets/logos/technologies/nextdotjs.svg', brand: '#111111', row: 2 },
    { name: 'Node.js', logo: 'assets/logos/technologies/nodedotjs.svg', brand: '#5FA04E', row: 2 },
    { name: 'Express.js', logo: 'assets/logos/technologies/express.svg', brand: '#111111', row: 2 },
    { name: 'Native.js', logo: 'assets/logos/technologies/nativejs.svg', brand: '#0F172A', row: 2 },
    { name: 'Git', logo: 'assets/logos/technologies/git.svg', brand: '#F05032', row: 2 },
    { name: 'GitHub', logo: 'assets/logos/technologies/github.svg', brand: '#181717', row: 2 }
  ],

  /* ------------------------------------------------------------------
     8. FEATURES
     ------------------------------------------------------------------ */
  features: {
    // Shows the small "available for new projects" indicator in the hero.
    availabilityIndicator: true,
    // Set to false to switch the availability dot off.
    availabilityActive: true,
    // Marquee speed in pixels per second (higher = faster).
    projectMarqueeSpeed: 62,
    technologyMarqueeSpeed: 52,
    // Remembers the visitor's language choice in localStorage.
    rememberLanguage: true
  }
};
