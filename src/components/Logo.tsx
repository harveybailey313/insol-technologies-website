import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 items-center gap-2 focus-visible:outline-none sm:gap-3 ${className}`}
      aria-label="InSol Technologies home"
    >
      <Image
        src={`${BASE_PATH}/brand/insol-mark.png`}
        alt=""
        width={36}
        height={36}
        className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9"
        priority
      />
      {showWordmark && (
        <span className="flex min-w-0 flex-col leading-none">
          <span className="text-base font-bold tracking-tight text-text sm:text-[1.125rem]">
            InSol
          </span>
          <span className="text-[0.5625rem] font-medium tracking-[0.18em] text-text-secondary sm:text-[0.625rem] sm:tracking-[0.2em]">
            TECHNOLOGIES
          </span>
        </span>
      )}
    </Link>
  );
}
