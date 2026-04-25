// ============================================================
//  SITE CONTENT — edit this file to update your website text
//  Use **text** to make something bold in paragraphs/bullets
// ============================================================

const CONTENT = {

  // ── HERO ────────────────────────────────────────────────────
  hero: {
    name:    "Ramy Fawaz",
    bio:     "Senior Technical Designer and former Senior Gameplay Engineer at High Moon Studios.",
  },

  // ── EXPERIENCE ──────────────────────────────────────────────
  // Each entry is a shipped game. Copy a block to add a new one.
  experience: [
    {
      game:    "Call of Duty: Black Ops 7",
      image:   "images/bo7-keyart.jpg",
      company: "High Moon Studios",
      role:    "Senior Technical Designer",
      year:    "2025 - 2026",
      sections: [
        {
          title: "Section Title",
          bullets: [
            "Add a key highlight here.",
            "Add another highlight here.",
          ],
          image: null,
        },
        {
          title: "Section Title",
          bullets: [
            "Add a key highlight here.",
            "Add another highlight here.",
          ],
          image: null,
        },
      ],
      tags: ["Technical Design"],
    },
    {
      game:    "Call of Duty: Black Ops 6",
      image:   "images/bo6-keyart.jpg",
      company: "High Moon Studios",
      role:    "Senior Gameplay Engineer / Technical Designer",
      year:    "2024 - 2025",
      sections: [
        {
          title: "Section Title",
          bullets: [
            "Add a key highlight here.",
            "Add another highlight here.",
          ],
          image: null,
        },
        {
          title: "Section Title",
          bullets: [
            "Add a key highlight here.",
            "Add another highlight here.",
          ],
          image: null,
        },
      ],
      tags: ["Gameplay Engineering", "Technical Design"],
    },
    {
      game:    "Call of Duty: Modern Warfare III",
      image:   "images/mw3-keyart.jpg",
      company: "High Moon Studios",
      role:    "Senior Gameplay Engineer",
      year:    "2023 - 2024",
      sections: [
        {
          title: "MWZ / Campaign",
          bullets: [
            "**Modern Warfare Zombies** was a 24-player PvE open-world extraction shooter — a new direction for the franchise requiring new tooling and systems at scale.",
            "Also contributed to campaign missions **\"Frozen Tundra\"** and **\"Trojan Horse\"**.",
          ],
          image: null,
        },
        {
          title: "The Activity Engine",
          bullets: [
            "Built the **Call of Duty Activity Engine** — the content system powering every world activity in MWZ, from roaming armored convoy vehicles to quest-like **Contracts** and Warlord Fortress encounters.",
            "Designed to be **cross-mode and cross-game compatible**, the first activity solution in the franchise built for reuse across multiple Call of Duty titles.",
            "Selected to present the Activity Engine at the **Activision Studio Summit**, sparking franchise-wide discussions about the system's future applications.",
          ],
          image: "images/ramy_studio_summit.jpg",
        },
      ],
      tags: ["Gameplay Engineering", "Open World", "Systems"],
    },
    {
      game:    "Call of Duty: Modern Warfare II",
      image:   "images/mw2-keyart.jpg",
      company: "High Moon Studios",
      role:    "Gameplay Engineer",
      year:    "2022 - 2023",
      sections: [
        {
          title: "Section Title",
          bullets: [
            "Add a key highlight here.",
            "Add another highlight here.",
          ],
          image: null,
        },
        {
          title: "Section Title",
          bullets: [
            "Add a key highlight here.",
            "Add another highlight here.",
          ],
          image: null,
        },
      ],
      tags: ["Gameplay Engineering"],
    },
  ],

  // ── PROJECTS ────────────────────────────────────────────────
  // Add a new project by copying one of the blocks below and filling it in
  projects: [
    {
      title: "Fuzzy2D & Particle Shooter",
      desc:  "Built a custom C++ 2D game engine from scratch, then used it to create a classic shoot-'em-up with particle effects.",
      image: "images/particle_shooter-keyart.png",   
      tags:  ["C++", "Custom Engine", "2D"],
      page:  "projects/fuzzy2d.html",
    },
    {
      title: "Rift Shot",
      desc:  "A first-person shooter with an emphasis on game design fundamentals and original 3D modeling.",
      image: "images/rift_shot-keyart.png",
      tags:  ["FPS", "3D Modeling", "Game Design"],
      page:  "projects/rift-shot.html",
    },
    {
      title: "A Link to the Past Dungeon",
      desc:  "A custom-designed dungeon in the style of The Legend of Zelda: A Link to the Past, complete with puzzles, items, and enemies.",
      image: "images/zelda-keyart.png",
      tags:  ["Level Design", "Puzzle Design", "Zelda-style"],
      page:  "projects/link-to-the-past.html",
    },
    {
      title: "Natural Perfection",
      desc:  "A 4-player local multiplayer shooter designed for couch play.",
      image: "images/natural_perfection-keyart.png",
      tags:  ["Multiplayer", "Local Co-op", "Shooter"],
      page:  "projects/natural-perfection.html",
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
