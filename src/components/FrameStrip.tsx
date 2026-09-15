import { Fragment } from "react";
import { FRAME_STEPS } from "@/lib/site";

const ARROW_COLORS = [
  "var(--accent-cyan)",
  "var(--accent-violet)",
  "var(--accent-magenta)",
  "var(--accent-emerald)",
  "var(--accent-amber)",
] as const;

const STEP_COLORS = [
  "color-mix(in srgb, var(--accent-cyan) 70%, var(--color-text-secondary))",
  "color-mix(in srgb, var(--accent-violet) 70%, var(--color-text-secondary))",
  "color-mix(in srgb, var(--accent-magenta) 70%, var(--color-text-secondary))",
  "color-mix(in srgb, var(--accent-emerald) 70%, var(--color-text-secondary))",
  "color-mix(in srgb, var(--accent-amber) 70%, var(--color-text-secondary))",
  "color-mix(in srgb, var(--accent-blue) 70%, var(--color-text-secondary))",
] as const;

export function FrameStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`frame-strip ${className}`} aria-label="Delivery frame">
      {FRAME_STEPS.map((step, i) => (
        <Fragment key={step}>
          <span className="frame-strip-step" style={{ color: STEP_COLORS[i] }}>
            {step}
          </span>
          {i < FRAME_STEPS.length - 1 && (
            <span
              className="frame-strip-arrow"
              style={{ color: ARROW_COLORS[i] }}
              aria-hidden
            >
              →
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
