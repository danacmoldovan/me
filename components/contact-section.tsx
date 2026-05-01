import { BentoCard } from "./bento-card"
import { ArrowUpRight } from "./icons"
import { content } from "@/content"

const { title, description, links } = content.contact

export function ContactSection() {
  return (
    <BentoCard className="text-center">
      <div className="mx-auto max-w-xl py-8">
        <h2 className="mb-4 text-2xl font-medium text-foreground md:text-3xl text-balance">
          {title}
        </h2>
        <p className="mb-8 text-muted-foreground">{description}</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => {
            const isExternal = /^https?:\/\//.test(link.href)
            return (
              <a
                key={link.label}
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-2 rounded-full border border-border px-4 py-2 font-mono text-sm transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-xs group-hover:bg-accent-foreground/10">
                  {link.icon}
                </span>
                {link.label}
                <ArrowUpRight className="h-3 w-3 opacity-50 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )
          })}
        </div>
      </div>
    </BentoCard>
  )
}
