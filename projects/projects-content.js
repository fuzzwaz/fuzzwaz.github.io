// ============================================================
//  PROJECT PAGE CONTENT — edit this file to update project pages
//
//  Structure per project:
//    title    — page title (string)
//    tags     — array of tag strings
//    sections — array of section objects, each with:
//                 heading    — section heading (string)
//                 paragraphs — array of paragraph strings (optional)
//                 bullets    — array of bullet strings (optional)
//                 media      — array of media items (optional):
//                   { type: "image",   src: "../images/file.jpg", alt: "description" }
//                   { type: "youtube", videoId: "XXXXXXXXXXX" }
//                   { type: "placeholder" }
//    sidebar  — object with:
//                 tech    — array of strings
//                 type    — array of strings
//                 youtube — URL string or null
//                 github  — URL string or null
//
//  Use **text** to bold anything in paragraphs or bullets.
// ============================================================

const PROJECTS_CONTENT = {

  "fuzzy2d": {
    title: "Fuzzy2D & Particle Shooter",
    tags: ["C++", "Custom Engine", "2D"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Fuzzy2D is a custom 2D game engine built entirely from scratch in **C++**. The goal was to understand game engine fundamentals at a low level — rendering, input handling, game loops, and entity management — by building each system without relying on an existing engine or framework.",
          "On top of Fuzzy2D, a classic shoot-'em-up was built to validate the engine and showcase its particle system capabilities. The particle shooter served as both a stress test and a playable demo.",
        ],
      },
      {
        heading: "Key Features",
        bullets: [
          "Custom C++ 2D rendering pipeline",
          "Entity component architecture",
          "Particle system with configurable emitters",
          "Fixed-timestep game loop",
          "Input handling system",
        ],
      },
      {
        heading: "Media",
        media: [
          { type: "placeholder" },
          { type: "placeholder" },
        ],
      },
    ],
    sidebar: {
      tech: ["C++", "Custom Engine (Fuzzy2D)"],
      type: ["Personal Project", "Engine Programming"],
      youtube: null,
      github: null,
    },
  },

  "rift-shot": {
    title: "Rift Shot",
    tags: ["FPS", "3D Modeling", "Game Design", "Level Design"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Rift Shot is a first-person shooter that puts game design fundamentals and original 3D art at the forefront. Rather than relying on placeholder assets, every model in the game was created specifically for this project.",
          "The project was an opportunity to explore the full pipeline from asset creation to gameplay feel — examining how level geometry, weapon feedback, and movement mechanics come together to create a satisfying FPS experience.",
        ],
      },
      {
        heading: "Key Features",
        bullets: [
          "Original 3D models and environments",
          "First-person movement and shooting mechanics",
          "Custom level design",
        ],
      },
      {
        heading: "Media",
        media: [
          { type: "placeholder" },
          { type: "placeholder" },
        ],
      },
    ],
    sidebar: {
      tech: ["3D Modeling"],
      type: ["Personal Project", "Game Design"],
      youtube: null,
      github: null,
    },
  },

  "link-to-the-past": {
    title: "A Link to the Past Dungeon",
    tags: ["Level Design", "Puzzle Design", "Top-down", "Zelda-style"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "A custom dungeon designed in the style of The Legend of Zelda: A Link to the Past. The project was a deep dive into classic dungeon design — how Nintendo structured exploration, gated progression behind items, and layered puzzle complexity across a single connected space.",
          "The dungeon features original puzzles, custom enemy encounters, and key items that unlock new areas, all built within the constraints of the ALttP design language.",
        ],
      },
      {
        heading: "Design Highlights",
        bullets: [
          "Multi-room dungeon with interconnected layout",
          "Item-gated progression in the Zelda tradition",
          "Custom puzzle design",
          "Enemy placement and encounter design",
          "Boss encounter",
        ],
      },
      {
        heading: "Media",
        media: [
          { type: "placeholder" },
          { type: "placeholder" },
        ],
      },
    ],
    sidebar: {
      tech: [],
      type: ["Personal Project", "Level Design"],
      youtube: null,
      github: null,
    },
  },

  "natural-perfection": {
    title: "Natural Perfection",
    tags: ["Multiplayer", "Local Co-op", "Shooter", "4-Player"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Natural Perfection is a 4-player local multiplayer shooter designed from the ground up for couch play. The project focused on the feel and balance of same-screen competitive gameplay — readable visuals, fair mechanics, and the kind of moment-to-moment tension that keeps friends coming back.",
        ],
      },
      {
        heading: "Key Features",
        bullets: [
          "4-player simultaneous local multiplayer",
          "Competitive shooter mechanics",
        ],
      },
      {
        heading: "Media",
        media: [
          { type: "placeholder" },
          { type: "placeholder" },
        ],
      },
    ],
    sidebar: {
      tech: [],
      type: ["Personal Project", "Multiplayer Design"],
      youtube: null,
      github: null,
    },
  },

  "friends-til-the-end": {
    title: "Friends 'til the End",
    tags: ["Battle Royale", "Split-screen", "Survival", "Hunting"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Friends 'til the End is a split-screen battle royale that layers hunting and fishing mechanics on top of a last-player-standing survival loop. Players share the same screen while competing to survive — gathering resources, managing loadouts, and eliminating opponents.",
          "The hunting and fishing systems add a resource economy dimension to the genre, rewarding players who balance aggression with patience.",
        ],
      },
      {
        heading: "Key Features",
        bullets: [
          "Split-screen battle royale",
          "Hunting system with animal AI",
          "Fishing mechanics and resource loop",
          "Inventory and loadout management",
        ],
      },
      {
        heading: "Media",
        media: [
          { type: "placeholder" },
          { type: "placeholder" },
        ],
      },
    ],
    sidebar: {
      tech: [],
      type: ["Personal Project", "Systems Design"],
      youtube: null,
      github: null,
    },
  },

  "advanced-directed-study": {
    title: "Advanced Directed Study",
    tags: ["Unreal Engine", "Prototyping", "Systems", "Technical Design"],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "A collection of Unreal Engine demonstrations produced during an advanced independent study. Each piece in the collection targeted a specific engine feature, gameplay system, or technical design concept — treated as focused explorations rather than full shipped games.",
          "The study was an opportunity to go deep on Unreal Engine's toolset and apply it to a range of technical design problems.",
        ],
      },
      {
        heading: "Demonstrations",
        bullets: [],
      },
      {
        heading: "Media",
        media: [
          { type: "placeholder" },
          { type: "placeholder" },
          { type: "placeholder" },
        ],
      },
    ],
    sidebar: {
      tech: ["Unreal Engine", "Blueprints", "C++"],
      type: ["Academic Project", "Technical Design"],
      youtube: null,
      github: null,
    },
  },

};
