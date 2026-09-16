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
  "AI systems integration",
  "Machine learning (ML)",
  "Natural language processing (NLP)",
  "AI-powered workflows",
];

const whyItems = [
  {
    title: "Software engineering depth",
    body: "Custom platforms, products, and integrations with clear architecture, maintainable codebases, and delivery discipline.",
  },
  {
    title: "SaaS product development",
    body: "Multi-tenant SaaS as a first-class capability — product foundations, APIs, operability, and growth architecture.",
  },
  {
    title: "Practical AI and automation",
    body: "GenAI, agents, ML, NLP, and automation embedded in real workflows — with integration, evaluation, and operational ownership.",
  },
  {
    title: "Cloud, data, and enterprise systems",
    body: "Cloud & DevOps, data & analytics, and enterprise applications delivered as durable foundations — not bolt-ons.",
  },
  {
    title: "Problem framing before stack",
    body: "Business problem, constraints, and success criteria clarified before architecture or tooling is locked.",
  },
  {
    title: "Strategy through scale",
    body: "Strategy → Design → Engineering → AI → Deployment → Scale — continuous ownership from framing through production.",
  },
];

const homepageCapabilities = [
  {
    slug: "product-engineering",
    title: "Software Engineering",
    description:
      "Custom software platforms and business applications built for scalability, reliability, and long-term growth.",
  },
  {
    slug: "ai-intelligent-automation",
    title: "AI & Intelligent Automation",
    description:
      "AI-powered applications, intelligent workflows, automation, and practical machine-learning solutions.",
  },
  {
    slug: "saas-products",
    title: "SaaS Product Development",
    description:
      "From product architecture and MVP development to production-ready SaaS platforms and ongoing engineering.",
  },
  {
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    description:
      "Modern web applications, mobile applications, APIs, and digital products designed for performance and usability.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Cloud architecture, infrastructure, deployment automation, monitoring, security, and scalable systems.",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    description:
      "Data platforms, analytics systems, dashboards, reporting, and technology that turns business data into useful insights.",
  },
  {
    slug: "enterprise-applications",
    title: "Enterprise Applications",
    description:
      "Secure and scalable business applications designed around complex organizational requirements and workflows.",
  },
  {
    slug: "quality-engineering",
    title: "Quality Engineering",
    description:
      "Automated testing, performance testing, reliability engineering, and quality processes for production software.",
  },
];

const saasProductPath = [
  "Product Strategy",
  "Architecture",
  "Development",
  "AI & Automation",
  "Cloud Infrastructure",
  "Launch",
  "Scale",
] as const;

