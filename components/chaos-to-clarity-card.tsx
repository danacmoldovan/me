"use client"

import { useState } from "react"
import { BentoCard } from "./bento-card"
import { cn } from "@/lib/utils"

const chaosItems = [
  // Strategy & Vision
  "no product vision",
  "undefined metrics",
  "vague requirements",
  "conflicting goals",
  // Ownership & Process
  "unclear ownership",
  "random decisions",
  "no prioritization",
  "reactive work",
  // Stakeholders & Communication
  "stakeholder noise",
  "design by opinion",
  "overpromising",
  "last-minute changes",
  // UX & Execution
  "inconsistent UX",
  "feature dumping",
  "fragmented flows",
  "copy chaos",
  "firefighting",
]

const clarityCategories = [
  {
    name: "Strategy & Vision",
    items: ["direction starts to exist", "success gets defined", "requirements become explicit", "goals get aligned"],
  },
  {
    name: "Ownership & Process",
    items: ["ownership becomes clear enough", "decisions have a driver", "priorities become visible", "we plan ahead"],
  },
  {
    name: "Communication",
    items: ["stakeholders align", "decisions are explained", "expectations get managed", "changes follow a process"],
  },
  {
    name: "UX & Execution",
    items: ["patterns start to repeat", "features follow a direction", "flows connect end-to-end", "content becomes intentional", "less firefighting, more focus"],
  },
]

export function ChaosToClarityCard() {
  const [isOrganized, setIsOrganized] = useState(false)

  return (
    <BentoCard className="col-span-full min-h-[420px]" interactive>
      <div className="flex h-full flex-col">
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Creating Structure from Chaos
          </span>
          <button
            onClick={() => setIsOrganized(!isOrganized)}
            className="flex items-center gap-1 rounded-full border border-border bg-muted p-1 cursor-pointer transition-colors hover:border-foreground/20"
            role="switch"
            aria-checked={isOrganized}
          >
            <span
              className={cn(
                "rounded-full px-3 py-1.5 font-mono text-xs transition-all",
                !isOrganized
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              chaos
            </span>
            <span
              className={cn(
                "rounded-full px-3 py-1.5 font-mono text-xs transition-all",
                isOrganized
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground"
              )}
            >
              structure
            </span>
          </button>
        </div>

        <div className="relative flex-1 min-h-[320px]">
          {/* Chaos state */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-700",
              isOrganized ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
            )}
          >
            <div className="flex flex-wrap gap-x-4 gap-y-5 p-4">
              {chaosItems.map((item, i) => (
                <div
                  key={item}
                  className="flex h-9 items-center rounded-lg border border-destructive/30 bg-destructive/5 px-3 text-sm text-foreground"
                  style={{
                    transform: `rotate(${((i * 17 + 5) % 25) - 12}deg)`,
                    marginTop: `${((i * 13) % 20) - 5}px`,
                    marginLeft: `${((i * 11) % 16) - 4}px`,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Organized state */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-700",
              isOrganized ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
          >
            <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {clarityCategories.map((category, catIndex) => (
                <div key={category.name} className="flex flex-col gap-2">
                  <span className="font-mono text-xs font-medium text-accent uppercase tracking-wider">
                    {category.name}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {category.items.map((item, i) => (
                      <div
                        key={item}
                        className="rounded-lg border border-accent/30 bg-accent/5 px-3 py-2 text-sm transition-all"
                        style={{
                          transitionDelay: `${(catIndex * 4 + i) * 50}ms`,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs text-muted-foreground">
            Evolving products need frameworks, not just features.
          </p>
        </div>
      </div>
    </BentoCard>
  )
}
