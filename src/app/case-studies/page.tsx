import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { CTAS } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Selected InSol Technologies engagements — challenge, approach, and outcomes we can stand behind. Published only when cleared for public use.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-primary section-pad !pt-12">
        <div className="container-insol">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
          />
          <h1 className="text-display max-w-3xl">
            Work that stands up to scrutiny.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            We publish case studies only when challenge, approach, and outcomes are
            cleared for public use.
          </p>
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader title="Case studies in preparation" />
        <div className="card-surface max-w-2xl p-8 hover:transform-none hover:shadow-none">
          <p className="text-text-secondary">
            No public case studies are live yet. We do not invent clients, metrics,
            or awards. Discuss relevant engagements under NDA, or return as cleared
            work is published.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={CTAS.talkExpert.href}>{CTAS.talkExpert.label}</Button>
            <Button href={CTAS.startProject.href} variant="secondary">
              {CTAS.startProject.label}
            </Button>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
