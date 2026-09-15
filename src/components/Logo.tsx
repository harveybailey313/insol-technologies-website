import Link from "next/link";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 focus-visible:outline-none ${className}`}
      aria-label="InSol Technologies home"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 128"
        className="h-9 w-9 shrink-0"
        role="img"
        aria-hidden={!showWordmark}
      >
        <rect width="128" height="128" rx="28" fill="#07111F" />
        <rect
          x="12"
          y="12"
          width="104"
          height="104"
          rx="20"
          fill="none"
          stroke="#F5F7FA"
          strokeWidth="6"
        />
        <rect x="38" y="36" width="16" height="56" rx="2" fill="#F5F7FA" />
        <rect x="62" y="68" width="28" height="24" rx="2" fill="#F5F7FA" />
        <rect
          x="62"
          y="36"
          width="28"
          height="24"
          rx="2"
          fill="#F5F7FA"
          opacity="0.35"
        />
        <path
          d="M38 100 H70 L86 84"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="6"
          strokeLinecap="square"
        />
      </svg>
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
