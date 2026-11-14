// ─── Site Footer Component ──────────────────────────────────────
export function renderFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;

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

