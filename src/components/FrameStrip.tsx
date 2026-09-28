import { Fragment } from "react";
import { FRAME_STEPS } from "@/lib/site";

export function FrameStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`frame-strip ${className}`} aria-label="Delivery model">
      {FRAME_STEPS.map((step, i) => (
        <Fragment key={step}>
          <span className="frame-strip-step">{step}</span>
          {i < FRAME_STEPS.length - 1 && (
            <span className="frame-strip-arrow text-accent" aria-hidden>
              →
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
