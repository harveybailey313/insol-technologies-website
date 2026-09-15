import type { Metadata } from "next";
import { SITE } from "./site";

export type PageMetadataInput = {
  /** Segment title (template appends " | InSol Technologies"), or absolute full title. */
  title: string | { absolute: string };
  description: string;
  /** Path relative to site root, e.g. "/services" or "/". */
  path: string;
  noIndex?: boolean;
};

/** Strip a trailing brand suffix so title.template does not duplicate. */
export function stripBrandSuffix(title: string): string {
  return title
    .replace(/\s*\|\s*InSol Technologies\s*$/i, "")
    .replace(/\s*\|\s*InSol\s*$/i, "")
    .trim();
}

function resolveOgTitle(title: string | { absolute: string }): string {
  if (typeof title === "string") {
    return `${title} | ${SITE.name}`;
  }
  return title.absolute;
}

/**
 * Shared Metadata builder: unique title/description, canonical, OG, Twitter.
 * Paths are resolved against layout metadataBase (SITE.url).
 */
export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const ogTitle = resolveOgTitle(title);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      type: "website",
      siteName: SITE.name,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };
}
