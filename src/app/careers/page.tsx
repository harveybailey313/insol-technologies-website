import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { CTAS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build systems that matter with InSol Technologies — roles for people who care about craft, clarity, and shipped outcomes.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-primary section-pad !pt-12">
        <div className="container-insol">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          />
          <h1 className="text-display max-w-3xl">
            Build systems that matter — with us.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            We’re looking for people who care about craft, clarity, and shipped
            outcomes. If you want engineering depth without the body-shop theater,
            stay tuned for open roles.
          </p>
        </div>
      </section>

      <Section band="secondary">
        <div className="card-surface max-w-2xl p-8 hover:transform-none hover:shadow-none">
          <h2 className="text-h3">No open roles listed yet</h2>
          <p className="mt-3 text-text-secondary">
            This is a careers stub for the MVP. When roles are cleared for public
            posting, they will appear here. In the meantime, introduce yourself.
          </p>
          <Button href={CTAS.talkExpert.href} className="mt-6">
            Get in touch
          </Button>
        </div>
      </Section>

      <FinalCTA
        headline="Want to deliver this way?"
        support="Tell us what you build and how you like to work. We’ll be in touch when there’s a fit."
      />
    </>
  );
}
