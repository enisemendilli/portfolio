// ─── Through My Eyes Page ───────────────────────────────────────
import { openLightbox } from '../components/lightbox.js';

export async function renderEyes() {
  const page = document.getElementById('page-content');

  page.innerHTML = `
    <section class="eyes-page">
      <div class="eyes-header animate-in">
        <h2 class="heading-lg eyes-title"><em>Through My Eyes</em></h2>
        <p class="eyes-subtitle">Moments captured, stories preserved — a glimpse into my world.</p>
      </div>
      <div class="photo-grid" id="photo-grid">
        <div class="loading-state">Loading photos…</div>
      </div>
    </section>
  `;

  setTimeout(() => {
    page.querySelectorAll('.animate-in').forEach((el) => el.classList.add('visible'));
  }, 100);

  // Fetch photos
  let photos = [];
  try {
    const res = await fetch('/api/photos');
    if (!res.ok) throw new Error('Failed to load photos');
    photos = await res.json();
  } catch (err) {
    console.error(err);
  }

  const grid = document.getElementById('photo-grid');

  if (photos.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <p class="empty-title">Visual stories coming soon…</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = photos
    .map(
      (photo, i) => `
      <div class="photo-item" data-index="${i}">
        <img src="${photo.src}" alt="${photo.caption || 'Photo'}" loading="lazy" />
        ${photo.caption ? `<span class="photo-caption">${photo.caption}</span>` : ''}
      </div>
    `
    )
    .join('');

  // Click to open lightbox
  const allSrcs = photos.map((p) => p.src);
  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.photo-item');
    if (!item) return;
    openLightbox(allSrcs, parseInt(item.dataset.index, 10));
  });
}
