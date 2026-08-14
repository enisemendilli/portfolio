// ─── Sketchbook Component ───────────────────────────────────────
// An open-book layout with 3D center-spine page-turn animation.
// Each spread shows 2 works from the same project section,
// cycling to a different section on every turn.
// ─────────────────────────────────────────────────────────────────

import { PROJECTS } from '../pages/works.js';

const AUTO_INTERVAL = 5000;
const FLIP_MS = 1000;

/**
 * Build spread data: each spread = { leftSrc, rightSrc, title, id }
 * Only projects with ≥ 2 images qualify. One spread per project,
 * with images shuffled on every page load.
 */
function buildSpreads() {
  const withImages = PROJECTS.filter(p => p.images.length >= 2);

  // Shuffle project order so it's different every refresh
  const shuffled = [...withImages].sort(() => Math.random() - 0.5);

  return shuffled.map(p => {
    const imgs = [...p.images].sort(() => Math.random() - 0.5);
    return {
      leftSrc: imgs[0],
      rightSrc: imgs[1],
      title: p.title,
      id: p.id,
    };
  });
}

function pageHTML(src, title, extraClass = '') {
  return `
    <div class="sb-paper-texture"></div>
    <div class="sb-page-content ${extraClass}">
      <div class="sb-tape sb-tape-tl"></div>
      <img src="${src}" alt="${title}" loading="lazy" draggable="false" />
      <div class="sb-tape sb-tape-br"></div>
    </div>
    <div class="sb-page-footer">
      <span class="sb-page-label">${title}</span>
    </div>`;
}

/**
 * Mount the sketchbook into `container`. Returns a cleanup fn.
 */
