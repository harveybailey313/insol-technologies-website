import type { Metadata } from "next";
import { CaseSafe } from "@/components/CaseSafe";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ, faqJsonLd } from "@/components/FAQ";
import { RichText, plainText } from "@/components/RichText";
import { insights, getInsight, type InsightSubsection } from "@/data/insights";
import { pageMetadata, stripBrandSuffix } from "@/lib/seo";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { SITE } from "@/lib/site";
import { absUrl, ORG_ID, OG_DEFAULT, FOUNDER_ID, LOGO_URL } from "@/lib/jsonld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

function slugify(s: string) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function coverUrl(cover?: string) {
  return cover ? `${SITE.url}${cover}.jpg` : OG_DEFAULT;
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
    modifiedTime: article.updated ?? article.date,
    images: article.cover ? [coverUrl(article.cover)] : undefined,
  });
}

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const linkChip =
  "inline-block rounded-[10px] border border-border-strong px-4 py-2 text-sm text-text-secondary hover:border-accent hover:text-accent";

function Bullets({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const cls = `mt-4 space-y-2 pl-5 text-text-secondary ${ordered ? "list-decimal" : "list-disc"}`;
  const lis = items.map((b) => (
    <li key={b} className="leading-relaxed"><RichText text={b} /></li>
  ));
  return ordered ? <ol className={cls}>{lis}</ol> : <ul className={cls}>{lis}</ul>;
}

function Sub({ sub }: { sub: InsightSubsection }) {
  return (
    <div className="mt-6">
      <h3 id={slugify(sub.heading)} className="text-lg font-semibold text-text">{sub.heading}</h3>
      {sub.paragraphs.map((p) => (
        <p key={p.slice(0, 48)} className="mt-3 text-base leading-relaxed text-text-secondary"><RichText text={p} /></p>
      ))}
      {sub.bullets && <Bullets items={sub.bullets} />}
    </div>
  );
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();

  const url = absUrl(`/insights/${article.slug}`);
  const relatedServices = services.filter((s) => article.relatedServices.includes(s.slug));
  const relatedIndustries = industries.filter((i) => article.relatedIndustries.includes(i.slug));
  const relatedPosts = insights
    .filter((i) => i.slug !== article.slug)
    .map((i) => ({ i, score: i.relatedServices.filter((s) => article.relatedServices.includes(s)).length }))
    .sort((a, b) => b.score - a.score || b.i.date.localeCompare(a.i.date))
    .slice(0, 3)
    .map((x) => x.i);

  const wordCount = article.body
    .flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? []), ...(s.subsections ?? []).flatMap((u) => [u.heading, ...u.paragraphs, ...(u.bullets ?? [])])])
    .join(" ")
    .split(/\s+/).length;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: article.cover
      ? { "@type": "ImageObject", url: coverUrl(article.cover), width: 1280, height: 720 }
      : [OG_DEFAULT],
    articleSection: article.category,
    wordCount,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: SITE.founder,
      jobTitle: "Founder & CEO",
      url: "https://www.innamdustgir.com/",
      worksFor: { "@id": ORG_ID },
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.name,
      url: `${SITE.url}/`,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    about: relatedServices.map((s) => ({ "@type": "Service", name: s.title, url: absUrl(`/services/${s.slug}`) })),
  };
  const faqItems = (article.faq ?? []).map((f) => ({ q: f.q, a: plainText(f.a) }));
  const toc = article.body.map((s) => ({ id: slugify(s.heading), label: s.heading }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqItems.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }} />
      )}
      <section className="theme-dark inner-hero relative overflow-hidden section-pad !pt-12 lg:!pt-16">
        <div className="container-insol">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Insights", href: "/insights" }, { label: article.title }]} />
          <p className="eyebrow mb-4"><CaseSafe text={article.category} /></p>
          <h1 className="text-display max-w-3xl">{article.title}</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">{article.description}</p>
          <p className="mt-4 text-sm text-text-muted">
            By <Link href="/founder" className="hover:text-accent">{SITE.founder}</Link>, Founder &amp; CEO
            {" · "}
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            {article.updated && article.updated !== article.date && (
              <> {" · "}Updated <time dateTime={article.updated}>{formatDate(article.updated)}</time></>
            )}
          </p>
        </div>
      </section>

      <Section band="secondary">
        <article className="mx-auto max-w-3xl">
          {article.cover && (
            <picture>
              <source srcSet={`${article.cover}.webp`} type="image/webp" />
              <img src={`${article.cover}.jpg`} alt={article.coverAlt ?? article.title} width={1280} height={720} className="mb-10 h-auto w-full rounded-[14px] border border-border" fetchPriority="high" />
            </picture>
          )}
          {toc.length >= 3 && (
            <nav aria-labelledby="toc-heading" className="card-surface mb-10 p-5 hover:transform-none hover:shadow-none">
              <h2 id="toc-heading" className="text-sm font-semibold uppercase tracking-wide text-text-muted">On this page</h2>
              <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm">
                {toc.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="text-text-secondary hover:text-accent">{t.label}</a></li>
                ))}
                {faqItems.length > 0 && <li><a href="#faq" className="text-text-secondary hover:text-accent">FAQ</a></li>}
              </ol>
            </nav>
          )}
          {article.body.map((section) => (
            <section key={section.heading} className="mb-10 scroll-mt-24" id={slugify(section.heading)}>
              <h2 className="text-h3 text-text">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-text-secondary"><RichText text={p} /></p>
              ))}
              {section.bullets && section.bullets.length > 0 && <Bullets items={section.bullets} ordered={section.ordered} />}
              {section.table && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse text-left text-sm">
                    {section.table.caption && <caption className="mb-2 text-left text-text-muted">{section.table.caption}</caption>}
                    <thead>
                      <tr>{section.table.headers.map((h) => <th key={h} scope="col" className="border-b-2 border-border-strong px-3 py-2 font-semibold text-text">{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((r) => (
                        <tr key={r[0]}>{r.map((c, ci) => <td key={ci} className="border-b border-border px-3 py-2 align-top text-text-secondary"><RichText text={c} /></td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.subsections?.map((sub) => <Sub key={sub.heading} sub={sub} />)}
            </section>
          ))}
          {faqItems.length > 0 && (
            <section id="faq" className="mt-12 scroll-mt-24 border-t border-border pt-10">
              <FAQ items={faqItems} title="Frequently asked questions" />
            </section>
          )}
          {(relatedServices.length > 0 || relatedIndustries.length > 0) && (
            <aside aria-labelledby="related-heading" className="mt-12 border-t border-border pt-8">
              <h2 id="related-heading" className="text-h3 text-text">Related services and industries</h2>
              <ul className="mt-5 flex flex-wrap gap-3">
                {relatedServices.map((s) => <li key={s.slug}><Link href={`/services/${s.slug}`} className={linkChip}>{s.title}</Link></li>)}
                {relatedIndustries.map((i) => <li key={i.slug}><Link href={`/industries/${i.slug}`} className={linkChip}>{i.title}</Link></li>)}
              </ul>
            </aside>
          )}
          {relatedPosts.length > 0 && (
            <aside aria-labelledby="related-posts-heading" className="mt-12 border-t border-border pt-8">
              <h2 id="related-posts-heading" className="text-h3 text-text">Related insights</h2>
              <ul className="mt-5 space-y-3">
                {relatedPosts.map((p) => (
                  <li key={p.slug}><Link href={`/insights/${p.slug}`} className="font-semibold text-accent hover:text-accent-hover">{p.title}</Link></li>
                ))}
              </ul>
            </aside>
          )}
          <p className="mt-12 border-t border-border pt-6 text-sm text-text-muted">
            <Link href="/insights" className="font-semibold text-accent hover:text-accent-hover">← All insights</Link>
          </p>
        </article>
      </Section>

      <FinalCTA />
    </>
  );
}
