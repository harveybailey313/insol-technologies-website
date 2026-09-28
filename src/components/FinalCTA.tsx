import { Button } from "./Button";
import { CTAS, SITE } from "@/lib/site";

type FinalCTAProps = {
  headline?: string;
  support?: string;
};

export function FinalCTA({
  headline = "Have a system to build, modernize, or scale?",
  support = "Tell us where you are and what needs to change. You will hear back from a person with clear, practical next steps.",
}: FinalCTAProps) {
  return (
    <section className="theme-dark cta-band relative overflow-hidden section-pad">
      <div className="container-insol relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-5">Let’s talk</p>
          <h2 className="text-h2 max-w-2xl">{headline}</h2>
          <p className="mt-5 max-w-xl text-body-lg text-text-secondary">{support}</p>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:justify-end">
            <Button href={CTAS.startProject.href} size="lg" className="w-full sm:w-auto">
              {CTAS.startProject.label}
            </Button>
            <Button href={CTAS.talkExpert.href} variant="secondary" size="lg" className="w-full sm:w-auto">
              {CTAS.talkExpert.label}
            </Button>
          </div>
          <p className="text-sm text-text-secondary">
            Or call{" "}
            <a href={SITE.phoneHref} className="font-semibold text-white hover:text-accent">
              {SITE.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