export function renderSketchbook(container) {
  const spreads = buildSpreads();
  if (spreads.length < 2) return () => {};

  let cur = 0;
  let isFlipping = false;
  let autoTimer = null;

  const nxt = i => (i + 1) % spreads.length;
  const prv = i => (i - 1 + spreads.length) % spreads.length;

  const s0 = spreads[0];
  const s1 = spreads[1];

  // ─── Render ────────────────────────────────────────────────────
  container.innerHTML = `
    <div class="sketchbook-section anim-fade-up">
      <div class="sb-label">✿ featured works</div>

      <div class="sb-book" id="sb-book">
        <!-- Pink hardcover frame -->
        <div class="sb-cover-frame"></div>

        <!-- Opening cover (flips open on load) -->
        <div class="sb-opening-cover" id="sb-opening-cover">
          <div class="sb-oc-front">
            <div class="sb-oc-texture"></div>
            <span class="sb-oc-doodle">✧</span>
            <span class="sb-oc-title">Featured</span>
            <span class="sb-oc-sub">Enise Mendilli</span>
          </div>
          <div class="sb-oc-back"></div>
        </div>

        <!-- Static left page -->
        <div class="sb-left-page" id="sb-left">
          ${pageHTML(s0.leftSrc, s0.title)}
        </div>

        <!-- Static right-under page (next spread's right, hidden under leaf) -->
        <div class="sb-right-under" id="sb-right-under">
          ${pageHTML(s1.rightSrc, s1.title)}
        </div>

        <!-- Flipping leaf (covers right half, flips to left on turn) -->
        <div class="sb-leaf" id="sb-leaf">
          <div class="sb-leaf-front" id="sb-leaf-front">
            ${pageHTML(s0.rightSrc, s0.title)}
          </div>
          <div class="sb-leaf-back" id="sb-leaf-back">
            ${pageHTML(s1.leftSrc, s1.title)}
          </div>
        </div>

        <!-- Spine -->
        <div class="sb-spine"></div>
      </div>

      <!-- Current section indicator -->
      <div class="sb-section-indicator">
        <span class="sb-section-dot">✦</span>
        <span class="sb-section-text" id="sb-section-text">${s0.title}</span>
      </div>

      <!-- Controls -->
      <div class="sb-controls">
        <button class="sb-btn" id="sb-prev" aria-label="Previous spread">‹</button>
        <div class="sb-dots" id="sb-dots">
          ${spreads.map((_, i) =>
            `<span class="sb-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`
          ).join('')}
        </div>
        <button class="sb-btn" id="sb-next" aria-label="Next spread">›</button>
      </div>
    </div>`;

  // ─── DOM refs ──────────────────────────────────────────────────
  const book        = container.querySelector('#sb-book');
  const leftPage    = container.querySelector('#sb-left');
  const rightUnder  = container.querySelector('#sb-right-under');
  const leaf        = container.querySelector('#sb-leaf');
  const leafFront   = container.querySelector('#sb-leaf-front');
  const leafBack    = container.querySelector('#sb-leaf-back');
  const dots        = container.querySelectorAll('.sb-dot');
  const sectionText = container.querySelector('#sb-section-text');

  // ─── Helpers ───────────────────────────────────────────────────
  function setPage(el, src, title) {
    el.querySelector('.sb-page-content img').src = src;
    el.querySelector('.sb-page-content img').alt = title;
    el.querySelector('.sb-page-label').textContent = title;
  }

  function updateDots() {
    dots.forEach((d, i) => d.classList.toggle('active', i === cur));
  }

  /**
   * Prepare all four panels for a flip FROM `fromIdx` TO `toIdx`.
   * This sets up: leaf-front = current right, leaf-back = next left,
   * left-page = current left, right-under = next right.
   */
  function prepareFlip(fromIdx, toIdx) {
    const from = spreads[fromIdx];
    const to   = spreads[toIdx];

    setPage(leftPage,   from.leftSrc,  from.title);
    setPage(leafFront,  from.rightSrc, from.title);
    setPage(leafBack,   to.leftSrc,    to.title);
    setPage(rightUnder, to.rightSrc,   to.title);
  }

  /**
   * After the flip animation finishes, snap everything to the
   * new "resting" state so we're ready for the next flip.
   */
  function settleAfterFlip(newIdx) {
    const s    = spreads[newIdx];
    const sNxt = spreads[nxt(newIdx)];

    // Update static left to new spread's left
    setPage(leftPage, s.leftSrc, s.title);

    // Leaf front = new spread's right (visible at rest)
    setPage(leafFront, s.rightSrc, s.title);

    // Leaf back = next spread's left (for the next flip)
    setPage(leafBack, sNxt.leftSrc, sNxt.title);

    // Right-under = next spread's right
    setPage(rightUnder, sNxt.rightSrc, sNxt.title);

    // Reset leaf transform without animation
    leaf.style.transition = 'none';
    leaf.classList.remove('sb-flipping');
    void leaf.offsetWidth;           // force reflow
    leaf.style.transition = '';

    cur = newIdx;
    updateDots();
    sectionText.style.opacity = '0';
    setTimeout(() => {
      sectionText.textContent = s.title;
      sectionText.style.opacity = '1';
    }, 150);

    isFlipping = false;
  }

  // ─── Flip forward ──────────────────────────────────────────────
  function flipForward() {
    if (isFlipping) return;
    isFlipping = true;

    const toIdx = nxt(cur);
    prepareFlip(cur, toIdx);

    // Force reflow so the prep changes paint before the animation
    void leaf.offsetWidth;

    // Trigger CSS flip
    leaf.classList.add('sb-flipping');

    setTimeout(() => settleAfterFlip(toIdx), FLIP_MS + 50);
  }

  // ─── Flip to arbitrary index ───────────────────────────────────
  function flipTo(targetIdx) {
    if (isFlipping || targetIdx === cur) return;
    isFlipping = true;

    // Set state so leaf front = current spread, back = target spread
    prepareFlip(cur, targetIdx);
    void leaf.offsetWidth;
    leaf.classList.add('sb-flipping');

    setTimeout(() => settleAfterFlip(targetIdx), FLIP_MS + 50);
  }

  // ─── Auto-flip ─────────────────────────────────────────────────
  function startAuto() { stopAuto(); autoTimer = setInterval(flipForward, AUTO_INTERVAL); }
  function stopAuto()  { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

  // ─── Events ────────────────────────────────────────────────────
  container.querySelector('#sb-next').addEventListener('click', () => {
    stopAuto(); flipForward(); startAuto();
  });

  container.querySelector('#sb-prev').addEventListener('click', () => {
    stopAuto(); flipTo(prv(cur)); startAuto();
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.idx, 10);
      stopAuto(); flipTo(idx); startAuto();
    });
  });

  book.addEventListener('mouseenter', stopAuto);
  book.addEventListener('mouseleave', startAuto);

  // ─── Open cover, then start auto-flip ──────────────────────────
  const cover = container.querySelector('#sb-opening-cover');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        observer.unobserve(e.target);
        // Slight delay then flip the cover open
        setTimeout(() => {
          cover.classList.add('sb-cover-opened');
          // Start page auto-flip after cover finishes opening
          setTimeout(() => startAuto(), 1500);
        }, 400);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(book);

  return () => { stopAuto(); observer.disconnect(); };
}
