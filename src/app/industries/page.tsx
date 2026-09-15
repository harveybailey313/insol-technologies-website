import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { industries } from "@/data/industries";
import { CTAS } from "@/lib/site";
import { INDUSTRY_ACCENTS, accentClass } from "@/lib/accents";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industry context for Healthcare, Financial Services, E-commerce, Travel & Hospitality, and Technology — not generic playbooks.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesHubPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary section-pad !pt-12">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-50" />
        <div className="container-insol relative">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
          />
          <h1 className="text-display max-w-3xl">
            Industry context, not generic playbooks.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
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

      <FinalCTA />
    </>
  );
}
