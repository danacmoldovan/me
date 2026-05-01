"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface BentoCardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function BentoCard({ children, className, interactive = false }: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300",
        interactive && "cursor-pointer hover:border-accent hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  )
}
