import Link from "next/link";
import type { AccentKey } from "@/lib/accents";
import { accentClass } from "@/lib/accents";

type ServiceCardProps = {
  title: string;
  description: string;
  outcome?: string;
  chips?: string[];
  href: string;
  accent?: AccentKey;
};

export function ServiceCard({
  title,
  description,
  outcome,
  chips,
  href,
  accent = "cyan",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`card-surface accent-card group flex h-full min-w-0 flex-col p-5 sm:p-6 md:p-8 ${accentClass(accent)}`}
    >
      <span className="accent-icon-chip mb-4" aria-hidden>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3l2.4 4.9L20 9.3l-4 3.9.9 5.5L12 16.1 7.1 18.7 8 13.2 4 9.3l5.6-1.4L12 3z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <h3 className="text-h3 mb-3 transition-colors group-hover:text-[var(--card-accent)]">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary md:text-base">
        {description}
      </p>
      {outcome && (
        <p className="mt-3 text-sm text-text-muted">{outcome}</p>
      )}
      {chips && chips.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span key={chip} className="chip accent-chip">
              {chip}
            </span>
          ))}
        </div>
      )}
      <span className="accent-text mt-auto inline-flex items-center gap-1 pt-6 text-sm font-semibold">
        Explore
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
