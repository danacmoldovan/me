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
    title: "Dana Moldovan | Product Designer | Thinking Systems Over Case Studies",
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
      { label: "Thinking", href: "#aiWorkflow" },
      { label: "Connect", href: "#contact" },
    ],
  },

  // -- Hero (top of the page) ----------------------------------------------
  hero: {
    titleLine1: "Dana's space",
    titleLine2: "Thoughts in structure",
    description:
      "A product designer navigating complexity, using systems thinking and AI to explore, validate and shape product direction.",
  },

  // -- Three stat cards under the hero -------------------------------------
  stats: [
    { title: "SaaS", description: "Data-heavy platforms" },
    { title: "Agentic AI", description: "Trustworthy AI interactions" },
    { title: "PLG mindset", description: "Growth through product experience" },
  ],

  // -- "Chaos to Clarity" card ---------------------------------------------
  chaosToClarity: {
    eyebrow: "Creating Structure from Chaos",
    footerNote: "Evolving products need frameworks, not just features.",
    chaosItems: [
      "no product vision",
      "undefined metrics",
      "vague requirements",
      "conflicting goals",
      "unclear ownership",
      "random decisions",
      "no prioritization",
      "reactive work",
      "stakeholder noise",
      "design by opinion",
      "overpromising",
      "last-minute changes",
      "inconsistent UX",
      "feature dumping",
      "fragmented flows",
      "copy chaos",
      "firefighting",
    ],
    clarityCategories: [
      {
        name: "Strategy & Vision",
        items: [
          "direction starts to exist",
          "success gets defined",
          "requirements become explicit",
          "goals get aligned",
        ],
      },
      {
        name: "Ownership & Process",
        items: [
          "ownership becomes clear enough",
          "decisions have a driver",
          "priorities become visible",
          "we plan ahead",
        ],
      },
      {
        name: "Communication",
        items: [
          "stakeholders align",
          "decisions are explained",
          "expectations get managed",
          "changes follow a process",
        ],
      },
      {
        name: "UX & Execution",
        items: [
          "patterns start to repeat",
          "features follow a direction",
          "flows connect end-to-end",
          "content becomes intentional",
          "less firefighting, more focus",
        ],
      },
    ],
  },

  // -- "AI Workflow" section -----------------------------------------------
  aiWorkflow: {
    eyebrow: "How I Work",
    title: "Design is no longer linear",
    oldProcess: {
      label: "The old process",
      steps: ["Research", "Design", "Validate", "Ship"],
      caption: "Step-by-step. Sequential.",
    },
    newProcess: {
      label: "Today",
      description:
        "Fast loops — defining, generating, and validating continuously. AI breaks the linear model.",
    },
    workflowLabel: "How I work with AI",
    workflowSteps: [
      {
        label: "I define the direction",
        description: "Flows, structure, product logic.",
      },
      {
        label: "AI explores",
        description: "Layouts, patterns, variations — fast.",
      },
      {
        label: "We iterate together",
        description:
          "Product and engineering are involved early. We validate direction before it's polished.",
      },
      {
        label: "I refine",
        description: "Clarity, consistency, interaction details.",
      },
      {
        label: "We build",
        description:
          "With fewer surprises — most decisions are already made.",
      },
    ],
    takeawaysLabel: "What matters now",
    takeaways: [
      { lead: "AI speeds up execution.", trail: "It doesn't replace thinking." },
      { lead: "AI generates. I decide.", trail: "" },
      { lead: "Less time on pixels.", trail: "More time on decisions." },
    ],
  },

  // -- "Design Guessing Game" ----------------------------------------------
  // For each question, "correctAnswer" must be exactly "A" or "B" (capitalised).
  game: {
    sectionEyebrow: "Test Your Design Judgment",
    eyebrow: "Design Judgment",
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
          "AI trust is built through transparency, not false confidence. Users who understand limitations become collaborators. Hiding uncertainty leads to frustration when AI makes mistakes—and it will.",
      },
    ],
  },

  // -- Contact section -----------------------------------------------------
  // Replace each "href" with the real URL. Email uses "mailto:your@email".
  contact: {
    title:
      "Looking for a designer who brings structure, not just pixels?",
    description:
      "I'm particularly interested in startups and scale-ups where design thinking can shape product direction, not just execute on it.",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dana-moldovan", icon: "in" }
    ],
  },

  // -- Footer ---------------------------------------------------------------
  footer: {
    text: "Designed with intention. Built in the open.",
  },
} as const
