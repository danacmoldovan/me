"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { BentoCard } from "./bento-card"
import { cn } from "@/lib/utils"

const aiConversation = [
  { role: "human", text: "How should we approach this empty state?" },
  { role: "ai", text: "Consider 3 directions: educational, motivational, or actionable. Which aligns with your user's mental model at this point?" },
  { role: "human", text: "Users feel lost here. Educational feels right." },
  { role: "ai", text: "Then lead with context before action. Show them where they are in the journey first." },
]

export function AICollaborationCard() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Track mounted state and cleanup on unmount
  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const playConversation = useCallback(() => {
    if (!isMounted) return
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    
    setIsPlaying(true)
    setActiveStep(0)
    let step = 0
    
    intervalRef.current = setInterval(() => {
      step++
      if (step >= aiConversation.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        setIsPlaying(false)
      } else {
        setActiveStep(step)
      }
    }, 1500)
  }, [isMounted])

  return (
    <BentoCard className="col-span-2 row-span-2 lg:col-span-1" interactive>
      <div className="flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            AI as Design Partner
          </span>
          <button
            onClick={playConversation}
            disabled={isPlaying}
            className="rounded-full bg-accent px-3 py-1 font-mono text-xs text-accent-foreground transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {isPlaying ? "Playing..." : "Watch it work"}
          </button>
        </div>
        
        <div className="flex-1 space-y-3">
          {aiConversation.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "transition-all duration-500",
                i <= activeStep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <div
                className={cn(
                  "rounded-xl p-3 text-sm",
                  msg.role === "human"
                    ? "ml-auto max-w-[80%] bg-primary text-primary-foreground"
                    : "mr-auto max-w-[85%] bg-muted text-foreground"
                )}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Not for generating UI. For challenging my assumptions.
        </p>
      </div>
    </BentoCard>
  )
}