const homepageIndustries = [
  {
    slug: "healthcare",
    title: "Healthcare",
    challenge:
      "Fragmented clinical and admin systems, compliance pressure, and workflows that still depend on manual handoffs.",
    opportunity:
      "Connected data, better tools for care teams, and automation where policy allows.",
    capability:
      "Secure software, data platforms, integration, and practical AI for operational workflows.",
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    challenge:
      "Legacy cores, regulatory scrutiny, and rising expectations for speed and transparency.",
    opportunity:
      "Modern customer journeys and internal platforms without weakening control.",
    capability:
      "Software engineering, secure cloud, data & analytics, and practical AI for operations and insight.",
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    challenge:
      "Fragmented commerce stacks, uneven digital experience, and operational strain at peak demand.",
    opportunity:
      "Reliable catalog and checkout journeys, plus data that informs merchandising and operations.",
    capability:
      "Web & mobile, integrations, cloud scale, analytics, and automation across the order lifecycle.",
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    challenge:
      "Multi-channel bookings, partner complexity, and guest experience stretched across systems.",
    opportunity:
      "Cleaner reconciliation, better guest-facing tools, and operations that keep pace with demand.",
    capability:
      "Platforms, automation, data pipelines, and AI applied to high-volume operational workflows.",
  },
  {
    slug: "technology",
    title: "Technology",
    challenge:
      "Product and SaaS teams that need delivery capacity without giving up architectural ownership.",
    opportunity:
      "Accelerate roadmaps with an engineering partner who can own defined slices of the stack end to end.",
    capability:
      "Software engineering, SaaS product development, AI features, cloud & DevOps, and quality engineering.",
  },
] as const;

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

      {/* What We Do — Capabilities */}
      <Section>
        <SectionHeader
          title="Capabilities for software, AI, and digital products."
          intro="Eight technology capabilities — clearly scoped so you can see how InSol Technologies supports build, modernization, and scale."
        />
        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {homepageCapabilities.map((cap) => {
            const service = services.find((s) => s.slug === cap.slug);
            return (
              <ServiceCard
                key={cap.slug}
                title={cap.title}
                description={cap.description}
                chips={service?.chips}
                href={`/services/${cap.slug}`}
                accent={SERVICE_ACCENTS[cap.slug] ?? "cyan"}
              />
            );
          })}
        </div>
      </Section>


      {/* SaaS Products — capability-focused (no invented products) */}
      <Section band="secondary" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-30" />
        <div className="relative">
          <p className="eyebrow eyebrow-gradient mb-3">SaaS & Product Development</p>
          <SectionHeader
            title="Building Software Products That Scale"
            intro="InSol Technologies works across product strategy, architecture, engineering, AI, cloud infrastructure, and ongoing development to turn software ideas into scalable digital products."
            className="mb-8 md:mb-10"
          />
          <div
            className="frame-strip min-w-0"
            aria-label="SaaS product delivery path"
          >
            {saasProductPath.map((step, i) => (
              <span key={step} className="contents">
                <span className="frame-strip-step">{step}</span>
                {i < saasProductPath.length - 1 ? (
                  <span className="frame-strip-arrow" aria-hidden>
                    →
                  </span>
                ) : null}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-text-muted md:text-base">
            Capability presentation only — named SaaS products and metrics appear
            here when cleared for public use.
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button
              href="/contact?intent=start-project&focus=saas"
              size="md"
              className="w-full sm:w-auto md:!h-[52px] md:!px-7"
            >
              Build Your Product
            </Button>
            <Button
              href="/services/saas-products"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto md:!h-[52px] md:!px-7"
            >
              Explore SaaS Products
            </Button>
          </div>
        </div>
      </Section>

      {/* AI & Automation */}
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-25" />
        <div className="relative grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <SectionHeader
              eyebrow="AI & Intelligent Automation"
              title="AI engineered for real products and operations."
              intro="InSol Technologies builds and integrates generative AI, AI applications, agents, intelligent automation, machine learning, and NLP where they improve a defined business workflow — with the engineering required to run in production."
              className="mb-0"
            />
            <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-text-secondary md:text-base">
              Models matter. Integration, data quality, evaluation, and human
              oversight matter more — so capability ships as operable software,
              not a demo that never leaves the lab.
            </p>
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button
                href="/services/ai-intelligent-automation"
                size="md"
                className="w-full sm:w-auto md:!h-[52px] md:!px-7"
              >
                Explore AI & Automation
              </Button>
              <Button
                href={CTAS.talkExpert.href}
                variant="secondary"
                size="md"
                className="w-full sm:w-auto md:!h-[52px] md:!px-7"
              >
                {CTAS.talkExpert.label}
              </Button>
            </div>
          </div>
          <ul className="grid min-w-0 gap-3 sm:grid-cols-2">
            {aiCapabilities.map((cap, i) => (
              <li
                key={cap}
                className={`card-surface accent-card flex min-w-0 items-center gap-3 p-4 hover:transform-none hover:shadow-none ${accentClass(accentAt(i))}`}
              >
                <span
                  className="accent-dot h-2 w-2 shrink-0 rounded-full"
                  aria-hidden
                />
                <span className="text-sm font-medium leading-snug text-text">
                  {cap}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* How We Work */}
      <Section>
        <SectionHeader
          title="From discovery to production systems."
          intro="A transparent engineering path — discovery through delivery — so technical and business stakeholders know what happens next, and why."
        />
        <ProcessStepper />
      </Section>

      {/* Industries */}
      <Section band="secondary">
        <SectionHeader
          title="Industries we build technology for."
          intro="Software engineering, AI, SaaS, cloud, and data capabilities applied in sector context — for startups, growth-stage companies, mid-market, and enterprise teams."
        />
        <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {homepageIndustries.map((ind) => {
            const accent = INDUSTRY_ACCENTS[ind.slug] ?? "cyan";
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className={`card-surface accent-card group flex min-w-0 flex-col p-5 sm:p-6 md:p-8 ${accentClass(accent)}`}
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
                <dl className="space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="font-semibold text-text-muted">Challenge</dt>
                    <dd className="mt-1 text-pretty text-text-secondary">
                      {ind.challenge}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text-muted">Opportunity</dt>
                    <dd className="mt-1 text-pretty text-text-secondary">
                      {ind.opportunity}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text-muted">Capability</dt>
                    <dd className="mt-1 text-pretty text-text-secondary">
                      {ind.capability}
                    </dd>
                  </div>
                </dl>
                <span className="accent-text mt-6 inline-flex items-center gap-1 text-sm font-semibold">
                  Explore industry →
                </span>
              </Link>
            );
          })}
        </div>
        <div className="mt-10">
          <Button href="/industries" variant="secondary" size="md">
            Explore all industries
          </Button>
        </div>
      </Section>

      {/* Case Studies — honest empty state */}
      <Section>
        <SectionHeader
          title="Selected work, published when cleared."
          intro="Engagements appear here only when challenge, approach, and outcomes are approved for public use — never invented clients, logos, or metrics."
        />
        <div className="card-surface max-w-2xl p-8 hover:transform-none hover:shadow-none">
          <p className="text-text-secondary">
            Public case studies are not live yet. We publish when a story meets our criteria and is cleared for sharing. For active opportunities, discuss relevant work under NDA via Talk to an Expert or Contact.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Cleared narrative — challenge, approach, outcomes
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              No confidential detail without approval
            </li>
            <li className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              Named logos and quotes only with permission
            </li>
          </ul>
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
          intro="Software engineering, SaaS, AI, cloud, data, and enterprise systems — partnered from problem framing through strategy to scale."
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
              Strategy → Design → Engineering → AI → Deployment → Scale — one continuous path from discovery through production.
            </p>
          </div>
        </div>
      </Section>

      {/* Insights section omitted — empty at launch per copy rules */}

      <FinalCTA />
    </>
  );
}
