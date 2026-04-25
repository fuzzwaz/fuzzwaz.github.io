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
          <ul class="exp-details">
            ${job.bullets.map(b => `<li>${bold(b)}</li>`).join('')}
          </ul>
          <div class="exp-tags">
            ${job.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

  document.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('click', () => {
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

// ── Run ───────────────────────────────────────────────────
renderContent();
