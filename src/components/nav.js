// ─── Navigation ─────────────────────────────────────────────────
export function renderNav(currentRoute) {
  const nav = document.getElementById('main-nav');

  const links = [
    { hash: 'home', label: 'Works' },
    { hash: 'about', label: 'About' },
  ];

  nav.innerHTML = `
    <a href="#home" class="nav-logo">ENISE MENDILLI</a>
    <div class="nav-links">
      ${links.map(l => `
        <a href="#${l.hash}" class="nav-link ${currentRoute === l.hash || (currentRoute === '' && l.hash === 'home') || (currentRoute === 'project' && l.hash === 'home') ? 'active' : ''}">${l.label}</a>
      `).join('')}
    </div>
  `;
}
