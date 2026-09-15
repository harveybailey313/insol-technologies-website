import { PROCESS_STEPS } from "@/lib/site";
import { PROCESS_ACCENTS, accentClass } from "@/lib/accents";

type ProcessStepperProps = {
  className?: string;
  closing?: string;
};

export function ProcessStepper({
  className = "",
  closing = "Strategy → Design → Engineering → AI → Deployment → Scale — one continuous partnership, not a handoff theater.",
}: ProcessStepperProps) {
  return (
    <div className={className}>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {PROCESS_STEPS.map((step, index) => {
          const accent = PROCESS_ACCENTS[index] ?? "cyan";
          return (
            <li
              key={step.number}
              className={`card-surface accent-card flex flex-col p-5 hover:transform-none ${accentClass(accent)}`}
            >
              <span className="accent-text mb-3 font-mono text-sm font-semibold">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-text">{step.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.copy}
              </p>
            </li>
          );
        })}
      </ol>
      {closing && (
        <p className="mt-8 max-w-3xl text-sm text-text-secondary md:text-base">
          {closing}
        </p>
      )}
    </div>
  );
}
