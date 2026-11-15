export type Industry = {
  slug: string;
  title: string;
  h1: string;
  challenge: string;
  opportunity: string;
  capability: string;
  metaTitle: string;
  metaDescription: string;
  heroSupport: string;
  relatedServiceSlugs: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    h1: "Healthcare software development for clinical and operational teams",
    challenge:
      "Fragmented systems, compliance pressure, and clinical/admin workflows that still rely on manual steps.",
    opportunity: "Safer data flow, better care-team tools, and automation where policy allows.",
    capability:
      "Secure software, data platforms, AI-assisted workflows, and integration across clinical and operational systems.",
    metaTitle: "Healthcare Software & Technology",
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
    faqs: [
      {
        q: "What healthcare software development does InSol Technologies provide?",
        a: "We build secure software, data platforms, AI-assisted workflows, and integrations across clinical and operational systems. The work is aimed at reducing fragmented systems and manual steps, with automation applied where policy allows.",
      },
      {
        q: "Can you integrate with the clinical and operational systems we already use?",
        a: "Yes. Integration across existing systems is a core part of the work. The goal is safer data flow and better care-team tools, not a default rip-and-replace of platforms that already work.",
      },
      {
        q: "How do you handle security and sensitive health data?",
        a: "Security and policy constraints are designed into the architecture and delivery. We will say so when a proposed workflow is not appropriate under the policies that apply to your organization.",
      },
      {
        q: "Who is this healthcare software work for?",
        a: "Healthcare organizations that need custom software, data platforms, or practical automation — rather than a generic product catalog. Engagements start with the operational pressure you are facing.",
      },
    ],
  },
  {
    slug: "ecommerce",
    title: "Ecommerce",
    h1: "Ecommerce software development for growing online businesses",
    challenge:
      "Fragmented commerce stacks, uneven customer experience, and operational complexity at peak demand.",
    opportunity:
      "Unified journeys, reliable catalogs/checkout, and data that informs merchandising and ops.",
    capability:
      "Web & mobile, integrations, cloud scale, analytics, and automation across the order lifecycle.",
    metaTitle: "Ecommerce Software Development",
    metaDescription:
      "Ecommerce technology and retail digital platforms — web and mobile, integrations, cloud scale, analytics, and automation across the order lifecycle.",
    heroSupport:
      "We help ecommerce teams unify journeys, harden checkout, and scale operations — with web, mobile, cloud, analytics, and automation across the order lifecycle.",
    relatedServiceSlugs: [
      "web-mobile-development",
      "cloud-devops",
      "data-analytics",
      "ai-intelligent-automation",
      "product-engineering",
    ],
    faqs: [
      {
        q: "What does ecommerce software development include?",
        a: "Web and mobile experiences, integrations, cloud scale, analytics, and automation across the order lifecycle — from catalog and checkout through merchandising and operations.",
      },
      {
        q: "Can you work with our existing commerce platforms and tools?",
        a: "Yes. Many teams already run a mix of storefront, catalog, and operations tools. We help unify customer journeys, harden checkout, and connect the systems you already have.",
      },
      {
        q: "How do you handle peak demand and checkout reliability?",
        a: "Reliable catalogs and checkout at peak demand are a central part of the work, along with data that informs merchandising and operations. We design for those pressure points rather than treating them as an afterthought.",
      },
      {
        q: "Who is this ecommerce work for?",
        a: "Ecommerce and retail teams that need to unify journeys, improve checkout, or scale operations. We start from the pressure you are facing and apply the web, mobile, cloud, analytics, and automation capabilities that fit.",
      },
    ],
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    h1: "Travel and hospitality software development for booking and guest operations",
    challenge:
      "Multi-channel bookings, partner commissions, and guest experience stretched across systems.",
    opportunity: "Cleaner reconciliation, better guest tools, and operations that keep up with demand.",
    capability:
      "Platforms, automation, data pipelines, and AI applied to high-volume operational workflows.",
    metaTitle: "Travel & Hospitality Technology",
    metaDescription:
      "Travel and hospitality technology — booking platforms, partner integrations, automation, data pipelines, and AI for high-volume operational workflows.",
    heroSupport:
      "We help travel and hospitality operators connect bookings, partners, and guest experience — with platforms, automation, data, and practical AI for high-volume workflows.",
    relatedServiceSlugs: [
      "product-engineering",
      "ai-intelligent-automation",
      "data-analytics",
      "web-mobile-development",
      "enterprise-applications",
    ],
    faqs: [
      {
        q: "What travel and hospitality software development do you provide?",
        a: "Booking platforms, partner integrations, automation, data pipelines, and practical AI for high-volume operational workflows — so bookings, partners, and guest experience stay connected.",
      },
      {
        q: "Can you connect our booking channels, partners, and guest tools?",
        a: "Yes. Multi-channel bookings and partner commissions usually sit across several systems. We help connect those, improve reconciliation, and keep guest tools consistent as demand changes.",
      },
      {
        q: "Do we have to replace our existing booking or property systems?",
        a: "Not by default. We typically integrate with the platforms you already run and build the pieces that are missing, rather than forcing a full replacement.",
      },
      {
        q: "Who is this work for?",
        a: "Travel and hospitality operators who need cleaner connections between bookings, partners, and guest experience — including teams under pressure from high-volume operational workflows.",
      },
    ],
  },
  {
    slug: "technology",
    title: "Technology",
    h1: "Software development for technology and SaaS companies",
    challenge:
      "Product and SaaS teams needing build capacity without losing architectural ownership.",
    opportunity:
      "Accelerate roadmaps with a partner who can own slices of the stack end to end.",
    capability:
      "Product engineering, SaaS products, AI features, DevOps, and quality engineering embedded with your teams.",
    metaTitle: "Technology & SaaS Companies",
    metaDescription:
      "Engineering partnership for technology and SaaS companies: product engineering, SaaS products, AI features, DevOps, and quality engineering.",
    heroSupport:
      "We partner with technology, product, and SaaS teams who need build capacity without losing architectural ownership — owning slices of the stack end to end.",
    relatedServiceSlugs: [
      "saas-products",
      "product-engineering",
      "ai-intelligent-automation",
      "cloud-devops",
      "quality-engineering",
    ],
    faqs: [
      {
        q: "How do you work with technology and SaaS companies?",
        a: "We provide product engineering, SaaS product development, AI features, DevOps, and quality engineering as an embedded partner. The aim is to add build capacity without taking architectural ownership away from your team.",
      },
      {
        q: "Do we keep ownership of the architecture?",
        a: "Yes. We can own slices of the stack end to end while your team keeps architectural ownership. That is the point of the partnership, not a hand-off of the product.",
      },
      {
        q: "What kinds of software development do you take on for SaaS teams?",
        a: "Product engineering and SaaS product work, plus AI features, DevOps, and quality engineering when those are part of the roadmap. Scope is agreed around the slices of the stack you want a partner to own.",
      },
      {
        q: "Who is this for?",
        a: "Technology, product, and SaaS teams that need additional engineering capacity to move a roadmap faster — and want a partner who can work inside the architecture you already own.",
      },
    ],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
