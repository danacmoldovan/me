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
      { label: "Work", href: "#work" },
      { label: "Play", href: "#play" },
      { label: "Connect", href: "#connect" },
    ],
  },

  // -- WORK -----------------------------------------------------------------
  // The "All work" pill is added automatically.
  // Each item's "category" must match one of the names in "categories".
  // For "image": leave as "" to show a placeholder card with the title inside.
  //              Set to e.g. "/work/my-project.png" to show an image.
  //              (Drop the image file into public/work/.)
  work: {
    title: "Work",
    categories: ["SaaS", "Agentic AI", "PLG mindset"],
    items: [
      {
        title: "Analytics Dashboard Redesign",
        category: "SaaS",
        description:
          "Simplified a complex analytics platform with 50+ data visualizations into an intuitive dashboard that reduced time-to-insight by 40%.",
        image: "",
      },
      {
        title: "Enterprise Settings Architecture",
        category: "SaaS",
        description:
          "Restructured a sprawling settings experience with 200+ options into a coherent information architecture.",
        image: "",
      },
      {
        title: "AI Assistant Transparency Patterns",
        category: "Agentic AI",
        description:
          "Designed interaction patterns that build user trust in an AI-powered workflow automation tool.",
        image: "",
      },
      {
        title: "Conversational Data Explorer",
        category: "Agentic AI",
        description:
          "Built a natural language interface for querying complex datasets, making data accessible to non-technical users.",
        image: "",
      },
      {
        title: "Self-Serve Onboarding Flow",
        category: "PLG mindset",
        description:
          "Redesigned onboarding to achieve 60% activation rate within first session, up from 25%.",
        image: "",
      },
      {
        title: "Viral Collaboration Features",
        category: "PLG mindset",
        description:
          "Designed sharing mechanics that turned users into advocates, driving 35% of new signups.",
        image: "",
      },
    ],
  },

  // -- PLAY: Design Judgment game ------------------------------------------
  // For each question, "correctAnswer" must be exactly "A" or "B" (capitalised).
  play: {
    title: "Design Judgment",
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
    text: "Designed with intention. Built in the open.",
  },
} as const
