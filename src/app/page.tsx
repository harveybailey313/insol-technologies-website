import Image from "next/image";
import { CaseSafe } from "@/components/CaseSafe";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Arrow } from "@/components/Arrow";
import { HeroArt } from "@/components/HeroArt";
import { FinalCTA } from "@/components/FinalCTA";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { insights } from "@/data/insights";
import { BASE_PATH, CTAS, PROCESS_STEPS, SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: {
    absolute: "InSol Technologies | Software Engineering, AI & Cloud",
  },
  description: SITE.description,
  path: "/",
});

/** Concise homepage summaries, keyed by service slug (order follows services.ts). */
const serviceSummaries: Record<string, string> = {
  "ai-intelligent-automation":
    "Generative AI, agents, and automation built into the workflows your teams already use, with evaluation and human oversight.",
  "product-engineering":
    "Custom platforms and business applications with clear architecture and codebases your team can maintain.",
  "web-mobile-development":
    "Fast, accessible web and mobile products, plus the APIs behind them.",
  "cloud-devops":
    "Cloud architecture, infrastructure as code, CI/CD, and observability for safer, more frequent releases.",
  "data-analytics":
    "Pipelines, warehouses, and dashboards that give leaders numbers they can trust.",
  "enterprise-applications":
    "ERP, CRM, and integration work that connects processes instead of adding more tools.",
  "quality-engineering":
    "Test automation, performance testing, and quality gates that make releases routine.",
  "saas-products":
    "Multi-tenant SaaS, from product architecture and MVP to a platform ready for growth.",
};

const aiCapabilities = [
  "Generative AI assistants",
  "AI agents with approvals",
  "Intelligent process automation",
  "Document understanding (NLP)",
  "Machine learning models",
  "AI integration with systems of record",
  "Evaluation and monitoring",
  "Governance and human oversight",
];

const facts = [
  { value: "8", label: "Connected service lines across software, AI, cloud, and data" },
  { value: "4", label: "Industry focus areas, from healthcare to technology companies" },
  { value: "6", label: "Steps in one delivery model, from discovery to scale" },
];

