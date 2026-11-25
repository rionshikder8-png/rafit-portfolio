/* ==========================================================================
   MAIN — navigation, links, reveal, form, small interactions
   ========================================================================== */

(function () {
  'use strict';

  var cfg = window.SITE_CONFIG || {};
  var t = function (key) { return window.Language ? window.Language.t(key) : key; };
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------------------------------------------------------- utils */
  function onlyDigits(value) {
    return String(value == null ? '' : value).replace(/[^\d]/g, '');
  }

  function prettyUrl(url) {
    return String(url || '').replace(/^https?:\/\//i, '').replace(/\/+$/, '');
  }

  function whatsappUrl(number, text) {
    var digits = onlyDigits(number);
    if (!digits) return '';
    return 'https://wa.me/' + digits + (text ? '?text=' + encodeURIComponent(text) : '');
  }

  /* ------------------------------------------------------------- links */
  function linkFor(key) {
    var contact = cfg.contact || {};
    var links = cfg.links || {};

    switch (key) {
      case 'upwork': return links.upwork || '';
      case 'fiverr': return links.fiverr || '';
      case 'linkedin': return links.linkedin || '';
      case 'facebook': return links.facebook || '';
      case 'cv': return links.cv || '';
      case 'adverune': return (cfg.adverune || {}).url || '';
      case 'whatsapp': return whatsappUrl(contact.whatsapp, contact.whatsappIntro);
      case 'email': return contact.email ? 'mailto:' + contact.email : '';
      case 'personalEmail': return contact.personalEmail ? 'mailto:' + contact.personalEmail : '';
      case 'phone': {
        var raw = contact.phoneDisplay || contact.whatsapp || '';
        var tel = String(raw).replace(/[^\d+]/g, '');
        return tel ? 'tel:' + tel : '';
      }
      default: return '';
    }
  }

  function applyLinks() {
    document.querySelectorAll('[data-link]').forEach(function (el) {
      var key = el.getAttribute('data-link');
      var url = linkFor(key);

      if (url) {
        el.setAttribute('href', url);
        el.classList.remove('is-unset');
        el.removeAttribute('aria-disabled');
        if (/^https?:/i.test(url)) {
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        } else {
          el.removeAttribute('target');
          el.removeAttribute('rel');
        }
        if (el.hasAttribute('data-download')) {
          // Keep a friendly filename for the saved file.
          el.setAttribute('download', url.split('/').pop() || '');
        }
        if (el.hasAttribute('data-view')) {
          el.removeAttribute('download');
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        }
      } else {
        el.removeAttribute('href');
        el.removeAttribute('target');
        el.classList.add('is-unset');
        el.setAttribute('aria-disabled', 'true');
        if (el.hasAttribute('data-download')) el.removeAttribute('download');
      }
    });

    var contact = cfg.contact || {};
    var links = cfg.links || {};
    var values = {
      whatsapp: contact.phoneDisplay || contact.whatsapp || '',
      email: contact.email || '',
      personalEmail: contact.personalEmail || '',
      phone: contact.phoneDisplay || contact.whatsapp || '',
      facebook: prettyUrl(links.facebook) || links.facebookName || '',
      linkedin: prettyUrl(links.linkedin)
    };

    document.querySelectorAll('[data-contact-row]').forEach(function (row) {
      var key = row.getAttribute('data-link');
      var out = row.querySelector('[data-value]');
      if (!out) return; // rows with fixed text (e.g. View CV)
      var value = values[key] || '';
      if (out) out.textContent = value || t('misc.notSet');
      row.classList.toggle('is-unset', !value || !linkFor(key));
    });

    // Footer e-mail link shows the address itself
    document.querySelectorAll('.footer__col a[data-link="email"]').forEach(function (el) {
      el.textContent = contact.email || 'Email';
    });
  }

  function applyProjects() {
    (cfg.projects || []).forEach(function (project) {
      var el = document.querySelector('[data-project="' + project.id + '"]');
      if (!el) return;
      if (project.url) {
        el.setAttribute('href', project.url);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener noreferrer');
        el.classList.remove('is-unset');
        el.removeAttribute('aria-disabled');
        el.setAttribute('aria-label', project.name + ' — ' + t('projects.visit'));
      } else {
        el.removeAttribute('href');
        el.removeAttribute('target');
        el.removeAttribute('rel');
        el.classList.add('is-unset');
        el.setAttribute('aria-label', project.name);
        el.setAttribute('aria-disabled', 'true');
      }
    });
  }

  function applyFeatures() {
    var features = cfg.features || {};
    var badge = document.getElementById('availability');
    if (!badge) return;
    if (features.availabilityIndicator === false) {
      badge.style.display = 'none';
      return;
    }
    badge.style.display = '';
    var dot = badge.querySelector('.availability__dot');
    if (dot) dot.style.display = features.availabilityActive === false ? 'none' : '';
  }

  /* -------------------------------------------------------- site meta */
  function applySiteMeta() {
    var site = cfg.site || {};
    var canonical = (site.canonicalUrl || '').replace(/\/+$/, '');
    if (!canonical || canonical.indexOf('your-domain.com') !== -1) return; // still a placeholder

    var url = canonical + '/';
    var link = document.querySelector('link[rel="canonical"]');
    if (link) link.setAttribute('href', url);

    document.querySelectorAll('meta[property="og:url"]').forEach(function (meta) {
      meta.setAttribute('content', url);
    });

    var ld = document.querySelector('script[type="application/ld+json"]');
    if (ld) {
      try {
        var data = JSON.parse(ld.textContent);
        data.url = url;
        data.image = url + (cfg.media && cfg.media.portrait ? cfg.media.portrait : '');
        if (data.worksFor) data.worksFor.url = url;
        if (cfg.person && cfg.person.jobTitle) data.jobTitle = cfg.person.jobTitle;
        ld.textContent = JSON.stringify(data, null, 2);
      } catch (e) { /* leave the static schema in place */ }
    }

    var ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && cfg.media && cfg.media.ogImage) {
      ogImage.setAttribute('content', url + cfg.media.ogImage);
    }
  }

  function applyPortrait() {
    var img = document.querySelector('.portrait__img');
    if (!img || !cfg.media || !cfg.media.portrait) return;
    if (img.getAttribute('src') !== cfg.media.portrait) {
      img.setAttribute('src', cfg.media.portrait);
    }
    if (cfg.media.portraitAlt) img.setAttribute('alt', cfg.media.portraitAlt);
  }

  /* ------------------------------------------------------------ drawer */
  function initDrawer() {
    var toggle = document.getElementById('nav-toggle');
    var drawer = document.getElementById('mobile-drawer');
    if (!toggle || !drawer) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? t('nav.close') : t('nav.menu'));
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
      document.body.style.overflow = open ? 'hidden' : '';
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && drawer.classList.contains('is-open')) setOpen(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 880) setOpen(false);
    });
  }

  /* --------------------------------------------------- header + scroll */
  function initScroll() {
    var header = document.getElementById('site-header');
    var toTop = document.getElementById('to-top');
    var hero = document.querySelector('.hero');
    var navLinks = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    var ticking = false;

    function onFrame() {
      var y = window.pageYOffset || document.documentElement.scrollTop;

      if (header) header.classList.toggle('is-stuck', y > 10);
      if (toTop) toTop.classList.toggle('is-visible', y > 620);

      if (hero && !prefersReduced.matches) {
        hero.style.setProperty('--parallax', (y * 0.14).toFixed(1) + 'px');
      }

      // Active navigation
      var current = sections.length ? sections[0].id : '';
      var probe = y + (window.innerHeight * 0.32);
      sections.forEach(function (section) {
        if (section.offsetTop <= probe) current = section.id;
      });
      if (y + window.innerHeight >= document.body.scrollHeight - 40) current = 'contact';

      navLinks.forEach(function (link) {
        link.classList.toggle('is-active', link.getAttribute('data-nav') === current);
      });

      ticking = false;
    }

    function requestFrame() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(onFrame);
      }
    }

    window.addEventListener('scroll', requestFrame, { passive: true });
    window.addEventListener('resize', requestFrame);
    onFrame();

    if (toTop) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: prefersReduced.matches ? 'auto' : 'smooth' });
      });
    }
  }

  /* ------------------------------------------------------------ reveal */
  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!items.length) return;

    if (!('IntersectionObserver' in window) || prefersReduced.matches) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    // Stagger siblings inside the same grid for a softer entrance.
    items.forEach(function (el) {
      var parent = el.parentElement;
      if (!parent) return;
      var siblings = Array.prototype.slice.call(parent.children).filter(function (child) {
        return child.classList && child.classList.contains('reveal');
      });
      var index = siblings.indexOf(el);
      if (index > 0) el.style.setProperty('--reveal-delay', Math.min(index, 6) * 70 + 'ms');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* -------------------------------------------------------------- form */
  function initForm() {
    var form = document.getElementById('contact-form');
    var status = document.getElementById('form-status');
    if (!form || !status) return;

    var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    function field(name) { return form.querySelector('[name="' + name + '"]'); }

    function setError(name, hasError) {
      var input = field(name);
      if (!input) return;
      var wrap = input.closest('.field');
      if (wrap) wrap.classList.toggle('has-error', hasError);
      input.setAttribute('aria-invalid', hasError ? 'true' : 'false');
    }

    function showStatus(message, kind) {
      status.textContent = message;
      status.classList.add('is-visible');
      status.classList.toggle('is-error', kind === 'error');
      status.classList.toggle('is-ok', kind === 'ok');
    }

    ['name', 'email', 'subject', 'message'].forEach(function (name) {
      var input = field(name);
      if (input) {
        input.addEventListener('input', function () { setError(name, false); });
      }
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = (field('name') || {}).value || '';
      var email = (field('email') || {}).value || '';
      var subject = (field('subject') || {}).value || '';
      var message = (field('message') || {}).value || '';

      name = name.trim();
      email = email.trim();
      subject = subject.trim();
      message = message.trim();

      var valid = true;
      if (name.length < 2) { setError('name', true); valid = false; }
      if (!EMAIL_RE.test(email)) { setError('email', true); valid = false; }
      if (subject.length < 3) { setError('subject', true); valid = false; }
      if (message.length < 10) { setError('message', true); valid = false; }

      if (!valid) {
        showStatus(t('form.errorSummary'), 'error');
        var firstInvalid = form.querySelector('.field.has-error input, .field.has-error textarea');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Subject: ' + subject + '\n\n' +
        message;

      var contact = cfg.contact || {};
      var waUrl = whatsappUrl(contact.whatsapp, body);
      var mailTo = contact.email || contact.formFallbackEmail || '';

      if (waUrl) {
        window.open(waUrl, '_blank', 'noopener');
        showStatus(t('form.success'), 'ok');
        form.reset();
        return;
      }

      if (mailTo) {
        window.location.href =
          'mailto:' + mailTo +
          '?subject=' + encodeURIComponent(subject) +
          '&body=' + encodeURIComponent(body);
        showStatus(t('form.fallback'), 'ok');
        form.reset();
        return;
      }

      showStatus(t('form.notConfigured'), 'error');
    });
  }

  /* ---------------------------------------------------------------- boot */
  function boot() {
    if (window.Language) window.Language.init();

    applyFeatures();
    applySiteMeta();
    applyPortrait();
    applyLinks();
    applyProjects();

    initDrawer();
    initScroll();
    initReveal();
    initForm();

    if (window.Sliders) window.Sliders.init();

    document.addEventListener('languagechange', function () {
      applyLinks();
      applyProjects();
      var toggle = document.getElementById('nav-toggle');
      if (toggle) {
        var open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-label', open ? t('nav.close') : t('nav.menu'));
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
