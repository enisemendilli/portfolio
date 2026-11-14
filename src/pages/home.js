// ─── Home Page ──────────────────────────────────────────────────
import { PROJECTS } from './works.js';

export function renderHome() {
  const page = document.getElementById('page-content');

  // Categories for filtering
  const categories = ['All', 'Art Direction', 'Branding', 'Fashion', 'Social Media', 'Editorial', 'Illustration'];
  let currentCategory = 'All';
  let currentViewMode = 'grid'; // 'grid' or 'index'

  // Build featured moodboard cards
  const moodboardCards = PROJECTS.map((p, i) => {
    const thumb = p.coverImage || p.images[0] || '';
    return `
      <a href="#project/${p.id}" class="moodboard-card" data-index="${i}">
        <div class="moodboard-card-badge">
          <span>${p.number}</span>
          <span class="badge-dot">·</span>
          <span>${p.category.toUpperCase()}</span>
        </div>
        ${thumb ? `<img src="${thumb}" alt="${p.title}" class="moodboard-card-img" loading="lazy" />` : ''}
        <div class="moodboard-card-glass">
          <div class="moodboard-card-info">
            <h3 class="moodboard-card-title">${p.title}</h3>
            <span class="moodboard-card-role">${p.role}</span>
          </div>
          <span class="moodboard-card-arrow">↗</span>
        </div>
      </a>
    `;
  }).join('');

  page.innerHTML = `
    <div class="home-page">

      <!-- Floating Cursor Preview for Index View -->
      <div id="cursor-preview" class="cursor-preview" aria-hidden="true">
        <img id="cursor-preview-img" src="" alt="Project Preview" />
        <span id="cursor-preview-title"></span>
      </div>

      <!-- Hero -->
      <section class="hero-section anim-fade-up">
        <div class="hero-eyebrow">CREATIVE PORTFOLIO · ISTANBUL / THE HAGUE</div>
        <h1 class="hero-name">Enise Mendilli</h1>
        <p class="hero-tagline">
          Multidisciplinary designer with an international perspective,
          specializing in brand identity, art direction, and visual storytelling.
        </p>
        <div class="hero-roles">
          <span class="hero-role-pill">Brand Identity</span>
          <span class="hero-role-pill">Art Direction</span>
          <span class="hero-role-pill">Social Media Strategy</span>
          <span class="hero-role-pill">Editorial & Campaign</span>
        </div>
      </section>

      <!-- Featured Moodboard (Cosmos-inspired interactive rail) -->
      <section class="moodboard-section anim-fade-up">
        <div class="section-header-row">
          <div>
            <span class="section-label">01 / FEATURED MOODBOARD</span>
            <h2 class="section-title">Curated Selection</h2>
          </div>
          <div class="moodboard-hint">
            <span>← Move cursor to explore →</span>
          </div>
        </div>

        <div class="moodboard-viewport" id="moodboard-viewport">
          <div class="moodboard-track" id="moodboard-track">
            ${moodboardCards}
          </div>
        </div>
      </section>

      <!-- Projects Section (Organized with small descriptions) -->
      <section class="section-block anim-fade-up" id="works-section">
        <div class="section-header-row">
          <div>
            <span class="section-label">02 / SELECTED WORK</span>
            <h2 class="section-title">All Projects</h2>
          </div>
          <div class="view-toggle">
            <span class="view-label">VIEW:</span>
            <button class="view-btn active" id="btn-view-grid" data-view="grid">GRID</button>
            <button class="view-btn" id="btn-view-index" data-view="index">INDEX</button>
          </div>
        </div>

        <!-- Filter bar -->
        <div class="project-filters" id="project-filters">
          ${categories.map(c => `
            <button class="filter-pill ${c === 'All' ? 'active' : ''}" data-category="${c}">
              ${c}
            </button>
          `).join('')}
        </div>

        <!-- Projects Container -->
        <div id="projects-display-container">
          <!-- Rendered dynamically below -->
        </div>
      </section>

      <!-- Experience -->
      <section class="section-block anim-fade-up">
        <span class="section-label">03 / BACKGROUND</span>
        <h2 class="section-title">Experience</h2>
        <div class="section-line"></div>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">Feb 2026 — May 2026</div>
            <div class="timeline-role">Graphic Designer & Media Planner</div>
            <div class="timeline-company">ACY MEDYA AGENCY</div>
            <p class="timeline-desc">Designed high-impact visual campaigns and social media collateral for corporate clients. Developed monthly media plans and consistent brand identity guidelines.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">May 2025 — Aug 2025</div>
            <div class="timeline-role">SMM Manager & Exhibition Coordinator</div>
            <div class="timeline-company">ESENTAI GALLERY</div>
            <p class="timeline-desc">Managed gallery communications, exhibition production, and press coordination for the Summer Art Fair 2025 and Girlhood exhibition. Documented artist residencies and VIP openings.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">Aug 2023 — Apr 2025</div>
            <div class="timeline-role">Social Media Manager & Visual Strategist</div>
            <div class="timeline-company">FREEDBALLET</div>
            <p class="timeline-desc">Expanded brand presence from 7,000 to over 21,400 engaged followers. Directed photography, Reels, ad templates, and international tour promotional graphics.</p>
            <span class="timeline-highlight">+137.78% follower growth</span>
          </div>
        </div>
      </section>

      <!-- Tools & Skills -->
      <section class="section-block anim-fade-up">
        <span class="section-label">04 / CAPABILITIES</span>
        <h2 class="section-title">Tools & Expertise</h2>
        <div class="section-line"></div>

        <div class="programs-grid">
          <div class="program-card">
            <div class="program-icon">Ps</div>
            <span class="program-name">Photoshop</span>
          </div>
          <div class="program-card">
            <div class="program-icon">Ai</div>
            <span class="program-name">Illustrator</span>
          </div>
          <div class="program-card">
            <div class="program-icon">Pr</div>
            <span class="program-name">Premiere Pro</span>
          </div>
          <div class="program-card">
            <div class="program-icon">Id</div>
            <span class="program-name">InDesign</span>
          </div>
          <div class="program-card">
            <div class="program-icon">Ae</div>
            <span class="program-name">After Effects</span>
          </div>
          <div class="program-card">
            <div class="program-icon">Fg</div>
            <span class="program-name">Figma</span>
          </div>
          <div class="program-card">
            <div class="program-icon">Pc</div>
            <span class="program-name">Procreate</span>
          </div>
        </div>

        <div class="skills-pills-row">
          <span class="skill-pill-v2">Brand Identity</span>
          <span class="skill-pill-v2">Social Media Strategy</span>
          <span class="skill-pill-v2">Content Creation</span>
          <span class="skill-pill-v2">Typography</span>
          <span class="skill-pill-v2">Art Direction</span>
          <span class="skill-pill-v2">Exhibition Coordination</span>
          <span class="skill-pill-v2">Visual Storytelling</span>
          <span class="skill-pill-v2">Editorial Layout</span>
        </div>
      </section>

    </div>
  `;

  // ─── Render Projects View (Grid or Index) ──────────────────────
  const container = document.getElementById('projects-display-container');

  function renderProjects() {
    const filtered = PROJECTS.filter(p => currentCategory === 'All' || p.category.toLowerCase().includes(currentCategory.toLowerCase()) || p.tag.toLowerCase().includes(currentCategory.toLowerCase()));

    if (currentViewMode === 'grid') {
      container.innerHTML = `
        <div class="projects-editorial-grid">
          ${filtered.map(p => {
            const thumb = p.coverImage || p.images[0] || '';
            return `
              <article class="project-editorial-card">
                <a href="#project/${p.id}" class="project-editorial-visual">
                  ${thumb ? `<img src="${thumb}" alt="${p.title}" loading="lazy" />` : ''}
                  <span class="project-editorial-arrow">↗</span>
                </a>
                <div class="project-editorial-meta">
                  <div class="project-editorial-meta-top">
                    <span class="project-editorial-num">${p.number} / ${p.year}</span>
                    <span class="project-editorial-category">${p.category}</span>
                  </div>
                  <h3 class="project-editorial-title">
                    <a href="#project/${p.id}">${p.title}</a>
                  </h3>
                  <div class="project-editorial-role">${p.role}</div>
                  <p class="project-editorial-desc">${p.shortDescription || ''}</p>
                </div>
              </article>
            `;
          }).join('')}
        </div>
      `;
    } else {
      // Index table mode
      container.innerHTML = `
        <div class="projects-index-table">
          <div class="index-header-row">
            <span class="col-num">NO.</span>
            <span class="col-title">PROJECT</span>
            <span class="col-cat">CATEGORY</span>
            <span class="col-role">ROLE</span>
            <span class="col-year">YEAR</span>
            <span class="col-arrow"></span>
          </div>
          ${filtered.map(p => {
            const thumb = p.coverImage || p.images[0] || '';
            return `
              <a href="#project/${p.id}" class="index-row" data-thumb="${thumb}" data-title="${p.title}">
                <span class="col-num">${p.number}</span>
                <span class="col-title">${p.title}</span>
                <span class="col-cat">${p.category}</span>
                <span class="col-role">${p.role}</span>
                <span class="col-year">${p.year}</span>
                <span class="col-arrow">↗</span>
              </a>
            `;
          }).join('')}
        </div>
      `;
      setupCursorPreview();
    }
  }

  // ─── Filter Events ───────────────────────────────────────────
  const filterBtns = page.querySelectorAll('.filter-pill');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderProjects();
    });
  });

  // ─── View Toggle Events ──────────────────────────────────────
  const gridBtn = document.getElementById('btn-view-grid');
  const indexBtn = document.getElementById('btn-view-index');

  gridBtn.addEventListener('click', () => {
    gridBtn.classList.add('active');
    indexBtn.classList.remove('active');
    currentViewMode = 'grid';
    renderProjects();
  });

  indexBtn.addEventListener('click', () => {
    indexBtn.classList.add('active');
    gridBtn.classList.remove('active');
    currentViewMode = 'index';
    renderProjects();
  });

  // Initial render
  renderProjects();

  // ─── Floating Cursor Preview (for Index View) ────────────────
  function setupCursorPreview() {
    const preview = document.getElementById('cursor-preview');
    const previewImg = document.getElementById('cursor-preview-img');
    const previewTitle = document.getElementById('cursor-preview-title');
    const rows = page.querySelectorAll('.index-row');

    if (!preview || !rows.length) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isVisible = false;
    let animId = null;

    function renderFollower() {
      if (isVisible) {
        currentX += (mouseX - currentX) * 0.15;
        currentY += (mouseY - currentY) * 0.15;
        preview.style.transform = `translate3d(${currentX + 20}px, ${currentY + 20}px, 0)`;
      }
      animId = requestAnimationFrame(renderFollower);
    }
    renderFollower();

    rows.forEach(row => {
      row.addEventListener('mouseenter', (e) => {
        const thumb = row.dataset.thumb;
        const title = row.dataset.title;
        if (thumb) {
          previewImg.src = thumb;
          previewTitle.textContent = title || '';
          preview.classList.add('visible');
          isVisible = true;
          mouseX = e.clientX;
          mouseY = e.clientY;
          currentX = mouseX;
          currentY = mouseY;
        }
      });

      row.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      row.addEventListener('mouseleave', () => {
        preview.classList.remove('visible');
        isVisible = false;
      });
    });
  }

  // ─── Cosmos-style Moodboard Mouse Glide & Momentum ───────────
  const viewport = document.getElementById('moodboard-viewport');
  const track = document.getElementById('moodboard-track');

  if (viewport && track) {
    let currentTranslate = 0;
    let targetTranslate = 0;
    let isHovering = false;
    let isDragging = false;
    let startX = 0;
    let dragStartX = 0;
    let rafId = null;

    function getMaxScroll() {
      return Math.max(0, track.scrollWidth - viewport.clientWidth + 40);
    }

    function updateTrack() {
      // Smooth lerp damping
      currentTranslate += (targetTranslate - currentTranslate) * 0.08;
      track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;
      rafId = requestAnimationFrame(updateTrack);
    }
    rafId = requestAnimationFrame(updateTrack);

    // Mouse movement inside viewport
    viewport.addEventListener('mouseenter', () => {
      isHovering = true;
    });

    viewport.addEventListener('mousemove', (e) => {
      if (isDragging) return;
      const rect = viewport.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const pct = x / rect.width;
      const maxScroll = getMaxScroll();
      targetTranslate = -pct * maxScroll;
    });

    viewport.addEventListener('mouseleave', () => {
      isHovering = false;
    });

    // Touch & Drag Support
    viewport.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      dragStartX = targetTranslate;
      viewport.classList.add('grabbing');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const diff = e.clientX - startX;
      const maxScroll = getMaxScroll();
      targetTranslate = Math.max(-maxScroll, Math.min(0, dragStartX + diff * 1.5));
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        viewport.classList.remove('grabbing');
      }
    });

    // Touch events for mobile
    viewport.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      dragStartX = targetTranslate;
    }, { passive: true });

    viewport.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientX - startX;
      const maxScroll = getMaxScroll();
      targetTranslate = Math.max(-maxScroll, Math.min(0, dragStartX + diff * 1.5));
    }, { passive: true });

    viewport.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  // ─── Footer ──────────────────────────────────────────────────
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="site-footer">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-name">ENISE MENDILLI</span>
            <span class="footer-tag">Creative Designer & Visual Storyteller</span>
          </div>
          <div class="footer-contact">
            <span class="footer-contact-label">INQUIRIES & COLLABORATIONS</span>
            <a href="mailto:dressedforprint@gmail.com" class="footer-email-link">dressedforprint@gmail.com ↗</a>
          </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
          <div class="footer-links">
            <a href="https://www.instagram.com/dressedforprint/" target="_blank" rel="noopener noreferrer" class="footer-link">Instagram ↗</a>
            <a href="https://www.behance.net/enisemendilli" target="_blank" rel="noopener noreferrer" class="footer-link">Behance ↗</a>
            <a href="https://pin.it/43mqMXSTU" target="_blank" rel="noopener noreferrer" class="footer-link">Pinterest ↗</a>
            <a href="https://www.linkedin.com/in/enisemendilli" target="_blank" rel="noopener noreferrer" class="footer-link">LinkedIn ↗</a>
          </div>
          <div class="footer-copyright">
            © ${new Date().getFullYear()} Enise Mendilli. All rights reserved. · Istanbul / The Hague
          </div>
        </div>
      </div>
    `;
  }

  // ─── Scroll Animations ───────────────────────────────────────
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  page.querySelectorAll('.anim-fade-up').forEach(el => obs.observe(el));
}
