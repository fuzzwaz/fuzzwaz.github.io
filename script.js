// Converts **text** to <strong>text</strong>
function bold(str) {
  return str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function renderContent() {
  if (!document.getElementById('hero-name')) return;
  const c = CONTENT;

  // ── Hero ──────────────────────────────────────────────────
  const heroIntro   = document.getElementById('hero-intro');
  const heroTagline = document.getElementById('hero-tagline');
  if (heroIntro)   heroIntro.remove();
  if (heroTagline) heroTagline.remove();
  document.getElementById('hero-name').textContent = c.hero.name;
  document.getElementById('hero-bio').textContent  = c.hero.bio;

  // ── Experience ────────────────────────────────────────────
  document.getElementById('experience-list').innerHTML =
    c.experience.map(job => `
      <div class="experience-card">
        <div class="exp-keyart">
          ${job.image
            ? `<img src="${job.image}" alt="${job.game} key art" />`
            : `<div class="exp-keyart-placeholder"><span>${job.game}</span></div>`
          }
        </div>
        <div class="exp-body">
          <div class="exp-header">
            <div>
              <h3 class="exp-game">${job.game}</h3>
              <p class="exp-role">${job.role} <span class="exp-company">· ${job.company}</span></p>
            </div>
            <div class="exp-meta">
              <span class="exp-date">${job.year}</span>
              <button class="exp-toggle" aria-expanded="false" aria-label="Toggle details">▾</button>
            </div>
          </div>
          <div class="exp-details">
            ${job.sections
              ? job.sections.map(s => `
                  <div class="exp-section">
                    <div class="exp-section-head">
                      <span class="exp-section-title">${s.title}</span>
                    </div>
                    <div class="exp-section-body${s.image ? '' : ' no-image'}">
                      <ul>
                        ${s.bullets.map(b => `<li>${bold(b)}</li>`).join('')}
                      </ul>
                      ${s.image ? `
                      <div class="exp-section-image">
                        <img src="${s.image}" alt="${s.title}" />
                      </div>` : ''}
                    </div>
                  </div>
                `).join('')
              : `<ul>${job.bullets.map(b => `<li>${bold(b)}</li>`).join('')}</ul>`
            }
          </div>
          <div class="exp-tags">
            ${job.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

  document.querySelectorAll('.experience-card').forEach((card, i) => {
    const palette = c.experience[i].glitchColors || GLITCH_COLORS;
    card.addEventListener('mouseenter', () => { activeGlitchColors = palette; });
    card.addEventListener('mouseleave', () => { activeGlitchColors = GLITCH_COLORS; });
    card.addEventListener('click', e => {
      if (e.target.closest('.exp-section-image')) return;
      burstGlitch(e.clientX, e.clientY);
      const expanded = card.classList.toggle('expanded');
      card.querySelector('.exp-toggle').setAttribute('aria-expanded', expanded);
    });
  });

  // ── Projects ──────────────────────────────────────────────
  document.getElementById('projects-grid').innerHTML =
    c.projects.map(p => `
      <a class="project-card" href="${p.page}">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-card-image">
          ${p.image
            ? `<img src="${p.image}" alt="${p.title}" />`
            : ``
          }
        </div>
        <div class="project-tags">
          ${p.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        <span class="project-link">View project →</span>
      </a>
    `).join('');

  // ── Contact & nav links ───────────────────────────────────
  document.getElementById('contact-email').href        = `mailto:${c.links.email}`;
  document.getElementById('contact-linkedin').href     = c.links.linkedin;
  document.getElementById('contact-youtube').href      = c.links.youtube;
  document.getElementById('contact-resume').href       = c.links.resume;
  document.getElementById('nav-resume').href           = c.links.resume;
}

// ── Navbar scroll effect ──────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Mobile nav toggle ─────────────────────────────────────
const toggle   = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

// ── Cursor glitch trail ───────────────────────────────────
const GLITCH_EXCLUDED = 'a, button, img, video, iframe, nav, footer, ' +
  '.project-card, .exp-section-image, ' +
  '.proj-sidebar, .sidebar-block, .media-item, input, textarea';

const GLITCH_COLORS  = ['#2563eb', '#60efff', '#ff2d78', '#ffee00', '#00ff9f', '#ffffff', '#a855f7'];
let   activeGlitchColors = GLITCH_COLORS;

let glitchLastTime = 0;
let glitchLastX    = 0;
let glitchLastY    = 0;

const GLITCH_MIN_SPEED = 0.3; // px/ms — below this, nothing spawns
const GLITCH_MAX_SPEED = 7;   // px/ms — above this, full effect

function spawnSinglePixel(x, y, speedT, colorOverride) {
  const el     = document.createElement('div');
  el.className = 'glitch-pixel';
  const w      = Math.random() * 5 + 2;
  const h      = Math.random() * 5 + 2;
  const color  = colorOverride || activeGlitchColors[Math.floor(Math.random() * activeGlitchColors.length)];
  const ox     = (Math.random() - 0.5) * 16;
  const oy     = (Math.random() - 0.5) * 16;
  const drift  = 10 + speedT * 40;
  const dx     = (Math.random() - 0.5) * drift;
  const dy     = (Math.random() - 0.5) * drift;
  const dur    = Math.random() * 200 + 150;
  el.style.cssText = `left:${x + ox}px;top:${y + oy}px;width:${w}px;height:${h}px;` +
    `background:${color};--dx:${dx}px;--dy:${dy}px;animation-duration:${dur}ms;`;
  document.body.appendChild(el);
  el.addEventListener('animationend', () => el.remove(), { once: true });
}

function burstGlitch(x, y) {
  const count = 18;
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
    const dist  = Math.random() * 55 + 25;
    const el    = document.createElement('div');
    el.className = 'glitch-pixel glitch-burst';
    const size  = Math.random() * 5 + 2;
    const color = activeGlitchColors[Math.floor(Math.random() * activeGlitchColors.length)];
    const dur   = Math.random() * 180 + 220;
    el.style.cssText =
      `left:${x}px;top:${y}px;width:${size}px;height:${size}px;` +
      `background:${color};--dx:${Math.cos(angle) * dist}px;--dy:${Math.sin(angle) * dist}px;` +
      `animation-duration:${dur}ms;`;
    document.body.appendChild(el);
    el.addEventListener('animationend', () => el.remove(), { once: true });
  }
}

function spawnGlitchPixel(x, y, speedT) {
  if (Math.random() < 0.25) {
    const spread = 4;
    const p = activeGlitchColors;
    spawnSinglePixel(x - spread, y,          speedT, p[Math.floor(Math.random() * p.length)]);
    spawnSinglePixel(x,          y + spread, speedT, p[Math.floor(Math.random() * p.length)]);
    spawnSinglePixel(x + spread, y,          speedT, p[Math.floor(Math.random() * p.length)]);
  } else {
    spawnSinglePixel(x, y, speedT);
  }
}

document.addEventListener('mousemove', e => {
  if (e.target.closest(GLITCH_EXCLUDED)) return;
  if (e.target.closest('.experience-card.expanded')) return;

  const now  = Date.now();
  const dt   = now - glitchLastTime;
  if (dt < 20) return;

  const dist  = Math.hypot(e.clientX - glitchLastX, e.clientY - glitchLastY);
  const speed = dist / dt;

  glitchLastTime = now;
  glitchLastX    = e.clientX;
  glitchLastY    = e.clientY;

  if (speed < GLITCH_MIN_SPEED) return;

  const t     = Math.min((speed - GLITCH_MIN_SPEED) / (GLITCH_MAX_SPEED - GLITCH_MIN_SPEED), 1);
  const count = Math.ceil(t * 3);
  for (let i = 0; i < count; i++) spawnGlitchPixel(e.clientX, e.clientY, t);
});

// ── Lightbox ──────────────────────────────────────────────
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

document.addEventListener('click', e => {
  const img = e.target.closest('.exp-section-image img');
  if (img) {
    e.stopPropagation();
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    return;
  }
  if (lightbox.classList.contains('open')) {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
  }
});

// ── Run ───────────────────────────────────────────────────
renderContent();
