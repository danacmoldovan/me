"use client"

import { useState } from "react"
import { BentoCard } from "./bento-card"
import { cn } from "@/lib/utils"

const thinkingSteps = [
  { label: "Context", desc: "What was broken?", example: "Feature requests coming from 4 different directions" },
  { label: "Hypothesis", desc: "What I believed", example: "We needed a prioritization framework, not more features" },
  { label: "Actions", desc: "What I did", example: "Facilitated a stack-ranking session with stakeholders" },
  { label: "Trade-offs", desc: "What I sacrificed", example: "Short-term delivery speed for long-term alignment" },
  { label: "Outcome", desc: "What changed", example: "60% reduction in scope creep over 3 months" },
]

export function ThinkingProcessCard() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <BentoCard className="col-span-2" interactive>
      <div className="flex h-full flex-col">
        <span className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          How I Think Through Problems
        </span>

        <div className="mb-4 flex flex-wrap gap-2">
          {thinkingSteps.map((step, i) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(i)}
              className={cn(
                "rounded-full px-3 py-1 font-mono text-xs transition-all",
                activeStep === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {step.label}
            </button>
          ))}
        </div>

        <div className="flex-1">
          <div className="rounded-xl bg-muted/50 p-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              {thinkingSteps[activeStep].desc}
            </p>
            <p className="text-sm text-muted-foreground">
              {thinkingSteps[activeStep].example}
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Click through to see my decision framework in action.
        </p>
      </div>
    </BentoCard>
  )
}
