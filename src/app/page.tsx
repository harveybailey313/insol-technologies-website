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
import { pageMetadata } from "@/lib/seo";
import {
  SERVICE_ACCENTS,
  INDUSTRY_ACCENTS,
  accentAt,
  accentClass,
} from "@/lib/accents";

export const metadata = pageMetadata({
  title: {
    absolute: "InSol Technologies | Software Engineering, AI & Cloud",
  },
  description: SITE.description,
  path: "/",
});

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
    title: "Software and product engineering",
    body: "We design and build products, platforms, and integrations with clear architecture, maintainable codebases, and delivery discipline.",
  },
  {
    title: "SaaS product development",
    body: "Multi-tenant SaaS is a first-class capability — product foundations, APIs, operability, and growth architecture, not a side offering.",
  },
  {
    title: "Practical AI and automation",
    body: "We put GenAI, agents, ML, NLP, and automation into real workflows with integration, evaluation, and operational ownership.",
  },
  {
    title: "Cloud, data, and enterprise systems",
    body: "Cloud and DevOps, data and analytics, and enterprise applications are delivered as durable foundations — not bolt-ons.",
  },
  {
    title: "Problem framing before stack",
    body: "We clarify the business problem, constraints, and success criteria before locking architecture or tooling.",
  },
  {
    title: "One path from strategy to scale",
    body: "Strategy → Design → Engineering → AI → Deployment → Scale is how we work with you — continuous ownership through production.",
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
            Software · AI · SaaS · Cloud
          </p>
          <h1 className="text-display max-w-4xl text-balance">
            Engineering the{" "}
            <span className="text-gradient">Technology</span> Behind
            Ambitious Businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-body-lg leading-relaxed text-text-secondary">
            InSol Technologies builds software, SaaS products, AI-powered
            solutions, and scalable digital infrastructure for businesses ready
            to build and grow.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button
              href={CTAS.startProject.href}
              size="md"
              className="w-full sm:w-auto md:!h-[52px] md:!px-7"
            >
              {CTAS.startProject.label}
            </Button>
            <Button
              href={CTAS.exploreCapabilities.href}
              variant="secondary"
              size="md"
              className="w-full sm:w-auto md:!h-[52px] md:!px-7"
            >
              {CTAS.exploreCapabilities.label}
            </Button>
          </div>
          <FrameStrip className="mt-12" />
        </div>
      </section>

      {/* What We Do */}
      <Section>
        <SectionHeader
          title="Capabilities built for software-led businesses."
          intro="Software engineering, SaaS product development, AI and automation, cloud and DevOps, data and analytics, and enterprise technology — delivered as connected capabilities, not a generic agency catalog."
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
              eyebrow="AI & Automation"
              title="AI integrated into products and operations."
              intro="We build and integrate GenAI, AI applications, agents, intelligent automation, ML, and NLP where they improve a defined workflow — with the engineering required to run in production."
              className="mb-0"
            />
            <p className="mt-6 text-sm text-text-secondary md:text-base">
              Integration, data quality, evaluation, and oversight matter as much as the model.
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
          title="From problem definition to production systems."
          intro="A transparent delivery sequence so technical and business stakeholders know what happens next — and why."
        />
        <ProcessStepper />
      </Section>

      {/* Industries */}
      <Section band="secondary">
        <SectionHeader
          title="Sector context for technology decisions."
          intro="We apply software, AI, cloud, and data capabilities in the context of healthcare, financial services, e-commerce, travel and hospitality, and technology companies — for startups through enterprise."
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
          title="Selected work, published when cleared."
          intro="Case studies appear only when challenge, approach, and outcomes are approved for public use."
        />
        <div className="card-surface max-w-2xl p-8 hover:transform-none hover:shadow-none">
          <p className="text-text-secondary">
            Public case studies are not published yet. We do not invent clients, metrics, or results. Ask about relevant engagements under NDA, or check back as cleared work is released.
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
          title="Why companies work with InSol Technologies."
          intro="An engineering partner for product, SaaS, AI, and enterprise technology — measured by systems you can run and evolve."
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
            <h2 className="text-h2">A technology company focused on shipped systems.</h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              InSol Technologies helps organizations move from fragmented tools and aging platforms to software, AI, cloud, and data foundations they can operate. Under founder <strong className="text-text">Innam Dustgir</strong>, we emphasize clear discovery, rigorous engineering, and practical use of AI — without unsupported claims.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Button href="/about" variant="secondary">
                Read our story
              </Button>
              <Link
                href="/founder"
                className="text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
              >
                Meet the Founder →
              </Link>
            </div>
          </div>
          <div className="card-surface p-8 hover:transform-none hover:shadow-none">
            <FrameStrip />
            <p className="mt-6 text-sm text-text-secondary">
              Strategy → Design → Engineering → AI → Deployment → Scale — continuous ownership from problem framing through production.
            </p>
          </div>
        </div>
      </Section>

      {/* Insights section omitted — empty at launch per copy rules */}

      <FinalCTA />
    </>
  );
}
