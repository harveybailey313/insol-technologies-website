import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BASE_PATH, CTAS, SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { References, REFS, HeroMark } from "@/components/References";

export const metadata = pageMetadata({
  title: "Leadership — Founder-Led Delivery",
  description:
    "Leadership at InSol Technologies Inc. — Innam Dustgir, Founder & CEO, accountable for how we partner, engineer, and deliver from strategy through production.",
  path: "/about/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <section className="theme-dark inner-hero relative overflow-hidden section-pad !pt-12 lg:!pt-16">
        <div className="container-insol relative">
          <HeroMark alt="InSol Technologies leadership" />
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
        <SectionHeader title="Leadership at InSol Technologies" />
        <div className="card-surface max-w-xl p-8 hover:transform-none hover:shadow-none">
          <div className="relative mb-5 h-20 w-20 overflow-hidden rounded-full border border-border">
            <Image
              src={`${BASE_PATH}/brand/innam-dustgir-founder.webp`}
              alt="Innam Dustgir, Founder & CEO of InSol Technologies"
              fill
              sizes="80px"
              className="object-cover object-top"
            />
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
          For partnership conversations, reach out and we will set up a call.
        </p>
        <Button href={CTAS.talkExpert.href} className="mt-4" variant="ghost">
          {CTAS.talkExpert.label}
        </Button>
      </Section>

      <Section>
        <SectionHeader title="About the founder" />
        <div className="max-w-3xl space-y-4 text-text-secondary">
          <p>
            Innam Dustgir founded InSol Technologies in 2025 and leads it as Founder &amp; CEO. He has spent 12 years building businesses across technology, AI, healthcare, digital growth, and SaaS, and studied Computer Science at COMSATS.
          </p>
          <p>
            Before InSol, he founded Sirajia Sol in 2017, a digital and IT growth agency. He is also the Founder of DeepWall. That background shapes how InSol works: clear ownership, honest scoping, and delivery that a client’s own team can run after launch.
          </p>
          <p>
            At InSol, leadership stays involved where the risk is highest: framing the problem, reviewing architecture decisions, and making sure each engagement has a named owner from discovery through production.
          </p>
        </div>
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

      <References items={[REFS.agile, REFS.dora]} />
      <FinalCTA />
      <p className="sr-only">
        {SITE.phone} · {SITE.address.full}
      </p>
    </>
  );
}
