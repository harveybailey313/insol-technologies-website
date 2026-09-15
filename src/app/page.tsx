import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStepper } from "@/components/ProcessStepper";
import { FinalCTA } from "@/components/FinalCTA";
import { FrameStrip } from "@/components/FrameStrip";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { CTAS, SITE } from "@/lib/site";
import {
  SERVICE_ACCENTS,
  INDUSTRY_ACCENTS,
  accentAt,
  accentClass,
} from "@/lib/accents";

export const metadata: Metadata = {
  title: "InSol Technologies | Software, AI & Cloud for Modern Business",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const aiCapabilities = [
  "Generative AI (GenAI)",
  "AI applications",
  "AI agents",
  "Intelligent automation",
  "AI integration",
  "Machine learning (ML)",
  "Natural language processing (NLP)",
  "AI-powered workflows",
];

const whyItems = [
  {
    title: "Engineering depth",
    body: "We build products, platforms, and integrations meant to last — not disposable demos.",
  },
  {
    title: "SaaS & product focus",
    body: "SaaS Products and Product Engineering are first-class pillars — not afterthoughts under a generic outsourcing catalog.",
  },
  {
    title: "Business-first problem framing",
    body: "Technology follows the outcome. We clarify the operating problem before locking a stack.",
  },
  {
    title: "Practical AI in the delivery path",
    body: "AI is treated as a capability inside real workflows — evaluated, integrated, and operable.",
  },
  {
    title: "Architecture built to scale",
    body: "We design for change: clear boundaries, observability, and cloud foundations that grow with demand.",
  },
  {
    title: "Partnership beyond launch",
    body: "Strategy → Design → Engineering → AI → Deployment → Scale is a relationship model, not a sales slogan.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary section-pad !pt-16 md:!pt-24 lg:!pt-28">
        <div className="pointer-events-none absolute inset-0 hero-mesh" />
        <div className="glow-blob glow-blob-violet" aria-hidden />
        <div className="glow-blob glow-blob-cyan" aria-hidden />
        <div className="glow-blob glow-blob-magenta" aria-hidden />
        <div className="container-insol relative">
          <p className="eyebrow eyebrow-gradient mb-4">
            Technology, AI & software engineering partner
          </p>
          <h1 className="text-display max-w-4xl">
            Engineering{" "}
            <span className="text-gradient">what’s next</span> for your business.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            We help startups, growing companies, mid-market, and enterprise teams
            build digital products, modernize legacy systems, apply practical AI,
            and scale SaaS and enterprise technology — from strategy through
            production.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={CTAS.startProject.href} size="lg">
              {CTAS.startProject.label}
            </Button>
            <Button href={CTAS.exploreCapabilities.href} variant="secondary" size="lg">
              {CTAS.exploreCapabilities.label}
            </Button>
          </div>
          <FrameStrip className="mt-12" />
        </div>
      </section>

      {/* What We Do */}
      <Section>
        <SectionHeader
          title="Technology built around your business."
          intro="Every engagement starts with the outcome you need — then we design the architecture, engineer the product, apply AI where it earns its place, and leave you with systems your teams can run and evolve."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.shortDescription}
              outcome={s.businessOutcome}
              chips={s.chips}
              href={`/services/${s.slug}`}
              accent={SERVICE_ACCENTS[s.slug] ?? "cyan"}
            />
          ))}
        </div>
      </Section>

      {/* AI Spotlight */}
      <Section band="secondary" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-35" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Practical AI"
              title="AI that earns its place in the workflow."
              intro="We build AI for clients as part of real products and operations — not as a slide-deck promise. Capabilities ship when they map to a clear business job."
              className="mb-0"
            />
            <p className="mt-6 text-sm text-text-secondary md:text-base">
              Models matter. Integration, data quality, evaluation, and human
              oversight matter more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/services/ai-intelligent-automation">
                Explore AI & Automation
              </Button>
              <Button href="/services/saas-products" variant="secondary">
                Explore SaaS Products
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {aiCapabilities.map((cap, i) => (
              <li
                key={cap}
                className={`card-surface accent-card flex items-center gap-3 p-4 hover:transform-none hover:shadow-none ${accentClass(accentAt(i))}`}
              >
                <span
                  className="accent-dot h-2 w-2 shrink-0 rounded-full"
                  aria-hidden
                />
                <span className="text-sm font-medium text-text">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <SectionHeader
          title="A clear path from problem to production."
          intro="We work in a transparent sequence so stakeholders always know what happens next — and why."
        />
        <ProcessStepper />
      </Section>

      {/* Industries */}
      <Section band="secondary">
        <SectionHeader
          title="Industry context, not generic playbooks."
          intro="We frame technology around the pressures your sector actually faces — then apply the capabilities that fit. Built for startups, growing companies, mid-market, and enterprise; SaaS builders; legacy modernizers; and AI adopters."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind) => {
            const accent = INDUSTRY_ACCENTS[ind.slug] ?? "cyan";
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className={`card-surface accent-card group flex flex-col p-6 md:p-8 ${accentClass(accent)}`}
              >
                <span className="accent-icon-chip mb-4" aria-hidden>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 19h16M6 16V9l6-4 6 4v7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="text-h3 mb-4 transition-colors group-hover:text-[var(--card-accent)]">
                  {ind.title}
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-semibold text-text-muted">Challenge</dt>
                    <dd className="mt-1 text-text-secondary">{ind.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text-muted">Opportunity</dt>
                    <dd className="mt-1 text-text-secondary">{ind.opportunity}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text-muted">Capability</dt>
                    <dd className="mt-1 text-text-secondary">{ind.capability}</dd>
                  </div>
                </dl>
                <span className="accent-text mt-6 inline-flex items-center gap-1 text-sm font-semibold">
                  Explore industry →
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Case Studies — honest empty state */}
      <Section>
        <SectionHeader
          title="Work that stands up to scrutiny."
          intro="We publish case studies only when challenge, approach, and outcomes are cleared for public use. Additional case studies are in preparation."
        />
        <div className="card-surface max-w-2xl p-8 hover:transform-none hover:shadow-none">
          <p className="text-text-secondary">
            No public case studies are published yet. We do not invent clients,
            metrics, or results. Speak with us about relevant engagements under NDA,
            or check back as cleared work is published.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/case-studies" variant="secondary">
              View case studies
            </Button>
            <Button href={CTAS.talkExpert.href} variant="ghost">
              {CTAS.talkExpert.label}
            </Button>
          </div>
        </div>
      </Section>

      {/* Why InSol */}
      <Section band="secondary">
        <SectionHeader
          title="Why teams choose InSol Technologies."
          intro="Differentiation that we can stand behind — evidence where we have it, honesty where we still need proof."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item, i) => (
            <div
              key={item.title}
              className={`card-surface accent-card p-6 hover:transform-none ${accentClass(accentAt(i))}`}
            >
              <span className="accent-text font-mono text-sm font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Story teaser */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow eyebrow-gradient mb-3">About InSol Technologies</p>
            <h2 className="text-h2">Built to turn ambition into working systems.</h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              InSol Technologies exists to help organizations move from fragmented
              tools and aging systems to software, AI, and cloud foundations they can
              actually run. Under founder <strong className="text-text">Innam Dustgir</strong>,
              we believe strong technology partnerships are measured in shipped
              outcomes — clarity in discovery, rigor in engineering, and honesty about
              what AI can and cannot do.
            </p>
            <Button href="/about" className="mt-8" variant="secondary">
              Read our story
            </Button>
          </div>
          <div className="card-surface p-8 hover:transform-none hover:shadow-none">
            <FrameStrip />
            <p className="mt-6 text-sm text-text-secondary">
              Strategy → Design → Engineering → AI → Deployment → Scale — one
              continuous partnership from problem framing through production.
            </p>
          </div>
        </div>
      </Section>

      {/* Insights section omitted — empty at launch per copy rules */}

      <FinalCTA />
    </>
  );
}
