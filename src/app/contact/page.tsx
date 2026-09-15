import type { Metadata } from "next";
import { Suspense } from "react";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact InSol Technologies — Start a Project or Talk to an Expert. Phone +1 (480) 918-3323 · Austin, TX.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary section-pad !pt-12">
        <div className="pointer-events-none absolute inset-0 gradient-glow opacity-40" />
        <div className="container-insol relative">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
          <h1 className="text-display max-w-3xl">Let’s talk about what’s next.</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            Tell us what you’re building, modernizing, or solving. We’ll respond with
            clear next steps — not a generic pitch deck.
          </p>
        </div>
      </section>

      <Section band="secondary">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader title="Reach us" className="mb-6" />
            <div className="space-y-6">
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Phone
                </h2>
                <a
                  href={SITE.phoneHref}
                  className="mt-2 block text-xl font-semibold text-accent hover:text-accent-hover"
                >
                  {SITE.phone}
                </a>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Address
                </h2>
                <p className="mt-2 text-text">
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  <br />
                  {SITE.address.country}
                </p>
              </div>
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Intents
                </h2>
                <ul className="mt-2 space-y-1 text-text-secondary">
                  <li>Start a Project</li>
                  <li>Talk to an Expert</li>
                </ul>
              </div>
            </div>
          </div>
          <Suspense
            fallback={
              <div className="card-surface h-96 animate-pulse p-8" aria-hidden />
            }
          >
            <ContactForm />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
