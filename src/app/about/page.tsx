import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FrameStrip } from "@/components/FrameStrip";
import { CTAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About InSol Technologies | Our Story",
  description:
    "Why InSol Technologies exists: a technology, AI and software engineering partner helping businesses build, modernize, and scale — from strategy through production.",
  alternates: { canonical: "/about" },
};

const problems = [
  {
    problem: "Legacy systems that resist change",
    response: "Modernization and product engineering with clear architecture boundaries",
  },
  {
    problem: "Manual workflows that drain capacity",
    response: "Intelligent automation and AI applied to defined operational jobs",
  },
  {
    problem: "SaaS products that stall before scale",
    response: "SaaS product engineering — multi-tenant foundations, operable platforms",
  },
  {
    problem: "Data no one trusts for decisions",
    response: "Pipelines, quality, and analytics that produce explainable pictures",
  },
  {
    problem: "Cloud and release risk",
    response: "DevOps, observability, and operational readiness as part of delivery",
  },
  {
    problem: "Disconnected enterprise apps",
    response: "Integration and extension so processes connect instead of spreadsheet bridges",
  },
];

const beliefs = [
  {
    title: "Outcomes before stacks",
    body: "Technology follows the operating problem. We clarify success criteria before locking tools.",
  },
  {
    title: "Engineering that lasts",
    body: "Products, platforms, SaaS systems, and integrations should survive the next roadmap — not expire after the demo.",
  },
  {
    title: "Practical AI, not AI theater",
    body: "GenAI, agents, automation, ML, and NLP only ship when they map to a clear business job, with evaluation and oversight.",
  },
  {
    title: "Foundations are first-class",
    body: "Cloud, data, and quality are part of delivery — not afterthoughts bolted on before go-live.",
  },
  {
    title: "Partnership beyond launch",
    body: "Strategy → Design → Engineering → AI → Deployment → Scale is a relationship model, not a handoff slogan.",
  },
  {
    title: "Honesty over hype",
    body: "We will not invent proof, inflate markets, or promise what the system cannot do.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary section-pad !pt-12">
        <div className="pointer-events-none absolute inset-0 gradient-glow opacity-50" />
        <div className="container-insol relative">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <p className="eyebrow mb-3">About InSol Technologies</p>
          <h1 className="text-display max-w-4xl">
            Built to turn ambition into working systems.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            InSol Technologies exists to help organizations move from fragmented tools
            and aging systems to software, AI, SaaS products, and cloud foundations
            they can actually run — with clarity in discovery, rigor in engineering,
            and honesty about what technology can and cannot do.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={CTAS.startProject.href} size="lg">
              {CTAS.startProject.label}
            </Button>
            <Button href={CTAS.talkExpert.href} variant="secondary" size="lg">
              {CTAS.talkExpert.label}
            </Button>
          </div>
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader title="Why InSol Technologies exists." />
        <div className="max-w-3xl space-y-4 text-body-lg text-text-secondary">
          <p>
            Most organizations do not lack tools. They lack coherent systems —
            platforms that match how the business works, data people trust, automation
            that reduces real toil, and a path from idea to production that
            stakeholders can follow.
          </p>
          <p>
            Founded by <strong className="text-text">Innam Dustgir</strong>, InSol
            Technologies was built as a technology, AI and software engineering partner
            for that gap: modernize what holds you back, build what you need next —
            including SaaS products — apply practical AI where it earns its place, and
            leave you with foundations your teams can operate and evolve.
          </p>
        </div>
        <FrameStrip className="mt-8" />
      </Section>

      <Section>
        <SectionHeader
          title="The problems we show up for."
          intro="We engage when the cost of fragmented systems, slow delivery, or unclear AI bets starts to outweigh the cost of doing the work properly."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {problems.map((row) => (
            <div
              key={row.problem}
              className="card-surface p-6 hover:transform-none hover:shadow-none"
            >
              <h3 className="font-semibold text-text">{row.problem}</h3>
              <p className="mt-2 text-sm text-text-secondary">{row.response}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-text-secondary">
          Every engagement starts with the outcome you need — then architecture,
          engineering, and AI follow.
        </p>
      </Section>

      <Section band="secondary">
        <SectionHeader title="How the practice evolved." />
        <p className="max-w-3xl text-text-secondary">
          InSol Technologies’ work has grown around a consistent idea: technology
          partnerships should be measured in shipped outcomes, not slide decks. Under
          founder Innam Dustgir, we continue to deepen product engineering, SaaS
          products, practical AI, and modern foundations — always tied to business
          outcomes, never as catalog theater. Specific milestones appear here once
          leadership clears the fact pack.
        </p>
      </Section>

      <Section>
        <SectionHeader
          title="What we believe."
          intro="Beliefs we can stand behind in how we sell and how we deliver."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((b, i) => (
            <div
              key={b.title}
              className="card-surface p-6 hover:transform-none hover:shadow-none"
            >
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-semibold text-text">{b.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section band="secondary">
        <SectionHeader title="Where we’re going." />
        <p className="max-w-3xl text-text-secondary">
          We intend to remain a partner organizations trust for modernization, product
          engineering, SaaS products, and practical AI — deepening industry context
          where we have real delivery experience, and refusing work that is only
          buzzword theater.
        </p>
        <ul className="mt-6 max-w-2xl space-y-2 text-sm text-text-secondary">
          <li>• Stronger proof surfaces (permissioned case studies, verified partnerships)</li>
          <li>• Deeper AI-in-delivery and SaaS product capability</li>
          <li>• Clearer industry journeys from problem → capability → case studies</li>
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={CTAS.startProject.href}>{CTAS.startProject.label}</Button>
          <Button href="/about/approach" variant="secondary">
            Our Approach
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Reach InSol Technologies." />
        <div className="card-surface max-w-xl p-8 hover:transform-none hover:shadow-none">
          <p className="text-text">{SITE.address.full}</p>
          <p className="mt-2">
            <a href={SITE.phoneHref} className="text-accent hover:text-accent-hover">
              {SITE.phone}
            </a>
          </p>
          <Button href="/contact" className="mt-6">
            Contact
          </Button>
        </div>
      </Section>

      <Section band="secondary">
        <p className="eyebrow mb-3">Careers</p>
        <h2 className="text-h2">Build systems that matter — with us.</h2>
        <p className="mt-4 max-w-2xl text-text-secondary">
          We’re looking for people who care about craft, clarity, and shipped outcomes.
          If you want engineering depth without the body-shop theater, see what’s open.
        </p>
        <Button href="/careers" className="mt-6" variant="secondary">
          View Careers
        </Button>
      </Section>

      <Section>
        <SectionHeader title="Explore more" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/about/leadership",
              title: "Leadership",
              line: "The people accountable for how we partner and deliver.",
            },
            {
              href: "/about/approach",
              title: "Our Approach",
              line: "How Discover → Scale shows up in real engagements.",
            },
            {
              href: "/careers",
              title: "Careers",
              line: "Roles for builders who want outcome ownership.",
            },
            {
              href: "/case-studies",
              title: "Case Studies",
              line: "Work we can stand behind — when cleared for public use.",
            },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="card-surface group p-5">
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{item.line}</p>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
