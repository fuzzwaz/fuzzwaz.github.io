// ============================================================
//  SITE CONTENT — edit this file to update your website text
//  Use **text** to make something bold in paragraphs/bullets
// ============================================================

const CONTENT = {

  // ── HERO ────────────────────────────────────────────────────
  hero: {
    name:    "Ramy Fawaz",
    bio:     "Senior Technical Designer at High Moon Studios, crafting systems and experiences for the Call of Duty franchise.",
  },

  // ── ABOUT ───────────────────────────────────────────────────
  about: {
    // Each string in this array becomes one paragraph
    paragraphs: [
      "I'm a technical designer passionate about building the systems and mechanics that make games feel alive. Currently at **High Moon Studios**, I contribute to the Call of Duty franchise — most recently shipping Modern Warfare III, where I created the content engine powering all world activities in Modern Warfare Zombies, an online multiplayer open-world extraction shooter.",
      "Before game development, I worked at **TechSmith** as both a Software Engineer and Product Owner on Snagit, where I developed features and helped define product roadmaps.",
      "Here are a few areas I work across:",
    ],
    skills: [
      "Engine Programming",
      "Game Systems Design",
      "3D Modeling",
      "Gameplay Analysis",
      "Team Collaboration",
      "C++ / Unreal Engine",
    ],
  },

  // ── EXPERIENCE ──────────────────────────────────────────────
  // Add a new job by copying one of the blocks below and filling it in
  experience: [
    {
      title:    "Senior Technical Designer",
      company:  "High Moon Studios",
      location: "Carlsbad, CA",
      period:   "2022 – Present",
      bullets: [
        "Shipped **Call of Duty: Modern Warfare III** (2023) — built the content engine powering all world activities in Modern Warfare Zombies, an open-world extraction shooter.",
        "Contributed to **Call of Duty: Modern Warfare II** (2022).",
      ],
      tags: ["C++", "Unreal Engine", "Technical Design", "Open World"],
    },
    {
      title:    "Software Engineer & Product Owner",
      company:  "TechSmith",
      location: "East Lansing, MI",
      period:   "Prior to 2022",
      bullets: [
        "Developed features for **Snagit**, a widely-used screen capture and recording application.",
        "Defined product roadmaps and collaborated cross-functionally as Product Owner.",
      ],
      tags: ["C#", "Product Management", "Software Engineering"],
    },
  ],

  // ── PROJECTS ────────────────────────────────────────────────
  // Add a new project by copying one of the blocks below and filling it in
  projects: [
    {
      title: "Fuzzy2D & Particle Shooter",
      desc:  "Built a custom C++ 2D game engine from scratch, then used it to create a classic shoot-'em-up with particle effects.",
      tags:  ["C++", "Custom Engine", "2D"],
      page:  "projects/fuzzy2d.html",
    },
    {
      title: "Rift Shot",
      desc:  "A first-person shooter with an emphasis on game design fundamentals and original 3D modeling.",
      tags:  ["FPS", "3D Modeling", "Game Design"],
      page:  "projects/rift-shot.html",
    },
    {
      title: "A Link to the Past Dungeon",
      desc:  "A custom-designed dungeon in the style of The Legend of Zelda: A Link to the Past, complete with puzzles, items, and enemies.",
      tags:  ["Level Design", "Puzzle Design", "Zelda-style"],
      page:  "projects/link-to-the-past.html",
    },
    {
      title: "Natural Perfection",
      desc:  "A 4-player local multiplayer shooter designed for couch play.",
      tags:  ["Multiplayer", "Local Co-op", "Shooter"],
      page:  "projects/natural-perfection.html",
    },
    {
      title: "Friends 'til the End",
      desc:  "A split-screen battle royale featuring hunting and fishing mechanics layered on top of a core survival loop.",
      tags:  ["Battle Royale", "Split-screen", "Survival"],
      page:  "projects/friends-til-the-end.html",
    },
    {
      title: "Advanced Directed Study",
      desc:  "A curated collection of Unreal Engine demonstrations built during an advanced independent study.",
      tags:  ["Unreal Engine", "Prototyping", "Systems"],
      page:  "projects/advanced-directed-study.html",
    },
  ],

  // ── LINKS ───────────────────────────────────────────────────
  links: {
    email:    "email@ramyfawaz.com",
    linkedin: "https://www.linkedin.com/in/ramy-fawaz-24388452/",
    youtube:  "https://www.youtube.com/@FreelanceNintendo",
    resume:   "https://drive.google.com/file/d/138Vf1Peng7s4vsOV7RtXqSkWrj_r9tXb/view?usp=sharing",
  },

};
