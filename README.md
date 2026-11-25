# Rafit Hasan Rion — Personal Portfolio

A premium, fully static personal brand website for **Rafit Hasan Rion** — Web Developer,
Freelancer and Founder of Adverune.

**Live:** <https://riondev7.onrender.com/> — deployed on Render as a static site, auto-deploying from `main`.

Built with **HTML5, CSS3 and vanilla JavaScript only**. No frameworks, no build step, no
npm, no backend. Open `index.html` and it runs. Upload the folder to any shared host or
cPanel and it works there too.

---

## 1. Quick start

1. Open `index.html` in a browser — that is the whole site.
2. Edit **`assets/js/config.js`** and fill in every `TODO:` placeholder.
3. Replace the placeholder portrait (see section 3).
4. Upload the folder contents to your host's `public_html` directory.

Everything the visitor sees that is *content* lives in one of two files:

| File | Holds |
|---|---|
| `assets/js/config.js` | Identity, links, WhatsApp/email/phone, project URLs, technology list, feature flags |
| `assets/js/language.js` | Every line of visible English and Bangla copy |

---

## 2. What you must fill in (`assets/js/config.js`)

Nothing personal has been invented for you. Every unknown is an empty string, and the
site shows a discreet "not set" state instead of a broken link until you fill it in.

```
site.canonicalUrl          → https://riondev7.onrender.com/
person.location            → e.g. 'Dhaka, Bangladesh' (optional)
adverune.url               → Adverune's website (optional)
contact.whatsapp           → '+8801XXXXXXXXX'  (used by the contact form + WhatsApp links)
contact.phoneDisplay       → '+880 1XXX-XXXXXX'
contact.email              → 'hello@your-domain.com'
links.upwork / fiverr / linkedin / facebook
links.cv                   → 'assets/files/Rafit_Hasan_Rion_Professional_CV.pdf' (set)
projects[].url             → live for Adverune, Amar Bazar, AI Commerce Agent, DoraHost.
                             A-Mail is a mobile app (no URL); APS Payment and International E-Commerce are pending.
```

Then update the domain in these places too (search for `your-domain.com`):

- `index.html` → `<link rel="canonical">`, `og:url`, JSON-LD `url` / `worksFor.url`
- `robots.txt` → `Sitemap:`
- `sitemap.xml` → `<loc>` and `<lastmod>`

**Project URLs:** each card opens in a new tab. Until a URL is set the card stays visible
but inert, with a muted "Open project" hint. Add the URL and it becomes a live link.

**Contact form:** there is no backend, so the form never claims to send anything itself.
If `contact.whatsapp` is set it opens WhatsApp with the message pre-filled; otherwise it
falls back to a `mailto:` draft; otherwise it says plainly that contact details are not
configured. Nothing is stored or transmitted by the page.

---

## 3. Your photograph

`assets/images/profile-original.png` is the untouched upload. `assets/images/profile-portrait.webp`
is the 4:5 web version (819 x 1024, native pixels, nothing upscaled) used in the hero.

To change it, replace both files and keep the same names. If the framing differs, adjust
`object-position` on `.portrait__img` in `assets/css/style.css` (currently `50% 14%`) and the
`width` / `height` / `alt` on the `<img class="portrait__img">` element in `index.html`.

---

## Your CV

`assets/files/Rafit_Hasan_Rion_Professional_CV.pdf` is served as-is. The hero **Download CV**
button downloads it; **View CV** (About and Contact) opens it in a new tab. The path comes from
`links.cv` in `config.js`.

---

## 4. Folder structure

```
rafit-portfolio/
├── index.html                  Full page markup + SEO metadata + JSON-LD
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── README.md
└── assets/
    ├── css/
    │   ├── style.css           Design system, layout, components
    │   ├── responsive.css      Breakpoints (1080 / 980 / 880 / 700 / 480)
    │   └── animations.css      Reveal, marquees, float, reduced-motion rules
    ├── js/
    │   ├── config.js           ← all editable data
    │   ├── language.js         ← bilingual dictionary + language engine
    │   ├── sliders.js          Seamless logo marquees
    │   └── main.js             Nav, links, reveal, form, back-to-top
    ├── images/
    │   ├── profile-original.png
    │   ├── profile-portrait.webp
    │   ├── hero-background.webp
    │   ├── og-image.webp
    │   └── apple-touch-icon.png
    ├── logos/
    │   ├── adverune.svg  adverune-wordmark.svg
    │   ├── aps-payment.svg  amar-bazar.svg  international-ecommerce.svg
    │   ├── dorahost.svg  a-mail.svg
    │   ├── social/             upwork, fiverr, linkedin, facebook, whatsapp, gmail
    │   └── technologies/       html5, css3, javascript, php, mysql, mongodb,
    │                           mariadb, react, nextdotjs, nodedotjs, express,
    │                           git, github, nosql, nativejs
    └── fonts/                  DM Sans + Noto Serif Bengali (self-hosted woff2)
```

---

## 5. Brand identity

