export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO date
  body: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "putting-ai-in-production-workflows",
    title: "Putting AI in production workflows — not demos",
    description:
      "How to move from AI pilots to production: workflow mapping, evaluation, integration, oversight, and an honest stop path when foundations are not ready.",
    category: "AI",
    date: "2026-09-16",
    body: [
      {
        heading: "Why demos stall",
        paragraphs: [
          "Most AI pilots fail for operational reasons, not model quality. A prototype that looks impressive in a slide deck often has no path to identity, permissions, systems of record, or on-call ownership. Teams then treat the demo as progress — while the workflow that actually creates value stays manual.",
          "Production AI starts with a job to be done: a specific workflow, a success metric, and a clear owner. Model selection comes after that framing, not before.",
        ],
      },
      {
        heading: "Map the workflow before you pick a model",
        paragraphs: [
          "Write down the steps humans perform today, where data enters and leaves, and where judgment is required. Identify the handoffs that create delay or error. Only then decide whether GenAI assistance, classification, extraction, agents, or classical automation is the right lever.",
        ],
        bullets: [
          "Define inputs, outputs, and acceptance criteria in business language",
          "Name the systems of record and who owns data quality",
          "Separate “nice to have assistant” from “must-not-fail automation”",
          "Decide where a human must approve before an action lands",
        ],
      },
      {
        heading: "Build evaluation and oversight into the path",
        paragraphs: [
          "If you cannot measure output quality, you cannot operate the system. For language features, that means retrieval grounding, known-bad prompts, and review samples. For automation, that means idempotency, rollback, and audit trails. Treat evaluation as part of engineering — not a later QA add-on.",
        ],
      },
      {
        heading: "Integrate where work already happens",
        paragraphs: [
          "Value shows up when AI lands inside existing tools and processes — ticketing, CRM, document flows, internal apps — not in a parallel portal nobody opens. Integration boundaries (APIs, identity, tenancy, rate limits) should be designed in Discover and Strategize, before build scales.",
        ],
      },
      {
        heading: "Know when to stop",
        paragraphs: [
          "Sometimes the honest recommendation is that AI is not the right move yet — because data quality, process clarity, or ownership is missing. A deliberate stop after a scoped discovery is cheaper than a year of pilot theater. Production workflows reward teams that can say no as clearly as they can ship.",
        ],
      },
    ],
  },
  {
    slug: "building-saas-foundations-that-can-scale",
    title: "Building SaaS foundations that can scale",
    description:
      "Practical SaaS architecture habits for multi-tenancy, identity, environments, observability, and MVP scoping that does not trap you later.",
    category: "SaaS",
    date: "2026-09-16",
    body: [
      {
        heading: "MVP speed without dead-end architecture",
        paragraphs: [
          "Early SaaS products need to prove value quickly. The trap is shipping shortcuts that become structural risk under load, multi-tenancy, or enterprise buyers. Scope the smallest product that proves the job — and draw hard lines around tenant boundaries, identity, and environments from day one.",
        ],
      },
      {
        heading: "Tenancy and identity are product decisions",
        paragraphs: [
          "Shared databases with loose permissions feel fast until a customer asks about isolation, audit, or SSO. Decide how orgs, users, and roles relate. Document tenant data boundaries. Treat billing and plan limits as product surfaces with clear enforcement points — not as afterthoughts in the checkout flow alone.",
        ],
        bullets: [
          "Org → user → role model that matches how buyers purchase",
          "Explicit tenant isolation strategy (logical or physical)",
          "Environment separation for build, staging, and production",
          "API and webhook boundaries customers can depend on",
        ],
      },
      {
        heading: "Operability is part of the product",
        paragraphs: [
          "Customers experience reliability before they experience new features. Logging, metrics, traces, alerting, and runbooks belong in the delivery path — not in a post-launch “ops project.” Admin and support surfaces should let your team help tenants without production heroics.",
        ],
      },
      {
        heading: "Plan the path from MVP to growth",
        paragraphs: [
          "Write down what you are deliberately deferring and what would force a re-architecture. When growth pressure arrives, you want a sequenced modernization path — not a panic rewrite. Partnership past launch matters: Deploy and Scale are product work, not optional extras.",
        ],
      },
    ],
  },
  {
    slug: "cloud-devops-habits-that-reduce-release-risk",
    title: "Cloud & DevOps habits that reduce release risk",
    description:
      "CI/CD quality gates, infrastructure as code, observability, and ownership patterns that make releases routine instead of risky events.",
    category: "Cloud",
    date: "2026-09-16",
    body: [
      {
        heading: "Make releases boring",
        paragraphs: [
          "Release risk drops when deployment is frequent, reviewable, and reversible. That requires CI with meaningful quality gates, environments you can recreate, and clear ownership of what runs where. Heroic weekend deploys are a symptom — not a process.",
        ],
      },
      {
        heading: "Infrastructure as code and drift control",
        paragraphs: [
          "If staging cannot be reproduced from code, production surprises are inevitable. Prefer infrastructure as code, documented promotion paths, and access patterns that match your risk profile. Snowflake environments that only one engineer understands are a single point of failure.",
        ],
        bullets: [
          "Pipelines with tests and gates before promotion",
          "Reproducible environments from versioned definitions",
          "Least-privilege access and change auditability",
          "Rollback or forward-fix paths that are practiced, not theoretical",
        ],
      },
      {
        heading: "Observability before the incident",
        paragraphs: [
          "Metrics, logs, and traces should answer “what do users experience?” before tickets pile up. Alert on symptoms that matter; avoid noise that trains teams to ignore pages. Pair instrumentation with runbooks so response is procedural, not improvisational.",
        ],
      },
      {
        heading: "Right-size the platform",
        paragraphs: [
          "Kubernetes, multi-cloud, and elaborate platform layers help when workload and team skills justify them. They hurt when they add complexity without ownership. Choose cloud and DevOps patterns based on constraints — latency, compliance, cost, and who will operate the system after go-live.",
        ],
      },
    ],
  },
  {
    slug: "data-platforms-leaders-can-trust",
    title: "Data platforms that leaders can trust",
    description:
      "How to build pipelines, metrics, and ownership so leaders and operators share one reliable picture — without vanity dashboards or conflicting numbers.",
    category: "Data",
    date: "2026-09-16",
    body: [
      {
        heading: "Trust is the product",
        paragraphs: [
          "A warehouse full of tables that nobody believes is not a data platform — it is expensive storage. Leaders need metrics they can explain in a meeting. Operators need pipelines that do not break every Monday. Start with the decisions that matter, then design the smallest architecture that answers them reliably.",
        ],
      },
      {
        heading: "Define metrics with stakeholders",
        paragraphs: [
          "Conflicting numbers usually come from conflicting definitions, not from missing BI tools. In discovery, align on metric definitions, grain, and owners before dashboards proliferate. Document what “active customer,” “revenue,” or “cycle time” means in your business language.",
        ],
        bullets: [
          "Shared metric dictionary with named owners",
          "Source-to-consumption lineage for critical numbers",
          "Quality checks at ingest and transform boundaries",
          "Clear escalation when a pipeline or metric fails",
        ],
      },
      {
        heading: "Pipelines and ownership over tool catalogs",
        paragraphs: [
          "ETL/ELT tooling changes; ownership does not. Assign who fixes broken feeds, who approves schema changes, and how consumers are notified. Prefer durable contracts between producers and consumers over ad-hoc extracts and spreadsheet bridges.",
        ],
      },
      {
        heading: "Foundations for later AI",
        paragraphs: [
          "Practical AI depends on context quality, permissions, and clean operational data. If leadership cannot trust today’s reports, embedding AI on top of the same sources will amplify the problem. Fix trust and access first; model bets second.",
        ],
      },
    ],
  },
  {
    slug: "choosing-product-engineering-partners",
    title: "Choosing product engineering partners — a buyer guide",
    description:
      "A practical checklist for evaluating software and product engineering partners: discovery discipline, delivery visibility, IP, operability, and how to avoid demo-driven outsourcing.",
    category: "Software Engineering",
    date: "2026-09-16",
    body: [
      {
        heading: "What you are really buying",
        paragraphs: [
          "A product engineering partner should leave you with operable software, clear architecture, and a team that understands the system — not a black-box delivery and a slide deck. Buy problem framing and delivery discipline as much as coding capacity.",
        ],
      },
      {
        heading: "Evaluate discovery and honesty",
        paragraphs: [
          "Strong partners ask about constraints, success criteria, and risk before locking a stack. They will say when a rewrite is unnecessary, when AI is not ready, or when scope should shrink. Be wary of proposals that promise outcomes without examining your systems, data, and ownership model.",
        ],
        bullets: [
          "Will they map the business problem before recommending technology?",
          "Do they show how work is reviewed and released — not only what will be built?",
          "Are IP, code ownership, and handover terms explicit?",
          "Is there a path through Deploy and Scale, or only through “launch”?",
        ],
      },
      {
        heading: "Delivery visibility and quality",
        paragraphs: [
          "Ask how iterations are demoed, how quality gates work in CI, and who owns production incidents during the engagement. Prefer partners who integrate with your identity, cloud, and product rituals over those who insist on an opaque offshore factory model with no shared backlog.",
        ],
      },
      {
        heading: "References without theater",
        paragraphs: [
          "Public case studies and logos are useful when they are real and cleared. Absence of published cases is not automatically a red flag — many engagements stay under NDA. What matters is whether the partner can discuss relevant work under appropriate confidentiality, and whether their process matches how you need to operate after they leave.",
          "Use this guide as a conversation checklist. The best fit is the partner who can explain tradeoffs clearly — and still be accountable when systems are live.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export function getInsightSlugs() {
  return insights.map((i) => i.slug);
}
