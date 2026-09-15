import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  outcome?: string;
  chips?: string[];
  href: string;
};

export function ServiceCard({
  title,
  description,
  outcome,
  chips,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="card-surface group flex h-full flex-col p-6 md:p-8">
      <h3 className="text-h3 mb-3 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary md:text-base">
        {description}
      </p>
      {outcome && (
        <p className="mt-3 text-sm text-text-muted">{outcome}</p>
      )}
      {chips && chips.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      )}
      <span className="mt-auto pt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        Explore
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
