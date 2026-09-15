/** Burgundy / silver multi-accent family — cycle across services, steps, and industries. */

export const ACCENT_KEYS = [
  "burgundy",
  "bright",
  "rose",
  "silver",
  "muted",
  "wine",
  "blush",
] as const;

export type AccentKey = (typeof ACCENT_KEYS)[number];

export const ACCENT_HEX: Record<AccentKey, string> = {
  burgundy: "#7A1F2D",
  bright: "#9A2838",
  rose: "#B85A68",
  silver: "#C9C9CB",
  muted: "#8B8B8F",
  wine: "#5A1520",
  blush: "#D4A0A8",
};

/** Fixed map: one distinct accent per service (order matches services.ts). */
export const SERVICE_ACCENTS: Record<string, AccentKey> = {
  "ai-intelligent-automation": "bright",
  "product-engineering": "burgundy",
  "web-mobile-development": "silver",
  "cloud-devops": "wine",
  "data-analytics": "rose",
  "enterprise-applications": "muted",
  "quality-engineering": "blush",
  "saas-products": "burgundy",
};

/** Process stepper — one accent per step (Discover → Scale). */
export const PROCESS_ACCENTS: AccentKey[] = [
  "burgundy",
  "bright",
  "rose",
  "silver",
  "muted",
  "wine",
];

/** Industry cards — rotating accents. */
export const INDUSTRY_ACCENTS: Record<string, AccentKey> = {
  healthcare: "wine",
  "financial-services": "silver",
  ecommerce: "rose",
  "travel-hospitality": "bright",
  technology: "burgundy",
};

export function accentClass(key: AccentKey): string {
  return `accent-${key}`;
}

export function accentAt(index: number): AccentKey {
  return ACCENT_KEYS[index % ACCENT_KEYS.length];
}
