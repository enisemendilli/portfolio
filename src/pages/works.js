// ─── Works / Project Page ───────────────────────────────────────
import { openLightbox } from '../components/lightbox.js';

export const PROJECTS = [
  {
    id: 'iyi-bir-sey',
    title: 'SOMETHING GOOD',
    titleHTML: 'Something Good / <em>İyi Bir Şey</em>',
    role: 'Art Director',
    tag: '✦ film — art direction',
    description: `<p>Something Good / İyi Bir Şey is a short film about Burak, a young writer navigating creative frustration, ambition, and the feeling of being unseen by the industry. As he searches for the perfect ending to his new book, he is accompanied by Melis, the main character of his own story.</p>
<p>As the Art Director of the film, I was responsible for shaping its visual identity through set design, props, and narrative details. I designed key on-screen elements, including a fictional book cover and other visual attributes that supported the story's atmosphere and character world.</p>
<p>My role also extended beyond the set. I designed a series of promotional posters and managed the film's social media presence, creating a cohesive visual direction that connected the film's narrative, production design, and public-facing identity.</p>`,
    images: [
      '/assets/iyi-bir-sey/Instagram post - 48.png',
      '/assets/iyi-bir-sey/Instagram post - 49.png',
      '/assets/iyi-bir-sey/filmbook.png',
      '/assets/iyi-bir-sey/Artboard 1_3-100.jpg',
      '/assets/iyi-bir-sey/Frame 20.png',
      '/assets/iyi-bir-sey/Instagram post - 33.png',
      '/assets/iyi-bir-sey/POSTER 3 - INSTAGRAM -TR.png',
    ],
  },
  {
    id: 'bargello',
    title: 'BARGELLO',
    titleHTML: 'Bargello <em>Kazakhstan</em>',
    role: 'Social Media Manager & Designer',
    tag: '♡ social media — management & design',
    igHandle: '@bargello_kazakhstan',
    description: `<p>Instagram feed design, content strategy, and visual identity management for Bargello Kazakhstan. Below are the visuals that I have created for the brand.</p>`,
    images: [
      '/assets/bargello/52675EB9-2385-4C9E-A5F8-319C6E6F45C3.png',
      '/assets/bargello/5F9F099C-28D6-4EA5-9873-D3B11934B520.png',
      '/assets/bargello/7E8F329F-9467-4306-B821-3E6EBB1AD69C.png',
      '/assets/bargello/869AEFCF-816C-4FA3-95F3-938B9090F703.png',
      '/assets/bargello/B6C360C2-4959-4149-9F87-BDBBD41D6DBF.png',
      '/assets/bargello/E4AB8012-2EA3-4C7D-BBA4-2253BBD09B64.png',
      '/assets/bargello/Instagram post - 35.png',
      '/assets/bargello/Instagram post - 40.png',
      '/assets/bargello/Instagram post - 41.png',
      '/assets/bargello/Instagram post - 47.png',
      '/assets/bargello/Instagram post - 71.png',
    ],
  },
  {
    id: 'poster-designs',
    title: 'POSTER DESIGNS',
    titleHTML: 'Poster <em>Designs</em>',
    role: 'Graphic Designer',
    tag: '✿ design — posters',
    description: `<p>A collection of poster designs showcasing typography, composition, and visual storytelling.</p>`,
    images: [
      '/assets/posters/album cover-smooth deep house.png',
      '/assets/posters/day 1.png',
      '/assets/posters/day 2.1.png',
      '/assets/posters/day 2.png',
      '/assets/posters/day 3.1.png',
      '/assets/posters/day 3.png',
      '/assets/posters/day 5.1.png',
      '/assets/posters/day 5.png',
    ],
  },
  {
    id: 'illustrations',
    title: 'ILLUSTRATIONS',
    titleHTML: 'Illustrations',
    role: 'Illustrator & Designer',
    tag: '★ design — illustrations',
    description: `<p>Creative illustrations and visual artworks exploring styles, textures, and digital drawing techniques.</p>`,
    images: [],
  },
  {
    id: 'book-covers',
    title: 'BOOK COVERS',
    titleHTML: 'Book <em>Covers</em>',
    role: 'Graphic Designer',
    tag: '❋ design — book covers',
    description: `<p>A collection of fictional and custom book cover designs focusing on typography and visual themes.</p>`,
    images: [],
  },
  {
    id: 'branding',
    title: 'BRANDING',
    titleHTML: 'Branding <em>Identity</em>',
    role: 'Graphic Designer',
    tag: '✦ design — branding',
    description: `<p>Creative branding systems and designs for different cases.</p>`,
    images: [],
  },

];

export async function renderWorks(projectId) {
  const page = document.getElementById('page-content');

  if (!projectId) {
    window.location.hash = '#home';
    return;
  }

  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) {
    page.innerHTML = `<div class="project-page"><h1>Project not found</h1><a href="#home" class="back-link">← back home</a></div>`;
    return;
  }

  // IG header for Bargello
  const igHeader = project.igHandle ? `
    <div class="ig-mini-header">
      <div class="ig-mini-avatar">B</div>
      <div>
        <div class="ig-mini-handle">${project.igHandle}</div>
        <div class="ig-mini-sub">Instagram Feed Design</div>
      </div>
    </div>
  ` : '';

  page.innerHTML = `
    <div class="project-page">
      <a href="#home" class="back-link anim-fade-up">← back to portfolio</a>

      <div class="project-header anim-fade-up">
        <div class="project-tag">${project.tag}</div>
        <h1 class="project-title">${project.titleHTML}</h1>
        <div class="project-role-line">${project.role}</div>
        <div class="project-description">${project.description}</div>
      </div>

      ${igHeader}

      <div class="gallery-label anim-fade-up">✦ gallery — ${project.images.length} works</div>
      <div class="gallery-grid anim-fade-up">
        ${project.images.length > 0 ? project.images.map((src, i) => `
          <div class="gallery-grid-item" data-index="${i}">
            <img src="${src}" alt="${project.title} ${i + 1}" loading="lazy" />
          </div>
        `).join('') : `<div style="grid-column: 1 / -1; padding: 60px 40px; text-align: center; border: 1.5px dashed var(--border-dark); border-radius: var(--radius); color: var(--text-soft); font-family: var(--font-doodle); font-size: 1.4rem;">Works coming soon! ~ ♡</div>`}
      </div>
    </div>
  `;

  // Lightbox
  const items = page.querySelectorAll('.gallery-grid-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index, 10);
      openLightbox(project.images, idx);
    });
  });

  // Scroll animations
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  page.querySelectorAll('.anim-fade-up').forEach(el => obs.observe(el));
}
