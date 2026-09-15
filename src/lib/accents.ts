/** Premium multi-accent palette — cycle across services, steps, and industries. */

export const ACCENT_KEYS = [
  "cyan",
  "violet",
  "magenta",
  "emerald",
  "amber",
  "blue",
  "coral",
  "burgundy",
] as const;

export type AccentKey = (typeof ACCENT_KEYS)[number];

export const ACCENT_HEX: Record<AccentKey, string> = {
  cyan: "#00D4FF",
  violet: "#8B5CF6",
  magenta: "#EC4899",
  emerald: "#34D399",
  amber: "#FBBF24",
  blue: "#60A5FA",
  coral: "#FB7185",
  burgundy: "#7A1F2D",
};

/** Fixed map: one distinct accent per service (order matches services.ts). */
export const SERVICE_ACCENTS: Record<string, AccentKey> = {
  "ai-intelligent-automation": "violet",
  "product-engineering": "cyan",
  "web-mobile-development": "blue",
  "cloud-devops": "emerald",
  "data-analytics": "amber",
  "enterprise-applications": "burgundy",
  "quality-engineering": "coral",
  "saas-products": "cyan",
};

/** Process stepper — one accent per step (Discover → Scale). */
export const PROCESS_ACCENTS: AccentKey[] = [
  "cyan",
  "violet",
  "magenta",
  "emerald",
  "amber",
  "blue",
];

/** Industry cards — rotating accents. */
export const INDUSTRY_ACCENTS: Record<string, AccentKey> = {
  healthcare: "emerald",
  "financial-services": "blue",
  ecommerce: "amber",
  "travel-hospitality": "magenta",
  technology: "violet",
};

export function accentClass(key: AccentKey): string {
  return `accent-${key}`;
}

export function accentAt(index: number): AccentKey {
  return ACCENT_KEYS[index % ACCENT_KEYS.length];
}
