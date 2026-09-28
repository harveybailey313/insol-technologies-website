import type { Metadata } from "next";
import { SITE } from "./site";

export type PageMetadataInput = {
  /** Segment title (template appends " | InSol Technologies"), or absolute full title. */
  title: string | { absolute: string };
  description: string;
  /** Path relative to site root, e.g. "/services" or "/". */
  path: string;
  noIndex?: boolean;
  /** Absolute or site-relative image URL(s) for Open Graph / Twitter. */
  images?: string | string[];
  /** Open Graph type; articles also expose published/modified times. */
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
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

function resolveImages(images?: string | string[]) {
  const list = images
    ? Array.isArray(images)
      ? images
      : [images]
    : [`${SITE.url}/brand/insol-og-default.png`];
  return list.map((url) =>
    url.endsWith("/insol-og-default.png")
      ? { url, width: 1200, height: 630, alt: SITE.name }
      : { url },
  );
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
  images,
  ogType = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataInput): Metadata {
  const ogTitle = resolveOgTitle(title);
  const ogImages = resolveImages(images);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: SITE.name,
      locale: "en_US",
      images: ogImages,
      ...(ogType === "article"
        ? {
            type: "article" as const,
            publishedTime,
            modifiedTime: modifiedTime ?? publishedTime,
            authors: [SITE.name],
          }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ogImages.map((i) => i.url),
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
