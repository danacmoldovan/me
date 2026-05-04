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

  // -- WORK -----------------------------------------------------------------
  // The "All work" pill is added automatically.
  // Each item's "category" must match one of the names in "categories".
  // "description" appears in three places: the card on the home page, the
  //   subtitle on the project page, and the page's <meta description> for
  //   search engines. Keep it short and self-contained.
  // For "image": leave as "" to show a placeholder card with the title inside.
  //              Set to e.g. "/work/my-project.png" to show an image.
  //              (Drop the image file into public/work/.)
  // "slug" becomes the URL of the project page: /work/<slug>.
  //        Use lowercase letters, numbers, and hyphens only.
  // "problem" and "approach" are short bullet lists shown on the project page.
  //          Each entry should be one sentence.
  // Anything starting with "[FILLER]" is placeholder copy — replace it.
  work: {
    title: "Work",
    categories: ["SaaS", "Agentic AI", "PLG mindset"],
    items: [
      {
        title: "Analytics Dashboard Redesign",
        slug: "analytics-dashboard-redesign",
        category: "SaaS",
        description:
          "Simplified a complex analytics platform with 50+ data visualizations into an intuitive dashboard that reduced time-to-insight by 40%.",
        image: "",
        problem: [
          "[FILLER] Users abandoned the dashboard within 30 seconds, unable to locate the metrics that mattered to them.",
          "[FILLER] Fifty-plus visualizations competed for attention with no visual hierarchy.",
          "[FILLER] Power users and casual viewers shared one experience, serving neither well.",
        ],
        approach: [
          "[FILLER] Conducted user research to identify the five most critical metrics across personas.",
          "[FILLER] Designed progressive disclosure patterns so advanced charts stayed one click away.",
          "[FILLER] Established a layout system that scaled from focused summary to deep exploration.",
        ],
      },
      {
        title: "Enterprise Settings Architecture",
        slug: "enterprise-settings-architecture",
        category: "SaaS",
        description:
          "Restructured a sprawling settings experience with 200+ options into a coherent information architecture.",
        image: "",
        problem: [
          "[FILLER] Two hundred-plus settings were scattered across nine inconsistent pages.",
          "[FILLER] Admins relied on browser search to find anything; support tickets reflected the chaos.",
          "[FILLER] Engineering kept adding options to whichever page felt closest, deepening the mess.",
        ],
        approach: [
          "[FILLER] Card-sorted every option with real admins to surface mental models.",
          "[FILLER] Defined a small set of top-level categories anchored to admin tasks, not internal teams.",
          "[FILLER] Shipped governance rules so new settings have a clear home from day one.",
        ],
      },
      {
        title: "AI Assistant Transparency Patterns",
        slug: "ai-assistant-transparency",
        category: "Agentic AI",
        description:
          "Designed interaction patterns that build user trust in an AI-powered workflow automation tool.",
        image: "",
        problem: [
          "[FILLER] Users disabled the AI features after one wrong suggestion erased their confidence.",
          "[FILLER] The assistant acted on user data without explaining why or what it changed.",
          "[FILLER] There was no graceful path from automated action back to manual control.",
        ],
        approach: [
          "[FILLER] Surfaced confidence levels and reasoning summaries directly in the suggestion UI.",
          "[FILLER] Designed a one-click rollback for every automated action, with a clear audit trail.",
          "[FILLER] Treated the AI as a teammate that asks before doing anything irreversible.",
        ],
      },
      {
        title: "Conversational Data Explorer",
        slug: "conversational-data-explorer",
        category: "Agentic AI",
        description:
          "Built a natural language interface for querying complex datasets, making data accessible to non-technical users.",
        image: "",
        problem: [
          "[FILLER] Non-technical teams waited days for analysts to answer simple data questions.",
          "[FILLER] Existing query tools required SQL fluency that most stakeholders lacked.",
          "[FILLER] Self-serve dashboards never anticipated the right questions in advance.",
        ],
        approach: [
          "[FILLER] Designed a chat-first interface that translated plain language into validated queries.",
          "[FILLER] Showed the generated query alongside results so users could learn the data model.",
          "[FILLER] Built guardrails around expensive queries and surfaced clear error explanations.",
        ],
      },
      {
        title: "Self-Serve Onboarding Flow",
        slug: "self-serve-onboarding",
        category: "PLG mindset",
        description:
          "Redesigned onboarding to achieve 60% activation rate within first session, up from 25%.",
        image: "",
        problem: [
          "[FILLER] Three quarters of new sign-ups never reached the product's core value moment.",
          "[FILLER] The original flow asked for company details before showing any value.",
          "[FILLER] Drop-off concentrated on a 12-step setup wizard that felt like enterprise software.",
        ],
        approach: [
          "[FILLER] Reordered the flow so users hit a real, useful output within ninety seconds.",
          "[FILLER] Replaced the wizard with progressive setup tied to actions users actually took.",
          "[FILLER] Instrumented every step and iterated weekly against a single activation metric.",
        ],
      },
      {
        title: "Viral Collaboration Features",
        slug: "viral-collaboration-features",
        category: "PLG mindset",
        description:
          "Designed sharing mechanics that turned users into advocates, driving 35% of new signups.",
        image: "",
        problem: [
          "[FILLER] Power users wanted to invite teammates but the share flow was buried in settings.",
          "[FILLER] Recipients of shared links landed on a generic marketing page instead of the artifact.",
          "[FILLER] No part of the product gave users a reason to bring others in.",
        ],
        approach: [
          "[FILLER] Built share-by-default surfaces into the moments users felt proud of their work.",
          "[FILLER] Designed a recipient-first landing experience that previewed the artifact instantly.",
          "[FILLER] Layered light gamification — counts, mentions, reactions — to reinforce the loop.",
        ],
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
