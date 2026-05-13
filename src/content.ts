// =============================================================================
// SITE CONTENT
// =============================================================================
// This is the only file you need to edit to change text on the site.
// After saving, the site will rebuild and deploy automatically.
//
// Tips:
//   - Keep the quotes around every piece of text.
//   - To add an item to a list, copy a line and change the words.
//   - To remove an item, delete the whole line.
//   - Don't change the keys on the left side of the colon (e.g. "title:").
// =============================================================================

export const content = {
  // -- Browser tab + search engine preview ----------------------------------
  meta: {
    title: "Dana Moldovan | Product Designer",
    description:
      "A product designer who creates structure from chaos. Explore how I think, not just what I make.",
  },

  // -- Top navigation -------------------------------------------------------
  // The "href" must point to a section that exists on the page (matching id).
  header: {
    logoInitials: "DM",
    logoText: "Dana Moldovan",
    logoSubtext: "Product Designer",
    nav: [
      { label: "Work", href: "/#work" },
      { label: "Play", href: "/#play" },
      { label: "Connect", href: "/#connect" },
    ],
  },

  // -- ABOUT ----------------------------------------------------------------
  // The tagline shown at the top of the page.
  about: {
    title: "5+y designing products | EN/DE | based in Romania",
  },

  // -- WORK -----------------------------------------------------------------
  // The "All work" pill is added automatically.
  // Each item's "category" must match one of the names in "categories".
  // "description" appears in three places: the card on the home page, the
  //   subtitle on the project page, and the page's <meta description> for
  //   search engines. Keep it short and self-contained.
  // For "image": leave as "" to show a placeholder card with the title inside.
  //              Set to e.g. "/work/my-project.png" to show an image.
  //              (Drop the image file into public/work/.)
  //              Use a 4:3 aspect ratio (e.g. 1600×1200 or 1440×1080) — the
  //              card crops to fit, so other ratios will lose top/bottom edges.
  // "slug" becomes the URL of the project page: /work/<slug>.
  //        Use lowercase letters, numbers, and hyphens only.
  // "problem" and "approach" are short bullet lists shown on the project page.
  //          Each entry should be one sentence.
  // Anything starting with "[FILLER]" is placeholder copy — replace it.
  work: {
    title: "Work",
    categories: ["SaaS", "Agentic AI", "Product-Led Growth (PLG)"],
    items: [
      {
        title: "Page Redesign",
        slug: "page-redesign",
        category: "SaaS",
        description:
          "Redesigned a complex company page into a more intuitive structure that aims to reduce time-to-insight by 40%.",
        image: "/work/company_page.png",
        problem: [
          "Users were unable to locate the metrics that mattered to them.",
          "No clear separation between static data and actions, competed for attention with no visual hierarchy.",
        ],
        approach: [
          "Mapped JTBD and the five most critical metrics across the page.",
          "Designed progressive disclosure patterns to reduce scroll-depth.",
          "Created a modular system to support different user needs and future growth.",
        ],
      },
      {
        title: "Conversational Workflows",
        slug: "conversational-workflows",
        category: "Agentic AI",
        description:
        "Designed AI-driven workflows where conversational interfaces trigger structured actions.",

        image: "/work/chat_agentic.png",

        problem: [
        "AI interactions were treated like isolated chats instead of connected workflows.",
        "Users could ask questions, but complex multi-step actions lacked visibility, control, and structure.",
        ],

        approach: [
        "Mapped conversational flows as task-oriented systems rather than standalone chat experiences.",
        "Designed configurable interaction patterns for agent behaviors, approvals, memory, and execution states.",
        ],
      },
      {
        title: "Growth & Activation Redesign",
        slug: "product-led-growth",
        category: "Product-Led Growth (PLG)",
        description:
        "From sales-led activation and onboarding toward a product-led approach by reducing friction and enabling self-serve flows.",

        image: "/work/flow_plg.png",

        problem: [
        "User activation depended almost entirely on SDR-led onboarding.",
        "New users struggled to reach value independently, creating friction between signup and product adoption.",
        "Growth relied heavily on sales capacity, while onboarding and activation inside the product remained underdeveloped.",
        ],

        approach: [
        "Mapped the activation journey to identify where users depended on sales intervention to progress.",
        "Designed self-serve onboarding flows focused on reducing friction and accelerating time-to-value.",
        ],
      },
    ],
  },

  // -- PLAY: Design Judgment game ------------------------------------------
  // For each question, "correctAnswer" must be exactly "A" or "B" (capitalised).
  play: {
    title: "Design Judgment",
    description: "Up for a game? These are some common product challenges I care about.",
    questions: [
      {
        question: "Which approach works better for an empty state?",
        optionA: {
          label: "Decorative",
          description:
            "Illustration-heavy with minimal text and a generic 'Get started' button",
        },
        optionB: {
          label: "Educational",
          description:
            "Context-first explaining why it's empty and specific next action",
        },
        correctAnswer: "B",
        explanation:
          "Empty states are opportunities to guide users. Educational approaches reduce confusion by explaining context before asking for action. Users need to understand 'why' before they commit to 'what'.",
      },
      {
        question: "For a complex data table, which filtering pattern is better?",
        optionA: {
          label: "Inline filters",
          description:
            "Filters directly above the table, always visible and immediately applicable",
        },
        optionB: {
          label: "Side panel",
          description:
            "Collapsible filter panel on the side with 'Apply' button",
        },
        correctAnswer: "A",
        explanation:
          "For frequently used filters, inline placement reduces cognitive load and interaction cost. Side panels work for occasional, complex filtering but add friction for everyday use. Context matters—this is about matching interaction frequency to UI prominence.",
      },
      {
        question:
          "When showing AI-generated content, which approach builds more trust?",
        optionA: {
          label: "Confident",
          description:
            "Present AI output as final, polished content ready to use",
        },
        optionB: {
          label: "Transparent",
          description:
            "Show confidence levels, sources, and easy edit affordances",
        },
        correctAnswer: "B",
        explanation:
          "AI trust is built through transparency, not false confidence. Users who understand limitations become collaborators. Hiding uncertainty leads to frustration when AI makes mistakes, and it might.",
      },
    ],
  },

  // -- CONNECT --------------------------------------------------------------
  // Replace each "href" with the real URL. Email uses "mailto:your@email".
  connect: {
    title: "Looking for a designer who brings structure, not just pixels?",
    description:
      "I'm particularly interested in startups and scale-ups where design thinking can shape product direction, not just execute on it.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/dana-moldovan",
        icon: "in",
      },
    ],
  },

  // -- Footer ---------------------------------------------------------------
  footer: {
    text: "Designed with intention. Built with care.",
  },
} as const

// Slug guard — runs when this module is imported (build time).
// Catches typos before they produce broken URLs in production.
const SLUG_PATTERN = /^[a-z0-9-]+$/
for (const item of content.work.items) {
  if (!SLUG_PATTERN.test(item.slug)) {
    throw new Error(
      `Invalid slug "${item.slug}" on work item "${item.title}". ` +
        `Use lowercase letters, numbers, and hyphens only.`,
    )
  }
}
