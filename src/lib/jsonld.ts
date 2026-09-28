import { SITE } from "./site";

/** Absolute, trailing-slash URL for a site-relative path (matches canonicals). */
export function absUrl(path: string): string {
  const clean = path.split("?")[0].split("#")[0];
  if (clean === "" || clean === "/") return `${SITE.url}/`;
  return `${SITE.url}${clean.endsWith("/") ? clean : `${clean}/`}`;
}

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;
export const FOUNDER_ID = "https://www.innamdustgir.com/#person";
export const LOGO_URL = `${SITE.url}/brand/insol-logo-square-512.png`;
export const OG_DEFAULT = `${SITE.url}/brand/insol-og-default.png`;
