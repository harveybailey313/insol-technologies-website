import { Section, SectionHeader } from "./Section";

export type Reference = { href: string; label: string; note: string };

export const REFS = {
  nistAi: { href: "https://www.nist.gov/itl/ai-risk-management-framework", label: "NIST AI Risk Management Framework", note: "guidance on governing, measuring, and managing AI risk." },
  owaspLlm: { href: "https://genai.owasp.org/llm-top-10/", label: "OWASP Top 10 for LLM Applications", note: "the main security risks in applications built on language models." },
  owasp: { href: "https://owasp.org/www-project-top-ten/", label: "OWASP Top 10", note: "the most critical web application security risks." },
  twelve: { href: "https://12factor.net/", label: "The Twelve-Factor App", note: "a widely used method for building software-as-a-service apps." },
  aws: { href: "https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html", label: "AWS Well-Architected Framework", note: "design principles for reliable, secure, cost-aware cloud workloads." },
  gcp: { href: "https://cloud.google.com/architecture/framework", label: "Google Cloud Architecture Framework", note: "best practices for designing and operating cloud systems." },
  dora: { href: "https://dora.dev/", label: "DORA research", note: "research on the software delivery practices that predict performance." },
  sre: { href: "https://sre.google/sre-book/table-of-contents/", label: "Google Site Reliability Engineering book", note: "how to run production systems reliably." },
  agile: { href: "https://agilemanifesto.org/", label: "Manifesto for Agile Software Development", note: "the principles behind short, inspectable delivery cycles." },
  fowler: { href: "https://martinfowler.com/articles/microservices.html", label: "Martin Fowler: Microservices", note: "a reference on when and how to split systems into services." },
  wcag: { href: "https://www.w3.org/WAI/standards-guidelines/wcag/", label: "W3C Web Content Accessibility Guidelines (WCAG)", note: "the accessibility standard for web and mobile interfaces." },
  cwv: { href: "https://web.dev/articles/vitals", label: "web.dev: Core Web Vitals", note: "the performance metrics that shape user experience on the web." },
  nng: { href: "https://www.nngroup.com/articles/ten-usability-heuristics/", label: "Nielsen Norman Group: 10 usability heuristics", note: "core principles for usable interface design." },
  nistPrivacy: { href: "https://www.nist.gov/privacy-framework", label: "NIST Privacy Framework", note: "a tool for managing privacy risk in data systems." },
  nistCsf: { href: "https://www.nist.gov/cyberframework", label: "NIST Cybersecurity Framework", note: "a common structure for managing cybersecurity risk." },
  istqb: { href: "https://istqb.org/", label: "ISTQB", note: "the international software testing qualifications board and its body of knowledge." },
  pci: { href: "https://www.pcisecuritystandards.org/", label: "PCI Security Standards Council", note: "the security standards for handling payment card data." },
  baymard: { href: "https://baymard.com/research", label: "Baymard Institute research", note: "large-scale usability research on ecommerce checkout and product pages." },
  ndc: { href: "https://www.iata.org/en/programs/airline-distribution/retailing/ndc/", label: "IATA New Distribution Capability (NDC)", note: "the airline distribution standard used by many travel platforms." },
  k8s: { href: "https://kubernetes.io/docs/home/", label: "Kubernetes documentation", note: "the reference for running containerised workloads." },
} satisfies Record<string, Reference>;

export function References({
  title = "Standards and references",
  intro = "Public standards and research we work from, so you can check our approach against them.",
  items,
  band = "primary",
}: {
  title?: string;
  intro?: string;
  items: Reference[];
  band?: "primary" | "secondary";
}) {
  return (
    <Section band={band}>
      <SectionHeader title={title} intro={intro} />
      <ul className="max-w-3xl space-y-3 text-text-secondary">
        {items.map((r) => (
          <li key={r.href}>
            <a href={r.href} target="_blank" rel="noopener" className="font-semibold text-accent hover:text-accent-hover">
              {r.label}
            </a>{" "}
            — {r.note}
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** Small brand mark shown in page heroes; alt text describes the page topic. */
export function HeroMark({ alt }: { alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/brand/insol-icon-on-dark.svg" alt={alt} width={40} height={40} className="mb-5 h-10 w-10" />
  );
}
