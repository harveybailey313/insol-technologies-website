import type { Metadata } from "next";
import { CaseSafe } from "@/components/CaseSafe";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FinalCTA } from "@/components/FinalCTA";
import { insights, getInsight } from "@/data/insights";
import { pageMetadata, stripBrandSuffix } from "@/lib/seo";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { SITE } from "@/lib/site";
import { absUrl, ORG_ID, OG_DEFAULT } from "@/lib/jsonld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return {};
  return pageMetadata({
    title: stripBrandSuffix(article.seoTitle ?? article.title),
    description: article.description,
    path: `/insights/${article.slug}`,
    ogType: "article",
    publishedTime: article.date,
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

  const url = absUrl(`/insights/${article.slug}`);
  const relatedServices = services.filter((s) =>
    article.relatedServices.includes(s.slug)
  );
  const relatedIndustries = industries.filter((i) =>
    article.relatedIndustries.includes(i.slug)
  );
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: [OG_DEFAULT],
    articleSection: article.category,
    inLanguage: "en-US",
    author: { "@type": "Organization", "@id": ORG_ID, name: SITE.name, url: `${SITE.url}/` },
    publisher: { "@id": ORG_ID },
    about: relatedServices.map((s) => ({
      "@type": "Service",
      name: s.title,
      url: absUrl(`/services/${s.slug}`),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <section className="theme-dark inner-hero relative overflow-hidden section-pad !pt-12 lg:!pt-16">
        <div className="container-insol">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: article.title },
            ]}
          />
          <p className="eyebrow mb-4"><CaseSafe text={article.category} /></p>
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
          {(relatedServices.length > 0 || relatedIndustries.length > 0) && (
            <aside
              aria-labelledby="related-heading"
              className="mt-12 border-t border-border pt-8"
            >
              <h2 id="related-heading" className="text-h3 text-text">
                Related services and industries
              </h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="inline-block rounded-[10px] border border-border-strong px-4 py-2 text-sm text-text-secondary hover:border-accent hover:text-accent"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
                {relatedIndustries.map((i) => (
                  <li key={i.slug}>
                    <Link
                      href={`/industries/${i.slug}`}
                      className="inline-block rounded-[10px] border border-border-strong px-4 py-2 text-sm text-text-secondary hover:border-accent hover:text-accent"
                    >
                      {i.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
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
