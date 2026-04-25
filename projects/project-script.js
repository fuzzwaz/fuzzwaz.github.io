function bold(str) {
  return str.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function renderMediaItem(item) {
  if (item.type === 'image') {
    return `<div class="media-item" style="padding:0;overflow:hidden;">
      <img src="${item.src}" alt="${item.alt || ''}" style="width:100%;height:100%;object-fit:cover;" />
    </div>`;
  }
  if (item.type === 'youtube') {
    return `<div class="media-item" style="padding:0;overflow:hidden;">
      <iframe
        src="https://www.youtube.com/embed/${item.videoId}?rel=0"
        style="width:100%;height:100%;border:0;"
        allow="encrypted-media"
        allowfullscreen
        title="Project video">
      </iframe>
    </div>`;
  }
  return `<div class="media-item">coming soon</div>`;
}

function renderProject() {
  const slug = document.body.dataset.slug;
  if (!slug || !PROJECTS_CONTENT[slug]) return;

  const p = PROJECTS_CONTENT[slug];

  document.title = p.title + ' — Ramy Fawaz';

  document.getElementById('proj-title').textContent = p.title;

  document.getElementById('proj-tags').innerHTML =
    p.tags.map(t => `<span>${t}</span>`).join('');

  document.getElementById('proj-main').innerHTML =
    p.sections.map(section => {
      let inner = `<h2>${section.heading}</h2>`;

      if (section.paragraphs && section.paragraphs.length) {
        inner += section.paragraphs.map(para => `<p>${bold(para)}</p>`).join('');
      }
      if (section.bullets && section.bullets.length) {
        inner += '<ul>' + section.bullets.map(b => `<li>${bold(b)}</li>`).join('') + '</ul>';
      }
      if (section.media && section.media.length) {
        inner += '<div class="media-grid">' +
          section.media.map(renderMediaItem).join('') +
          '</div>';
      }

      return `<div class="proj-section">${inner}</div>`;
    }).join('');

  document.querySelector('#sidebar-tech ul').innerHTML =
    p.sidebar.tech.map(t => `<li>${t}</li>`).join('');

  document.querySelector('#sidebar-type ul').innerHTML =
    p.sidebar.type.map(t => `<li>${t}</li>`).join('');

  const links = [];
  if (p.sidebar.youtube) {
    links.push(`<li><a href="${p.sidebar.youtube}" target="_blank" rel="noopener">YouTube Demo</a></li>`);
  }
  if (p.sidebar.github) {
    links.push(`<li><a href="${p.sidebar.github}" target="_blank" rel="noopener">GitHub</a></li>`);
  }
  const linksBlock = document.getElementById('sidebar-links');
  if (links.length) {
    linksBlock.querySelector('ul').innerHTML = links.join('');
  } else {
    linksBlock.style.display = 'none';
  }

  const navResume = document.querySelector('.nav-resume');
  if (navResume && typeof CONTENT !== 'undefined') {
    navResume.href = CONTENT.links.resume;
  }
}

renderProject();
