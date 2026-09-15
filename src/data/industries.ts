export type Industry = {
  slug: string;
  title: string;
  challenge: string;
  opportunity: string;
  capability: string;
  metaTitle: string;
  metaDescription: string;
  heroSupport: string;
  relatedServiceSlugs: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    challenge:
      "Fragmented systems, compliance pressure, and clinical/admin workflows that still rely on manual steps.",
    opportunity: "Safer data flow, better care-team tools, and automation where policy allows.",
    capability:
      "Secure software, data platforms, AI-assisted workflows, and integration across clinical and operational systems.",
    metaTitle: "Healthcare Technology | InSol Technologies",
    metaDescription:
      "Technology for healthcare organizations: secure software, data platforms, AI-assisted workflows, and integration across clinical and operational systems.",
    heroSupport:
      "We help healthcare organizations reduce fragmented systems and manual workflows — with secure software, data platforms, and practical automation where policy allows.",
    relatedServiceSlugs: [
      "ai-intelligent-automation",
      "product-engineering",
      "data-analytics",
      "enterprise-applications",
      "cloud-devops",
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    challenge:
      "Legacy cores, regulatory scrutiny, and rising expectations for speed and transparency.",
    opportunity: "Modern customer journeys and internal platforms without compromising control.",
    capability:
      "Product engineering, secure cloud, data & analytics, and practical AI for operations and insight.",
    metaTitle: "Financial Services Technology | InSol Technologies",
    metaDescription:
      "Technology for financial services: product engineering, secure cloud, data & analytics, and practical AI for operations and insight.",
    heroSupport:
      "We help financial services teams modernize customer journeys and internal platforms without compromising control under regulatory scrutiny.",
    relatedServiceSlugs: [
      "product-engineering",
      "cloud-devops",
      "data-analytics",
      "ai-intelligent-automation",
      "saas-products",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    challenge:
      "Fragmented commerce stacks, uneven customer experience, and operational complexity at peak demand.",
    opportunity:
      "Unified journeys, reliable catalogs/checkout, and data that informs merchandising and ops.",
    capability:
      "Web & mobile, integrations, cloud scale, analytics, and automation across the order lifecycle.",
    metaTitle: "E-commerce Technology | InSol Technologies",
    metaDescription:
      "Technology for e-commerce: web & mobile, integrations, cloud scale, analytics, and automation across the order lifecycle.",
    heroSupport:
      "We help commerce teams unify journeys, harden checkout, and scale operations — with web, mobile, cloud, analytics, and automation across the order lifecycle.",
    relatedServiceSlugs: [
      "web-mobile-development",
      "cloud-devops",
      "data-analytics",
      "ai-intelligent-automation",
      "product-engineering",
    ],
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    challenge:
      "Multi-channel bookings, partner commissions, and guest experience stretched across systems.",
    opportunity: "Cleaner reconciliation, better guest tools, and operations that keep up with demand.",
    capability:
      "Platforms, automation, data pipelines, and AI applied to high-volume operational workflows.",
    metaTitle: "Travel & Hospitality Technology | InSol Technologies",
    metaDescription:
      "Technology for travel and hospitality: platforms, automation, data pipelines, and AI for high-volume operational workflows.",
    heroSupport:
      "We help travel and hospitality operators connect bookings, partners, and guest experience — with platforms, automation, data, and practical AI for high-volume workflows.",
    relatedServiceSlugs: [
      "product-engineering",
      "ai-intelligent-automation",
      "data-analytics",
      "web-mobile-development",
      "enterprise-applications",
    ],
  },
  {
    slug: "technology",
    title: "Technology",
    challenge:
      "Product and SaaS teams needing build capacity without losing architectural ownership.",
    opportunity:
      "Accelerate roadmaps with a partner who can own slices of the stack end to end.",
    capability:
      "Product engineering, SaaS products, AI features, DevOps, and quality engineering embedded with your teams.",
    metaTitle: "Technology & SaaS Companies | InSol Technologies",
    metaDescription:
      "Engineering partnership for technology and SaaS companies: product engineering, SaaS products, AI features, DevOps, and quality engineering.",
    heroSupport:
      "We partner with product and SaaS teams who need build capacity without losing architectural ownership — owning slices of the stack end to end.",
    relatedServiceSlugs: [
      "saas-products",
      "product-engineering",
      "ai-intelligent-automation",
      "cloud-devops",
      "quality-engineering",
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
