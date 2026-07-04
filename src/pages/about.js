// ─── About Page ─────────────────────────────────────────────────
export function renderAbout() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <div class="about-page">
      <div class="about-grid">

        <div class="about-image-col anim-fade-up">
          <div class="profile-placeholder" style="border: none; overflow: hidden; background: none;">
            <img src="/assets/about%20me%20photo/IMG_0113.jpg" alt="Enise Mendilli" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg); border: 1px solid var(--border);" />
          </div>
        </div>

        <div>
          <div class="about-section anim-fade-up">
            <h2 class="section-subtitle" style="font-size: 1.8rem;">About Me</h2>
            <p class="about-bio">
              I'm a multidisciplinary graphic designer and advertiser driven by a deep
              passion for fashion marketing and brand storytelling. With a background spanning
              social media management, branding, advertising campaigns, and editorial design,
              I bring a fashion-forward sensibility to every project.
            </p>
            <p class="about-bio">
              My international experience — studying in Istanbul and The Hague — has given me
              a unique cross-cultural perspective. Whether crafting a brand identity, directing 
              a social media campaign, or designing a poster, I approach every brief as an 
              opportunity to tell a story that resonates.
            </p>
          </div>

          <div class="stats-row anim-fade-up">
            <div class="stat-card">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Exp.</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">21K+</span>
              <span class="stat-label">Followers Grown</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">4</span>
              <span class="stat-label">Languages</span>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Software & Tools</h3>
            <div class="programs-grid">
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
                <span class="program-name">Premiere</span>
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
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Education</h3>
            <div class="education-list">
              <div class="edu-item">
                <span class="edu-degree">Advertising</span>
                <span class="edu-school">Kadir Has University — Istanbul, Turkey</span>
                <span class="edu-year">2023 — 2027</span>
              </div>
              <div class="edu-item">
                <span class="edu-degree">Visual Communication Design</span>
                <span class="edu-school">Kadir Has University — Istanbul, Turkey</span>
                <span class="edu-year">2024 — 2027</span>
              </div>
              <div class="edu-item">
                <span class="edu-degree">IT & Design (Exchange)</span>
                <span class="edu-school">The Hague University — Netherlands</span>
                <span class="edu-year">2025 — 2026</span>
              </div>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Languages</h3>
            <div class="languages-row">
              <div class="lang-item">
                <span class="lang-name">Russian</span>
                <span class="lang-level">Native</span>
              </div>
              <div class="lang-item">
                <span class="lang-name">English</span>
                <span class="lang-level">C1</span>
              </div>
              <div class="lang-item">
                <span class="lang-name">Turkish</span>
                <span class="lang-level">B2</span>
              </div>
              <div class="lang-item">
                <span class="lang-name">French</span>
                <span class="lang-level">B1</span>
              </div>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Expertise</h3>
            <div class="skills-grid">
              <span class="skill-pill">Brand Identity</span>
              <span class="skill-pill">Social Media Strategy</span>
              <span class="skill-pill">Content Creation</span>
              <span class="skill-pill">Art Direction</span>
              <span class="skill-pill">Typography</span>
              <span class="skill-pill">Visual Storytelling</span>
              <span class="skill-pill">Photography</span>
              <span class="skill-pill">Video Editing</span>
              <span class="skill-pill">Copywriting</span>
              <span class="skill-pill">Media Planning</span>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Get In Touch</h3>
            <a href="mailto:enisemendilli05@gmail.com" class="contact-email">enisemendilli05@gmail.com</a>
            
            <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;">
              <a href="https://www.instagram.com/eniselii" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-doodle); font-size: 1.25rem; color: var(--text-soft); transition: color 0.3s;" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--text-soft)'">
                <span>✦</span> Instagram
              </a>
              <a href="https://www.behance.net/enisemendilli" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-doodle); font-size: 1.25rem; color: var(--text-soft); transition: color 0.3s;" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--text-soft)'">
                <span>★</span> Behance
              </a>
              <a href="https://pin.it/43mqMXSTU" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-doodle); font-size: 1.25rem; color: var(--text-soft); transition: color 0.3s;" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--text-soft)'">
                <span>♡</span> Pinterest
              </a>
              <a href="https://www.linkedin.com/in/enisemendilli" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-doodle); font-size: 1.25rem; color: var(--text-soft); transition: color 0.3s;" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--text-soft)'">
                <span>✿</span> LinkedIn
              </a>
            </div>
          </div>

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
