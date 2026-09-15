import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Section, SectionHeader } from "@/components/Section";
import { ProcessStepper } from "@/components/ProcessStepper";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FrameStrip } from "@/components/FrameStrip";
import { CTAS } from "@/lib/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Approach | Discover to Scale",
  description:
    "How InSol Technologies works: Discover → Strategize → Design → Build → Deploy → Scale — a transparent partnership from problem framing through production.",
  alternates: { canonical: "/about/approach" },
};

export default function ApproachPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary section-pad !pt-12">
        <div className="container-insol relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Our Approach" },
            ]}
          />
          <p className="eyebrow mb-3">About · Our Approach</p>
          <h1 className="text-display max-w-4xl">
            A clear path from problem to production.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            We work in a transparent sequence so stakeholders always know what happens
            next — and why. Strategy, design, engineering, practical AI, deployment,
            and scale are one continuous partnership, not handoff theater.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={CTAS.startProject.href}>{CTAS.startProject.label}</Button>
            <Button href={CTAS.talkExpert.href} variant="secondary">
              {CTAS.talkExpert.label}
            </Button>
          </div>
          <FrameStrip className="mt-10" />
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader
          title="How we partner — without the body-shop script."
          intro="Many vendors sell “resources.” We sell a path to working systems: shared problem framing, architecture you can defend, delivery you can review, and operational readiness when you go live."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-surface p-6 hover:transform-none hover:shadow-none">
            <h3 className="font-semibold text-accent">We do</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>Start with business outcomes and constraints</li>
              <li>Keep design and architecture aligned</li>
              <li>Build in iterations you can inspect</li>
              <li>Treat AI and SaaS as real engineering</li>
              <li>Plan for Deploy and Scale from day one</li>
            </ul>
          </div>
          <div className="card-surface p-6 hover:transform-none hover:shadow-none">
            <h3 className="font-semibold text-text-muted">We don’t</h3>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              <li>Lead with a tool list or resume dump</li>
              <li>Treat UI and systems as separate silos</li>
              <li>Disappear until a big-bang reveal</li>
              <li>Ship demos that cannot run in production</li>
              <li>Treat go-live as the end of the relationship</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Six steps. One partnership." />
        <ProcessStepper closing="Discover → Strategize → Design → Build → Deploy → Scale — continuous ownership, not a relay race of vendors." />
      </Section>

      <Section band="secondary">
        <SectionHeader
          title="Capabilities inside the path — not a separate brochure."
        />
        <div className="flex flex-wrap gap-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-[10px] border border-border-strong px-4 py-2 text-sm text-text-secondary hover:border-accent hover:text-accent"
            >
              {s.title}
            </Link>
          ))}
        </div>
        <Button href="/services" className="mt-8" variant="secondary">
          Explore capabilities
        </Button>
      </Section>

      <Section>
        <SectionHeader title="How engagements typically start." />
        <p className="max-w-3xl text-text-secondary">
          Most work begins with a focused discovery or strategy conversation, then a
          scoped build, modernization, or SaaS product path. Team composition and
          commercial model follow the problem — not a one-size catalog.
        </p>
        <Button href={CTAS.talkExpert.href} className="mt-6">
          {CTAS.talkExpert.label}
        </Button>
      </Section>

      <FinalCTA
        headline="Let’s map your path."
        support="Share the problem you’re solving. We’ll tell you where we’d start — Discover, Strategize, or a tighter Build path — and what we need from you."
      />
    </>
  );
}
