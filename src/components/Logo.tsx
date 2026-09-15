import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Ignored when using full ChatGPT lockup (text is in the image). */
  showWordmark?: boolean;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 items-center focus-visible:outline-none ${className}`}
      aria-label="InSol Technologies home"
    >
      <Image
        src={`${BASE_PATH}/brand/insol-logo-full.png`}
        alt="InSol Technologies"
        width={220}
        height={110}
        className="h-8 w-auto max-w-[min(100%,148px)] object-contain object-left min-[375px]:h-9 min-[375px]:max-w-[min(100%,180px)] sm:h-10 sm:max-w-[240px]"
        priority
      />
    </Link>
  );
}
