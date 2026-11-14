// ─── About Page ─────────────────────────────────────────────────
export function renderAbout() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <div class="about-page">
      <div class="about-grid">

        <div class="about-image-col anim-fade-up">
          <div class="profile-placeholder">
            <img src="./assets/about%20me%20photo/IMG_0113.jpg" alt="Enise Mendilli" />
          </div>
        </div>

        <div class="about-content-col">
          <div class="about-section anim-fade-up">
            <h2 class="section-subtitle">About Me</h2>
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
                <div class="program-icon">Ps</div>
                <span class="program-name">Photoshop</span>
              </div>
              <div class="program-card">
                <div class="program-icon">Ai</div>
                <span class="program-name">Illustrator</span>
              </div>
              <div class="program-card">
                <div class="program-icon">Pr</div>
                <span class="program-name">Premiere</span>
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
                <div class="program-icon">Pr</div>
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
            <a href="mailto:dressedforprint@gmail.com" class="contact-email">dressedforprint@gmail.com</a>

            <div class="about-social-links">
              <a href="https://www.instagram.com/dressedforprint/" target="_blank" rel="noopener noreferrer" class="about-social-link">Instagram</a>
              <a href="https://www.behance.net/enisemendilli" target="_blank" rel="noopener noreferrer" class="about-social-link">Behance</a>
              <a href="https://pin.it/43mqMXSTU" target="_blank" rel="noopener noreferrer" class="about-social-link">Pinterest</a>
              <a href="https://www.linkedin.com/in/enisemendilli" target="_blank" rel="noopener noreferrer" class="about-social-link">LinkedIn</a>
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
