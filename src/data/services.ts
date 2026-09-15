export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  businessOutcome: string;
  chips: string[];
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSupport: string;
  problems: string[];
  problemIntro: string;
  deliverables: string[];
  outcomeParagraph: string;
  capabilities: { name: string; outcome: string }[];
  useCases: { name: string; shape: string }[];
  whyItems: string[];
  faqs: { q: string; a: string }[];
  ctaHeadline: string;
  ctaSupport: string;
  relatedSlugs: string[];
  industryLines: Record<string, string>;
  howWeWorkNote?: string;
  stackFallback: string;
};

export const services: Service[] = [
  {
    slug: "ai-intelligent-automation",
    title: "AI & Intelligent Automation",
    shortDescription:
      "Practical AI embedded in real workflows — GenAI, apps, agents, automation, ML, NLP, and AI-powered workflows that reduce manual work and improve decisions.",
    businessOutcome:
      "Faster cycle times and clearer decisions without disrupting how your teams already operate.",
    chips: ["GenAI", "Agents", "NLP", "ML", "Workflows", "API integration"],
    h1: "AI and automation that fit how you work",
    metaTitle: "AI & Intelligent Automation | InSol Technologies",
    metaDescription:
      "Practical AI and intelligent automation for real workflows — GenAI, apps, agents, ML, NLP, and AI-powered workflows that fit how your teams operate.",
    heroSupport:
      "Too many AI initiatives stall as demos. We embed practical AI into the workflows your teams already run — GenAI, AI apps, agents, intelligent automation, ML, NLP, and AI-powered workflows that reduce manual work, improve decisions, and integrate with the systems you depend on.",
    problemIntro:
      "Leaders are under pressure to “do something with AI” while operations still run on fragmented tools, uneven data, and manual handoffs. The risk is not missing a model — it is shipping something that cannot be trusted, operated, or integrated.",
    problems: [
      "Pilot theater — Promising prototypes that never connect to identity, data, or production systems.",
      "Unclear job-to-be-done — Models selected before the workflow and success criteria are defined.",
      "Data and context gaps — Assistants invent answers when retrieval, permissions, and quality are weak.",
      "Automation bolted sideways — Scripts or bots that break when processes or UIs change.",
      "Governance afterthought — No evaluation, human oversight, or rollback path when outputs matter.",
    ],
    deliverables: [
      "Workflow-mapped AI opportunities — Prioritized use cases tied to measurable operational outcomes",
      "AI applications & GenAI experiences — Embedded in products or internal tools your people already use",
      "Agentic workflows for multi-step tasks — With guardrails, tool access, and human approval where needed",
      "Intelligent automation — Process automation designed with APIs and system boundaries in mind",
      "ML, NLP, and language intelligence — Classification, extraction, summarization, and search over real corpora",
      "AI integration into existing systems — New capability lands in current platforms — not a side portal",
      "Production path — Evaluation, monitoring, and handover — not a slide-deck handoff",
    ],
    outcomeParagraph:
      "Faster cycle times and clearer decisions without forcing your teams into a parallel “AI universe.” You leave with systems operators can run, improve, and trust — or with an honest recommendation that AI is not the right lever yet.",
    capabilities: [
      { name: "Generative AI (GenAI)", outcome: "People get generative assistance grounded in approved context" },
      { name: "AI applications", outcome: "AI features ship as part of real products and internal tools" },
      { name: "AI agents", outcome: "Multi-step operational tasks run with tool use and defined escalation" },
      { name: "Intelligent automation", outcome: "Manual handoffs shrink without brittle UI-only scripts" },
      { name: "AI integration", outcome: "New capability connects to identity, data, and systems of record" },
      { name: "Machine learning (ML)", outcome: "Models support prediction, classification, and decision assistance where data quality allows" },
      { name: "Natural language processing (NLP)", outcome: "Users and systems work with language — documents, tickets, queries — at scale" },
      { name: "AI-powered workflows", outcome: "End-to-end workflows embed AI steps with oversight and measurable quality" },
    ],
    useCases: [
      { name: "Operational copilots", shape: "Assist internal teams inside existing tools" },
      { name: "Document-heavy processes", shape: "Classify, extract, and route content" },
      { name: "Customer or employee assistants", shape: "Guided answers grounded in approved knowledge" },
      { name: "Multi-step back-office agents", shape: "Orchestrate checks, updates, and notifications with approvals" },
      { name: "AI-powered workflows", shape: "Embed AI steps in durable process automation" },
      { name: "Insight on operational data", shape: "ML-assisted forecasting and anomaly assistance where data quality supports it" },
    ],
    whyItems: [
      "Business job before model choice",
      "Engineering depth behind the AI layer",
      "Evaluation and oversight in the path",
      "Partnership past the pilot",
    ],
    faqs: [
      {
        q: "Do we need a large data science team for this to work?",
        a: "Not always. Many high-value use cases start with clear workflows, approved knowledge sources, and solid engineering integration. We assess data and ownership in Discover — and we will say so if the foundation is not ready.",
      },
      {
        q: "How do you avoid “AI demos that never ship”?",
        a: "We define success criteria, integration boundaries, evaluation, and operational ownership before build scales. Pilots are designed as paths to production — or as deliberate stop points — not as theater.",
      },
      {
        q: "Who owns IP and models?",
        a: "Commercial and IP terms are set in the engagement agreement.",
      },
      {
        q: "How do you handle security and sensitive data?",
        a: "Security is designed into architecture and delivery appropriate to the use case.",
      },
      {
        q: "How long does a first engagement take?",
        a: "Timelines depend on scope, data readiness, and integration complexity. We propose sequencing after Discover — not a one-size estimate on a marketing page.",
      },
      {
        q: "Can you work with our existing cloud and enterprise systems?",
        a: "Yes — practical AI only pays off when it connects to identity, data, and systems of record you already run.",
      },
    ],
    ctaHeadline: "Ready to put AI where work already happens?",
    ctaSupport:
      "Tell us the workflow you’re trying to improve. We’ll respond with clear next steps — including when AI is not the right move yet.",
    relatedSlugs: ["product-engineering", "saas-products", "data-analytics", "cloud-devops"],
    industryLines: {
      healthcare: "Safer data flow and AI-assisted workflows where policy allows",
      "financial-services": "Practical AI for operations and insight under regulatory scrutiny",
      ecommerce: "Automation across catalog, order, and service workflows",
      "travel-hospitality": "High-volume operational workflows across partners and channels",
      technology: "AI features embedded with product/SaaS teams who keep architectural ownership",
    },
    howWeWorkNote: "AI inside Discover → Scale",
    stackFallback:
      "We select models and platforms based on your constraints — data residency, cost, latency, and existing cloud — not on whatever is trending that week.",
  },
  {
    slug: "product-engineering",
    title: "Product Engineering",
    shortDescription:
      "Custom platforms, products, and internal systems engineered for reliability, clarity, and long-term change.",
    businessOutcome: "Software that matches how your business works — and can grow with it.",
    chips: ["Node", ".NET", "Java", "Python", "Microservices", "Event-driven"],
    h1: "Products and platforms built to last",
    metaTitle: "Product Engineering Services | InSol Technologies",
    metaDescription:
      "Custom platforms, products, and internal systems engineered for reliability, clarity, and long-term change — from strategy through production.",
    heroSupport:
      "We engineer custom platforms, products, and internal systems meant to last — with clear architecture, reviewable delivery, and foundations your team can operate and evolve.",
    problemIntro:
      "Many organizations outgrow patched systems and one-off builds. The cost shows up as slow change, unclear ownership, and software that no longer matches how the business works.",
    problems: [
      "Legacy or custom systems that resist change without a clear modernization path.",
      "Product roadmaps stalled by architecture debt and unclear boundaries.",
      "Internal tools that grew organically and now block operational scale.",
      "Handoffs between design, engineering, and operations that create rework.",
      "Delivery partners who ship features without leaving operable systems.",
    ],
    deliverables: [
      "Architecture and roadmap clarity tied to business outcomes",
      "Custom product and platform engineering with reviewable iterations",
      "API and integration design for systems that must connect",
      "Quality built into the delivery pipeline",
      "Operational readiness for Deploy and Scale",
      "Knowledge transfer so your team retains ownership",
    ],
    outcomeParagraph:
      "Software that matches how your business works — and a codebase and architecture your teams can grow with, not rewrite every year.",
    capabilities: [
      { name: "Custom product development", outcome: "Customer-facing and internal products built for reliability" },
      { name: "Platform engineering", outcome: "Shared foundations that accelerate multiple product teams" },
      { name: "Modernization", outcome: "Evolve aging systems with clear boundaries and sequencing" },
      { name: "API & microservices", outcome: "Composable services with contracts teams can depend on" },
      { name: "Event-driven systems", outcome: "Reactive architectures where real-time flow matters" },
      { name: "Internal systems", outcome: "Tools that match how operators actually work" },
    ],
    useCases: [
      { name: "New digital product", shape: "Build a product from discovery through production" },
      { name: "Platform rebuild", shape: "Replace fragile cores with maintainable architecture" },
      { name: "Internal ops systems", shape: "Replace spreadsheet bridges with real software" },
      { name: "API-led modernization", shape: "Expose and evolve capabilities without a big-bang rewrite" },
      { name: "Embedded engineering capacity", shape: "Own slices of the stack end to end with your team" },
      { name: "Post-MVP hardening", shape: "Turn early products into operable long-term systems" },
    ],
    whyItems: [
      "Engineering depth over disposable demos",
      "Business-first problem framing before stack lock-in",
      "Architecture designed for change",
      "Partnership beyond launch",
    ],
    faqs: [
      {
        q: "Do you take over existing codebases?",
        a: "Yes. We assess architecture, risk, and ownership in Discover, then propose modernization or build paths that fit your constraints.",
      },
      {
        q: "How do you work with our internal team?",
        a: "We embed alongside product and engineering stakeholders with reviewable iterations — not a black-box handoff.",
      },
      {
        q: "Who owns the IP?",
        a: "Commercial and IP terms are set in the engagement agreement.",
      },
      {
        q: "What stacks do you use?",
        a: "We choose based on your team’s skills, constraints, and longevity — a publishable stack list appears once verified.",
      },
    ],
    ctaHeadline: "Ready to build products that last?",
    ctaSupport:
      "Tell us what you’re building or modernizing. We’ll respond with clear next steps — not a generic pitch deck.",
    relatedSlugs: ["saas-products", "web-mobile-development", "quality-engineering", "cloud-devops"],
    industryLines: {
      healthcare: "Secure software and platforms across clinical and operational systems",
      "financial-services": "Product engineering under regulatory scrutiny and legacy pressure",
      ecommerce: "Commerce platforms and internal systems that survive peak demand",
      "travel-hospitality": "Booking and operations platforms across partners and channels",
      technology: "Build capacity without losing architectural ownership",
    },
    stackFallback:
      "We choose languages and frameworks based on your team’s skills, latency, compliance, and cost — not on what’s trendy that week.",
  },
  {
    slug: "web-mobile-development",
    title: "Web & Mobile Development",
    shortDescription:
      "Customer- and employee-facing experiences across web and mobile, built for performance and maintainability.",
    businessOutcome: "Interfaces people trust — fast, accessible, and aligned with your brand.",
    chips: ["React", "Next.js", "Flutter", "React Native", "Progressive Web Apps"],
    h1: "Web and mobile experiences that perform",
    metaTitle: "Web & Mobile Development | InSol Technologies",
    metaDescription:
      "Customer- and employee-facing web and mobile experiences built for performance, accessibility, and long-term maintainability.",
    heroSupport:
      "We build web and mobile experiences people trust — fast, accessible, and maintainable — whether you’re shipping a customer product or employee-facing tools.",
    problemIntro:
      "Interfaces often lag behind the business: slow pages, fragmented mobile experiences, and frontends that are hard to evolve safely.",
    problems: [
      "Slow or inconsistent customer journeys across devices.",
      "Mobile apps that drift from web product and brand standards.",
      "Accessibility gaps that exclude users and create risk.",
      "Frontend debt that blocks feature velocity.",
      "Experiences designed without operable backend and release paths.",
    ],
    deliverables: [
      "Responsive web applications engineered for performance",
      "Native and cross-platform mobile experiences",
      "Design-system-aligned UI that stays maintainable",
      "Accessibility and quality built into delivery",
      "Integration with APIs, identity, and analytics",
      "Release readiness with monitoring and handover",
    ],
    outcomeParagraph:
      "Interfaces people trust — fast, accessible, and aligned with your brand — backed by code your team can keep shipping.",
    capabilities: [
      { name: "Web applications", outcome: "Modern web apps with strong performance budgets" },
      { name: "Mobile apps", outcome: "iOS/Android experiences that match product quality bars" },
      { name: "Progressive Web Apps", outcome: "Installable, resilient experiences when native isn’t required" },
      { name: "Design systems", outcome: "Reusable UI foundations for consistent delivery" },
      { name: "Performance engineering", outcome: "Measurable speed improvements users feel" },
      { name: "Accessibility", outcome: "Inclusive experiences designed and tested in the path" },
    ],
    useCases: [
      { name: "Customer portals", shape: "Secure self-service experiences on web and mobile" },
      { name: "Product marketing sites", shape: "High-performance sites that convert without gimmicks" },
      { name: "Employee tools", shape: "Internal web apps that reduce operational friction" },
      { name: "Cross-platform product apps", shape: "Shared product logic across iOS, Android, and web" },
      { name: "Frontend modernization", shape: "Replace brittle UI layers without pausing the roadmap" },
      { name: "Commerce storefronts", shape: "Reliable catalog and checkout experiences" },
    ],
    whyItems: [
      "Performance and accessibility as first-class requirements",
      "Alignment between experience design and system architecture",
      "Maintainable frontends, not disposable demos",
      "Partnership through Deploy and Scale",
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We recommend based on product goals, team skills, and release cadence — not a one-size default.",
      },
      {
        q: "Can you work with our design system?",
        a: "Yes. We extend existing systems or help establish one when needed.",
      },
      {
        q: "Do you handle SEO for marketing sites?",
        a: "Yes for public web experiences — technical SEO foundations are part of delivery when relevant.",
      },
      {
        q: "How do you ensure accessibility?",
        a: "We build with semantic patterns and test against agreed accessibility criteria in the delivery path.",
      },
    ],
    ctaHeadline: "Ready for experiences people trust?",
    ctaSupport:
      "Tell us what you’re shipping on web or mobile. We’ll respond with clear next steps.",
    relatedSlugs: ["product-engineering", "saas-products", "quality-engineering", "cloud-devops"],
    industryLines: {
      healthcare: "Care-team and patient-facing tools designed for clarity and trust",
      "financial-services": "Modern customer journeys with control and transparency",
      ecommerce: "Unified journeys and reliable checkout experiences",
      "travel-hospitality": "Guest and operator tools across channels",
      technology: "Product UI delivered with your engineering standards",
    },
    stackFallback:
      "We select web and mobile stacks based on your product goals and team skills — a publishable list appears once verified.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDescription:
      "Cloud foundations, CI/CD, observability, and operational discipline so releases are routine — not risky.",
    businessOutcome: "Safer deployments, clearer ownership, and infrastructure that scales with demand.",
    chips: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Observability"],
    h1: "Cloud foundations you can operate",
    metaTitle: "Cloud & DevOps Services | InSol Technologies",
    metaDescription:
      "Cloud foundations, CI/CD, observability, and operational discipline so releases are routine — not risky.",
    heroSupport:
      "We build cloud foundations, CI/CD, and observability so releases become routine — with infrastructure and ownership models that scale with demand.",
    problemIntro:
      "Cloud spend without operational clarity creates risk: fragile releases, unclear ownership, and environments that only a few people understand.",
    problems: [
      "Manual or fragile release processes that slow delivery.",
      "Environments that drift and are hard to reproduce.",
      "Limited observability when incidents happen.",
      "Cloud cost and architecture that grew without intentional design.",
      "Security and access controls bolted on late.",
    ],
    deliverables: [
      "Cloud architecture and landing zones aligned to your constraints",
      "CI/CD pipelines with quality gates",
      "Infrastructure as code for reproducible environments",
      "Observability: metrics, logs, traces, and alerting",
      "Operational runbooks and handover clarity",
      "Security and access patterns appropriate to your risk profile",
    ],
    outcomeParagraph:
      "Safer deployments, clearer ownership, and infrastructure that scales with demand — systems your teams can actually run.",
    capabilities: [
      { name: "Cloud architecture", outcome: "Foundations designed for growth and operability" },
      { name: "CI/CD", outcome: "Releases that are routine and reviewable" },
      { name: "Infrastructure as code", outcome: "Environments you can recreate with confidence" },
      { name: "Kubernetes & containers", outcome: "Platforms that match your workload needs" },
      { name: "Observability", outcome: "See what users experience before tickets pile up" },
      { name: "FinOps basics", outcome: "Visibility into cost drivers as you scale" },
    ],
    useCases: [
      { name: "Cloud migration", shape: "Move workloads with clear sequencing and rollback paths" },
      { name: "Platform foundations", shape: "Shared DevOps capabilities for multiple product teams" },
      { name: "Release hardening", shape: "Turn risky deploys into routine shipping" },
      { name: "Observability uplift", shape: "Instrument systems for faster incident response" },
      { name: "Environment standardization", shape: "Eliminate snowflake staging and prod drift" },
      { name: "SaaS operability", shape: "Multi-tenant platforms ready for Deploy and Scale" },
    ],
    whyItems: [
      "Operability designed in, not bolted on",
      "Quality gates in the delivery path",
      "Architecture that grows with demand",
      "Partnership through Scale",
    ],
    faqs: [
      {
        q: "Which cloud providers do you support?",
        a: "We work with major public clouds based on your constraints — publishable stack details appear once verified.",
      },
      {
        q: "Do you replace our platform team?",
        a: "We can build foundations and upskill your team, or partner ongoing — model depends on scope.",
      },
      {
        q: "How do you handle security?",
        a: "Security and access patterns are designed into architecture appropriate to your risk profile.",
      },
      {
        q: "Can you help with Kubernetes?",
        a: "Yes when containers and orchestration fit the workload — we won’t force Kubernetes where it adds needless complexity.",
      },
    ],
    ctaHeadline: "Ready for releases you can trust?",
    ctaSupport:
      "Tell us where cloud and delivery hurt today. We’ll respond with clear next steps.",
    relatedSlugs: ["product-engineering", "saas-products", "quality-engineering", "data-analytics"],
    industryLines: {
      healthcare: "Secure cloud foundations with operational clarity",
      "financial-services": "Controlled cloud and release discipline under scrutiny",
      ecommerce: "Infrastructure that scales with peak demand",
      "travel-hospitality": "Reliable platforms across high-volume channels",
      technology: "DevOps embedded with product teams who keep ownership",
    },
    stackFallback:
      "We choose cloud and tooling based on your constraints — a publishable stack list appears once verified.",
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    shortDescription:
      "Pipelines, warehouses, and decision-ready analytics so leaders and operators share one reliable picture.",
    businessOutcome: "Decisions grounded in data you can explain and defend.",
    chips: ["ETL / ELT", "Warehousing", "BI", "Streaming", "Data quality"],
    h1: "Data that supports decisions",
    metaTitle: "Data & Analytics Services | InSol Technologies",
    metaDescription:
      "Pipelines, warehouses, and decision-ready analytics so leaders and operators share one reliable picture of the business.",
    heroSupport:
      "We build pipelines, warehouses, and analytics so leaders and operators share one reliable picture — data you can explain and defend.",
    problemIntro:
      "When data is fragmented or untrusted, every decision meeting becomes a debate about whose numbers are right.",
    problems: [
      "Multiple conflicting sources of truth across teams.",
      "Manual extracts and spreadsheet bridges that break.",
      "Warehouses that exist but nobody trusts the metrics.",
      "Slow or missing pipelines for operational decisions.",
      "AI ambitions blocked by weak data foundations.",
    ],
    deliverables: [
      "Data landscape assessment and prioritization",
      "Pipelines (ETL/ELT) and warehouse foundations",
      "Metric definitions stakeholders can agree on",
      "BI and decision-ready reporting surfaces",
      "Data quality checks and ownership models",
      "Foundations that support future AI and automation",
    ],
    outcomeParagraph:
      "Decisions grounded in data you can explain and defend — with pipelines and ownership your teams can sustain.",
    capabilities: [
      { name: "Data pipelines", outcome: "Reliable movement from sources to usable stores" },
      { name: "Warehousing", outcome: "Structured foundations for analytics and reporting" },
      { name: "BI & dashboards", outcome: "Decision-ready views for leaders and operators" },
      { name: "Streaming", outcome: "Near-real-time signals where latency matters" },
      { name: "Data quality", outcome: "Checks and ownership so trust doesn’t erode" },
      { name: "Analytics foundations for AI", outcome: "Context and quality AI initiatives actually need" },
    ],
    useCases: [
      { name: "Single source of truth", shape: "Align metrics across product, ops, and finance" },
      { name: "Operational analytics", shape: "Day-to-day decisions backed by reliable data" },
      { name: "Legacy report modernization", shape: "Replace brittle extracts with governed pipelines" },
      { name: "Customer analytics", shape: "Understand journeys without inventing vanity metrics" },
      { name: "AI readiness", shape: "Improve data quality and access before model bets" },
      { name: "Streaming ops views", shape: "Monitor high-volume processes in near real time" },
    ],
    whyItems: [
      "Business questions before tool catalogs",
      "Quality and ownership as first-class work",
      "Foundations that support practical AI later",
      "Partnership beyond the first dashboard",
    ],
    faqs: [
      {
        q: "Do we need a full data lake?",
        a: "Not always. We recommend the smallest architecture that answers your decision needs reliably.",
      },
      {
        q: "Can you work with our existing warehouse?",
        a: "Yes — we assess what to keep, fix, or replace based on trust and cost.",
      },
      {
        q: "How do you define metrics?",
        a: "With stakeholders in Discover/Strategize so definitions are shared before dashboards proliferate.",
      },
      {
        q: "Is this required before AI work?",
        a: "Often yes for high-stakes use cases. We will say so if data quality would undermine AI outcomes.",
      },
    ],
    ctaHeadline: "Ready for data you can defend?",
    ctaSupport:
      "Tell us which decisions lack a trusted picture. We’ll respond with clear next steps.",
    relatedSlugs: ["ai-intelligent-automation", "cloud-devops", "enterprise-applications", "product-engineering"],
    industryLines: {
      healthcare: "Safer data flow across clinical and operational systems",
      "financial-services": "Analytics under scrutiny with explainable metrics",
      ecommerce: "Data that informs merchandising and operations",
      "travel-hospitality": "Pipelines across bookings, partners, and guest experience",
      technology: "Product and usage analytics foundations for SaaS teams",
    },
    stackFallback:
      "We select data tooling based on your sources, latency, and team skills — a publishable stack list appears once verified.",
  },
  {
    slug: "enterprise-applications",
    title: "Enterprise Applications",
    shortDescription:
      "Implementation, integration, and extension of core business systems — ERP, CRM, and industry platforms.",
    businessOutcome: "Connected processes instead of disconnected tools and spreadsheet bridges.",
    chips: ["ERP", "CRM", "Integration", "Low-code", "Custom extensions"],
    h1: "Enterprise applications that connect the business",
    metaTitle: "Enterprise Applications | InSol Technologies",
    metaDescription:
      "Implementation, integration, and extension of ERP, CRM, and industry platforms — connected processes instead of spreadsheet bridges.",
    heroSupport:
      "We implement, integrate, and extend core business systems — ERP, CRM, and industry platforms — so processes connect instead of relying on spreadsheet bridges.",
    problemIntro:
      "Core systems that don’t talk create shadow processes, duplicate data entry, and decisions made on incomplete pictures.",
    problems: [
      "ERP/CRM implementations that never matched how teams actually work.",
      "Integrations held together by fragile scripts and manual exports.",
      "Customizations that block upgrades.",
      "Low-code sprawl without governance.",
      "Disconnected industry platforms creating operational blind spots.",
    ],
    deliverables: [
      "Process and system mapping before configuration",
      "Implementation and configuration of core platforms",
      "Integration architecture across systems of record",
      "Custom extensions where platforms need to stretch",
      "Data migration and cutover planning",
      "Training and operational handover",
    ],
    outcomeParagraph:
      "Connected processes instead of disconnected tools — platforms your operators can run with clearer ownership.",
    capabilities: [
      { name: "ERP implementation & extension", outcome: "Core finance and ops systems aligned to real workflows" },
      { name: "CRM platforms", outcome: "Customer processes that match how you sell and serve" },
      { name: "System integration", outcome: "Reliable connections between systems of record" },
      { name: "Custom extensions", outcome: "Gaps closed without reckless customization debt" },
      { name: "Low-code with governance", outcome: "Speed where it helps, control where it matters" },
      { name: "Migration & cutover", outcome: "Planned moves off legacy with rollback clarity" },
    ],
    useCases: [
      { name: "CRM modernization", shape: "Replace fragmented sales/service tooling" },
      { name: "ERP integration", shape: "Connect finance and operations without spreadsheet bridges" },
      { name: "Industry platform extension", shape: "Extend vertical systems with controlled custom work" },
      { name: "M&A system consolidation", shape: "Unify processes after organizational change" },
      { name: "API layer over legacy", shape: "Expose capabilities safely to new products" },
      { name: "Workflow automation around ERP/CRM", shape: "Reduce manual handoffs between systems" },
    ],
    whyItems: [
      "Process clarity before platform configuration",
      "Integration designed as architecture, not afterthought",
      "Extensions that don’t trap you on upgrades",
      "Partnership through Deploy and Scale",
    ],
    faqs: [
      {
        q: "Which ERP/CRM platforms do you work with?",
        a: "We work with major enterprise platforms based on your landscape — publishable vendor lists appear once verified.",
      },
      {
        q: "Do you replace or integrate?",
        a: "We recommend based on fit, cost, and risk — sometimes integration and extension beat a rip-and-replace.",
      },
      {
        q: "How do you avoid customization debt?",
        a: "We prefer configuration and bounded extensions with upgrade paths documented in Strategize/Design.",
      },
      {
        q: "Can this connect to our custom products?",
        a: "Yes — API and event integration with product and data platforms is a common path.",
      },
    ],
    ctaHeadline: "Ready to connect the systems you run on?",
    ctaSupport:
      "Tell us which processes and platforms are disconnected. We’ll respond with clear next steps.",
    relatedSlugs: ["product-engineering", "data-analytics", "ai-intelligent-automation", "cloud-devops"],
    industryLines: {
      healthcare: "Integration across clinical and operational systems",
      "financial-services": "Core platforms with control and clarity",
      ecommerce: "Commerce and ops systems that share one picture",
      "travel-hospitality": "Bookings, partners, and ops systems connected",
      technology: "Enterprise platforms integrated with product stacks",
    },
    stackFallback:
      "Platform choices follow your landscape and constraints — verified vendor lists publish when cleared.",
  },
  {
    slug: "quality-engineering",
    title: "Quality Engineering",
    shortDescription:
      "Test strategy, automation, and quality gates woven into the delivery pipeline — not bolted on at the end.",
    businessOutcome: "Confidence to release often with fewer production surprises.",
    chips: ["Test automation", "API testing", "Performance", "CI quality gates"],
    h1: "Quality engineered into every release",
    metaTitle: "Quality Engineering Services | InSol Technologies",
    metaDescription:
      "Test strategy, automation, and quality gates woven into the delivery pipeline — confidence to release often with fewer production surprises.",
    heroSupport:
      "We weave test strategy, automation, and quality gates into the delivery pipeline — so quality is how you ship, not a gate bolted on at the end.",
    problemIntro:
      "When testing is late or manual-only, releases slow down and production surprises become normal.",
    problems: [
      "Manual regression that can’t keep up with the roadmap.",
      "Flaky or missing automated coverage in critical paths.",
      "Quality owned only by a late-stage QA silo.",
      "Performance and reliability issues discovered in production.",
      "CI without meaningful quality gates.",
    ],
    deliverables: [
      "Test strategy aligned to risk and release cadence",
      "Automation for critical user and API paths",
      "Performance and reliability testing where it matters",
      "Quality gates in CI/CD",
      "Defect prevention practices with engineering teams",
      "Handover so your team can sustain the practice",
    ],
    outcomeParagraph:
      "Confidence to release often with fewer production surprises — quality as part of how engineering ships.",
    capabilities: [
      { name: "Test strategy", outcome: "Risk-based coverage that matches how you release" },
      { name: "Test automation", outcome: "Sustainable automation for critical paths" },
      { name: "API testing", outcome: "Contracts and integrations verified continuously" },
      { name: "Performance testing", outcome: "Load and resilience checks before users feel pain" },
      { name: "CI quality gates", outcome: "Broken builds fail early with clear signals" },
      { name: "Shift-left practices", outcome: "Quality owned with engineering, not after them" },
    ],
    useCases: [
      { name: "Release acceleration", shape: "Replace bottleneck manual regression with targeted automation" },
      { name: "API-heavy products", shape: "Contract and integration tests in the pipeline" },
      { name: "SaaS multi-tenant quality", shape: "Protect tenant isolation and critical journeys" },
      { name: "Performance hardening", shape: "Find bottlenecks before peak events" },
      { name: "Legacy modernization QA", shape: "Guard behavior while systems evolve" },
      { name: "CI maturity", shape: "Meaningful gates without theater coverage metrics" },
    ],
    whyItems: [
      "Quality in the pipeline, not at the end",
      "Risk-based strategy over vanity coverage",
      "Partnership with product engineering teams",
      "Sustainable automation your team can own",
    ],
    faqs: [
      {
        q: "Do you only write automated tests?",
        a: "No — strategy, tooling, and how quality fits delivery matter as much as scripts.",
      },
      {
        q: "Can you work inside our CI?",
        a: "Yes. Quality gates belong in the pipelines your teams already run.",
      },
      {
        q: "How do you choose what to automate?",
        a: "By risk and change frequency — not by chasing 100% coverage theater.",
      },
      {
        q: "Do you replace our QA team?",
        a: "We strengthen practice and automation alongside your team; model depends on scope.",
      },
    ],
    ctaHeadline: "Ready to release with more confidence?",
    ctaSupport:
      "Tell us where quality slows or surprises you. We’ll respond with clear next steps.",
    relatedSlugs: ["product-engineering", "saas-products", "cloud-devops", "web-mobile-development"],
    industryLines: {
      healthcare: "Quality gates appropriate to regulated workflows",
      "financial-services": "Release confidence under scrutiny",
      ecommerce: "Protect peak journeys with targeted automation",
      "travel-hospitality": "Reliability across high-volume booking paths",
      technology: "Quality engineering embedded with product teams",
    },
    stackFallback:
      "We select quality tooling to fit your stack and CI — a publishable list appears once verified.",
  },
  {
    slug: "saas-products",
    title: "SaaS Products",
    shortDescription:
      "Design, build, and scale multi-tenant SaaS products — from MVP to growth architecture, billing-ready foundations, and operable platforms.",
    businessOutcome: "A product your customers can rely on — and a codebase your team can evolve.",
    chips: ["Multi-tenant", "Subscription", "APIs", "Observability", "Product analytics"],
    h1: "SaaS products engineered to scale",
    metaTitle: "SaaS Products | InSol Technologies",
    metaDescription:
      "Design, build, and scale multi-tenant SaaS products — from MVP to growth architecture, with foundations your team can operate and evolve.",
    heroSupport:
      "Building a SaaS product is not the same as shipping a website. We help founders and product leaders design, engineer, and scale multi-tenant SaaS — from early MVP through growth architecture — so customers get a reliable product and your team keeps a codebase they can evolve.",
    problemIntro:
      "SaaS buyers and investors expect reliability, tenancy isolation, clear upgrade paths, and operable systems. Many teams discover too late that their “MVP that worked for ten users” cannot survive the next hundred — or that billing, identity, and observability were never designed in.",
    problems: [
      "MVP debt that blocks growth — Shortcuts that were fine for a pilot become structural risk under load and multi-tenancy.",
      "Tenant and data boundaries unclear — Shared databases and loose permissions create security and trust risk.",
      "Product and platform conflated — Feature velocity without platform foundations (identity, billing hooks, environments, release discipline).",
      "Operability after launch — Monitoring, on-call reality, and upgrade paths treated as afterthoughts.",
      "Team ownership gaps — Agencies that ship and disappear leave founders without a path to Scale.",
    ],
    deliverables: [
      "Product discovery and roadmap clarity — What to build first, what to defer, and how success will be measured",
      "SaaS architecture foundations — Multi-tenant patterns, identity, environments, and boundaries designed for growth",
      "End-to-end product engineering — Web/API backends, admin surfaces, and customer experiences built to last",
      "Integration-ready platforms — APIs, webhooks, and extension points for the ecosystem your customers expect",
      "Release and operations readiness — CI/CD, observability, and handover so Deploy and Scale are real",
      "Practical AI where it fits the product — Optional GenAI/agents/workflows inside the SaaS — not bolted-on theater",
      "Partnership past MVP — A path from first release to iteration under real usage",
    ],
    outcomeParagraph:
      "A SaaS product customers can rely on — and a technical foundation your team can operate, extend, and scale without rewriting from scratch every funding round.",
    capabilities: [
      { name: "SaaS product strategy & MVP scoping", outcome: "Build the smallest product that proves value without trapping you in dead-end architecture" },
      { name: "Multi-tenant architecture", outcome: "Tenant isolation and shared efficiency designed deliberately — not accidentally" },
      { name: "Identity, roles & access", outcome: "Users, orgs, and permissions that match how B2B (or B2C) customers actually buy" },
      { name: "Subscription & monetization hooks", outcome: "Billing and plan boundaries engineered as product surfaces" },
      { name: "Customer-facing web applications", outcome: "Fast, accessible product UX your users trust" },
      { name: "Admin / operations consoles", outcome: "Internal tools so your team can support tenants without production heroics" },
      { name: "API & webhook platforms", outcome: "Integrations that make your SaaS stickier and more valuable" },
      { name: "Observability & reliability engineering", outcome: "You see what customers experience before they open a support ticket" },
      { name: "Data & product analytics foundations", outcome: "Decisions about roadmap and usage grounded in real signals" },
      { name: "AI features inside SaaS", outcome: "GenAI, agents, or automation as product capabilities — with evaluation and oversight" },
      { name: "Migration & modernization of existing SaaS", outcome: "Evolve a live product without a reckless rewrite" },
    ],
    useCases: [
      { name: "B2B multi-tenant SaaS MVP", shape: "Prove value with architecture that can survive early growth" },
      { name: "Internal platform → commercial SaaS", shape: "Productize an internal tool with tenancy, packaging, and operations" },
      { name: "Growth-stage re-architecture", shape: "Relieve MVP debt without pausing the roadmap entirely" },
      { name: "Vertical SaaS for a sector", shape: "Domain workflows packaged as a subscription product" },
      { name: "API-first / platform SaaS", shape: "Core product plus ecosystem integrations and partner surfaces" },
      { name: "SaaS with embedded AI", shape: "Product features that use GenAI/agents/workflows with measurable quality" },
    ],
    whyItems: [
      "SaaS is a first-class pillar — not a footnote under generic outsourcing",
      "Architecture for the next stage, not only the demo",
      "Engineering + practical AI when the product needs it",
      "Partnership through Deploy and Scale",
    ],
    faqs: [
      {
        q: "Can you take an idea to MVP?",
        a: "Yes — with explicit scoping so the MVP proves value without locking you into a dead-end architecture. We will also say when an idea is not ready for a SaaS build.",
      },
      {
        q: "Do you only build greenfield products?",
        a: "No. We also modernize and re-architect existing SaaS products when growth, tenancy, or operability has outpaced the original design.",
      },
      {
        q: "Who owns the IP and the codebase?",
        a: "Commercial and IP terms are set in the engagement agreement. As a default posture, product IP and deliverables configured for your business remain yours as contracted.",
      },
      {
        q: "Will you help after launch?",
        a: "Deploy and Scale are part of how we work. Ongoing partnership models depend on scope.",
      },
      {
        q: "Can you embed AI features in our SaaS?",
        a: "Yes, when there is a clear product job and data/oversight path. See AI & Intelligent Automation for the capability set.",
      },
      {
        q: "How do you handle security and multi-tenancy?",
        a: "Tenant boundaries, access control, environment separation, and logging are designed into architecture — calibrated to your risk profile.",
      },
    ],
    ctaHeadline: "Ready to build a SaaS product that can grow?",
    ctaSupport:
      "Tell us where you are — idea, MVP, or growth-stage debt — and what “scale” means for your customers. We’ll respond with clear next steps.",
    relatedSlugs: [
      "product-engineering",
      "ai-intelligent-automation",
      "web-mobile-development",
      "cloud-devops",
      "quality-engineering",
    ],
    industryLines: {
      technology: "Product and SaaS teams that need engineering depth without losing ownership",
      healthcare: "Subscription products and platforms under workflow and compliance pressure",
      "financial-services": "Fintech and FS platforms engineered with control and clarity",
      ecommerce: "Merchant and commerce-adjacent SaaS that must survive peak load",
      "travel-hospitality": "Operator and guest-facing subscription platforms across channels",
    },
    howWeWorkNote: "SaaS inside Discover → Scale",
    stackFallback:
      "We choose stack based on your team’s skills, latency, compliance, and cost — not on what’s trendy on social media. A publishable stack list appears here once verified.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return services.filter((s) => slugs.includes(s.slug));
}
