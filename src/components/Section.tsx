import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  band?: "primary" | "secondary";
  containerClassName?: string;
};

export function Section({
  children,
  className = "",
  id,
  band = "primary",
  containerClassName = "",
}: SectionProps) {
  const bg = band === "secondary" ? "bg-secondary" : "bg-primary";
  return (
    <section id={id} className={`section-pad ${bg} ${className}`}>
      <div className={`container-insol ${containerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  as: TitleTag = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
  className?: string;
}) {
  const Tag = TitleTag;
  return (
    <div className={`mb-10 max-w-3xl md:mb-14 ${className}`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag className={TitleTag === "h1" ? "text-display" : "text-h2"}>{title}</Tag>
      {intro && (
        <p className="mt-4 text-body-lg text-text-secondary">{intro}</p>
      )}
    </div>
  );
}
