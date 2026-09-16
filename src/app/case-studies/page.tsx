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

const publishCriteria = [
  "Client (or authorized stakeholder) has cleared the narrative for public use",
  "Challenge, approach, and outcomes can be stated honestly — no invented metrics",
  "No confidential architecture, data, or competitive detail is exposed without approval",
  "Named logos and quotes appear only with explicit permission",
];

const caseStudyIncludes = [
  "Business context and the problem we were asked to solve",
  "Constraints that shaped the approach (systems, timeline, risk)",
  "What we designed and built — at a level safe to publish",
  "Outcomes we can stand behind (qualitative or quantitative when cleared)",
  "What we would advise similar teams facing the same class of problem",
];

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
            cleared for public use. Until then, this hub stays empty of invented
            clients, logos, and results.
          </p>
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader
          title="No public case studies yet"
          intro="Discuss relevant engagements under NDA, or return as cleared work is published. We do not invent clients, metrics, awards, or testimonials."
        />
        <div className="card-surface max-w-2xl p-8 hover:transform-none hover:shadow-none">
          <p className="text-text-secondary">
            If you need proof of fit for an active opportunity, talk with us
            confidentially. We can share appropriately scoped references when
            mutual interest and confidentiality allow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={CTAS.talkExpert.href}>{CTAS.talkExpert.label}</Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
            <Button href={CTAS.startProject.href} variant="ghost">
              {CTAS.startProject.label}
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-h3">When we publish</h2>
            <p className="mt-3 text-text-secondary">
              A case study goes live only when it meets our bar. That keeps this
              page useful — and trustworthy — when entries appear.
            </p>
            <ul className="mt-5 space-y-3">
              {publishCriteria.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h3">What a published case study includes</h2>
            <p className="mt-3 text-text-secondary">
              Structure we use when a story is cleared — still zero fabricated
              projects.
            </p>
            <ul className="mt-5 space-y-3">
              {caseStudyIncludes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
