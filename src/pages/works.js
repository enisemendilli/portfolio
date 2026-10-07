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
      './assets/iyi-bir-sey/Instagram post - 48.png',
      './assets/iyi-bir-sey/Instagram post - 49.png',
      './assets/iyi-bir-sey/filmbook.png',
      './assets/iyi-bir-sey/Artboard 1_3-100.jpg',
      './assets/iyi-bir-sey/Frame 20.png',
      './assets/iyi-bir-sey/Instagram post - 33.png',
      './assets/iyi-bir-sey/POSTER 3 - INSTAGRAM -TR.png',
    ],
  },
  {
    id: 'gallery-projects',
    title: 'GALLERY PROJECTS',
    titleHTML: 'Gallery <em>Projects</em>',
    role: 'SMM Manager & Exhibition Coordinator',
    tag: '✦ gallery — social media & production',
    coverImage: './assets/gallery projects/chairs.jpg',
    layout: 'gallery-sections',
    description: `<p>At Esentai Gallery, I worked across social media management, exhibition production, and event organization, contributing to the Summer Art Fair 2025 and the Girlhood exhibition. My role included creating visual content, coordinating with press and media partners, supporting exhibition openings, and organizing workshops, screenings, and artist events.</p>
<p>I also contributed to Juan Saliquet's (a Spanish artist and photographer) "Archaeology of a City: Almaty" residency, leading its social media documentation, developing the Open Call campaign, supporting press outreach, and participating in the project's research and exhibition process.</p>`,
    sections: [
      {
        title: 'Archaeology of the City',
        subtitle: 'Juan Saliquet — Almaty Residency',
        images: [
          './assets/gallery projects/Archeology of a Ciıty/IMG_8878.jpg',
          './assets/gallery projects/Archeology of a Ciıty/IMG_8880.jpg',
          './assets/gallery projects/Archeology of a Ciıty/IMG_8881.jpg',
          './assets/gallery projects/Archeology of a Ciıty/IMG_8882.jpg',
          './assets/gallery projects/Archeology of a Ciıty/IMG_8883.jpg',
          './assets/gallery projects/Archeology of a Ciıty/IMG_8885.jpg',
        ],
      },
      {
        title: 'Event Photography',
        subtitle: 'Exhibitions & Openings',
        images: [
          './assets/gallery projects/Event photography/IMG_8875.jpg',
          './assets/gallery projects/Event photography/IMG_8876.jpg',
          './assets/gallery projects/Event photography/IMG_8899.jpg',
          './assets/gallery projects/Event photography/IMG_8900.jpg',
          './assets/gallery projects/Event photography/IMG_8901.jpg',
          './assets/gallery projects/Event photography/IMG_8902.jpg',
        ],
      },
      {
        title: 'Instagram Content',
        subtitle: 'Social Media Management',
        images: [
          './assets/gallery projects/Instagram Content/IMG_8885.jpg',
          './assets/gallery projects/Instagram Content/IMG_8891.jpg',
          './assets/gallery projects/Instagram Content/IMG_8892.jpg',
        ],
      },
    ],
    images: [
      './assets/gallery projects/chairs.jpg',
      './assets/gallery projects/Archeology of a Ciıty/IMG_8878.jpg',
      './assets/gallery projects/Event photography/IMG_8875.jpg',
      './assets/gallery projects/Instagram Content/IMG_8891.jpg',
    ],
  },
  {
    id: 'samy-bakery',
    title: 'SAMY BAKERY',
    titleHTML: 'SAMY <em>Bakery</em>',
    role: 'Graphic Designer',
    tag: '✿ design — branding & social media',
    coverImage: './assets/SAMY Bakery/Slide 16_9 - 1.png',
    layout: 'carousel',
    description: `<p>Visual identity and social media design for SAMY Bakery.</p>`,
    images: [
      './assets/SAMY Bakery/Slide 16_9 - 1.png',
      './assets/SAMY Bakery/Slide 16_9 - 2.png',
      './assets/SAMY Bakery/Slide 16_9 - 3.png',
      './assets/SAMY Bakery/Slide 16_9 - 4.png',
      './assets/SAMY Bakery/Slide 16_9 - 5.png',
      './assets/SAMY Bakery/Slide 16_9 - 6.png',
      './assets/SAMY Bakery/Slide 16_9 - 7.png',
    ],
  },
  {
    id: 'serac',
    title: 'SERAC',
    titleHTML: 'SERAC <em>Campaign</em>',
    role: 'Art Director & Illustrator',
    tag: '★ campaign — art direction & illustration',
    coverImage: './assets/campaign design/SERAC/SLIDE1.png',
    layout: 'carousel',
    description: `<p>SERAC campaign is my passion project which focuses on creating hand-drawn digital illustrations and taking out a full campaign design for a fashion brand with full creative and art direction (in progress).</p>`,
    images: [
      './assets/campaign design/SERAC/SLIDE1.png',
      './assets/campaign design/SERAC/SLIDE2.jpg',
      './assets/campaign design/SERAC/Slide 3.png',
      './assets/campaign design/SERAC/SLIDE4.png',
      './assets/campaign design/SERAC/slıde5.png',
      './assets/campaign design/SERAC/slide6.png',
      './assets/campaign design/SERAC/SLIDE7.png',
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
      './assets/bargello/52675EB9-2385-4C9E-A5F8-319C6E6F45C3.png',
      './assets/bargello/5F9F099C-28D6-4EA5-9873-D3B11934B520.png',
      './assets/bargello/7E8F329F-9467-4306-B821-3E6EBB1AD69C.png',
      './assets/bargello/869AEFCF-816C-4FA3-95F3-938B9090F703.png',
      './assets/bargello/B6C360C2-4959-4149-9F87-BDBBD41D6DBF.png',
      './assets/bargello/E4AB8012-2EA3-4C7D-BBA4-2253BBD09B64.png',
      './assets/bargello/Instagram post - 35.png',
      './assets/bargello/Instagram post - 40.png',
      './assets/bargello/Instagram post - 41.png',
      './assets/bargello/Instagram post - 47.png',
      './assets/bargello/Instagram post - 71.png',
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
      './assets/posters/album cover-smooth deep house.png',
      './assets/posters/day 1.png',
      './assets/posters/day 2.png',
      './assets/posters/day 2.1.png',
      './assets/posters/day 3.1.png',
      './assets/posters/day 5.1.png',
      './assets/posters/day 11.png',
      './assets/posters/day 12.png',
      './assets/posters/day 20.png',
      './assets/posters/Instagram post - 39.png',
    ],
  },

  {
    id: 'illustrations',
    title: 'ILLUSTRATIONS',
    titleHTML: 'Illustrations',
    role: 'Illustrator & Designer',
    tag: '★ design — illustrations',
    description: `<p>Creative illustrations and visual artworks exploring styles, textures, and digital drawing techniques.</p>`,
    images: [
      './assets/illustrations/POLARBEAR.PNG',
      './assets/illustrations/foxes.png',
      './assets/illustrations/IMG_6847.PNG',
      './assets/illustrations/IMG_6848 2.JPG',
      './assets/illustrations/IMG_6851.PNG',
      './assets/illustrations/IMG_6852.PNG',
    ],
  },
  {
    id: 'book-covers',
    title: 'BOOK COVERS',
    titleHTML: 'Book <em>Covers</em>',
    role: 'Graphic Designer',
    tag: '❋ design — book covers',
    description: `<p>A collection of fictional and custom book cover designs focusing on typography and visual themes.</p>`,
    images: [
      './assets/book-covers/valley of the dolls.png',
    ],
  },
  {
    id: 'branding',
    title: 'BRANDING',
    titleHTML: 'Branding <em>Identity</em>',
    role: 'Graphic Designer',
    tag: '✦ design — branding',
    description: `<p>Creative branding systems and designs for different cases.</p>`,
    images: [
      './assets/branding/NYHAVN  coffee & co Branding.png',
      './assets/branding/MNV.png',
    ],
  }

];

