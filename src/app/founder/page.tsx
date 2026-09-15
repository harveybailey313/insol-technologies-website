import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founder — Innam Dustgir",
  description:
    "Meet Innam Dustgir, Founder & CEO of InSol Technologies — building modern software, AI-powered solutions, digital products, and scalable technology infrastructure with a long-term vision.",
  alternates: { canonical: "/founder" },
};

const focusItems = [
  "Build and scale digital products",
  "Develop AI-powered solutions",
  "Modernize legacy technology",
  "Create web and mobile applications",
  "Build scalable SaaS products",
  "Improve cloud infrastructure and DevOps",
  "Turn data into actionable intelligence",
  "Strengthen software quality and reliability",
];

export default function FounderPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary section-pad !pt-12">
        <div className="pointer-events-none absolute inset-0 gradient-glow opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[var(--accent-burgundy-muted)] blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[var(--accent-cyan-muted)] blur-3xl" />
        <div className="container-insol relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Founder" },
            ]}
          />

          <div className="mt-2 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="flex-1 max-w-3xl">
              <p className="eyebrow mb-3">Founder</p>
              <h1 className="text-display">Founder — Innam Dustgir</h1>
              <p className="mt-5 text-body-lg text-text-secondary">
                Building technology companies with a long-term vision
              </p>

              <div className="mt-8 space-y-5 text-body-lg text-text-secondary">
                <p>
                  Innam Dustgir is the Founder of InSol Technologies, a technology
                  company focused on building modern software, AI-powered solutions,
                  digital products, and scalable technology infrastructure for
                  businesses.
                </p>
                <p>
                  With an entrepreneurial mindset and a strong focus on technology and
                  business growth, Innam founded InSol Technologies with a simple
                  belief: technology should solve real business problems, not simply
                  add complexity.
                </p>
                <p>
                  His approach combines business strategy, product thinking,
                  technology, and execution to help organizations transform ideas into
                  reliable digital products and scalable solutions.
                </p>
              </div>

              <div className="mt-10 border-l-2 border-[var(--accent-burgundy)] pl-5">
                <p className="text-sm font-semibold tracking-wide text-text">
                  Founder &amp; CEO
                </p>
                <p className="mt-1 text-sm text-text-secondary">InSol Technologies</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href={CTAS.startProject.href} size="lg">
                  {CTAS.startProject.label}
                </Button>
                <Button href={CTAS.talkExpert.href} variant="secondary" size="lg">
                  {CTAS.talkExpert.label}
                </Button>
              </div>
            </div>

            <div className="flex shrink-0 justify-start lg:justify-center lg:pt-8">
              <div
                className="flex h-28 w-28 items-center justify-center rounded-full border-2 text-3xl font-semibold tracking-tight text-text sm:h-36 sm:w-36 sm:text-4xl"
                style={{
                  borderColor: "color-mix(in srgb, var(--accent-burgundy) 70%, var(--accent-cyan))",
                  background:
                    "linear-gradient(145deg, var(--accent-burgundy-muted), var(--accent-cyan-muted))",
                  boxShadow:
                    "0 0 40px var(--accent-burgundy-glow), inset 0 0 24px rgba(0,0,0,0.35)",
                }}
                aria-hidden
              >
                ID
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader
          title="The Vision Behind InSol"
          intro="InSol Technologies was built around the idea of creating a technology partner that understands both business and engineering."
        />
        <p className="mb-8 max-w-3xl text-text-secondary">
          Under Innam&apos;s leadership, InSol focuses on helping companies:
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {focusItems.map((item, i) => (
            <li
              key={item}
              className="card-surface flex items-start gap-3 p-5 hover:transform-none hover:shadow-none"
            >
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                style={{
                  backgroundColor:
                    i % 2 === 0 ? "var(--accent-cyan)" : "var(--accent-burgundy)",
                  boxShadow:
                    i % 2 === 0
                      ? "0 0 8px var(--accent-cyan-glow)"
                      : "0 0 8px var(--accent-burgundy-glow)",
                }}
                aria-hidden
              />
              <span className="text-sm leading-relaxed text-text">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader title="Founder’s Philosophy" />
        <blockquote className="max-w-3xl border-l-[3px] border-[var(--accent-burgundy)] bg-[var(--accent-burgundy-muted)] py-6 pl-6 pr-6 sm:pl-8">
          <p className="text-xl font-medium leading-relaxed text-text sm:text-2xl">
            “Great technology is not about building more. It is about building what
            matters.”
          </p>
        </blockquote>
        <div className="mt-10 max-w-3xl space-y-5 text-body-lg text-text-secondary">
          <p>
            Innam believes successful technology companies need to combine clear
            strategy, strong engineering, thoughtful design, and continuous
            innovation.
          </p>
          <p>
            His vision for InSol is to build a technology organization capable of
            working alongside ambitious companies—from early-stage startups to
            established enterprises—to solve complex problems and create technology
            with lasting value.
          </p>
        </div>
      </Section>

      <Section band="secondary">
        <SectionHeader title="Looking Ahead" />
        <div className="max-w-3xl space-y-5 text-body-lg text-text-secondary">
          <p>
            The next generation of businesses will be shaped by AI, intelligent
            automation, data, cloud technologies, and digital products.
          </p>
          <p>
            InSol Technologies is positioned to help businesses navigate that
            transformation—bringing together strategy, engineering, AI, and execution
            under one technology partner.
          </p>
          <p>
            Innam&apos;s goal is simple: build a technology company that creates
            meaningful products, solves difficult problems, and earns long-term trust
            through execution.
          </p>
        </div>
      </Section>

      <FinalCTA
        headline="Ready to build what matters?"
        support="Share what you are building, modernizing, or scaling. We will respond with clear next steps."
      />
    </>
  );
}
