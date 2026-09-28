import Link from "next/link";
import { Button } from "./Button";
import { Section, SectionHeader } from "./Section";
import { FinalCTA } from "./FinalCTA";
import { Breadcrumb } from "./Breadcrumb";
import type { Industry } from "@/data/industries";
import { services } from "@/data/services";
import { insights } from "@/data/insights";
import { CTAS } from "@/lib/site";

export function IndustryPageView({ industry }: { industry: Industry }) {
  const related = services.filter((s) =>
    industry.relatedServiceSlugs.includes(s.slug)
  );
  const relatedInsights = insights.filter((a) =>
    a.relatedIndustries.includes(industry.slug)
  );

  return (
    <>
      <section className="theme-dark inner-hero relative overflow-hidden section-pad !pt-12 lg:!pt-16">
        <div className="pointer-events-none absolute inset-0 gradient-glow opacity-40" />
        <div className="container-insol relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
          />
          <p className="eyebrow mb-3">Industries</p>
          <h1 className="text-display max-w-3xl">{industry.title}</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            {industry.heroSupport}
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
        <div className="grid gap-5 md:grid-cols-3">
          <div className="card-surface p-6 hover:transform-none hover:shadow-none">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Challenge
            </h2>
            <p className="mt-3 text-text-secondary">{industry.challenge}</p>
          </div>
          <div className="card-surface p-6 hover:transform-none hover:shadow-none">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Opportunity
            </h2>
            <p className="mt-3 text-text-secondary">{industry.opportunity}</p>
          </div>
          <div className="card-surface p-6 hover:transform-none hover:shadow-none">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
              Capability
            </h2>
            <p className="mt-3 text-text-secondary">{industry.capability}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title={`How we apply this in ${industry.title}`}
          intro="The InSol Technologies services most relevant to this sector."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card-surface group p-6"
            >
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {s.shortDescription}
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-accent">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {relatedInsights.length > 0 && (
        <Section band="secondary">
          <SectionHeader title="Related insights" />
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedInsights.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="card-surface group p-5"
              >
                <h3 className="font-semibold group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">{a.description}</p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <FinalCTA
        headline={`Ready to apply technology in ${industry.title}?`}
        support="Tell us the pressure you’re facing. We’ll respond with clear next steps — not a generic playbook."
      />
    </>
  );
}
