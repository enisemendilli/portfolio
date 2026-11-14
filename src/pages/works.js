// ─── Works / Project Page ───────────────────────────────────────
import { openLightbox } from '../components/lightbox.js';

export const PROJECTS = [
  {
    id: 'iyi-bir-sey',
    number: '01',
    year: '2026',
    category: 'Art Direction',
    title: 'SOMETHING GOOD',
    titleHTML: 'Something Good / <em>İyi Bir Şey</em>',
    role: 'Art Director',
    tag: 'Film — Art Direction & Visual Identity',
    shortDescription: 'Art direction and comprehensive visual identity for a narrative short film exploring creative frustration, featuring custom prop design, promotional posters, and social media direction.',
    coverImage: './assets/iyi-bir-sey/coverr.jpg',
    description: `<p>Something Good / İyi Bir Şey is a short film about Burak, a young writer navigating creative frustration, ambition, and the feeling of being unseen by the industry. As he searches for the perfect ending to his new book, he is accompanied by Melis, the main character of his own story.</p>
<p>As the Art Director of the film, I was responsible for shaping its visual identity through set design, props, and narrative details. I designed key on-screen elements, including a fictional book cover and other visual attributes that supported the story's atmosphere and character world.</p>
<p>My role also extended beyond the set: I designed a series of promotional posters and managed the film's social media presence, creating a cohesive visual direction connecting the film's narrative, production design, and public-facing identity.</p>`,
    images: [
      './assets/iyi-bir-sey/coverr.jpg',
      './assets/iyi-bir-sey/POSTER 3 - INSTAGRAM -TR.png',
      './assets/iyi-bir-sey/Instagram post - 65.png',
      './assets/iyi-bir-sey/Instagram post - 67.png',
      './assets/iyi-bir-sey/Instagram post - 33.png',
      './assets/iyi-bir-sey/Artboard 1_3-100.jpg',
    ],
  },
  {
    id: 'gallery-projects',
    number: '02',
    year: '2025',
    category: 'Exhibition',
    title: 'GALLERY PROJECTS',
    titleHTML: 'Gallery <em>Projects</em>',
    role: 'SMM Manager & Exhibition Coordinator',
    tag: 'Gallery — Exhibition Production & Social Media',
    shortDescription: 'Exhibition management, curatorial support, and visual documentation at Esentai Gallery, including the Summer Art Fair, Girlhood exhibition, and an international artist residency.',
    coverImage: './assets/gallery projects/chairs.jpg',
    layout: 'gallery-sections',
    description: `<p>At Esentai Gallery, I worked across social media management, exhibition production, and event organization, contributing to the Summer Art Fair 2025 and the Girlhood exhibition. My role included creating visual content, coordinating with press and media partners, supporting exhibition openings, and organizing workshops, screenings, and artist events.</p>
<p>I also contributed to Juan Saliquet's (Spanish artist and photographer) "Archaeology of a City: Almaty" residency, leading its social media documentation, developing the Open Call campaign, supporting press outreach, and participating in the project's research and exhibition process.</p>`,
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
    id: 'fashion-sketches',
    number: '03',
    year: '2026',
    category: 'Fashion',
    title: 'FASHION SKETCHES',
    titleHTML: 'Fashion <em>Sketches</em>',
    role: 'Art Director & Illustrator',
    tag: 'Fashion — Sketches & Art Direction',
    shortDescription: 'Conceptual fashion sketches and editorial campaign exploring sculptural footwear silhouettes, hand-drawn digital illustration, and high-fashion art direction.',
    coverImage: './assets/campaign design/SERAC/SLIDE1.png',
    layout: 'carousel',
    description: `<p>Fashion Sketches is an editorial fashion concept focusing on hand-drawn digital illustrations and campaign art direction for a sculptural footwear collection, exploring materials, organic silhouettes, and high-contrast editorial composition.</p>`,
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
    id: 'branding',
    number: '04',
    year: '2026',
    category: 'Branding',
    title: 'BRANDING',
    titleHTML: 'Branding <em>Systems</em>',
    role: 'Brand Designer',
    tag: 'Design — Visual Identity Systems',
    shortDescription: 'Brand identity and packaging systems across SAMY Bakery packaging, NYHAVN Coffee & Co branding, and MNV studio marks.',
    coverImage: './assets/branding/samy brand.png',
    description: `<p>Visual identity systems and brand design explorations across packaging, coffee culture, and studio identity. Includes the complete identity and packaging aesthetic for SAMY Bakery, NYHAVN Coffee & Co, and MNV.</p>`,
    images: [
      './assets/branding/samy brand.png',
      './assets/branding/NYHAVN  coffee & co Branding.png',
      './assets/branding/MNV.png',
    ],
  },
  {
    id: 'designs',
    number: '05',
    year: '2026',
    category: 'Editorial',
    title: 'DESIGNS',
    titleHTML: 'Designs <em>& Posters</em>',
    role: 'Graphic Designer',
    tag: 'Design — Editorial Zines & Posters',
    shortDescription: 'Editorial zine branding, typographical systems, and experimental visual designs exploring composition, print layouts, and graphic aesthetics.',
    coverImage: './assets/designs/zinebrand.png',
    description: `<p>A curated collection of graphic designs, zine branding, and typographic posters exploring rhythm, minimalist grid systems, and expressive visual storytelling across music and editorial concepts.</p>`,
    images: [
      './assets/designs/zinebrand.png',
      './assets/designs/day 1.png',
      './assets/designs/day 2.1.png',
      './assets/designs/day 3.1.png',
      './assets/designs/day 5.1.png',
      './assets/designs/day 12.png',
    ],
  },
  {
    id: 'bargello',
    number: '06',
    year: '2026',
    category: 'Social Media',
    title: 'BARGELLO',
    titleHTML: 'Bargello <em>Kazakhstan</em>',
    role: 'Social Media Manager & Designer',
    tag: 'Social Media — Strategy & Feed Design',
    shortDescription: 'Feed design, visual identity management, and bilingual content strategy for perfume retailer Bargello Kazakhstan, driving engagement and brand prestige.',
    coverImage: './assets/bargello/Instagram post - 71.png',
    description: `<p>Instagram feed design, content strategy, and visual identity management for Bargello Kazakhstan. Designed a clean, engaging bilingual social grid aligned with luxury fragrance branding.</p>`,
    images: [
      './assets/bargello/Instagram post - 71.png',
      './assets/bargello/3 mart post 2.png',
      './assets/bargello/Instagram post - 65.png',
      './assets/bargello/Instagram post - 66.png',
      './assets/bargello/Instagram post - 67.png',
      './assets/bargello/Instagram post - 78.png',
      './assets/bargello/Instagram post - 88.png',
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
    ],
  },
  {
    id: 'illustrations',
    number: '07',
    year: '2025',
    category: 'Illustration',
    title: 'ILLUSTRATIONS',
    titleHTML: 'Illustrations <em>& Artworks</em>',
    role: 'Illustrator & Designer',
    tag: 'Art — Digital Illustration & Drawing',
    shortDescription: 'Personal illustrations exploring character forms, textural rendering, wildlife, and digital drawing techniques.',
    coverImage: './assets/illustrations/foxes.png',
    description: `<p>Creative illustrations and visual artworks exploring styles, organic textures, animal studies, and digital brush techniques.</p>`,
    images: [
      './assets/illustrations/foxes.png',
      './assets/illustrations/POLARBEAR.PNG',
      './assets/illustrations/IMG_6847.PNG',
      './assets/illustrations/IMG_6848 2.JPG',
      './assets/illustrations/IMG_6851.PNG',
      './assets/illustrations/IMG_6852.PNG',
    ],
  },
  {
    id: 'book-covers',
    number: '08',
    year: '2025',
    category: 'Editorial',
    title: 'BOOK COVERS',
    titleHTML: 'Book <em>Covers</em>',
    role: 'Graphic Designer',
    tag: 'Design — Editorial Book Covers',
    shortDescription: 'Conceptual cover design for classic literature featuring bespoke typographic treatment and moody, high-contrast imagery.',
    coverImage: './assets/book-covers/valley of the dolls.png',
    description: `<p>Fictional and custom book cover designs focusing on title typography, atmosphere, and literary narrative expression.</p>`,
    images: [
      './assets/book-covers/valley of the dolls.png',
      './assets/book-covers/filmbook.png',
    ],
  },
];

