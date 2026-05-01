import { BentoCard } from "./bento-card"
import { content } from "@/content"

const {
  eyebrow,
  title,
  oldProcess,
  newProcess,
  workflowLabel,
  workflowSteps,
  takeawaysLabel,
  takeaways,
} = content.aiWorkflow

export function AIWorkflowSection() {
  return (
    <BentoCard className="p-8 md:p-10">
      {/* Header */}
      <div className="mb-10">
        <span className="mb-4 block font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </span>
        <h2 className="text-3xl font-medium text-foreground md:text-4xl">{title}</h2>
      </div>

      {/* Old vs New */}
      <div className="mb-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-muted/30 p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {oldProcess.label}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {oldProcess.steps.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-md bg-muted px-3 py-1.5">{step}</span>
                {i < oldProcess.steps.length - 1 && (
                  <span className="text-muted-foreground/50">→</span>
                )}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{oldProcess.caption}</p>
        </div>

        <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent">
            {newProcess.label}
          </p>
          <p className="text-sm text-foreground">{newProcess.description}</p>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="mb-12">
        <p className="mb-6 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          {workflowLabel}
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
          {takeawaysLabel}
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {takeaways.map((t) => (
            <p key={t.lead} className="text-sm text-foreground">
              {t.lead}
              {t.trail && (
                <>
                  <br />
                  <span className="text-muted-foreground">{t.trail}</span>
                </>
              )}
            </p>
          ))}
        </div>
      </div>
    </BentoCard>
  )
}
