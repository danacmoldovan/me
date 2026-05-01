import { SiteHeader } from "@/components/site-header"
import { BentoCard } from "@/components/bento-card"
import { ChaosToClarityCard } from "@/components/chaos-to-clarity-card"
import { AIWorkflowSection } from "@/components/ai-workflow-section"
import { DesignGuessingGame } from "@/components/design-guessing-game"
import { ContactSection } from "@/components/contact-section"


export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm text-muted-foreground">
              Product Designer
            </p>
            <h1 className="mb-6 text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Dana's space
              <br />
              <span className="text-accent">Thoughts in structure</span>
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground">
              A product designer navigating complexity, using systems thinking and AI to explore, validate and shape product direction.
            </p>
          </div>
        </section>

        {/* Mini Stats - Moved to top */}
        <section className="mb-16">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            <BentoCard className="flex flex-col justify-between">
              <p className="font-mono text-2xl font-bold text-foreground sm:text-3xl">SaaS</p>
              <p className="mt-2 text-sm text-muted-foreground">Data-heavy platforms</p>
            </BentoCard>
            <BentoCard className="flex flex-col justify-between">
              <p className="font-mono text-2xl font-bold text-foreground sm:text-3xl">Agentic AI</p>
              <p className="mt-2 text-sm text-muted-foreground">Trustworthy AI interactions</p>
            </BentoCard>
            <BentoCard className="flex flex-col justify-between">
              <p className="font-mono text-2xl font-bold text-foreground sm:text-3xl">PLG mindset</p>
              <p className="mt-2 text-sm text-muted-foreground">Growth through product experience</p>
            </BentoCard>
          </div>
        </section>

        {/* Chaos to Clarity - Full Width */}
        <section className="mb-16">
          <ChaosToClarityCard />
        </section>

        {/* AI Workflow Section */}
        <section id="thinking" className="mb-16 scroll-mt-20">
          <AIWorkflowSection />
        </section>

        {/* Design Guessing Game */}
        <section id="game" className="mb-16 scroll-mt-20">
          <div className="mb-8">
            <h2 className="font-mono text-sm uppercase tracking-wider text-muted-foreground">
              Test Your Design Judgment
            </h2>
          </div>
          <DesignGuessingGame />
        </section>

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>Designed with intention. Built in the open.</p>
          <p className="font-mono text-xs">© 2026</p>
        </div>
      </footer>
    </div>
  )
}
