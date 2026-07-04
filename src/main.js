// ─── Main Entry Point ───────────────────────────────────────────
import { renderNav } from './components/nav.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderWorks } from './pages/works.js';

// ─── Route map ──────────────────────────────────────────────────
const routes = {
  '': renderHome,
  home: renderHome,
  about: renderAbout,
  works: renderWorks,
};

let currentRoute = '';
let isTransitioning = false;

// ─── Router ─────────────────────────────────────────────────────
function getRouteFromHash() {
  return window.location.hash.replace('#', '').toLowerCase() || '';
}

async function navigateTo(route) {
  if (isTransitioning) return;
  isTransitioning = true;

  const pageContent = document.getElementById('page-content');

  let renderFn = routes[route] || renderHome;
  let routeParams = null;

  if (route.startsWith('project/')) {
    renderFn = renderWorks;
    routeParams = route.split('/')[1];
  }

  // Fade out
  if (pageContent.children.length > 0) {
    pageContent.classList.add('page-exit');
    await new Promise(r => setTimeout(r, 300));
  }

  pageContent.innerHTML = '';
  pageContent.classList.remove('page-exit');

  await renderFn(routeParams);
  currentRoute = route.startsWith('project/') ? 'project' : route;

  renderNav(currentRoute);

  // Scroll to top
  window.scrollTo(0, 0);

  // Fade in
  pageContent.classList.add('page-enter');
  void pageContent.offsetWidth;
  requestAnimationFrame(() => pageContent.classList.add('page-enter-active'));

  setTimeout(() => {
    pageContent.classList.remove('page-enter', 'page-enter-active');
    isTransitioning = false;
  }, 400);
}

// ─── Bootstrap ──────────────────────────────────────────────────
function onRouteChange() {
  navigateTo(getRouteFromHash());
}

window.addEventListener('hashchange', onRouteChange);
document.addEventListener('DOMContentLoaded', onRouteChange);
