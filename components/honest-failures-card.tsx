"use client"

import { useState } from "react"
import { BentoCard } from "./bento-card"
import { cn } from "@/lib/utils"

const failures = [
  {
    title: "Over-designed a feature nobody wanted",
    lesson: "Now I validate with 5 users before touching Figma",
  },
  {
    title: "Let stakeholders hijack the roadmap",
    lesson: "Learned to present trade-offs, not just options",
  },
  {
    title: "Built for edge cases first",
    lesson: "80% path now comes before 20% polish",
  },
]

export function HonestFailuresCard() {
  const [activeFailure, setActiveFailure] = useState(0)

  return (
    <BentoCard className="col-span-2 lg:col-span-1" interactive>
      <div className="flex h-full flex-col">
        <span className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Things I Got Wrong
        </span>

        <div className="flex-1 space-y-2">
          {failures.map((f, i) => (
            <button
              key={i}
              onClick={() => setActiveFailure(i)}
              className={cn(
                "w-full rounded-lg border p-3 text-left transition-all",
                activeFailure === i
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/50"
              )}
            >
              <p className="text-sm font-medium text-foreground">{f.title}</p>
              <p
                className={cn(
                  "mt-1 text-xs text-muted-foreground transition-all",
                  activeFailure === i ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                )}
              >
                → {f.lesson}
              </p>
            </button>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Authenticity beats polish. Always.
        </p>
      </div>
    </BentoCard>
  )
}