const cardArt = [
  "radial-gradient(120% 90% at 100% 100%, rgba(161,0,255,0.6), transparent 60%), radial-gradient(90% 80% at 0% 100%, rgba(215,110,235,0.45), transparent 60%), #262b3f",
  "radial-gradient(120% 90% at 0% 100%, rgba(119,37,135,0.75), transparent 60%), radial-gradient(90% 80% at 100% 0%, rgba(242,98,35,0.35), transparent 60%), #262b3f",
  "radial-gradient(120% 90% at 50% 120%, rgba(215,110,235,0.6), transparent 60%), radial-gradient(90% 80% at 100% 0%, rgba(161,0,255,0.45), transparent 60%), #262b3f",
];

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function HomePage() {
  const latest = [...insights].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="theme-dark relative isolate overflow-hidden">
        <HeroArt className="absolute inset-0 -z-10 h-full w-full" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#161616] via-[#161616]/80 to-transparent" />
        <div className="container-insol flex min-h-[620px] flex-col justify-center py-24 lg:min-h-[720px] lg:py-32">
          <p className="eyebrow mb-6">Software engineering · AI · Cloud</p>
          <h1 className="text-display max-w-4xl">
            We engineer the software and AI{" "}
            <span className="text-gradient">your business runs on.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            InSol Technologies designs, builds, and modernizes digital products, SaaS
            platforms, and intelligent systems, and stays accountable from the first
            workshop to production.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={CTAS.startProject.href} size="lg">
              {CTAS.startProject.label} <Arrow />
            </Button>
            <Button href={CTAS.exploreCapabilities.href} variant="secondary" size="lg">
              {CTAS.exploreCapabilities.label}
            </Button>
          </div>
        </div>
      </section>

      {/* Positioning + structural facts */}
      <section className="section-pad bg-primary">
        <div className="container-insol">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow mb-4">Who we are</p>
              <h2 className="text-h2">
                A technology partner, not a staffing vendor.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:pt-10">
              <p className="text-body-lg text-text-secondary">
                Most organizations already have plenty of tools. What they need are
                systems that fit how the business works, data people trust, and AI
                that holds up in production. InSol Technologies brings product
                thinking, engineering discipline, and practical AI together in one
                accountable team.
              </p>
              <Link href="/about" className="link-arrow mt-6">
                Our story <Arrow />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-3 lg:mt-20">
            {facts.map((f) => (
              <div key={f.value} className="rule-top">
                <p className="text-[3.5rem] font-medium leading-none tracking-[-0.03em] text-text lg:text-[4.25rem]">
                  {f.value}
                </p>
                <p className="mt-4 max-w-xs text-base text-text-secondary">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad band-wash">
        <div className="container-insol">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Services</p>
              <h2 className="text-h2">What we build and run</h2>
              <p className="mt-4 text-body-lg text-text-secondary">
                Eight service lines that work as one team, so strategy, engineering,
                AI, and operations never get lost between vendors.
              </p>
            </div>
            <Link href="/services" className="link-arrow shrink-0">
              View all services <Arrow />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card-surface group flex min-h-[260px] flex-col p-6 lg:p-7"
              >
                <span className="font-mono text-xs font-semibold text-text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.1875rem] font-semibold leading-snug tracking-[-0.01em] text-text transition-colors group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {serviceSummaries[s.slug] ?? s.businessOutcome}
                </p>
                <span className="link-arrow mt-auto pt-6">
                  Learn more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI spotlight */}
      <section className="theme-dark relative isolate overflow-hidden section-pad">
        <div className="hero-mesh absolute inset-0 -z-10 opacity-80" aria-hidden />
        <div className="container-insol grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">AI &amp; Intelligent Automation</p>
            <h2 className="text-h2">AI that ships as working software.</h2>
            <p className="mt-5 text-body-lg text-text-secondary">
              We start with the workflow, not the model. Then we connect AI to your
              data, identity, and systems of record, and add the evaluation,
              monitoring, and human oversight it needs to be trusted in daily
              operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services/ai-intelligent-automation">Explore AI services</Button>
              <Button href={CTAS.talkExpert.href} variant="secondary">
                {CTAS.talkExpert.label}
              </Button>
            </div>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-[12px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-7">
            {aiCapabilities.map((c, i) => (
              <li key={c} className="flex items-center gap-4 bg-[#161616]/85 p-5 lg:p-6">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.9375rem] font-medium text-white">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad bg-primary">
        <div className="container-insol grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Industries</p>
            <h2 className="text-h2">Industries we serve</h2>
            <p className="mt-5 text-body-lg text-text-secondary">
              Every sector has its own pressures, from regulation to peak demand. We
              apply the same engineering discipline with the context each one
              requires.
            </p>
            <Button href="/industries" variant="secondary" className="mt-8">
              All industries <Arrow />
            </Button>
          </div>
          <ul className="border-t border-border lg:col-span-7">
            {industries.map((ind) => (
              <li key={ind.slug} className="border-b border-border">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex items-start justify-between gap-6 py-6"
                >
                  <div>
                    <h3 className="text-h3 transition-colors group-hover:text-accent">
                      {ind.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
                      {ind.challenge}
                    </p>
                  </div>
                  <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-strong text-text transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Delivery model */}
      <section className="section-pad bg-secondary">
        <div className="container-insol">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4">How we work</p>
            <h2 className="text-h2">One delivery model, from discovery to scale</h2>
            <p className="mt-4 text-body-lg text-text-secondary">
              A clear, repeatable path, so business and technical stakeholders always
              know what happens next and why.
            </p>
          </div>
          <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <li key={step.number} className="rule-top">
                <span className="font-mono text-sm font-semibold text-accent">
                  {step.number}
                </span>
                <h3 className="mt-2 text-h3">{step.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
          <Link href="/about/approach" className="link-arrow mt-12">
            Our approach <Arrow />
          </Link>
        </div>
      </section>

      {/* Founder-led */}
      <section className="section-pad bg-primary">
        <div className="container-insol grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[12px] bg-secondary">
              <Image
                src={`${BASE_PATH}/brand/innam-dustgir-founder.jpg`}
                alt="Innam Dustgir, Founder and CEO of InSol Technologies"
                width={1200}
                height={1600}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#772587] via-[#a100ff] to-[#d76eeb]" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="text-h2">Founder-led, and accountable for the work.</h2>
            <p className="mt-5 text-body-lg text-text-secondary">
              InSol Technologies was founded by {SITE.founder}, who leads the company
              as Founder &amp; CEO. His view is simple: technology should solve real
              business problems, not add complexity. That shapes how we scope, how we
              engineer, and how we stay involved after launch.
            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-6 text-xl font-medium leading-snug text-text lg:text-2xl">
              “Great technology is not about building more. It is about building what
              matters.”
              <footer className="mt-3 text-sm font-semibold text-text-muted">
                {SITE.founder}, Founder &amp; CEO
              </footer>
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/founder" className="link-arrow">
                Meet the Founder <Arrow />
              </Link>
              <a
                href="https://www.innamdustgir.com/"
                className="text-sm font-semibold text-text-secondary underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent"
                rel="noopener noreferrer"
                target="_blank"
              >
                Official site — Innam Dustgir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-pad bg-secondary">
        <div className="container-insol">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">Insights</p>
              <h2 className="text-h2">Latest thinking</h2>
            </div>
            <Link href="/insights" className="link-arrow shrink-0">
              All insights <Arrow />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {latest.map((post, i) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[12px] bg-[#161616] text-white shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className="aspect-[16/9] transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ background: cardArt[i % cardArt.length] }}
                  aria-hidden
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-white/60">
                    <CaseSafe text={post.category} />
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
                  <p className="mt-auto pt-6 text-sm text-white/60">{formatDate(post.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