- **Accent:** electric violet `#5B2BE0` (`--accent`), used for primary buttons, active
  navigation, icons, focus rings and hover states. Nothing else is coloured.
- **Neutrals:** white `#FFFFFF`, ink `#111111`, muted `#666666`, dark surface `#101010`,
  borders `rgba(20,20,20,0.09)`.
- **Type:** DM Sans (English) and Noto Serif Bengali (বাংলা), both self-hosted with
  `font-display: swap` and preloaded.
- **Glass:** the header, portrait frame, identity card and contact form use real
  `backdrop-filter` blur with hairline white borders and ambient shadows — no neon.

### Adverune logo
No official Adverune logo file was supplied, so the mark in `assets/logos/adverune.svg`
is an **original geometric mark** (violet rounded square + "A" chevron) created for this
build. Replace that one file with the official logo when you have it — every placement
(header badge, hero card, about panel, footer) picks it up automatically. Keep it square
for best results.

The six project marks are likewise original text-based brand marks, not copies of any
existing company's logo. Swap any `assets/logos/*.svg` for an official file, or edit the
inline `<svg>` inside the matching `.logo-card` in `index.html`.

---

## 6. Language system

- Toggle in the header: **EN / বাংলা**, applied instantly without a reload.
- The choice is stored in `localStorage` (`rhr-language`); English is the default.
- All copy lives in `assets/js/language.js`. To add a string:
  1. Add the key to **both** `en` and `bn`.
  2. Reference it in the HTML: `data-i18n="your.key"` (text),
     `data-i18n-html="your.key"` (markup), or
     `data-i18n-attr="placeholder:your.key,aria-label:your.key"` (attributes).
- Bangla automatically switches to Noto Serif Bengali with looser line-height and no
  negative letter-spacing, so both languages are properly typeset.
- The `<html lang>`, page title and meta description update with the language.

---

## 7. Motion

- Project marquee row 1 moves right → left, row 2 moves left → right. Technology rows do
  the same with their own speed. Speeds are set in `config.js`
  (`projectMarqueeSpeed`, `technologyMarqueeSpeed`).
- Loops are seamless: `sliders.js` measures the real card widths, repeats the set until it
  overflows the viewport, duplicates it once, then travels exactly one block per cycle.
  No gaps, no jumps.
- Hovering (or focusing) a marquee pauses it.
- Scroll reveals use `IntersectionObserver`; the hero background parallax is a single
  CSS variable updated on scroll.
- `prefers-reduced-motion: reduce` disables marquees, float, parallax and reveals, and
  makes the marquee rows scrollable by hand instead.

---

## 8. Accessibility & SEO

- Semantic landmarks, one `<h1>`, ordered headings, skip link, visible focus rings.
- Descriptive `alt` text on every meaningful image; decorative marks are `aria-hidden`.
- `aria-pressed` on the language buttons, `aria-expanded` on the menu, `aria-live` on the
  form status, `aria-disabled` on unconfigured links.
- SEO title/description, canonical, Open Graph, Twitter Card, theme colour, `sitemap.xml`,
  `robots.txt`, `Person` JSON-LD, `lang` switching, lazy-loaded images below the fold.

---

## 9. Deploying

**Render (current setup):** New + → Static Site → connect `rionshikder8-png/rafit-portfolio`,
branch `main`, build command empty, publish directory `.`. Every push to `main` redeploys.
The live URL is already wired into the canonical tag, Open Graph URLs, `robots.txt` and
`sitemap.xml`; update those four places if the domain ever changes.

**Shared hosting / cPanel:** upload the contents of `rafit-portfolio/` into `public_html`.
Nothing to compile. Keep the folder names exactly as they are.

**Netlify / Vercel / Cloudflare Pages / GitHub Pages:** drag the folder in, or point the
build at the repository with no build command and `/` as the publish directory.

**Before going live:** set the real domain everywhere listed in section 2, replace the
portrait, add the six project URLs, and add your CV file if you use the Download CV button.

---

## 10. Quality checklist (verified in this build)

- [x] All six projects present — three per row, opposite directions
- [x] Two technology rows, opposite directions, five in the first row
- [x] Every logo card is the same size; logos keep their aspect ratio
- [x] Logos are monochrome by default and reveal brand colour on hover
- [x] Project cards are whole-card links opening in a new tab
- [x] Language switching covers every heading, paragraph, label and button
- [x] Mobile drawer with animated open/close and Escape support
- [x] Contact buttons, WhatsApp form submission and validation feedback
- [x] No horizontal overflow; responsive from 320 px up
- [x] Footer shows "Powered By Adverune" with the mark
- [x] Hero shows the "Founder of Adverune" badge
- [x] No invented statistics, clients, testimonials, awards or experience claims

---

## 11. Credits

Design and build for Rafit Hasan Rion. Brand marks for third-party platforms and
technologies (Upwork, Fiverr, LinkedIn, Facebook, WhatsApp, Gmail, and the technology
logos) belong to their respective owners and are used here as identification only.

**Powered By Adverune**
