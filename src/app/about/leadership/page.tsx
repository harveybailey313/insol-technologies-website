import Link from "next/link";
import { Button } from "@/components/Button";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTAS, SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Leadership",
  description:
    "Leadership at InSol Technologies Inc. — Innam Dustgir, Founder & CEO, accountable for how we partner, engineer, and deliver from strategy through production.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary section-pad !pt-12">
        <div className="container-insol relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Leadership" },
            ]}
          />
          <p className="eyebrow mb-3">About · Leadership</p>
          <h1 className="text-display max-w-3xl">
            Leadership accountable for outcomes.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            InSol Technologies’ public leadership starts with founder{" "}
            <strong className="text-text">Innam Dustgir</strong> — accountable for how
            we frame problems, how we engineer, and how we partner after launch.
            Additional profiles publish only when cleared.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={CTAS.startProject.href}>{CTAS.startProject.label}</Button>
            <Button href={CTAS.talkExpert.href} variant="secondary">
              {CTAS.talkExpert.label}
            </Button>
          </div>
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader title="Leadership" />
        <div className="card-surface max-w-xl p-8 hover:transform-none hover:shadow-none">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-surface-elevated text-2xl font-semibold text-accent">
            ID
          </div>
          <h2 className="text-h3">Innam Dustgir</h2>
          <p className="mt-1 text-sm text-accent">Founder &amp; CEO</p>
          <p className="mt-4 text-text-secondary">
            Founder &amp; CEO of InSol Technologies — accountable for how we partner,
            engineer, and deliver from strategy through production.
          </p>
          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5">
            <Link
              href="/founder"
              className="inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
            >
              Read the Founder page →
            </Link>
            <a
              href="https://www.innamdustgir.com/"
              className="inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
              rel="noopener noreferrer"
              target="_blank"
            >
              Official site — Innam Dustgir
            </a>
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-sm text-text-muted">
          Additional leadership profiles publish when approved. For partnership
          conversations, contact us.
        </p>
        <Button href={CTAS.talkExpert.href} className="mt-4" variant="ghost">
          {CTAS.talkExpert.label}
        </Button>
      </Section>

      <Section>
        <SectionHeader title="How leadership stays close to the work." />
        <p className="max-w-3xl text-text-secondary">
          Enterprise buyers should know who is accountable. Our model keeps senior
          ownership on problem framing, architecture risk, and partnership quality —
          not only on the first sales meeting.
        </p>
        <Link
          href="/about/approach"
          className="mt-6 inline-flex text-sm font-semibold text-accent"
        >
          Our Approach →
        </Link>
      </Section>

      <Section band="secondary">
        <h2 className="text-h2">Join the people building what’s next.</h2>
        <Button href="/careers" className="mt-6" variant="secondary">
          View Careers
        </Button>
      </Section>

      <FinalCTA />
      <p className="sr-only">
        {SITE.phone} · {SITE.address.full}
      </p>
    </>
  );
}
