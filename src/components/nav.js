// ─── Navigation ─────────────────────────────────────────────────
export function renderNav(currentRoute) {
  const nav = document.getElementById('main-nav');

  const links = [
    { hash: 'home', label: 'Home' },
    { hash: 'about', label: 'About' },
  ];

  nav.innerHTML = `
    <a href="#home" class="nav-logo">enise<span>.</span></a>
    <div class="nav-links">
      ${links.map(l => `
        <a href="#${l.hash}" class="nav-link ${currentRoute === l.hash || (currentRoute === '' && l.hash === 'home') ? 'active' : ''}">${l.label}</a>
      `).join('')}
    </div>
  `;
}