/* ── Carousel helper ─────────────────────────────────────────── */
function renderCarousel(images, carouselId) {
  return `
    <div class="slide-carousel" id="${carouselId}">
      <button class="carousel-arrow carousel-arrow-left" data-dir="-1" aria-label="Previous slide">‹</button>
      <div class="carousel-track-wrapper">
        <div class="carousel-track">
          ${images.map((src, i) => `
            <div class="carousel-slide${i === 0 ? ' active' : ''}" data-index="${i}">
              <img src="${src}" alt="Slide ${i + 1}" loading="lazy" />
            </div>
          `).join('')}
        </div>
      </div>
      <button class="carousel-arrow carousel-arrow-right" data-dir="1" aria-label="Next slide">›</button>
      <div class="carousel-dots">
        ${images.map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`).join('')}
      </div>
    </div>
  `;
}

function initCarousel(container, carouselId) {
  const carousel = container.querySelector(`#${carouselId}`);
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots = carousel.querySelectorAll('.carousel-dot');
  const arrows = carousel.querySelectorAll('.carousel-arrow');
  let current = 0;

  function goTo(idx) {
    if (idx < 0) idx = slides.length - 1;
    if (idx >= slides.length) idx = 0;
    current = idx;
    track.style.transform = `translateX(-${current * 100}%)`;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  arrows.forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = parseInt(btn.dataset.dir, 10);
      goTo(current + dir);
    });
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goTo(parseInt(dot.dataset.index, 10));
    });
  });
}

