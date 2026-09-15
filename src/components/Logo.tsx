import Image from "next/image";
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
      <Image
        src="/brand/insol-mark.png"
        alt=""
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-[8px]"
        priority
      />
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
