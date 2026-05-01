import { SiteHeader } from "@/components/site-header"
import { BentoCard } from "@/components/bento-card"
import { ChaosToClarityCard } from "@/components/chaos-to-clarity-card"
import { AIWorkflowSection } from "@/components/ai-workflow-section"
import { DesignGuessingGame } from "@/components/design-guessing-game"
import { ContactSection } from "@/components/contact-section"
import { content } from "@/content"

export default function PortfolioPage() {
  const { hero, stats, game, footer } = content

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm text-muted-foreground">
              {hero.eyebrow}
            </p>
            <h1 className="mb-6 text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              {hero.titleLine1}
              <br />
              <span className="text-accent">{hero.titleLine2}</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              {hero.description}
            </p>
          </div>
        </section>

        {/* Mini Stats */}
        <section className="mb-16">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            {stats.map((stat) => (
              <BentoCard key={stat.title} className="flex flex-col justify-between">
                <p className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                  {stat.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* Chaos to Clarity */}
        <section className="mb-16">
          <ChaosToClarityCard />
        </section>

        {/* AI Workflow */}
        <section id="thinking" className="mb-16 scroll-mt-20">
          <AIWorkflowSection />
        </section>

        {/* Design Guessing Game */}
        <section id="game" className="mb-16 scroll-mt-20">
          <div className="mb-8">
            <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
              {game.sectionEyebrow}
            </h2>
          </div>
          <DesignGuessingGame />
        </section>

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
          <p>{footer.text}</p>
        </div>
      </footer>
    </div>
  )
}
