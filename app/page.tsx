import { SiteHeader } from "@/components/site-header"
import { BentoCard } from "@/components/bento-card"
import { ChaosToClarityCard } from "@/components/chaos-to-clarity-card"
import { AIWorkflowSection } from "@/components/ai-workflow-section"
import { DesignGuessingGame } from "@/components/design-guessing-game"
import { ContactSection } from "@/components/contact-section"
import { content } from "@/content"

export default function PortfolioPage() {
  const { hero, myWork, designThinking, footer } = content

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 pt-24 pb-16">
        {/* About */}
        <section id="about" className="mb-16 scroll-mt-20">
          <div className="max-w-3xl">
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

        {/* My Work */}
        <section id="myWork" className="mb-16 scroll-mt-20">
          <p className="mb-6 font-mono text-sm uppercase tracking-wider text-muted-foreground">
            {myWork.eyebrow}
          </p>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            {myWork.items.map((item) => (
              <BentoCard key={item.title} className="flex flex-col justify-between">
                <p className="font-mono text-2xl font-bold text-foreground sm:text-3xl">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* Design Thinking */}
        <section id="designThinking" className="mb-16 scroll-mt-20">
          <p className="mb-6 font-mono text-sm uppercase tracking-wider text-muted-foreground">
            {designThinking.eyebrow}
          </p>
          <div className="mb-16">
            <ChaosToClarityCard />
          </div>
          <div className="mb-16">
            <AIWorkflowSection />
          </div>
          <DesignGuessingGame />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground">
          <p>{footer.text}</p>
        </div>
      </footer>
    </div>
  )
}
