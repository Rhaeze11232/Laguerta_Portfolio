/* =====================
   STATIC DATA
   ===================== */
const movies = [
  { title: "The Notebook", cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSIziHGesPnZt7aVGFP1lNdwFL5ku7GZBMYCvvDO3Xs_1JbpzDH", note: "A love story that hits every single time." },
  { title: "Manchester by the Sea", cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR1cauCyYAGYKXGULOoQCL5S2Mwkf3sKNrBzG9_M0oT8TZA6Aeh", note: "Grief portrayed with brutal honesty." },
  { title: "Good Will Hunting", cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSy62oLyAWdd2bIAq9EYqEkSNr40HKohHXdntg3OQc66LIeFew_", note: "It's not your fault. One of the GOAT performances." },
  { title: "Me Before You", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEOMGyWIPQGXP4UnjIy4CM0bNFBuFpB4mhsnTC-7ecYabbkh6s", note: "A beautiful and devastating story about living fully." },
  { title: "Interstellar", cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQOivSc1SCt3ebhY8gISF3zQG-SaA7taUDOpo4fZ0FkF54KcHRf", note: "Space, time, love — Nolan at his most ambitious." }
];

const series = [
  { title: "Shameless", cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaajDu7UFZs7NZtxkB08Qt7wiU1bw1pTWP0Ze1LZB4BxmHLh4s", note: "11 seasons of gloriously chaotic family TV." },
  { title: "Suits", cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRSJIlzi2lBoRz45vP_NjtM_DymgN_uPrH0TU7ufcF5CwDrMU9A", note: "Sharp suits, sharper dialogue. Peak law-drama." },
  { title: "The Mentalist", cover: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQY4O9hZ5UNNZW0EDX6fvSjfVeffKZJ95-gO3cMVqIGW11s3jMe", note: "Patrick Jane and his infuriatingly clever mind." },
  { title: "LOKI", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuhyop-i0Ld-YvRc4e4AtvwFRjOGCQT8W165zospxSJMloEt2", note: "Loki's adventure through multiverse." },
  { title: "Grey's Anatomy", cover: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQuRnlwiUfv0LvMLxPB5LXOaXfdGHpTAeAZm4AMd50jWjoku2yW", note: "The original hospital drama that refuses to die." }
];

const music = [
  {
    artist: "Joji",
    cover: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTy0DB17V_5G42VJU7LWmnqeCsRUagl_yBpMMU5Yy33NjneHuLKtP3AHm1yq1NltUZ5G96ylxmqx8VqQfA",
    tracks: [
      { title: "Die For You" },
      { title: "Sanctuary" },
      { title: "Past won't leave my bed" },
      { title: "Glimpse of Us" },
      { title: "Like You Do" }
    ]
  },
  {
    artist: "Daniel Caesar",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzfmQme7akKitk41TrO9UlUNIOadF64hamkvg16yPZBbc1WW1pHxvxbcuR6vU9yMvy5eYR0C18jDY-uJhVWUnm1ejcYUCdNKFXW_6Q85F3&s=10",
    tracks: [
      { title: "Cyanide" },
      { title: "Moon" },
      { title: "Superposition" },
      { title: "Disillusioned" },
      { title: "Valentina" }
    ]
  },
  {
    artist: "Arctic Monkeys",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1FLpixSERyrrQwJCMwh3Mt7GfMyEDMbgX4NWn7HImVICoHURxK8CUHgmwWdhuPuMKZ-KM5UW1XDx-z0aGi3oPGCHjznrRVKSWrMU09h5&s=10",
    tracks: [
      { title: "Suck It and See" },
      { title: "Baby I'm Yours" },
      { title: "Arabella" },
      { title: "Snap Out of It" },
      { title: "Cornerstone" }
    ]
  },
  {
    artist: "Luke Chiang",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-MLV88mVSQiCRoCL2xvelJHTi77gdP0siRIzzUzvXI70kyMbaSiulhJtog7_prW-ylIXSnKuOE2nmp5fDjtDiepn3WT2raXRIh9vzwhYd&s=10",
    tracks: [
      { title: "Better" },
      { title: "Static" },
      { title: "terrible4u" },
      { title: "Good Company" },
      { title: "Heaven" }
    ]
  },
  {
    artist: "Niki",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1JEcoa670dvlPTdpl3alc_6LBa2pZE_t8o7SNT2QLjKRFHP0fZqGR2N9D_Xp8MLU3Wbw6CmAAXCkgxVWURECxRvZXNPwGgC0hWV43QYVE2g&s=10",
    tracks: [
      { title: "Oceans & Engines", highlight: true },
      { title: "Split" },
      { title: "Urs" },
      { title: "Anaheim" },
      { title: "Autumn" }
    ]
  }
];

const projects = [
  {
    title: "Paluwagan Web App",
    description: "A community financial contribution & savings management web platform featuring member tracking, automated slot allocation, and payment history.",
    tags: ["HTML", "CSS", "JavaScript", "Web App"],
    repo: "https://github.com",
    demo: "#"
  },
  {
    title: "Personal Portfolio Website",
    description: "A responsive portfolio featuring interactive media shelves, dark mode theme design, and lightbox photo gallery.",
    tags: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com",
    demo: "#"
  },
  {
    title: "Student Task & Quiz Tracker",
    description: "A lightweight web dashboard for IT students to organize assignments, track course deadlines, and calculate target GPAs.",
    tags: ["JavaScript", "UI Design", "Local Storage"],
    repo: "https://github.com",
    demo: "#"
  }
];

const photography = [
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg"
];

/* =====================
   RENDERERS
   ===================== */
function renderMediaCards(arr, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = arr.map(item => `
    <div class="media-card">
      <div class="media-card-poster">
        <img src="${item.cover}" alt="${item.title}" loading="lazy">
        <div class="media-card-overlay">
          <p class="media-card-note">${item.note}</p>
        </div>
      </div>
      <div class="media-card-body">
        <div class="media-card-title">${item.title}</div>
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const el = document.getElementById('projects-grid');
  if (!el) return;
  el.innerHTML = projects.map(p => `
    <div class="project-card">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tag-group">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${p.repo}" class="btn btn-ghost" target="_blank">${gitSVG} Repo</a>
        <a href="${p.demo}" class="btn btn-primary" target="_blank">${demoSVG} Live</a>
      </div>
    </div>
  `).join('');
}

function renderMusic() {
  const el = document.getElementById('music-container');
  if (!el) return;
  el.innerHTML = music.map((a, i) => `
    <div class="artist-card" id="artist-${i}">
      <div class="artist-trigger"
        role="button" tabindex="0" aria-expanded="false"
        onclick="toggleArtist(${i})"
        onkeydown="if(event.key==='Enter'||event.key===' ')toggleArtist(${i})">
        <div class="artist-cover-wrap">
          <img src="${a.cover}" alt="${a.artist}" loading="lazy">
          <div class="artist-cover-overlay"></div>
        </div>
        <div class="artist-info">
          <div class="artist-name">${a.artist}</div>
          <div class="artist-sub">${a.tracks.length} tracks</div>
        </div>
        ${chevronSVG}
      </div>
      <div class="tracklist-panel">
        <ol class="tracklist">
          ${a.tracks.map((t, ti) => `
            <li>
              <span class="track-num">${ti + 1}</span>
              <span class="track-name ${t.highlight ? 'highlight' : ''}">${t.title}</span>
              ${musicSVG}
            </li>
          `).join('')}
        </ol>
      </div>
    </div>
  `).join('');
}

function toggleArtist(idx) {
  const card = document.getElementById(`artist-${idx}`);
  const isOpen = card.classList.contains('open');
  document.querySelectorAll('.artist-card.open').forEach(c => {
    c.classList.remove('open');
    c.querySelector('.artist-trigger').setAttribute('aria-expanded', 'false');
  });
  if (!isOpen) {
    card.classList.add('open');
    card.querySelector('.artist-trigger').setAttribute('aria-expanded', 'true');
  }
}

function renderPhotography() {
  const el = document.getElementById('photo-grid');
  if (!el) return;
  el.innerHTML = photography.map((src, i) => `
    <div class="photo-item" onclick="openLightbox('${src}')"
      role="button" tabindex="0" aria-label="Open photo ${i + 1}"
      onkeydown="if(event.key==='Enter')openLightbox('${src}')">
      <img src="${src}" alt="Photo ${i + 1}" loading="lazy">
      <div class="photo-zoom-overlay">
        <div class="zoom-icon">${searchSVG}</div>
      </div>
    </div>
  `).join('');
}

function openLightbox(src) {
  let lb = document.getElementById('lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.className = 'lightbox';
    lb.innerHTML = `
      <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close">${closeSVG}</button>
      <img src="" alt="Full size">
    `;
    lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
    document.body.appendChild(lb);
  }
  lb.querySelector('img').src = src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* =====================
   AUTO-INIT
   ===================== */
document.addEventListener('DOMContentLoaded', () => {
  renderMediaCards(movies, 'movies-grid');
  renderMediaCards(series, 'series-grid');
  renderProjects();
  renderMusic();
  renderPhotography();
});