// Alias lookup for legacy links
const ALIASES = {
  'serac': 'fashion-sketches',
  'poster-designs': 'designs',
  'posters': 'designs',
  'samy-bakery': 'branding',
};

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
            ${section.images.map((src, i) => `
              <div class="carousel-slide${i === 0 ? ' active' : ''}" data-index="${i}">
                <img src="${src}" alt="${section.title} ${i + 1}" loading="lazy" />
              </div>
            `).join('')}
          </div>
        </div>
        <button class="carousel-arrow carousel-arrow-right" data-dir="1" aria-label="Next">›</button>
        <div class="carousel-dots">
          ${section.images.map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`).join('')}
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

  const resolvedId = ALIASES[projectId] || projectId;
  const project = PROJECTS.find(p => p.id === resolvedId);

  if (!project) {
    page.innerHTML = `<div class="project-page"><h1>Project not found</h1><a href="#home" class="back-link">← Back</a></div>`;
    return;
  }

  // ── Gallery Sections layout (Gallery Projects) ────────────────
  if (project.layout === 'gallery-sections') {
    page.innerHTML = `
      <div class="project-page">
        <a href="#home" class="back-link anim-fade-up">← Back</a>

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

  // ── Single Carousel layout (Fashion Sketches, etc.) ─────────
  if (project.layout === 'carousel') {
    const carouselId = `project-carousel-${project.id}`;

    page.innerHTML = `
      <div class="project-page">
        <a href="#home" class="back-link anim-fade-up">← Back</a>

        <div class="project-header anim-fade-up">
          <div class="project-tag">${project.tag}</div>
          <h1 class="project-title">${project.titleHTML}</h1>
          <div class="project-role-line">${project.role}</div>
          <div class="project-description">${project.description}</div>
        </div>

        <div class="gallery-label anim-fade-up">Slides — ${project.images.length} works</div>
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
      <a href="#home" class="back-link anim-fade-up">← Back</a>

      <div class="project-header anim-fade-up">
        <div class="project-tag">${project.tag}</div>
        <h1 class="project-title">${project.titleHTML}</h1>
        <div class="project-role-line">${project.role}</div>
        <div class="project-description">${project.description}</div>
      </div>

      <div class="gallery-label anim-fade-up">Gallery — ${project.images.length} works</div>
      <div class="gallery-grid anim-fade-up">
        ${project.images.length > 0 ? project.images.map((src, i) => `
          <div class="gallery-grid-item" data-index="${i}">
            <img src="${src}" alt="${project.title} ${i + 1}" loading="lazy" />
          </div>
        `).join('') : `<div class="gallery-empty">Works coming soon</div>`}
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
