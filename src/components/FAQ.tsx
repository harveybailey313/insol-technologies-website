type FAQItem = { q: string; a: string };

export function FAQ({ items, title = "FAQ" }: { items: FAQItem[]; title?: string }) {
  return (
    <div>
      <h2 className="text-h2 mb-8">{title}</h2>
      <dl className="space-y-4">
        {items.map((item) => (
          <div key={item.q} className="card-surface p-5 md:p-6 hover:transform-none hover:shadow-none">
            <dt className="font-semibold text-text">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-text-secondary md:text-base">
              {item.a}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
