# Ramy Fawaz — Portfolio Site

## Instructions for Claude
- Keep this file up to date as the site evolves — update it whenever structure, design decisions, or pending tasks change
- When a pending task is completed, check it off or remove it
- When a new decision is made (design, tech, content), add it to the relevant section
- Never push to GitHub without Ramy's explicit confirmation

## Who this is for
Ramy Fawaz, Senior Technical Designer (previously Senior Gameplay Engineer) at High Moon Studios.
He works on the Call of Duty franchise. This is his personal portfolio site.

## Site overview
- **Live URL:** https://fuzzwaz.github.io (temporary — see Domain section)
- **Target URL:** https://ramyfawaz.com
- **GitHub repo:** https://github.com/fuzzwaz/fuzzwaz.github.io
- **Stack:** Pure HTML + CSS + JS. No build tools, no frameworks, no npm. Keep it that way.
- **Hosted on:** GitHub Pages (branch: main, root folder)

---

## File structure

```
fuzzwaz.github.io/
├── index.html          — page structure only, no inline content
├── content.js          — ALL editable text lives here (edit this, not index.html)
├── script.js           — reads content.js and populates the DOM
├── style.css           — all styles
├── CNAME               — contains "ramyfawaz.com" for custom domain
├── images/
│   ├── bo7-keyart.jpg
│   ├── bo6-keyart.jpg
│   └── mw3-keyart.jpg
└── projects/
    ├── fuzzy2d.html
    ├── rift-shot.html
    ├── link-to-the-past.html
    ├── natural-perfection.html
    ├── friends-til-the-end.html
    └── advanced-directed-study.html
```

---

## How to edit content

**All site text lives in `content.js`.** Edit that file and push — never touch `index.html` for text changes.

- Use `**text**` to make something bold in paragraphs and bullets
- To add a new experience entry, copy an existing block in the `experience` array
- To add a new project, copy an existing block in the `projects` array
- Images go in the `images/` folder and are referenced by path in `content.js`

### Pushing changes
Ramy prefers to be **asked before every push** — never push without explicit confirmation.

```bash
cd /c/Users/fuzzw/fuzzwaz.github.io
git add .
git commit -m "your message"
git push
```

---

## Page sections (in order)

1. **Hero** — name, bio, YouTube video embed (autoplay, muted, looping)
2. **Work Experience (01)** — game-focused cards with key art on the left
3. **Projects (02)** — grid of personal project cards, each links to a detail page
4. **Contact (03)** — email, LinkedIn, YouTube, Resume

The **About Me section was intentionally removed.**

---

## Design decisions

- **Theme:** Dark (`#0a0a0f` bg, `#64ffda` teal accent, `#ccd6f6` text)
- **Font:** Space Grotesk (Google Fonts)
- **Hero layout:** 1/3 text left, 2/3 YouTube video right
- **Experience cards:** key art image on the left (180px wide), text content on the right
- **No build tools** — Ramy wants minimal tech overhead. Don't introduce npm, bundlers, or SSGs.
- **No CMS** — decided against Decap CMS for now. content.js is the editing interface.

---

## Current YouTube embed (hero video)
Video ID: `9mqdk6py-Ig` (A Link to the Past dungeon playthrough — placeholder until real game reel is ready)

To swap: update the video ID in the two places it appears in `index.html`.

---

## Things still pending / to do

- [ ] Fill in real bullet points for **Black Ops 7** and **Black Ops 6** in `content.js`
- [ ] Replace hero YouTube video with actual game reel when ready
- [ ] Fill in project detail pages (`projects/*.html`) with real descriptions, screenshots, and links
- [ ] **DNS transfer:** point `ramyfawaz.com` from Wix to GitHub Pages (see below)

---

## Domain transfer (when ready)

Domain `ramyfawaz.com` is registered at **GoDaddy**, currently pointing to **Wix**.
The `CNAME` file in the repo is already set up with `ramyfawaz.com`.

Steps to complete the transfer:
1. In GitHub repo Settings → Pages → add custom domain `ramyfawaz.com`
2. In GoDaddy DNS, remove existing A records and add these four:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. Add a CNAME record: `www` → `fuzzwaz.github.io`
4. Disconnect the domain from Wix
5. GitHub will provision the SSL certificate automatically (~24 hours)

---

## Ramy's preferences

- Always ask before pushing to GitHub
- Minimal tech overhead — keep the stack simple
- Dark, modern game-dev aesthetic
- Prefers concise explanations, not lengthy walkthroughs
- Open to design suggestions but has final say on look and feel
