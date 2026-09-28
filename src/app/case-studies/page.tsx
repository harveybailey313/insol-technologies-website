import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { CTAS } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "InSol Technologies case studies — challenge, approach, and outcomes, published with client approval. Ask us about relevant work under NDA.",
  path: "/case-studies",
});

const publishCriteria = [
  "The client (or an authorized stakeholder) has approved the story for public use",
  "Challenge, approach, and outcomes can be stated honestly — no invented metrics",
  "No confidential architecture, data, or competitive detail is exposed without approval",
  "Named logos and quotes appear only with explicit permission",
];

const caseStudyIncludes = [
  "Business context and the problem we were asked to solve",
  "Constraints that shaped the approach (systems, timeline, risk)",
  "What we designed and built — at a level safe to publish",
  "Outcomes we can stand behind (qualitative, or quantitative when approved)",
  "What we would advise similar teams facing the same class of problem",
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="theme-dark inner-hero relative overflow-hidden section-pad !pt-12 lg:!pt-16">
        <div className="container-insol">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
          />
          <h1 className="text-display max-w-3xl">
            Work that stands up to scrutiny.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            We publish case studies only when the client approves the challenge,
            approach, and outcomes for public use. Much of our work is under NDA,
            so we are happy to discuss relevant experience directly.
          </p>
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader
          title="No public case studies yet"
          intro="Published case studies will appear here as clients approve them. In the meantime, we can discuss relevant engagements under NDA."
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
              The structure every published InSol Technologies case study follows.
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
