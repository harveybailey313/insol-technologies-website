/** Empty for local/dev; set via NEXT_PUBLIC_BASE_PATH for GH Pages project path. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE = {
  name: "InSol Technologies",
  url: "https://harveybailey313.github.io/insol-technologies-website",
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
  tagline: "Technology, AI and software engineering partner",
  description:
    "Partner with InSol Technologies to build products, modernize systems, apply practical AI, and scale SaaS and enterprise technology — from strategy through production.",
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
    copy: "We map the business problem, constraints, stakeholders, and success criteria before recommending technology.",
  },
  {
    number: "02",
    label: "Strategize",
    copy: "We define the roadmap, architecture options, risks, and sequencing so investment maps to outcomes.",
  },
  {
    number: "03",
    label: "Design",
    copy: "Experience and system design stay aligned — usable interfaces backed by sound architecture.",
  },
  {
    number: "04",
    label: "Build",
    copy: "Engineering delivers in iterations you can review, with quality built into the pipeline.",
  },
  {
    number: "05",
    label: "Deploy",
    copy: "We launch to production with operational readiness — monitoring, runbooks, and handover clarity.",
  },
  {
    number: "06",
    label: "Scale",
    copy: "We optimize, maintain, and evolve the system as your business and users grow.",
  },
] as const;

export const NAV_LINKS = [
  { label: "What We Do", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;
