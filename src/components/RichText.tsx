import Link from "next/link";
import { Fragment } from "react";

/** Renders plain text with inline [label](href) links. Internal hrefs use next/link. */
export function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(<Fragment key={i++}>{text.slice(last, m.index)}</Fragment>);
    const [, label, href] = m;
    const cls = "font-medium text-link underline underline-offset-2 hover:text-accent";
    parts.push(
      href.startsWith("/") ? (
        <Link key={i++} href={href} className={cls}>{label}</Link>
      ) : (
        <a key={i++} href={href} className={cls} rel="noopener" target="_blank">{label}</a>
      ),
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(<Fragment key={i++}>{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}

/** Strip [label](href) to label, for JSON-LD and plain-text contexts. */
export function plainText(text: string) {
  return text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1");
}
