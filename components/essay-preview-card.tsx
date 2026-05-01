"use client"

import { BentoCard } from "./bento-card"
import { ArrowUpRight } from "lucide-react"

interface EssayPreviewCardProps {
  title: string
  excerpt: string
  readTime: string
  tag: string
}

export function EssayPreviewCard({ title, excerpt, readTime, tag }: EssayPreviewCardProps) {
  return (
    <BentoCard interactive className="group">
      <div className="flex h-full flex-col">
        <div className="mb-3 flex items-center gap-2">
          <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground">
            {tag}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{readTime}</span>
        </div>

        <h3 className="mb-2 text-lg font-medium text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>

        <p className="flex-1 text-sm text-muted-foreground">{excerpt}</p>

        <div className="mt-4 flex items-center gap-1 font-mono text-xs text-accent">
          <span>Read essay</span>
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </BentoCard>
  )
}
