/* ==========================================================================
   SLIDERS — continuous, seamless logo marquees
   --------------------------------------------------------------------------
   Two independent rows move in opposite directions. Each track is filled with
   enough copies to overflow the viewport, then duplicated exactly once so the
   animation can loop with no gap and no jump.

   Speed (px per second) comes from SITE_CONFIG.features.
   ========================================================================== */

(function () {
  'use strict';

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function config() {
    return window.SITE_CONFIG || {};
  }

  /* Build the technology cards from the central config ------------------- */
  function buildTechCards() {
    var rows = { 1: [], 2: [] };
    (config().technologies || []).forEach(function (tech) {
      var row = tech.row === 2 ? 2 : 1;
      rows[row].push(tech);
    });

    document.querySelectorAll('[data-marquee="tech"]').forEach(function (marquee) {
      var track = marquee.querySelector('[data-track]');
      if (!track) return;
      var row = marquee.getAttribute('data-row') === '2' ? 2 : 1;
      track.innerHTML = '';

      rows[row].forEach(function (tech) {
        var card = document.createElement('div');
        card.className = 'tech-card';
        card.style.setProperty('--brand', tech.brand || '#5B2BE0');
        card.setAttribute('title', tech.name);

        var img = document.createElement('img');
        img.src = tech.logo;
        img.alt = tech.name;
        img.width = 30;
        img.height = 30;
        img.loading = 'lazy';
        img.decoding = 'async';

        var label = document.createElement('span');
        label.className = 'tech-card__name';
        label.textContent = tech.name;

        card.appendChild(img);
        card.appendChild(label);
        track.appendChild(card);
      });
    });
  }

  /* Measure the gap between track children ------------------------------- */
  function trackGap(track) {
    var styles = window.getComputedStyle(track);
    var gap = parseFloat(styles.columnGap || styles.gap || '0');
    return isNaN(gap) ? 0 : gap;
  }

  /* Fill one track with a seamless loop ---------------------------------- */
  function fillTrack(track, speed) {
    if (!track || !track.children.length) return;

    var originals = Array.prototype.slice.call(track.children);
    var gap = trackGap(track);

    // Width of one set of cards, measured on the real, rendered DOM.
    var setWidth = 0;
    originals.forEach(function (el, i) {
      setWidth += el.getBoundingClientRect().width + (i ? gap : 0);
    });
    if (!setWidth) return;

    var container = (track.parentElement && track.parentElement.getBoundingClientRect().width) || window.innerWidth;
    // Enough copies that a single block always overflows the visible area.
    var copies = Math.max(1, Math.ceil((container * 1.15) / setWidth));
    if (prefersReduced.matches) copies = 1;

    var block = document.createDocumentFragment();
    for (var c = 0; c < copies; c++) {
      originals.forEach(function (el) {
        block.appendChild(el.cloneNode(true));
      });
    }

    track.innerHTML = '';
    track.appendChild(block);

    // Second, identical half — required for the -50% style loop.
    if (!prefersReduced.matches) {
      var half = document.createDocumentFragment();
      Array.prototype.slice.call(track.children).forEach(function (el) {
        half.appendChild(el.cloneNode(true));
      });
      track.appendChild(half);
    }

    if (prefersReduced.matches) {
      track.style.animation = 'none';
      return;
    }

    // Exact distance to travel: measured from the first card of the first
    // block to the first card of the identical second block. Measuring the
    // real layout removes any rounding drift from the gap arithmetic.
    var children = track.children;
    var halfIndex = Math.floor(children.length / 2);
    var shift = children[halfIndex].offsetLeft - children[0].offsetLeft;
    if (!shift || shift < 1) shift = (setWidth * copies) + gap;

    track.style.setProperty('--shift', shift.toFixed(2) + 'px');
    track.style.animationDuration = Math.max(6, shift / Math.max(10, speed)).toFixed(2) + 's';
    track.style.animationIterationCount = 'infinite';
  }

  function initMarquees() {
    var features = config().features || {};
    var speeds = {
      projects: features.projectMarqueeSpeed || 62,
      technologyMarqueeSpeed: features.technologyMarqueeSpeed || 52
    };

    document.querySelectorAll('[data-marquee]').forEach(function (marquee) {
      var track = marquee.querySelector('[data-track]');
      if (!track) return;
      var kind = marquee.getAttribute('data-marquee');
      var speed = kind === 'projects' ? speeds.projects : speeds.technologyMarqueeSpeed;
      // Reset any previous duplication before measuring again.
      if (track.dataset.originals) {
        track.innerHTML = track.dataset.originals;
      } else {
        track.dataset.originals = track.innerHTML;
      }
      fillTrack(track, speed);
    });
  }

  /* Rebuild on resize (debounced) so the loop stays seamless -------------- */
  var resizeTimer = null;
  function onResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initMarquees, 220);
  }

  function init() {
    buildTechCards();
    // Wait one frame so fonts and widths settle before measuring.
    window.requestAnimationFrame(function () {
      initMarquees();
      window.requestAnimationFrame(initMarquees);
    });
    window.addEventListener('resize', onResize);
    window.addEventListener('load', initMarquees);
    document.addEventListener('languagechange', function () {
      setTimeout(initMarquees, 60);
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(initMarquees).catch(function () {});
    }
  }

  window.Sliders = { init: init, rebuild: initMarquees };
})();
