import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { industries } from "@/data/industries";
import { CTAS } from "@/lib/site";
import { INDUSTRY_ACCENTS, accentClass } from "@/lib/accents";
import { pageMetadata } from "@/lib/seo";
import { References, REFS, HeroMark } from "@/components/References";

export const metadata = pageMetadata({
  title: "Industries We Serve: Healthcare to SaaS",
  description:
    "Software, AI, and cloud engineering shaped for healthcare, e-commerce, travel and hospitality, and technology companies, not generic playbooks.",
  path: "/industries",
});

export default function IndustriesHubPage() {
  return (
    <>
      <section className="theme-dark inner-hero relative overflow-hidden section-pad !pt-12 lg:!pt-16">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-50" />
        <div className="container-insol relative">
          <HeroMark alt="Industries served by InSol Technologies" />
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
          />
          <h1 className="text-display max-w-3xl">
            Industry context, not generic playbooks.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            The industries we serve include healthcare, ecommerce, travel and hospitality, and technology and SaaS.
            We frame technology around the pressures your sector actually faces —
            then apply the capabilities that fit.
          </p>
          <Button href={CTAS.startProject.href} className="mt-8">
            {CTAS.startProject.label}
          </Button>
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader title="Sectors we serve" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((ind) => {
            const accent = INDUSTRY_ACCENTS[ind.slug] ?? "cyan";
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className={`card-surface accent-card group flex flex-col p-6 md:p-8 ${accentClass(accent)}`}
              >
                <h2 className="text-h3 mb-4 transition-colors group-hover:text-[var(--card-accent)]">
                  {ind.title}
                </h2>
                <p className="text-sm text-text-secondary">{ind.challenge}</p>
                <span className="accent-text mt-6 inline-flex text-sm font-semibold">
                  Explore industry →
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section band="secondary">
        <SectionHeader title="How industry context shapes the work" />
        <div className="max-w-3xl space-y-4 text-text-secondary">
          <p>
            The same engineering services look different in each industry. Healthcare software has to protect patient data and support audit trails. Ecommerce platforms have to stay fast and correct at checkout during peak demand. Travel products depend on many third-party supplier integrations. Technology and SaaS companies need multi-tenant architecture, billing, and release practices that scale.
          </p>
          <p>
            We start every engagement by understanding those constraints, then choose the services that fit: custom software development, SaaS product development, AI automation, cloud and DevOps, data and analytics, or quality engineering. Each industry page explains the challenges we see and how we apply our capabilities to them.
          </p>
        </div>
      </Section>

      <References items={[REFS.nistCsf, REFS.nistPrivacy, REFS.wcag]} />
      <FinalCTA />
    </>
  );
}
