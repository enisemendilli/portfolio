// ─── Home Page ──────────────────────────────────────────────────
import { PROJECTS } from './works.js';

export function renderHome() {
  const page = document.getElementById('page-content');

  // Build project cards
  const projectCards = PROJECTS.map(p => {
    const thumb = p.images.length > 0 ? p.images[0] : '';
    return `
      <a href="#project/${p.id}" class="project-card anim-fade-up" style="display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; padding: 20px;">
        ${thumb 
          ? `<img src="${thumb}" alt="${p.title}" loading="lazy" style="position: absolute; inset: 0;" />` 
          : `<div style="font-family: var(--font-doodle); font-size: 1.8rem; color: var(--pink); opacity: 0.65; line-height: 1.2;">${p.title}</div>
             <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1.5px; margin-top: 6px; font-weight: 500;">coming soon ~</div>`
        }
        <div class="project-card-overlay">
          <div class="project-card-title">${p.title}</div>
          <div class="project-card-role">${p.role}</div>
        </div>
      </a>
    `;
  }).join('');

  page.innerHTML = `
    <div class="home-page">

      <!-- Hero -->
      <div class="hero-section anim-fade-up">
        <div class="hero-doodles">
          <span class="doodle d1 doodle-star">✦</span>
          <span class="doodle d2 doodle-heart">♡</span>
          <span class="doodle d3 doodle-sparkle">✿</span>
          <span class="doodle d4 doodle-star">★</span>
          <span class="doodle d5 doodle-heart">❋</span>
          <span class="doodle d6 doodle-sparkle">✧</span>
        </div>
        <div class="hero-doodle">hello, i'm ~</div>
        <h1 class="hero-name">Enise <em>Mendilli</em></h1>
        <p class="hero-tagline">
          Creative designer & advertiser with an international perspective,
          passionate about fashion marketing and visual storytelling.
        </p>
        <div class="hero-roles">
          <span class="hero-role-pill">graphic designer</span>
          <span class="hero-role-pill">advertiser</span>
          <span class="hero-role-pill">visual storyteller</span>
        </div>
      </div>

      <!-- Projects -->
      <div class="section-block">
        <div class="section-doodle-title anim-fade-up">✦ selected work</div>
        <h2 class="section-title anim-fade-up">Projects</h2>
        <div class="section-line anim-fade-up"></div>
        <div class="projects-grid">
          ${projectCards}
        </div>
      </div>

      <!-- Experience -->
      <div class="section-block">
        <div class="section-doodle-title anim-fade-up">✿ where i've worked</div>
        <h2 class="section-title anim-fade-up">Experience</h2>
        <div class="section-line anim-fade-up"></div>

        <div class="timeline anim-fade-up">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">Feb 2026 — May 2026</div>
            <div class="timeline-role">Graphic Designer & Media Planner</div>
            <div class="timeline-company">ACY MEDYA AGENCY</div>
            <p class="timeline-desc">Created social media designs and copy for brands. Built monthly media plans, developed branding & identity systems.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">May 2025 — Aug 2025</div>
            <div class="timeline-role">SMM Manager</div>
            <div class="timeline-company">ESENTAI GALLERY</div>
            <p class="timeline-desc">Managed gallery social presence, curated exhibitions, coordinated event promotion and sponsor relations.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">Aug 2023 — Apr 2025</div>
            <div class="timeline-role">SMM Manager</div>
            <div class="timeline-company">FREEDBALLET</div>
            <p class="timeline-desc">Grew followers from 7,000 to 21,400. Developed social strategies, created Reels, photography, and ad templates.</p>
            <span class="timeline-highlight">+137.78% growth ✦</span>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="section-block">
        <div class="section-doodle-title anim-fade-up">♡ tools & skills</div>
        <h2 class="section-title anim-fade-up">What I Use</h2>
        <div class="section-line anim-fade-up"></div>

        <div class="programs-grid anim-fade-up">
          <div class="program-card">
            <div class="program-icon" style="color: #31A8FF; background: rgba(49,168,255,0.06);">Ps</div>
            <span class="program-name">Photoshop</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #FF9A00; background: rgba(255,154,0,0.06);">Ai</div>
            <span class="program-name">Illustrator</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #9999FF; background: rgba(153,153,255,0.06);">Pr</div>
            <span class="program-name">Premiere Pro</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #FF3366; background: rgba(255,51,102,0.06);">Id</div>
            <span class="program-name">InDesign</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #9999FF; background: rgba(153,153,255,0.06);">Ae</div>
            <span class="program-name">After Effects</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #A259FF; background: rgba(162,89,255,0.06);">
              <svg width="18" height="25" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
              </svg>
            </div>
            <span class="program-name">Figma</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #e84393; background: rgba(232,67,147,0.06); font-size: 1.6rem;">✎</div>
            <span class="program-name">Procreate</span>
          </div>
        </div>

        <div class="skills-pills-row anim-fade-up">
          <span class="skill-pill-v2">Brand Identity</span>
          <span class="skill-pill-v2">Social Media</span>
          <span class="skill-pill-v2">Content Creation</span>
          <span class="skill-pill-v2">Typography</span>
          <span class="skill-pill-v2">Art Direction</span>
          <span class="skill-pill-v2">Photography</span>
          <span class="skill-pill-v2">Video Editing</span>
          <span class="skill-pill-v2">Copywriting</span>
        </div>
      </div>

    </div>
  `;

  // Scroll animations
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  page.querySelectorAll('.anim-fade-up').forEach(el => obs.observe(el));
}
