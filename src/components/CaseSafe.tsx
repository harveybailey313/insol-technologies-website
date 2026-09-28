import { Fragment } from "react";

/** Mixed-case terms that must survive `text-transform: uppercase` labels. */
const KEEP = /(SaaS)/g;

/** Renders text so terms like "SaaS" keep their casing inside uppercase labels. */
export function CaseSafe({ text }: { text: string }) {
  const parts = text.split(KEEP);
  return (
    <span>
      {parts.map((part, i) =>
        part === "SaaS" ? (
          <span key={i} className="keep-case">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </span>
  );
}
