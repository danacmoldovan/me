"use client"

import { BentoCard } from "./bento-card"

const workflowSteps = [
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
    description: "Product and engineering are involved early. We validate direction before it's polished.",
  },
  {
    label: "I refine",
    description: "Clarity, consistency, interaction details.",
  },
  {
    label: "We build",
    description: "With fewer surprises — most decisions are already made.",
  },
]

export function AIWorkflowSection() {
  return (
    <BentoCard className="p-8 md:p-10">
      {/* Header */}
      <div className="mb-10">
        <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
          How I Work
        </span>
        <h2 className="text-3xl font-medium text-foreground md:text-4xl">
          Design is no longer linear
        </h2>
      </div>

      {/* Old vs New */}
      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            The old process
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="rounded-md bg-muted px-3 py-1.5">Research</span>
            <span className="text-muted-foreground/50">→</span>
            <span className="rounded-md bg-muted px-3 py-1.5">Design</span>
            <span className="text-muted-foreground/50">→</span>
            <span className="rounded-md bg-muted px-3 py-1.5">Validate</span>
            <span className="text-muted-foreground/50">→</span>
            <span className="rounded-md bg-muted px-3 py-1.5">Ship</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Step-by-step. Sequential.</p>
        </div>

        <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
            Today
          </p>
          <p className="text-sm text-foreground">
            Fast loops — defining, generating, and validating continuously. AI breaks the linear model.
          </p>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="mb-12">
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          How I work with AI
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {workflowSteps.map((step, i) => (
            <div
              key={step.label}
              className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/50 hover:bg-accent/5"
            >
              <span className="mb-3 block font-mono text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mb-2 font-medium text-foreground">{step.label}</p>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="rounded-xl border border-border bg-muted/30 p-6">
        <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          What matters now
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <p className="text-sm text-foreground">
            AI speeds up execution.
            <br />
            <span className="text-muted-foreground">It doesn&apos;t replace thinking.</span>
          </p>
          <p className="text-sm text-foreground">
            AI generates. I decide.
          </p>
          <p className="text-sm text-foreground">
            Less time on pixels.
            <br />
            <span className="text-muted-foreground">More time on decisions.</span>
          </p>
        </div>
      </div>
    </BentoCard>
  )
}