/* ── Section carousel (for Gallery Projects) ────────────────── */
function renderSectionCarousel(section, sectionIdx) {
  const carouselId = `section-carousel-${sectionIdx}`;
  const allMedia = [
    ...section.images.map(src => ({ type: 'image', src })),
    ...(section.videos || []).map(src => ({ type: 'video', src })),
  ];

  return `
    <div class="gallery-section anim-fade-up">
      <div class="gallery-section-header">
        <h3 class="gallery-section-title">${section.title}</h3>
        <span class="gallery-section-subtitle">${section.subtitle}</span>
      </div>
      <div class="slide-carousel" id="${carouselId}">
        <button class="carousel-arrow carousel-arrow-left" data-dir="-1" aria-label="Previous">‹</button>
        <div class="carousel-track-wrapper">
          <div class="carousel-track">
            ${allMedia.map((item, i) => `
              <div class="carousel-slide${i === 0 ? ' active' : ''}" data-index="${i}">
                ${item.type === 'video'
                  ? `<video src="${item.src}" controls playsinline preload="metadata" style="width:100%;height:100%;object-fit:contain;border-radius:var(--radius);"></video>`
                  : `<img src="${item.src}" alt="${section.title} ${i + 1}" loading="lazy" />`
                }
              </div>
            `).join('')}
          </div>
        </div>
        <button class="carousel-arrow carousel-arrow-right" data-dir="1" aria-label="Next">›</button>
        <div class="carousel-dots">
          ${allMedia.map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

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

  // ── Gallery Sections layout (Gallery Projects) ────────────────
  if (project.layout === 'gallery-sections') {
    page.innerHTML = `
      <div class="project-page">
        <a href="#home" class="back-link anim-fade-up">← back to portfolio</a>

        <div class="project-header anim-fade-up">
          <div class="project-tag">${project.tag}</div>
          <h1 class="project-title">${project.titleHTML}</h1>
          <div class="project-role-line">${project.role}</div>
          <div class="project-description">${project.description}</div>
        </div>

        ${project.sections.map((sec, i) => renderSectionCarousel(sec, i)).join('')}
      </div>
    `;

    // Init each section carousel
    project.sections.forEach((_, i) => {
      initCarousel(page, `section-carousel-${i}`);
    });

    // Scroll animations
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    page.querySelectorAll('.anim-fade-up').forEach(el => obs.observe(el));
    return;
  }

  // ── Single Carousel layout (SAMY, SERAC) ──────────────────────
  if (project.layout === 'carousel') {
    const carouselId = `project-carousel-${project.id}`;

    page.innerHTML = `
      <div class="project-page">
        <a href="#home" class="back-link anim-fade-up">← back to portfolio</a>

        <div class="project-header anim-fade-up">
          <div class="project-tag">${project.tag}</div>
          <h1 class="project-title">${project.titleHTML}</h1>
          <div class="project-role-line">${project.role}</div>
          <div class="project-description">${project.description}</div>
        </div>

        <div class="gallery-label anim-fade-up">✦ slides — ${project.images.length} works</div>
        <div class="anim-fade-up">
          ${renderCarousel(project.images, carouselId)}
        </div>
      </div>
    `;

    initCarousel(page, carouselId);

    // Scroll animations
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    page.querySelectorAll('.anim-fade-up').forEach(el => obs.observe(el));
    return;
  }

  // ── Default grid layout ───────────────────────────────────────
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
