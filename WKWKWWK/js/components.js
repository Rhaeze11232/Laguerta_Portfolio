/* =====================
   SHARED COMPONENTS — KaitoVault style
   ===================== */

const chevronSVG = `<svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
const musicSVG = `<svg class="track-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`;
const searchSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
const closeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
const arrowSVG = `<svg class="hub-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
const gitSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><line x1="12" y1="12" x2="12" y2="15"/></svg>`;
const demoSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
const instagramSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
const facebookSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;
const githubSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`;
const backSVG = `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`;

const headerHTML = `
<header>
  <a href="index.html" class="logo">J.L.</a>
  <nav>
    <ul class="nav-links">
      <li><a href="index.html"    id="nav-home">Home</a></li>
      <li><a href="hobbies.html"  id="nav-hobbies">Hobbies</a></li>
      <li><a href="projects.html" id="nav-projects">Projects</a></li>
      <li><a href="feedback.html" id="nav-feedback">Feedback</a></li>
    </ul>
  </nav>
</header>`;

const footerHTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="projects.html">Work &amp; Projects</a></li>
          <li><a href="hobbies.html">Hobbies</a></li>
          <li><a href="feedback.html">Feedback</a></li>
          <li><a href="index.html">About</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Socials</h4>
        <ul>
          <li><a href="https://www.instagram.com/kitooz_in/?hl=en" target="_blank" rel="noopener">${instagramSVG} Instagram</a></li>
          <li><a href="https://www.facebook.com/jstnlaguerta/" target="_blank" rel="noopener">${facebookSVG} Facebook</a></li>
          <li><a href="https://github.com/Rhaeze11232" target="_blank" rel="noopener">${githubSVG} GitHub</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 Justine Laguerta.</span>
      <span style="color:var(--text-muted);font-size:0.8rem;">Built with intention.</span>
    </div>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  const path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === 'index.html' || path === '') document.getElementById('nav-home')?.classList.add('active');
  else if (path === 'projects.html') document.getElementById('nav-projects')?.classList.add('active');
  else if (path === 'feedback.html') document.getElementById('nav-feedback')?.classList.add('active');
  else document.getElementById('nav-hobbies')?.classList.add('active');
});
