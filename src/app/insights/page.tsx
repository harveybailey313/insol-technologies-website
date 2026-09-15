import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on building and modernizing — AI, software engineering, digital transformation, cloud, data, cybersecurity, and SaaS.",
  alternates: { canonical: "/insights" },
};

const categories = [
  "AI",
  "Software Engineering",
  "Digital Transformation",
  "Cloud",
  "Data",
  "Cybersecurity",
  "SaaS",
];

export default function InsightsPage() {
  return (
    <>
      <section className="bg-primary section-pad !pt-12">
        <div className="container-insol">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Insights" }]}
          />
          <h1 className="text-display max-w-3xl">
            Perspectives on building and modernizing.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            Coming soon. We will publish articles when they meet our editorial bar —
            no fabricated blog cards.
          </p>
        </div>
      </section>

      <Section band="secondary">
        <p className="eyebrow mb-4">Categories</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="chip !font-sans">
              {c}
            </span>
          ))}
        </div>
        <div className="card-surface mt-10 max-w-xl p-8 hover:transform-none hover:shadow-none">
          <h2 className="text-h3">Insights hub launching soon</h2>
          <p className="mt-3 text-text-secondary">
            Check back for practical writing on AI, engineering, cloud, data, and
            SaaS — grounded in real delivery, not buzzword theater.
          </p>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
