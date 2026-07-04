// ─── Project Card Component ─────────────────────────────────────
const categoryLabels = {
  coffeeshop_branding: 'Coffee Shop Branding',
  publishing_branding: 'Publishing House Branding',
  posters: 'Posters',
  bookcovers: 'Book Covers',
  social_media: 'Social Media Designs',
  internet_commerce: 'Internet Commerce Designs',
};

export function createProjectCard(project) {
  const coverImage =
    project.images && project.images.length > 0
      ? `<img src="${project.images[0]}" alt="${project.title}" class="card-image" loading="lazy" />`
      : `<div class="card-placeholder"><span>${project.title.charAt(0)}</span></div>`;

  const categoryLabel = categoryLabels[project.category] || project.category;

  return `
    <div class="project-card" data-id="${project.id}" tabindex="0">
      <div class="card-cover">
        ${coverImage}
        <div class="card-overlay">
          <span class="card-category-pill">${categoryLabel}</span>
          <h3 class="card-title">${project.title}</h3>
          <span class="card-year">${project.year || ''}</span>
        </div>
      </div>
    </div>
  `;
}
