import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { services } from "@/data/services";
import { CTAS } from "@/lib/site";
import { SERVICE_ACCENTS } from "@/lib/accents";

export const metadata: Metadata = {
  title: "What We Do",
  description:
    "Eight capabilities from AI and product engineering to SaaS, cloud, data, and quality — built around business outcomes from strategy through production.",
  alternates: { canonical: "/services" },
};

export default function ServicesHubPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary section-pad !pt-12">
        <div className="pointer-events-none absolute inset-0 hero-mesh opacity-50" />
        <div className="container-insol relative">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "What We Do" }]}
          />
          <h1 className="text-display max-w-3xl">
            Technology built around your business.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            Every engagement starts with the outcome you need — then we design the
            architecture, engineer the product, apply AI where it earns its place,
            and leave you with systems your teams can run and evolve.
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
        <SectionHeader title="Our capabilities" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.shortDescription}
              outcome={s.businessOutcome}
              chips={s.chips}
              href={`/services/${s.slug}`}
              accent={SERVICE_ACCENTS[s.slug] ?? "burgundy"}
            />
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
