import Link from "next/link";
import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { insights } from "@/data/insights";
import { pageMetadata } from "@/lib/seo";
import { accentAt, accentClass } from "@/lib/accents";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Perspectives from InSol Technologies on software engineering, practical AI, SaaS, cloud, data, and modernization — written for teams who ship.",
  path: "/insights",
});

const categories = [
  "AI",
  "Software Engineering",
  "Digital Transformation",
  "Cloud",
  "Data",
  "Cybersecurity",
  "SaaS",
];

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function InsightsPage() {
  const sorted = [...insights].sort((a, b) => b.date.localeCompare(a.date));

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
            Practical writing on AI, engineering, SaaS, cloud, and data —
            grounded in how teams ship, not buzzword theater.
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

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {sorted.map((article, i) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className={`card-surface accent-card block p-6 transition-transform hover:-translate-y-0.5 ${accentClass(accentAt(i))}`}
            >
              <p className="accent-text text-xs font-semibold uppercase tracking-wide">
                {article.category}
              </p>
              <h2 className="mt-2 text-lg font-semibold text-text">
                {article.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {article.description}
              </p>
              <p className="mt-4 text-xs text-text-muted">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
