import Link from "next/link";
import type { AccentKey } from "@/lib/accents";
import { accentClass } from "@/lib/accents";
import { Arrow } from "./Arrow";

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
      <span className="mb-6 block h-[3px] w-10 rounded-full bg-[var(--card-accent)] transition-all duration-300 group-hover:w-16" aria-hidden />
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
      <span className="link-arrow mt-auto pt-6">
        Learn more <Arrow />
      </span>
    </Link>
  );
}
