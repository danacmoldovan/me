"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { content } from "@/content"

const { logoInitials, logoText, nav } = content.header

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <span className="font-mono text-sm font-bold">{logoInitials}</span>
          </div>
          <span className="hidden font-medium sm:block">{logoText}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={cn("transition-transform", mobileMenuOpen && "rotate-45")}
          >
            {mobileMenuOpen ? (
              <path d="M4 4L12 12M4 12L12 4" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <>
                <path d="M2 4H14" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 8H14" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 12H14" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "absolute left-0 right-0 top-16 border-b border-border bg-background transition-all md:hidden",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="flex flex-col p-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 font-mono text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
