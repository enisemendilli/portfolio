// ─── Simple Lightbox ────────────────────────────────────────────

let currentImages = [];
let currentIndex = 0;

export function openLightbox(images, index = 0) {
  currentImages = images;
  currentIndex = index;

  const container = document.getElementById('lightbox-container');
  render(container);
  container.classList.add('lightbox-active');

  // Close on backdrop click
  container.onclick = (e) => {
    if (e.target === container || e.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  };

  // Keyboard nav
  document.addEventListener('keydown', onKey);
}

function closeLightbox() {
  const container = document.getElementById('lightbox-container');
  container.classList.remove('lightbox-active');
  document.removeEventListener('keydown', onKey);
}

function onKey(e) {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') navigate(1);
  if (e.key === 'ArrowLeft') navigate(-1);
}

function navigate(dir) {
  currentIndex = (currentIndex + dir + currentImages.length) % currentImages.length;
  const container = document.getElementById('lightbox-container');
  render(container);
}

function render(container) {
  container.innerHTML = `
    <button class="lightbox-close">✕</button>
    <img src="${currentImages[currentIndex]}" alt="Image ${currentIndex + 1}" />
  `;
}
