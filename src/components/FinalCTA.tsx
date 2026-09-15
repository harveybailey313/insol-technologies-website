import { Button } from "./Button";
import { CTAS, SITE } from "@/lib/site";

type FinalCTAProps = {
  headline?: string;
  support?: string;
};

export function FinalCTA({
  headline = "Ready to build what’s next?",
  support = "Tell us what you’re building, modernizing, or solving. We’ll respond with clear next steps — not a generic pitch deck.",
}: FinalCTAProps) {
  return (
    <section className="cta-band relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-40" />
      <div className="container-insol relative max-w-3xl">
        <h2 className="text-h2">
          <span className="text-gradient">{headline}</span>
        </h2>
        <p className="mt-4 text-body-lg text-text-secondary">{support}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={CTAS.startProject.href} size="lg">
            {CTAS.startProject.label}
          </Button>
          <Button href={CTAS.talkExpert.href} variant="secondary" size="lg">
            {CTAS.talkExpert.label}
          </Button>
        </div>
        <p className="mt-6 text-sm text-text-muted">
          <a href={SITE.phoneHref} className="text-accent hover:text-accent-hover">
            {SITE.phone}
          </a>
          {" · "}
          {SITE.address.full}
        </p>
        <p className="mt-2 text-sm text-text-muted">
          We respect your inbox. No spam — just a human reply.
        </p>
      </div>
    </section>
  );
}
