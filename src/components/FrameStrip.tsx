import { FRAME_STEPS } from "@/lib/site";

export function FrameStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`frame-strip ${className}`} aria-label="Delivery frame">
      {FRAME_STEPS.map((step) => (
        <span key={step}>{step}</span>
      ))}
    </div>
  );
}
