import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Tailwind height classes for the lockup. */
  sizeClassName?: string;
};

/** White InSol Technologies lockup — use on dark (ink) backgrounds only. */
export function Logo({
  className = "",
  sizeClassName = "h-8 sm:h-9",
}: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 shrink-0 items-center focus-visible:outline-none ${className}`}
      aria-label="InSol Technologies home"
    >
      <Image
        src={`${BASE_PATH}/brand/insol-logo-trim.png`}
        alt="InSol Technologies logo"
        width={560}
        height={226}
        className={`${sizeClassName} w-auto object-contain object-left`}
        priority
      />
    </Link>
  );
}
