import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Section, SectionHeader } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { BASE_PATH, CTAS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founder — Innam Dustgir",
  description:
    "Meet Innam Dustgir, Founder & CEO of InSol Technologies — building modern software, AI-powered solutions, digital products, and scalable technology infrastructure with a long-term vision.",
  alternates: { canonical: "/founder" },
};

const focusItems = [
  "Build and scale digital products",
  "Develop AI-powered solutions",
  "Modernize legacy technology",
  "Create web and mobile applications",
  "Build scalable SaaS products",
  "Improve cloud infrastructure and DevOps",
  "Turn data into actionable intelligence",
  "Strengthen software quality and reliability",
];

const founderImageUrl = `${SITE.url}/brand/innam-dustgir-founder.jpg`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.founder,
  jobTitle: "Founder & CEO",
  image: founderImageUrl,
  worksFor: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  url: `${SITE.url}/founder`,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  founder: {
    "@type": "Person",
    name: SITE.founder,
    jobTitle: "Founder & CEO",
    image: founderImageUrl,
    url: `${SITE.url}/founder`,
  },
};

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <section className="relative overflow-hidden bg-primary section-pad !pt-12">
        <div className="pointer-events-none absolute inset-0 gradient-glow opacity-40" />
        <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[var(--accent-burgundy-muted)] blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[var(--accent-cyan-muted)] blur-3xl" />
        <div className="container-insol relative min-w-0">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Founder" },
            ]}
          />

          <div className="mt-2 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div className="min-w-0 flex-1 max-w-3xl">
              <p className="eyebrow mb-3">Founder &amp; CEO</p>
              <h1 className="text-display">{SITE.founder}</h1>
              <p className="mt-5 text-body-lg text-text-secondary">
                Building technology companies with a long-term vision
              </p>

              <div className="mt-8 space-y-5 text-body-lg text-text-secondary">
                <p>
                  Innam Dustgir is the Founder of InSol Technologies, a technology
                  company focused on building modern software, AI-powered solutions,
                  digital products, and scalable technology infrastructure for
                  businesses.
                </p>
                <p>
                  With an entrepreneurial mindset and a strong focus on technology and
                  business growth, Innam founded InSol Technologies with a simple
                  belief: technology should solve real business problems, not simply
                  add complexity.
                </p>
                <p>
                  His approach combines business strategy, product thinking,
                  technology, and execution to help organizations transform ideas into
                  reliable digital products and scalable solutions.
                </p>
              </div>

              <div className="mt-10 flex w-full flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                <Button
                  href={CTAS.startProject.href}
                  size="md"
                  className="w-full min-[480px]:w-auto md:!h-[52px] md:!px-7"
                >
                  {CTAS.startProject.label}
                </Button>
                <Button
                  href={CTAS.talkExpert.href}
                  variant="secondary"
                  size="md"
                  className="w-full min-[480px]:w-auto md:!h-[52px] md:!px-7"
                >
                  {CTAS.talkExpert.label}
                </Button>
              </div>
            </div>

            <aside className="flex w-full shrink-0 justify-start lg:w-auto lg:justify-center lg:pt-2">
              <div
                className="relative w-full max-w-[240px] overflow-hidden rounded-2xl border border-border bg-surface sm:max-w-[280px] lg:max-w-[320px]"
                style={{
                  boxShadow:
                    "0 12px 40px rgba(0,0,0,0.35), 0 0 36px var(--accent-burgundy-glow), 0 0 24px var(--accent-cyan-glow)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[2px]"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--accent-burgundy), var(--accent-cyan))",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px color-mix(in srgb, var(--accent-burgundy) 45%, var(--accent-cyan))",
                  }}
                  aria-hidden
                />
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={`${BASE_PATH}/brand/innam-dustgir-founder.jpg`}
                    alt="Innam Dustgir, Founder & CEO of InSol Technologies"
                    fill
                    priority
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                    className="object-cover object-top"
                  />
                </div>
                <div
                  className="relative border-t border-border px-5 py-4"
                  style={{
                    background:
                      "linear-gradient(165deg, var(--accent-burgundy-muted), transparent 60%, var(--accent-cyan-muted))",
                  }}
                >
                  <p className="text-base font-semibold tracking-tight text-text">
                    {SITE.founder}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[var(--accent-cyan)]">
                    Founder &amp; CEO
                  </p>
                  <p className="mt-0.5 text-sm text-text-secondary">{SITE.name}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Section band="secondary">
        <SectionHeader
          title="The Vision Behind InSol"
          intro="InSol Technologies was built around the idea of creating a technology partner that understands both business and engineering."
        />
        <p className="mb-8 max-w-3xl text-text-secondary">
          Under Innam&apos;s leadership, InSol focuses on helping companies:
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {focusItems.map((item, i) => (
            <li
              key={item}
              className="card-surface flex items-start gap-3.5 p-4 sm:p-5 hover:transform-none hover:shadow-none"
            >
              <span
                className="shrink-0 font-mono text-xs font-semibold tabular-nums"
                style={{
                  color:
                    i % 2 === 0 ? "var(--accent-cyan)" : "var(--accent-burgundy)",
                }}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-relaxed text-text">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader title="Founder’s Philosophy" />
        <blockquote className="relative max-w-3xl overflow-hidden rounded-[16px] border border-border bg-surface px-6 py-8 sm:px-10 sm:py-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, var(--accent-burgundy), var(--accent-cyan))",
            }}
            aria-hidden
          />
          <span
            className="pointer-events-none absolute left-4 top-4 font-serif text-5xl leading-none text-[var(--accent-cyan)] opacity-35 sm:left-6 sm:top-5 sm:text-6xl"
            aria-hidden
          >
            “
          </span>
          <p className="relative text-xl font-medium leading-relaxed text-text sm:text-2xl md:text-[1.75rem] md:leading-snug">
            Great technology is not about building more. It is about building what
            matters.
          </p>
          <footer className="relative mt-6 flex items-center gap-3 border-t border-border pt-5">
            <span
              className="h-8 w-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(180deg, var(--accent-burgundy), var(--accent-cyan))",
              }}
              aria-hidden
            />
            <div>
              <cite className="not-italic text-sm font-semibold text-text">
                {SITE.founder}
              </cite>
              <p className="mt-0.5 text-sm text-text-secondary">
                Founder &amp; CEO, {SITE.name}
              </p>
            </div>
          </footer>
        </blockquote>
        <div className="mt-10 max-w-3xl space-y-5 text-body-lg text-text-secondary">
          <p>
            Innam believes successful technology companies need to combine clear
            strategy, strong engineering, thoughtful design, and continuous
            innovation.
          </p>
          <p>
            His vision for InSol is to build a technology organization capable of
            working alongside ambitious companies—from early-stage startups to
            established enterprises—to solve complex problems and create technology
            with lasting value.
          </p>
        </div>
      </Section>

      <Section band="secondary">
        <SectionHeader title="Looking Ahead" />
        <div className="max-w-3xl space-y-5 text-body-lg text-text-secondary">
          <p>
            The next generation of businesses will be shaped by AI, intelligent
            automation, data, cloud technologies, and digital products.
          </p>
          <p>
            InSol Technologies is positioned to help businesses navigate that
            transformation—bringing together strategy, engineering, AI, and execution
            under one technology partner.
          </p>
          <p>
            Innam&apos;s goal is simple: build a technology company that creates
            meaningful products, solves difficult problems, and earns long-term trust
            through execution.
          </p>
        </div>
      </Section>

      <FinalCTA
        headline="Ready to build what matters?"
        support="Share what you are building, modernizing, or scaling. We will respond with clear next steps."
      />
    </>
  );
}
