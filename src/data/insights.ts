/** Paragraphs and bullets may contain inline links written as [text](/path). */
export type InsightSubsection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InsightTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  /** Render bullets as a numbered list. */
  ordered?: boolean;
  table?: InsightTable;
  subsections?: InsightSubsection[];
};

export type InsightFAQ = { q: string; a: string };

export type Insight = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO date
  /** Shorter <title> segment when the headline is too long for search results. */
  seoTitle?: string;
  /** Service slugs this article supports (drives cross-links both ways). */
  relatedServices: string[];
  /** Industry slugs this article is relevant to. */
  relatedIndustries: string[];
  body: InsightSection[];
  /** ISO date of the last meaningful update (defaults to date). */
  updated?: string;
  /** Cover base path without extension, e.g. "/insights/covers/my-slug" (.jpg + .webp, 1280x720). */
  cover?: string;
  coverAlt?: string;
  /** 3-5 questions; rendered on the page and as FAQPage JSON-LD. */
  faq?: InsightFAQ[];
};

export const insights: Insight[] = [
  {
    slug: "custom-software-development-process",
    title: "Custom Software Development Process: 6 Stages From Idea to Production",
    description:
      "The custom software development process in 6 stages: discover, strategize, design, build, deploy and scale, with deliverables, approvals and risks per stage.",
    category: "Software Engineering",
    date: "2026-10-22",
    seoTitle: "Custom Software Development Process",
    cover: "/insights/covers/custom-software-development-process",
    coverAlt: "Cover reading Custom Software Development Process: 6 Stages From Idea to Production, InSol Technologies",
    relatedServices: ["product-engineering", "web-mobile-development", "quality-engineering", "cloud-devops", "saas-products"],
    relatedIndustries: ["technology"],
    body: [
      {
        heading: "What is the custom software development process?",
        paragraphs: [
          "The custom software development process is the sequence of stages a team follows to turn a business problem into working, supported software built for one organization. It is the software development lifecycle (SDLC) applied to a single product or system: understand the problem, plan the approach, design the experience and architecture, build in iterations, release safely, and keep improving after launch.",
          "At InSol Technologies we run every engagement through six stages: Discover, Strategize, Design, Build, Deploy and Scale. The names matter less than the discipline behind them. Each stage ends with a deliverable you can review and a decision you approve, so problems surface while they are still cheap to fix.",
          "The stages overlap in practice. Design for one module can start while another is being built, and testing runs throughout rather than at the end. What should never be skipped is the checkpoint at the end of each stage.",
        ],
      },
      {
        heading: "The 6 stages at a glance",
        paragraphs: [
          "Use this table as a checklist when you plan a project or compare proposals from development partners.",
        ],
        table: {
          caption: "Custom software development stages, deliverables and approvals",
          headers: ["Stage", "Key question", "Main deliverable", "What you approve"],
          rows: [
            ["1. Discover", "Is this the right problem to solve with custom software?", "Problem statement, users, current workflow, constraints, success measures", "Business outcome and scope boundaries"],
            ["2. Strategize", "What is the smartest path to that outcome?", "Roadmap, architecture options, build-vs-buy calls, risks, release plan", "First release scope, budget range and sequencing"],
            ["3. Design", "How will people use it and how will it hold together?", "User flows, clickable prototype, data model, integration and security approach", "Core workflows and technical direction"],
            ["4. Build", "Are we shipping working software every iteration?", "Working increments, sprint demos, code reviews, automated tests", "Accepted stories and change requests"],
            ["5. Deploy", "Can the business run this in production?", "Production environment, data migration, rollback plan, runbooks, training", "Go-live checklist and support ownership"],
            ["6. Scale", "Is the software still delivering value as usage grows?", "Monitoring, maintenance plan, performance work, prioritized backlog", "Roadmap for the next releases"],
          ],
        },
      },
      {
        heading: "Stage 1: Discover the real problem",
        paragraphs: [
          "Discovery is where most project risk is removed. The goal is for everyone to agree on what is being built, why, for whom, and how success will be measured before code is written. A proposal that arrives without any discovery is a guess with a price attached.",
          "Good discovery talks to the people who will use the software every day, not only to the person signing the contract. It maps how work happens today, including the workarounds and spreadsheets nobody likes to mention, and it lists the systems the new software must connect to.",
        ],
        bullets: [
          "Interviews with end users, process owners and technical stakeholders",
          "A map of the current workflow and where it breaks",
          "A prioritized list of needs, separating must-have from nice-to-have",
          "Constraints such as deadlines, compliance, budget range and existing systems",
          "Success measures written in business language",
        ],
        subsections: [
          {
            heading: "When discovery should end in “don’t build”",
            paragraphs: [
              "Sometimes the honest outcome is that an off-the-shelf product, a configuration change or a process fix solves the problem better. A partner who can say that after discovery is protecting your budget, not losing a deal.",
            ],
          },
        ],
      },
      {
        heading: "Stage 2: Strategize the roadmap and architecture",
        paragraphs: [
          "Strategy turns discovery findings into a plan. This is where the team weighs architecture options, decides what to build versus buy or integrate, sequences releases and names the main risks. The output is a roadmap that ties each release to an outcome, not a long feature list.",
          "The most valuable decision here is usually the scope of the first release. A focused first release that real users can adopt beats a large launch that arrives late. If you are building a product for customers, our guide to [SaaS foundations that can scale](/insights/building-saas-foundations-that-can-scale) covers the tenancy and identity choices that belong in this stage.",
        ],
        bullets: [
          "Architecture options with trade-offs in cost, speed and long-term maintenance",
          "Build, buy or integrate decisions for each major capability",
          "A release plan with a clearly bounded first release",
          "A risk register with owners and mitigation steps",
        ],
      },
      {
        heading: "Stage 3: Design the experience and the system",
        paragraphs: [
          "Design covers two things that must stay aligned: how the software works for the people using it, and how the system is put together underneath. A polished interface on a fragile architecture fails as surely as solid engineering nobody can use.",
        ],
        subsections: [
          {
            heading: "Experience design",
            paragraphs: [
              "User flows, wireframes and a clickable prototype let your team test the main tasks before they are built. Real users clicking through a prototype will find gaps that a requirements document never shows, such as missing roles, edge cases and confusing steps.",
            ],
          },
          {
            heading: "System design",
            paragraphs: [
              "The technical design sets the data model, integrations, APIs, hosting approach, security controls and how environments will be separated. Decisions that are expensive to reverse, such as data ownership and identity, get settled here rather than mid-build.",
            ],
          },
        ],
      },
      {
        heading: "Stage 4: Build in short, reviewable iterations",
        paragraphs: [
          "Development works best in short iterations, typically one to two weeks, that each end with working software you can see and use, not a status report. Problems then show up within days instead of months, and priorities can shift based on what users actually do.",
          "Quality belongs inside the build, not after it. Code reviews, automated tests and continuous integration run on every change, which is how [quality engineering](/services/quality-engineering) keeps defects from piling up for a final testing phase.",
        ],
        bullets: [
          "A demo at the end of every iteration, with feedback recorded",
          "Written acceptance criteria for each piece of work",
          "Automated tests and code review on every change",
          "A visible backlog so you always know what is next and why",
          "Code, documentation and infrastructure in repositories you own",
        ],
      },
      {
        heading: "Stage 5: Deploy with operational readiness",
        paragraphs: [
          "Going live is an operational event, not just a technical one. Before launch the team should rehearse data migration, confirm a tested rollback path, set up monitoring and alerts, write runbooks and train the people who will support and use the system.",
          "Releasing to a small group first, through a pilot or staged rollout, lets you catch real-world issues with limited impact. Our article on [DevOps habits that reduce release risk](/insights/cloud-devops-habits-that-reduce-release-risk) goes deeper on pipelines and rollback, and our [cloud and DevOps](/services/cloud-devops) team handles this stage for clients.",
        ],
        bullets: [
          "Production environment built from code, not by hand",
          "Data migration tested on realistic data",
          "Rollback or forward-fix plan that has been practiced",
          "Monitoring, alerting and on-call ownership agreed",
          "User training and support process in place",
        ],
      },
      {
        heading: "Stage 6: Scale, maintain and improve",
        paragraphs: [
          "Software that is not maintained degrades. Dependencies need security updates, usage patterns change and new needs appear. The Scale stage keeps the system healthy through monitoring, maintenance, performance work and a backlog shaped by real usage data.",
          "Treat each new release as a smaller loop through the same stages: discover what to change, plan it, design it, build it and deploy it. That rhythm is what keeps custom software an asset rather than a liability.",
        ],
      },
      {
        heading: "Common mistakes that derail custom software projects",
        paragraphs: [
          "Most failed projects trace back to a stage that was skipped or rushed. Watch for these warning signs:",
        ],
        bullets: [
          "Starting development without discovery or written success measures",
          "A first release so large it takes too long to reach real users",
          "Progress measured in hours spent instead of working features accepted",
          "Testing saved for the end of the project",
          "No rollback plan, monitoring or support owner at launch",
          "Code and infrastructure held in accounts the client does not control",
        ],
      },
      {
        heading: "How to choose a partner for your project",
        paragraphs: [
          "The process a partner describes tells you how your project will feel. Ask to see a sample discovery output, how iterations are demonstrated, how quality is built in, who owns the code and what happens after launch. Our [buyer guide to choosing product engineering partners](/insights/choosing-product-engineering-partners) has a full checklist.",
          "InSol Technologies delivers [software engineering](/services/product-engineering), [web and mobile development](/services/web-mobile-development) and [SaaS product development](/services/saas-products) through the six stages above. If you are planning a build, [talk to our team](/contact?intent=start-project) about where to start.",
        ],
      },
    ],
    faq: [
      {
        q: "What are the stages of the custom software development process?",
        a: "Most teams follow six stages: discovery, strategy and planning, design, iterative development, deployment, and ongoing maintenance and improvement. Testing runs throughout rather than as a separate final phase.",
      },
      {
        q: "How long does custom software development take?",
        a: "It depends on scope, integrations and how many decisions are already made. A focused first release usually ships far sooner than a full system, which is why scoping the first release tightly during strategy matters more than any average timeline.",
      },
      {
        q: "Why is the discovery stage so important?",
        a: "Discovery confirms you are solving the right problem and defines success before money is spent on building. Misunderstandings fixed in discovery cost far less than the same issues found during development or after launch.",
      },
      {
        q: "Is Agile the same as the software development process?",
        a: "No. Agile is a way of working inside the process, mainly during design and build, using short iterations and regular feedback. The overall process still needs discovery, planning, deployment and maintenance around it.",
      },
      {
        q: "Who should own the code in a custom software project?",
        a: "The client should own the code, documentation and infrastructure accounts. Agree on this in the contract and make sure repositories and cloud accounts sit under your organization from the start.",
      },
    ],
  },
  {
    slug: "putting-ai-in-production-workflows",
    title: "Putting AI in production workflows — not demos",
    description:
      "How to move from AI pilots to production: workflow mapping, evaluation, integration, oversight, and an honest stop path when foundations are not ready.",
    category: "AI",
    date: "2026-09-16",
    seoTitle: "AI in Production Workflows, Not Demos",
    relatedServices: ["ai-intelligent-automation", "data-analytics"],
    relatedIndustries: ["healthcare", "travel-hospitality"],
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
          "Sometimes the honest recommendation is that AI is not the right move yet — because data quality, process clarity, or ownership is missing. A deliberate stop after a scoped discovery is cheaper than a year of pilots that never reach production. Production workflows reward teams that can say no as clearly as they can ship.",
        ],
      },
    ],
  },
  {
    slug: "building-saas-foundations-that-can-scale",
    title: "Building SaaS foundations that can scale",
    description:
      "Practical SaaS architecture habits for multi-tenancy, identity, environments, observability, and MVP scoping that will not trap your product later.",
    category: "SaaS",
    date: "2026-09-16",
    seoTitle: "Building SaaS Foundations That Scale",
    relatedServices: ["saas-products", "product-engineering", "cloud-devops"],
    relatedIndustries: ["technology"],
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
      "CI/CD quality gates, infrastructure as code, observability, and clear ownership patterns that make software releases routine instead of risky events.",
    category: "Cloud",
    date: "2026-09-16",
    seoTitle: "DevOps Habits That Reduce Release Risk",
    relatedServices: ["cloud-devops", "quality-engineering"],
    relatedIndustries: ["technology", "ecommerce"],
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
    relatedServices: ["data-analytics", "enterprise-applications", "ai-intelligent-automation"],
    relatedIndustries: ["healthcare", "ecommerce"],
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
      "A practical checklist for evaluating product engineering partners: discovery discipline, delivery visibility, IP ownership, operability, and red flags.",
    category: "Software Engineering",
    date: "2026-09-16",
    seoTitle: "Choosing a Product Engineering Partner",
    relatedServices: ["product-engineering", "web-mobile-development", "saas-products"],
    relatedIndustries: ["technology"],
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
        heading: "References without hype",
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
