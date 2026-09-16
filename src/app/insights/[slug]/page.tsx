import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FinalCTA } from "@/components/FinalCTA";
import { insights, getInsight } from "@/data/insights";
import { pageMetadata, stripBrandSuffix } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return pageMetadata({
    title: stripBrandSuffix(article.title),
    description: article.description,
    path: `/insights/${article.slug}`,
  });
}

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-primary section-pad !pt-12">
        <div className="container-insol">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: article.title },
            ]}
          />
          <p className="eyebrow mb-4">{article.category}</p>
          <h1 className="text-display max-w-3xl">{article.title}</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            {article.description}
          </p>
          <p className="mt-4 text-sm text-text-muted">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {" · "}
            InSol Technologies
          </p>
        </div>
      </section>

      <Section band="secondary">
        <article className="mx-auto max-w-3xl">
          {article.body.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-h3 text-text">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mt-4 text-base leading-relaxed text-text-secondary"
                >
                  {p}
                </p>
              ))}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary">
                  {section.bullets.map((b) => (
                    <li key={b} className="leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <p className="mt-12 border-t border-border pt-6 text-sm text-text-muted">
            <Link href="/insights" className="font-semibold text-accent hover:text-accent-hover">
              ← All insights
            </Link>
          </p>
        </article>
      </Section>

      <FinalCTA />
    </>
  );
}
