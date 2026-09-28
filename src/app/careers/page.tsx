import { Section } from "@/components/Section";
import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { CTAS } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Careers — Software Engineering Roles",
  description:
    "Careers at InSol Technologies for engineers and builders who care about craft, clarity, and shipping software that matters. Share your profile with us.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <section className="theme-dark inner-hero relative overflow-hidden section-pad !pt-12 lg:!pt-16">
        <div className="container-insol">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          />
          <h1 className="text-display max-w-3xl">
            Build systems that matter — with us.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            We’re looking for people who care about craft, clarity, and shipped
            outcomes. If you want engineering depth rather than staff-augmentation work,
            stay tuned for open roles.
          </p>
        </div>
      </section>

      <Section band="secondary">
        <div className="card-surface max-w-2xl p-8 hover:transform-none hover:shadow-none">
          <h2 className="text-h3">No open roles listed yet</h2>
          <p className="mt-3 text-text-secondary">
            Open positions will be posted here. If you would like to be considered
            for future roles, introduce yourself and tell us what you build.
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
