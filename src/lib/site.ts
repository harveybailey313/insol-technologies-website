/** Empty for local/dev; set via NEXT_PUBLIC_BASE_PATH for GH Pages project path. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE = {
  name: "InSol Technologies",
  legalName: "InSol Technologies Inc.",
  url: "https://insoltechnologies.com",
  phone: "+1 (480) 918-3323",
  phoneHref: "tel:+14809183323",
  address: {
    street: "5900 Balcones Drive, STE 100",
    city: "Austin",
    state: "TX",
    zip: "78731",
    country: "USA",
    full: "5900 Balcones Drive, STE 100, Austin, TX 78731, USA",
  },
  mapsHref:
    "https://maps.google.com/?q=5900+Balcones+Drive,+STE+100,+Austin,+TX+78731",
  founder: "Innam Dustgir",
  tagline: "Software engineering, AI, and cloud for modern business",
  description:
    "InSol Technologies builds software products, SaaS platforms, practical AI, and cloud systems — from strategy through production for modern enterprises.",
} as const;

export const CTAS = {
  startProject: {
    label: "Start a Project",
    href: "/contact?intent=start-project",
  },
  talkExpert: {
    label: "Talk to an Expert",
    href: "/contact?intent=talk-expert",
  },
  exploreCapabilities: {
    label: "Explore Our Capabilities",
    href: "/services",
  },
} as const;

export const FRAME_STEPS = [
  "Strategy",
  "Design",
  "Engineering",
  "AI",
  "Deployment",
  "Scale",
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    label: "Discover",
    copy: "Map the business problem, constraints, stakeholders, and success criteria before recommending technology.",
  },
  {
    number: "02",
    label: "Strategize",
    copy: "Define roadmap, architecture options, risks, and sequencing so investment maps to outcomes.",
  },
  {
    number: "03",
    label: "Design",
    copy: "Keep experience and system design aligned — usable interfaces backed by sound architecture.",
  },
  {
    number: "04",
    label: "Build",
    copy: "Deliver in reviewable iterations, with quality built into the engineering pipeline.",
  },
  {
    number: "05",
    label: "Deploy",
    copy: "Launch to production with operational readiness — monitoring, runbooks, and clear handover.",
  },
  {
    number: "06",
    label: "Scale",
    copy: "Optimize, maintain, and evolve the system as the business and users grow.",
  },
] as const;

export type NavChild = {
  label: string;
  href: string;
};

export type NavLink = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "What We Do", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Founder", href: "/founder" },
      { label: "Our Approach", href: "/about/approach" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
