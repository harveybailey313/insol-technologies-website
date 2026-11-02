import { FinalCTA } from "@/components/FinalCTA";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Button } from "@/components/Button";
import { CTAS } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { References, REFS, HeroMark } from "@/components/References";
import { Section, SectionHeader } from "@/components/Section";

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
          <HeroMark alt="Careers at InSol Technologies" />
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          />
          <h1 className="text-display max-w-3xl">
            Build systems that matter — with us.
          </h1>
          <p className="mt-6 max-w-2xl text-body-lg text-text-secondary">
            Careers at InSol Technologies are for engineers, designers, and delivery leads.
            We’re looking for people who care about craft, clarity, and shipped
            outcomes. If you want engineering depth rather than staff-augmentation work,
            stay tuned for open roles.
          </p>
        </div>
      </section>

      <Section band="secondary">
        <div className="card-surface max-w-2xl p-8 hover:transform-none hover:shadow-none">
          <h2 className="text-h3">Careers: no open roles listed yet</h2>
          <p className="mt-3 text-text-secondary">
            Open positions will be posted here. If you would like to be considered
            for future roles, introduce yourself and tell us what you build.
          </p>
          <Button href={CTAS.talkExpert.href} className="mt-6">
            Get in touch
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeader title="How we work at InSol Technologies" />
        <div className="max-w-3xl space-y-4 text-text-secondary">
          <p>
            InSol Technologies builds custom software, SaaS products, AI automation, cloud platforms, and data systems for clients across the United States. Work follows a transparent Discover to Scale path, so everyone on a project knows what happens next and why.
          </p>
          <p>
            We value engineers who can explain trade-offs in plain language, write code other people can maintain, and care about what happens after launch: monitoring, documentation, and handover. If that sounds like you, introduce yourself and tell us what you have built. We keep introductions on file and reach out when a role fits.
          </p>
          <p>
            A useful introduction includes the kind of work you want to do, links to code or products you have shipped, the technologies you know well, and the time zones you can work in. We read every message and reply when there is a match.
          </p>
        </div>
      </Section>

      <References items={[REFS.agile, REFS.dora, REFS.twelve]} />
      <FinalCTA
        headline="Want to deliver this way?"
        support="Tell us what you build and how you like to work. We’ll be in touch when there’s a fit."
      />
    </>
  );
}
