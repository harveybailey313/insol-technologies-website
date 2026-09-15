import Link from "next/link";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

/** Locked mark: In monogram — fused I + N with cyan bridge */
function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className={className}
      role="img"
      aria-hidden="true"
    >
      {/* I stem */}
      <path d="M30 26 L46 20 L46 108 L30 102 Z" fill="#F5F7FA" />
      {/* Cyan bridge into N diagonal */}
      <path d="M46 58 H74 L94 38 L104 46 L78 72 H46 Z" fill="#00D4FF" />
      {/* N right stem */}
      <path d="M86 28 L102 22 L102 106 L86 100 Z" fill="#F5F7FA" />
    </svg>
  );
}

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 focus-visible:outline-none ${className}`}
      aria-label="InSol Technologies home"
    >
      <Mark className="h-9 w-9 shrink-0" />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[1.125rem] font-bold tracking-tight text-text">
            InSol
          </span>
          <span className="text-[0.625rem] font-medium tracking-[0.2em] text-text-secondary">
            TECHNOLOGIES
          </span>
        </span>
      )}
    </Link>
  );
}
