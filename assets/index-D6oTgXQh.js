(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();function V(s){const a=document.getElementById("main-nav"),e=[{hash:"home",label:"Home"},{hash:"about",label:"About"}];a.innerHTML=`
    <a href="#home" class="nav-logo">enise<span>.</span></a>
    <div class="nav-links">
      ${e.map(t=>`
        <a href="#${t.hash}" class="nav-link ${s===t.hash||s===""&&t.hash==="home"?"active":""}">${t.label}</a>
      `).join("")}
    </div>
  `}let I=[],y=0;function W(s,a=0){I=s,y=a;const e=document.getElementById("lightbox-container");q(e),e.classList.add("lightbox-active"),e.onclick=t=>{(t.target===e||t.target.classList.contains("lightbox-close"))&&D()},document.addEventListener("keydown",R)}function D(){document.getElementById("lightbox-container").classList.remove("lightbox-active"),document.removeEventListener("keydown",R)}function R(s){s.key==="Escape"&&D(),s.key==="ArrowRight"&&H(1),s.key==="ArrowLeft"&&H(-1)}function H(s){y=(y+s+I.length)%I.length;const a=document.getElementById("lightbox-container");q(a)}function q(s){s.innerHTML=`
    <button class="lightbox-close">✕</button>
    <img src="${I[y]}" alt="Image ${y+1}" />
  `}const w=[{id:"iyi-bir-sey",title:"SOMETHING GOOD",titleHTML:"Something Good / <em>İyi Bir Şey</em>",role:"Art Director",tag:"✦ film — art direction",description:`<p>Something Good / İyi Bir Şey is a short film about Burak, a young writer navigating creative frustration, ambition, and the feeling of being unseen by the industry. As he searches for the perfect ending to his new book, he is accompanied by Melis, the main character of his own story.</p>
<p>As the Art Director of the film, I was responsible for shaping its visual identity through set design, props, and narrative details. I designed key on-screen elements, including a fictional book cover and other visual attributes that supported the story's atmosphere and character world.</p>
<p>My role also extended beyond the set. I designed a series of promotional posters and managed the film's social media presence, creating a cohesive visual direction that connected the film's narrative, production design, and public-facing identity.</p>`,images:["./assets/iyi-bir-sey/Instagram post - 48.png","./assets/iyi-bir-sey/Instagram post - 49.png","./assets/iyi-bir-sey/filmbook.png","./assets/iyi-bir-sey/Artboard 1_3-100.jpg","./assets/iyi-bir-sey/Frame 20.png","./assets/iyi-bir-sey/Instagram post - 33.png","./assets/iyi-bir-sey/POSTER 3 - INSTAGRAM -TR.png"]},{id:"gallery-projects",title:"GALLERY PROJECTS",titleHTML:"Gallery <em>Projects</em>",role:"SMM Manager & Exhibition Coordinator",tag:"✦ gallery — social media & production",coverImage:"./assets/gallery projects/chairs.jpg",layout:"gallery-sections",description:`<p>At Esentai Gallery, I worked across social media management, exhibition production, and event organization, contributing to the Summer Art Fair 2025 and the Girlhood exhibition. My role included creating visual content, coordinating with press and media partners, supporting exhibition openings, and organizing workshops, screenings, and artist events.</p>
<p>I also contributed to Juan Saliquet's (a Spanish artist and photographer) "Archaeology of a City: Almaty" residency, leading its social media documentation, developing the Open Call campaign, supporting press outreach, and participating in the project's research and exhibition process.</p>`,sections:[{title:"Archaeology of the City",subtitle:"Juan Saliquet — Almaty Residency",images:["./assets/gallery projects/Archeology of a Ciıty/IMG_8878.jpg","./assets/gallery projects/Archeology of a Ciıty/IMG_8880.jpg","./assets/gallery projects/Archeology of a Ciıty/IMG_8881.jpg","./assets/gallery projects/Archeology of a Ciıty/IMG_8882.jpg","./assets/gallery projects/Archeology of a Ciıty/IMG_8883.jpg","./assets/gallery projects/Archeology of a Ciıty/IMG_8885.jpg"]},{title:"Event Photography",subtitle:"Exhibitions & Openings",images:["./assets/gallery projects/Event photography/IMG_8875.jpg","./assets/gallery projects/Event photography/IMG_8876.jpg","./assets/gallery projects/Event photography/IMG_8899.jpg","./assets/gallery projects/Event photography/IMG_8900.jpg","./assets/gallery projects/Event photography/IMG_8901.jpg","./assets/gallery projects/Event photography/IMG_8902.jpg"]},{title:"Instagram Content",subtitle:"Social Media Management",images:["./assets/gallery projects/Instagram Content/IMG_8885.jpg","./assets/gallery projects/Instagram Content/IMG_8891.jpg","./assets/gallery projects/Instagram Content/IMG_8892.jpg"]}],images:["./assets/gallery projects/chairs.jpg","./assets/gallery projects/Archeology of a Ciıty/IMG_8878.jpg","./assets/gallery projects/Event photography/IMG_8875.jpg","./assets/gallery projects/Instagram Content/IMG_8891.jpg"]},{id:"samy-bakery",title:"SAMY BAKERY",titleHTML:"SAMY <em>Bakery</em>",role:"Graphic Designer",tag:"✿ design — branding & social media",coverImage:"./assets/SAMY Bakery/Slide 16_9 - 1.png",layout:"carousel",description:"<p>Visual identity and social media design for SAMY Bakery.</p>",images:["./assets/SAMY Bakery/Slide 16_9 - 1.png","./assets/SAMY Bakery/Slide 16_9 - 2.png","./assets/SAMY Bakery/Slide 16_9 - 3.png","./assets/SAMY Bakery/Slide 16_9 - 4.png","./assets/SAMY Bakery/Slide 16_9 - 5.png","./assets/SAMY Bakery/Slide 16_9 - 6.png","./assets/SAMY Bakery/Slide 16_9 - 7.png"]},{id:"serac",title:"SERAC",titleHTML:"SERAC <em>Campaign</em>",role:"Art Director & Illustrator",tag:"★ campaign — art direction & illustration",coverImage:"./assets/campaign design/SERAC/SLIDE1.png",layout:"carousel",description:"<p>SERAC campaign is my passion project which focuses on creating hand-drawn digital illustrations and taking out a full campaign design for a fashion brand with full creative and art direction (in progress).</p>",images:["./assets/campaign design/SERAC/SLIDE1.png","./assets/campaign design/SERAC/SLIDE2.jpg","./assets/campaign design/SERAC/Slide 3.png","./assets/campaign design/SERAC/SLIDE4.png","./assets/campaign design/SERAC/slıde5.png","./assets/campaign design/SERAC/slide6.png","./assets/campaign design/SERAC/SLIDE7.png"]},{id:"bargello",title:"BARGELLO",titleHTML:"Bargello <em>Kazakhstan</em>",role:"Social Media Manager & Designer",tag:"♡ social media — management & design",igHandle:"@bargello_kazakhstan",description:"<p>Instagram feed design, content strategy, and visual identity management for Bargello Kazakhstan. Below are the visuals that I have created for the brand.</p>",images:["./assets/bargello/52675EB9-2385-4C9E-A5F8-319C6E6F45C3.png","./assets/bargello/5F9F099C-28D6-4EA5-9873-D3B11934B520.png","./assets/bargello/7E8F329F-9467-4306-B821-3E6EBB1AD69C.png","./assets/bargello/869AEFCF-816C-4FA3-95F3-938B9090F703.png","./assets/bargello/B6C360C2-4959-4149-9F87-BDBBD41D6DBF.png","./assets/bargello/E4AB8012-2EA3-4C7D-BBA4-2253BBD09B64.png","./assets/bargello/Instagram post - 35.png","./assets/bargello/Instagram post - 40.png","./assets/bargello/Instagram post - 41.png","./assets/bargello/Instagram post - 47.png","./assets/bargello/Instagram post - 71.png"]},{id:"poster-designs",title:"POSTER DESIGNS",titleHTML:"Poster <em>Designs</em>",role:"Graphic Designer",tag:"✿ design — posters",description:"<p>A collection of poster designs showcasing typography, composition, and visual storytelling.</p>",images:["./assets/posters/album cover-smooth deep house.png","./assets/posters/day 1.png","./assets/posters/day 2.png","./assets/posters/day 2.1.png","./assets/posters/day 3.1.png","./assets/posters/day 5.1.png","./assets/posters/day 11.png","./assets/posters/day 12.png","./assets/posters/day 20.png","./assets/posters/Instagram post - 39.png"]},{id:"illustrations",title:"ILLUSTRATIONS",titleHTML:"Illustrations",role:"Illustrator & Designer",tag:"★ design — illustrations",description:"<p>Creative illustrations and visual artworks exploring styles, textures, and digital drawing techniques.</p>",images:["./assets/illustrations/POLARBEAR.PNG","./assets/illustrations/foxes.png","./assets/illustrations/IMG_6847.PNG","./assets/illustrations/IMG_6848 2.JPG","./assets/illustrations/IMG_6851.PNG","./assets/illustrations/IMG_6852.PNG"]},{id:"book-covers",title:"BOOK COVERS",titleHTML:"Book <em>Covers</em>",role:"Graphic Designer",tag:"❋ design — book covers",description:"<p>A collection of fictional and custom book cover designs focusing on typography and visual themes.</p>",images:["./assets/book-covers/valley of the dolls.png"]},{id:"branding",title:"BRANDING",titleHTML:"Branding <em>Identity</em>",role:"Graphic Designer",tag:"✦ design — branding",description:"<p>Creative branding systems and designs for different cases.</p>",images:["./assets/branding/NYHAVN  coffee & co Branding.png","./assets/branding/MNV.png"]}];function Z(s,a){return`
    <div class="slide-carousel" id="${a}">
      <button class="carousel-arrow carousel-arrow-left" data-dir="-1" aria-label="Previous slide">‹</button>
      <div class="carousel-track-wrapper">
        <div class="carousel-track">
          ${s.map((e,t)=>`
            <div class="carousel-slide${t===0?" active":""}" data-index="${t}">
              <img src="${e}" alt="Slide ${t+1}" loading="lazy" />
            </div>
          `).join("")}
        </div>
      </div>
      <button class="carousel-arrow carousel-arrow-right" data-dir="1" aria-label="Next slide">›</button>
      <div class="carousel-dots">
        ${s.map((e,t)=>`<span class="carousel-dot${t===0?" active":""}" data-index="${t}"></span>`).join("")}
      </div>
    </div>
  `}function G(s,a){const e=s.querySelector(`#${a}`);if(!e)return;const t=e.querySelector(".carousel-track"),i=e.querySelectorAll(".carousel-slide"),n=e.querySelectorAll(".carousel-dot"),l=e.querySelectorAll(".carousel-arrow");let o=0;function c(d){d<0&&(d=i.length-1),d>=i.length&&(d=0),o=d,t.style.transform=`translateX(-${o*100}%)`,i.forEach((v,h)=>v.classList.toggle("active",h===o)),n.forEach((v,h)=>v.classList.toggle("active",h===o))}l.forEach(d=>{d.addEventListener("click",()=>{const v=parseInt(d.dataset.dir,10);c(o+v)})}),n.forEach(d=>{d.addEventListener("click",()=>{c(parseInt(d.dataset.index,10))})})}function K(s,a){const e=`section-carousel-${a}`,t=[...s.images.map(i=>({type:"image",src:i})),...(s.videos||[]).map(i=>({type:"video",src:i}))];return`
    <div class="gallery-section anim-fade-up">
      <div class="gallery-section-header">
        <h3 class="gallery-section-title">${s.title}</h3>
        <span class="gallery-section-subtitle">${s.subtitle}</span>
      </div>
      <div class="slide-carousel" id="${e}">
        <button class="carousel-arrow carousel-arrow-left" data-dir="-1" aria-label="Previous">‹</button>
        <div class="carousel-track-wrapper">
          <div class="carousel-track">
            ${t.map((i,n)=>`
              <div class="carousel-slide${n===0?" active":""}" data-index="${n}">
                ${i.type==="video"?`<video src="${i.src}" controls playsinline preload="metadata" style="width:100%;height:100%;object-fit:contain;border-radius:var(--radius);"></video>`:`<img src="${i.src}" alt="${s.title} ${n+1}" loading="lazy" />`}
              </div>
            `).join("")}
          </div>
        </div>
        <button class="carousel-arrow carousel-arrow-right" data-dir="1" aria-label="Next">›</button>
        <div class="carousel-dots">
          ${t.map((i,n)=>`<span class="carousel-dot${n===0?" active":""}" data-index="${n}"></span>`).join("")}
        </div>
      </div>
    </div>
  `}async function O(s){const a=document.getElementById("page-content");if(!s){window.location.hash="#home";return}const e=w.find(l=>l.id===s);if(!e){a.innerHTML='<div class="project-page"><h1>Project not found</h1><a href="#home" class="back-link">← back home</a></div>';return}const t=e.igHandle?`
    <div class="ig-mini-header">
      <div class="ig-mini-avatar">B</div>
      <div>
        <div class="ig-mini-handle">${e.igHandle}</div>
        <div class="ig-mini-sub">Instagram Feed Design</div>
      </div>
    </div>
  `:"";if(e.layout==="gallery-sections"){a.innerHTML=`
      <div class="project-page">
        <a href="#home" class="back-link anim-fade-up">← back to portfolio</a>

        <div class="project-header anim-fade-up">
          <div class="project-tag">${e.tag}</div>
          <h1 class="project-title">${e.titleHTML}</h1>
          <div class="project-role-line">${e.role}</div>
          <div class="project-description">${e.description}</div>
        </div>

        ${e.sections.map((o,c)=>K(o,c)).join("")}
      </div>
    `,e.sections.forEach((o,c)=>{G(a,`section-carousel-${c}`)});const l=new IntersectionObserver(o=>{o.forEach(c=>{c.isIntersecting&&(c.target.classList.add("visible"),l.unobserve(c.target))})},{threshold:.08});a.querySelectorAll(".anim-fade-up").forEach(o=>l.observe(o));return}if(e.layout==="carousel"){const l=`project-carousel-${e.id}`;a.innerHTML=`
      <div class="project-page">
        <a href="#home" class="back-link anim-fade-up">← back to portfolio</a>

        <div class="project-header anim-fade-up">
          <div class="project-tag">${e.tag}</div>
          <h1 class="project-title">${e.titleHTML}</h1>
          <div class="project-role-line">${e.role}</div>
          <div class="project-description">${e.description}</div>
        </div>

        <div class="gallery-label anim-fade-up">✦ slides — ${e.images.length} works</div>
        <div class="anim-fade-up">
          ${Z(e.images,l)}
        </div>
      </div>
    `,G(a,l);const o=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&(d.target.classList.add("visible"),o.unobserve(d.target))})},{threshold:.08});a.querySelectorAll(".anim-fade-up").forEach(c=>o.observe(c));return}a.innerHTML=`
    <div class="project-page">
      <a href="#home" class="back-link anim-fade-up">← back to portfolio</a>

      <div class="project-header anim-fade-up">
        <div class="project-tag">${e.tag}</div>
        <h1 class="project-title">${e.titleHTML}</h1>
        <div class="project-role-line">${e.role}</div>
        <div class="project-description">${e.description}</div>
      </div>

      ${t}

      <div class="gallery-label anim-fade-up">✦ gallery — ${e.images.length} works</div>
      <div class="gallery-grid anim-fade-up">
        ${e.images.length>0?e.images.map((l,o)=>`
          <div class="gallery-grid-item" data-index="${o}">
            <img src="${l}" alt="${e.title} ${o+1}" loading="lazy" />
          </div>
        `).join(""):'<div style="grid-column: 1 / -1; padding: 60px 40px; text-align: center; border: 1.5px dashed var(--border-dark); border-radius: var(--radius); color: var(--text-soft); font-family: var(--font-doodle); font-size: 1.4rem;">Works coming soon! ~ ♡</div>'}
      </div>
    </div>
  `,a.querySelectorAll(".gallery-grid-item").forEach(l=>{l.addEventListener("click",()=>{const o=parseInt(l.dataset.index,10);W(e.images,o)})});const n=new IntersectionObserver(l=>{l.forEach(o=>{o.isIntersecting&&(o.target.classList.add("visible"),n.unobserve(o.target))})},{threshold:.08});a.querySelectorAll(".anim-fade-up").forEach(l=>n.observe(l))}const U=5e3,P=1e3;function J(){return[...w.filter(e=>e.images.length>=2)].sort(()=>Math.random()-.5).map(e=>{const t=[...e.images].sort(()=>Math.random()-.5);return{leftSrc:t[0],rightSrc:t[1],title:e.title,id:e.id}})}function E(s,a,e=""){return`
    <div class="sb-paper-texture"></div>
    <div class="sb-page-content ${e}">
      <div class="sb-tape sb-tape-tl"></div>
      <img src="${s}" alt="${a}" loading="lazy" draggable="false" />
      <div class="sb-tape sb-tape-br"></div>
    </div>
    <div class="sb-page-footer">
      <span class="sb-page-label">${a}</span>
    </div>`}function X(s){const a=J();if(a.length<2)return()=>{};let e=0,t=!1,i=null;const n=r=>(r+1)%a.length,l=r=>(r-1+a.length)%a.length,o=a[0],c=a[1];s.innerHTML=`
    <div class="sketchbook-section anim-fade-up">
      <div class="sb-label">✿ featured works</div>

      <div class="sb-book" id="sb-book">
        <!-- Pink hardcover frame -->
        <div class="sb-cover-frame"></div>

        <!-- Opening cover (flips open on load) -->
        <div class="sb-opening-cover" id="sb-opening-cover">
          <div class="sb-oc-front">
            <div class="sb-oc-texture"></div>
            <span class="sb-oc-doodle">✧</span>
            <span class="sb-oc-title">Featured</span>
            <span class="sb-oc-sub">Enise Mendilli</span>
          </div>
          <div class="sb-oc-back"></div>
        </div>

        <!-- Static left page -->
        <div class="sb-left-page" id="sb-left">
          ${E(o.leftSrc,o.title)}
        </div>

        <!-- Static right-under page (next spread's right, hidden under leaf) -->
        <div class="sb-right-under" id="sb-right-under">
          ${E(c.rightSrc,c.title)}
        </div>

        <!-- Flipping leaf (covers right half, flips to left on turn) -->
        <div class="sb-leaf" id="sb-leaf">
          <div class="sb-leaf-front" id="sb-leaf-front">
            ${E(o.rightSrc,o.title)}
          </div>
          <div class="sb-leaf-back" id="sb-leaf-back">
            ${E(c.leftSrc,c.title)}
          </div>
        </div>

        <!-- Spine -->
        <div class="sb-spine"></div>
      </div>

      <!-- Current section indicator -->
      <div class="sb-section-indicator">
        <span class="sb-section-dot">✦</span>
        <span class="sb-section-text" id="sb-section-text">${o.title}</span>
      </div>

      <!-- Controls -->
      <div class="sb-controls">
        <button class="sb-btn" id="sb-prev" aria-label="Previous spread">‹</button>
        <div class="sb-dots" id="sb-dots">
          ${a.map((r,p)=>`<span class="sb-dot${p===0?" active":""}" data-idx="${p}"></span>`).join("")}
        </div>
        <button class="sb-btn" id="sb-next" aria-label="Next spread">›</button>
      </div>
    </div>`;const d=s.querySelector("#sb-book"),v=s.querySelector("#sb-left"),h=s.querySelector("#sb-right-under"),m=s.querySelector("#sb-leaf"),j=s.querySelector("#sb-leaf-front"),x=s.querySelector("#sb-leaf-back"),L=s.querySelectorAll(".sb-dot"),S=s.querySelector("#sb-section-text");function u(r,p,g){r.querySelector(".sb-page-content img").src=p,r.querySelector(".sb-page-content img").alt=g,r.querySelector(".sb-page-label").textContent=g}function z(){L.forEach((r,p)=>r.classList.toggle("active",p===e))}function $(r,p){const g=a[r],k=a[p];u(v,g.leftSrc,g.title),u(j,g.rightSrc,g.title),u(x,k.leftSrc,k.title),u(h,k.rightSrc,k.title)}function F(r){const p=a[r],g=a[n(r)];u(v,p.leftSrc,p.title),u(j,p.rightSrc,p.title),u(x,g.leftSrc,g.title),u(h,g.rightSrc,g.title),m.style.transition="none",m.classList.remove("sb-flipping"),m.offsetWidth,m.style.transition="",e=r,z(),S.style.opacity="0",setTimeout(()=>{S.textContent=p.title,S.style.opacity="1"},150),t=!1}function B(){if(t)return;t=!0;const r=n(e);$(e,r),m.offsetWidth,m.classList.add("sb-flipping"),setTimeout(()=>F(r),P+50)}function T(r){t||r===e||(t=!0,$(e,r),m.offsetWidth,m.classList.add("sb-flipping"),setTimeout(()=>F(r),P+50))}function b(){f(),i=setInterval(B,U)}function f(){i&&(clearInterval(i),i=null)}s.querySelector("#sb-next").addEventListener("click",()=>{f(),B(),b()}),s.querySelector("#sb-prev").addEventListener("click",()=>{f(),T(l(e)),b()}),L.forEach(r=>{r.addEventListener("click",()=>{const p=parseInt(r.dataset.idx,10);f(),T(p),b()})}),d.addEventListener("mouseenter",f),d.addEventListener("mouseleave",b);const Y=s.querySelector("#sb-opening-cover"),A=new IntersectionObserver(r=>{r.forEach(p=>{p.isIntersecting&&(A.unobserve(p.target),setTimeout(()=>{Y.classList.add("sb-cover-opened"),setTimeout(()=>b(),1500)},400))})},{threshold:.2});return A.observe(d),()=>{f(),A.disconnect()}}function C(){const s=document.getElementById("page-content"),a=w.map(i=>{const n=i.coverImage||(i.images.length>0?i.images[0]:"");return`
      <a href="#project/${i.id}" class="project-card anim-fade-up" style="display: flex; align-items: center; justify-content: center; flex-direction: column; text-align: center; padding: 20px;">
        ${n?`<img src="${n}" alt="${i.title}" loading="lazy" style="position: absolute; inset: 0;" />`:`<div style="font-family: var(--font-doodle); font-size: 1.8rem; color: var(--pink); opacity: 0.65; line-height: 1.2;">${i.title}</div>
             <div style="font-size: 0.68rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1.5px; margin-top: 6px; font-weight: 500;">coming soon ~</div>`}
        <div class="project-card-overlay">
          <div class="project-card-title">${i.title}</div>
          <div class="project-card-role">${i.role}</div>
        </div>
      </a>
    `}).join("");s.innerHTML=`
    <div class="home-page">

      <!-- Hero Video -->
      <div class="hero-video-section anim-fade-up">
        <video
          class="hero-video"
          src="./assets/multimedia/hero-video.mp4"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
        ></video>
        <div class="hero-video-overlay"></div>
      </div>

      <!-- Hero -->
      <div class="hero-section anim-fade-up">
        <div class="hero-doodles">
          <span class="doodle d1 doodle-star">✦</span>
          <span class="doodle d2 doodle-heart">♡</span>
          <span class="doodle d3 doodle-sparkle">✿</span>
          <span class="doodle d4 doodle-star">★</span>
          <span class="doodle d5 doodle-heart">❋</span>
          <span class="doodle d6 doodle-sparkle">✧</span>
        </div>
        <div class="hero-doodle">hello, i'm ~</div>
        <h1 class="hero-name">Enise <em>Mendilli</em></h1>
        <p class="hero-tagline">
          Creative designer & advertiser with an international perspective,
          passionate about fashion marketing and visual storytelling.
        </p>
        <div class="hero-roles">
          <span class="hero-role-pill">graphic designer</span>
          <span class="hero-role-pill">advertiser</span>
          <span class="hero-role-pill">visual storyteller</span>
        </div>
      </div>

      <!-- Sketchbook -->
      <div id="sketchbook-mount"></div>

      <!-- Projects -->
      <div class="section-block">
        <div class="section-doodle-title anim-fade-up">✦ selected work</div>
        <h2 class="section-title anim-fade-up">Projects</h2>
        <div class="section-line anim-fade-up"></div>
        <div class="projects-grid">
          ${a}
        </div>
      </div>

      <!-- Experience -->
      <div class="section-block">
        <div class="section-doodle-title anim-fade-up">✿ where i've worked</div>
        <h2 class="section-title anim-fade-up">Experience</h2>
        <div class="section-line anim-fade-up"></div>

        <div class="timeline anim-fade-up">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">Feb 2026 — May 2026</div>
            <div class="timeline-role">Graphic Designer & Media Planner</div>
            <div class="timeline-company">ACY MEDYA AGENCY</div>
            <p class="timeline-desc">Created social media designs and copy for brands. Built monthly media plans, developed branding & identity systems.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">May 2025 — Aug 2025</div>
            <div class="timeline-role">SMM Manager</div>
            <div class="timeline-company">ESENTAI GALLERY</div>
            <p class="timeline-desc">Managed gallery social presence, curated exhibitions, coordinated event promotion and sponsor relations.</p>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-date">Aug 2023 — Apr 2025</div>
            <div class="timeline-role">SMM Manager</div>
            <div class="timeline-company">FREEDBALLET</div>
            <p class="timeline-desc">Grew followers from 7,000 to 21,400. Developed social strategies, created Reels, photography, and ad templates.</p>
            <span class="timeline-highlight">+137.78% growth ✦</span>
          </div>
        </div>
      </div>

      <!-- Skills -->
      <div class="section-block">
        <div class="section-doodle-title anim-fade-up">♡ tools & skills</div>
        <h2 class="section-title anim-fade-up">What I Use</h2>
        <div class="section-line anim-fade-up"></div>

        <div class="programs-grid anim-fade-up">
          <div class="program-card">
            <div class="program-icon" style="color: #31A8FF; background: rgba(49,168,255,0.06);">Ps</div>
            <span class="program-name">Photoshop</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #FF9A00; background: rgba(255,154,0,0.06);">Ai</div>
            <span class="program-name">Illustrator</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #9999FF; background: rgba(153,153,255,0.06);">Pr</div>
            <span class="program-name">Premiere Pro</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #FF3366; background: rgba(255,51,102,0.06);">Id</div>
            <span class="program-name">InDesign</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #9999FF; background: rgba(153,153,255,0.06);">Ae</div>
            <span class="program-name">After Effects</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #A259FF; background: rgba(162,89,255,0.06);">
              <svg width="18" height="25" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
              </svg>
            </div>
            <span class="program-name">Figma</span>
          </div>
          <div class="program-card">
            <div class="program-icon" style="color: #e84393; background: rgba(232,67,147,0.06); font-size: 1.6rem;">✎</div>
            <span class="program-name">Procreate</span>
          </div>
        </div>

        <div class="skills-pills-row anim-fade-up">
          <span class="skill-pill-v2">Brand Identity</span>
          <span class="skill-pill-v2">Social Media</span>
          <span class="skill-pill-v2">Content Creation</span>
          <span class="skill-pill-v2">Typography</span>
          <span class="skill-pill-v2">Art Direction</span>
          <span class="skill-pill-v2">Photography</span>
          <span class="skill-pill-v2">Video Editing</span>
          <span class="skill-pill-v2">Copywriting</span>
        </div>
      </div>

    </div>
  `;const e=document.getElementById("sketchbook-mount");e&&X(e);const t=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("visible"),t.unobserve(n.target))})},{threshold:.08});s.querySelectorAll(".anim-fade-up").forEach(i=>t.observe(i))}function Q(){const s=document.getElementById("page-content");s.innerHTML=`
    <div class="about-page">
      <div class="about-grid">

        <div class="about-image-col anim-fade-up">
          <div class="profile-placeholder" style="border: none; overflow: hidden; background: none;">
            <img src="./assets/about%20me%20photo/IMG_0113.jpg" alt="Enise Mendilli" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-lg); border: 1px solid var(--border);" />
          </div>
        </div>

        <div>
          <div class="about-section anim-fade-up">
            <h2 class="section-subtitle" style="font-size: 1.8rem;">About Me</h2>
            <p class="about-bio">
              I'm a multidisciplinary graphic designer and advertiser driven by a deep
              passion for fashion marketing and brand storytelling. With a background spanning
              social media management, branding, advertising campaigns, and editorial design,
              I bring a fashion-forward sensibility to every project.
            </p>
            <p class="about-bio">
              My international experience — studying in Istanbul and The Hague — has given me
              a unique cross-cultural perspective. Whether crafting a brand identity, directing 
              a social media campaign, or designing a poster, I approach every brief as an 
              opportunity to tell a story that resonates.
            </p>
          </div>

          <div class="stats-row anim-fade-up">
            <div class="stat-card">
              <span class="stat-number">3+</span>
              <span class="stat-label">Years Exp.</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">21K+</span>
              <span class="stat-label">Followers Grown</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">4</span>
              <span class="stat-label">Languages</span>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Software & Tools</h3>
            <div class="programs-grid">
              <div class="program-card">
                <div class="program-icon" style="color: #31A8FF; background: rgba(49,168,255,0.06);">Ps</div>
                <span class="program-name">Photoshop</span>
              </div>
              <div class="program-card">
                <div class="program-icon" style="color: #FF9A00; background: rgba(255,154,0,0.06);">Ai</div>
                <span class="program-name">Illustrator</span>
              </div>
              <div class="program-card">
                <div class="program-icon" style="color: #9999FF; background: rgba(153,153,255,0.06);">Pr</div>
                <span class="program-name">Premiere</span>
              </div>
              <div class="program-card">
                <div class="program-icon" style="color: #FF3366; background: rgba(255,51,102,0.06);">Id</div>
                <span class="program-name">InDesign</span>
              </div>
              <div class="program-card">
                <div class="program-icon" style="color: #9999FF; background: rgba(153,153,255,0.06);">Ae</div>
                <span class="program-name">After Effects</span>
              </div>
              <div class="program-card">
                <div class="program-icon" style="color: #A259FF; background: rgba(162,89,255,0.06);">
                  <svg width="18" height="25" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                  </svg>
                </div>
                <span class="program-name">Figma</span>
              </div>
              <div class="program-card">
                <div class="program-icon" style="color: #e84393; background: rgba(232,67,147,0.06); font-size: 1.6rem;">✎</div>
                <span class="program-name">Procreate</span>
              </div>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Education</h3>
            <div class="education-list">
              <div class="edu-item">
                <span class="edu-degree">Advertising</span>
                <span class="edu-school">Kadir Has University — Istanbul, Turkey</span>
                <span class="edu-year">2023 — 2027</span>
              </div>
              <div class="edu-item">
                <span class="edu-degree">Visual Communication Design</span>
                <span class="edu-school">Kadir Has University — Istanbul, Turkey</span>
                <span class="edu-year">2024 — 2027</span>
              </div>
              <div class="edu-item">
                <span class="edu-degree">IT & Design (Exchange)</span>
                <span class="edu-school">The Hague University — Netherlands</span>
                <span class="edu-year">2025 — 2026</span>
              </div>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Languages</h3>
            <div class="languages-row">
              <div class="lang-item">
                <span class="lang-name">Russian</span>
                <span class="lang-level">Native</span>
              </div>
              <div class="lang-item">
                <span class="lang-name">English</span>
                <span class="lang-level">C1</span>
              </div>
              <div class="lang-item">
                <span class="lang-name">Turkish</span>
                <span class="lang-level">B2</span>
              </div>
              <div class="lang-item">
                <span class="lang-name">French</span>
                <span class="lang-level">B1</span>
              </div>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Expertise</h3>
            <div class="skills-grid">
              <span class="skill-pill">Brand Identity</span>
              <span class="skill-pill">Social Media Strategy</span>
              <span class="skill-pill">Content Creation</span>
              <span class="skill-pill">Art Direction</span>
              <span class="skill-pill">Typography</span>
              <span class="skill-pill">Visual Storytelling</span>
              <span class="skill-pill">Photography</span>
              <span class="skill-pill">Video Editing</span>
              <span class="skill-pill">Copywriting</span>
              <span class="skill-pill">Media Planning</span>
            </div>
          </div>

          <div class="about-section anim-fade-up">
            <h3 class="section-subtitle">Get In Touch</h3>
            <a href="mailto:enisemendilli05@gmail.com" class="contact-email">enisemendilli05@gmail.com</a>
            
            <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 8px;">
              <a href="https://www.instagram.com/eniselii" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-doodle); font-size: 1.25rem; color: var(--text-soft); transition: color 0.3s;" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--text-soft)'">
                <span>✦</span> Instagram
              </a>
              <a href="https://www.behance.net/enisemendilli" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-doodle); font-size: 1.25rem; color: var(--text-soft); transition: color 0.3s;" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--text-soft)'">
                <span>★</span> Behance
              </a>
              <a href="https://pin.it/43mqMXSTU" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-doodle); font-size: 1.25rem; color: var(--text-soft); transition: color 0.3s;" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--text-soft)'">
                <span>♡</span> Pinterest
              </a>
              <a href="https://www.linkedin.com/in/enisemendilli" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-doodle); font-size: 1.25rem; color: var(--text-soft); transition: color 0.3s;" onmouseover="this.style.color='var(--pink)'" onmouseout="this.style.color='var(--text-soft)'">
                <span>✿</span> LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;const a=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),a.unobserve(t.target))})},{threshold:.08});s.querySelectorAll(".anim-fade-up").forEach(e=>a.observe(e))}const ee={"":C,home:C,about:Q,works:O};let _="",M=!1;function se(){return window.location.hash.replace("#","").toLowerCase()||""}async function ae(s){if(M)return;M=!0;const a=document.getElementById("page-content");let e=ee[s]||C,t=null;s.startsWith("project/")&&(e=O,t=s.split("/")[1]),a.children.length>0&&(a.classList.add("page-exit"),await new Promise(i=>setTimeout(i,300))),a.innerHTML="",a.classList.remove("page-exit"),await e(t),_=s.startsWith("project/")?"project":s,V(_),window.scrollTo(0,0),a.classList.add("page-enter"),a.offsetWidth,requestAnimationFrame(()=>a.classList.add("page-enter-active")),setTimeout(()=>{a.classList.remove("page-enter","page-enter-active"),M=!1},400)}function N(){ae(se())}window.addEventListener("hashchange",N);document.addEventListener("DOMContentLoaded",N);
