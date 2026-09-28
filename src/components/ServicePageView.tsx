import Link from "next/link";
import { Button } from "./Button";
import { Section, SectionHeader } from "./Section";
import { ProcessStepper } from "./ProcessStepper";
import { FinalCTA } from "./FinalCTA";
import { Breadcrumb } from "./Breadcrumb";
import { FAQ, faqJsonLd } from "./FAQ";
import { FrameStrip } from "./FrameStrip";
import type { Service } from "@/data/services";
import { getRelatedServices } from "@/data/services";
import { industries } from "@/data/industries";
import { CTAS } from "@/lib/site";
import { absUrl, ORG_ID } from "@/lib/jsonld";
import { insights } from "@/data/insights";

export function ServicePageView({ service }: { service: Service }) {
  const related = getRelatedServices(service.relatedSlugs);
  const relatedInsights = insights.filter((a) =>
    a.relatedServices.includes(service.slug)
  );
  const relatedIndustries = industries.filter(
    (i) => service.industryLines[i.slug]
  );

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    url: absUrl(`/services/${service.slug}`),
    description: service.metaDescription,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United States" },
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(service.faqs)),
        }}
      />

      <section className="theme-dark inner-hero relative overflow-hidden section-pad !pt-12 lg:!pt-16">
        <div className="pointer-events-none absolute inset-0 gradient-glow opacity-50" />
        <div className="container-insol relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <p className="eyebrow mb-3">Services</p>
          <h1 className="text-display max-w-4xl">{service.h1}</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            {service.heroSupport}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={CTAS.startProject.href} size="lg">
              {CTAS.startProject.label}
            </Button>
            <Button href={CTAS.talkExpert.href} variant="secondary" size="lg">
              {CTAS.talkExpert.label}
            </Button>
          </div>
          <FrameStrip className="mt-10" />
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader title="The challenge" intro={service.problemIntro} />
        <ul className="grid gap-4 md:grid-cols-2">
          {service.problems.map((p) => (
            <li
              key={p}
              className="card-surface p-5 text-sm leading-relaxed text-text-secondary hover:transform-none hover:shadow-none"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader title="What you get" />
        <ul className="mb-8 space-y-3">
          {service.deliverables.map((d) => (
            <li key={d} className="flex gap-3 text-text-secondary">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
        <p className="max-w-3xl text-body-lg text-text-secondary">
          {service.outcomeParagraph}
        </p>
      </Section>

      <Section band="secondary">
        <SectionHeader
          title="Capabilities"
          intro="Capabilities in this pillar — mapped to outcomes, not buzzwords."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.capabilities.map((c) => (
            <div
              key={c.name}
              className="card-surface p-5 hover:transform-none hover:shadow-none"
            >
              <h3 className="font-semibold text-text">{c.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{c.outcome}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Technology we work with" />
        <p className="max-w-3xl text-text-secondary">{service.stackFallback}</p>
      </Section>

      <Section band="secondary">
        <SectionHeader
          title={service.howWeWorkNote || "How we work"}
          intro="We reuse a transparent Discover → Scale path so stakeholders always know what happens next."
        />
        <ProcessStepper closing="" />
        <Link
          href="/about/approach"
          className="mt-6 inline-flex text-sm font-semibold text-accent hover:text-accent-hover"
        >
          Our Approach →
        </Link>
      </Section>

      <Section>
        <SectionHeader
          title="Where this tends to apply"
          intro="Typical engagement types this service is designed for."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.useCases.map((u) => (
            <div
              key={u.name}
              className="card-surface p-5 hover:transform-none hover:shadow-none"
            >
              <h3 className="font-semibold text-text">{u.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{u.shape}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section band="secondary">
        <SectionHeader title={`Industry context for ${service.title}`} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedIndustries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="card-surface group p-5"
            >
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {ind.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {service.industryLines[ind.slug]}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Relevant experience" />
        <div className="card-surface max-w-2xl p-6 hover:transform-none hover:shadow-none">
          <p className="text-text-secondary">
            Much of our client work is under NDA. Tell us about your situation and
            we will share relevant experience in a confidential conversation.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button href={CTAS.talkExpert.href} variant="secondary">
              {CTAS.talkExpert.label}
            </Button>
          </div>
        </div>
      </Section>

      <Section band="secondary">
        <SectionHeader title={`Why teams choose InSol Technologies for ${service.title.split(" ")[0] === "AI" ? "AI" : service.title}`} />
        <ol className="grid gap-4 sm:grid-cols-2">
          {service.whyItems.map((item, i) => (
            <li
              key={item}
              className="card-surface p-5 hover:transform-none hover:shadow-none"
            >
              <span className="font-mono text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-medium text-text">{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <FAQ items={service.faqs} title="Questions buyers usually ask" />
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

      {related.length > 0 && (
        <Section>
          <SectionHeader title="Related capabilities" />
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="rounded-[10px] border border-border-strong px-4 py-2 text-sm text-text-secondary hover:border-accent hover:text-accent"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </Section>
      )}

      <FinalCTA headline={service.ctaHeadline} support={service.ctaSupport} />
    </>
  );
}
