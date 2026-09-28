import Image from "next/image";
import Link from "next/link";
import { BASE_PATH } from "@/lib/site";

type LogoProps = {
  className?: string;
  /** Tailwind height classes for the lockup. */
  sizeClassName?: string;
  /**
   * "onDark": white wordmark for charcoal surfaces (header, drawer, footer).
   * "onLight": charcoal wordmark for white/mist surfaces.
   */
  variant?: "onDark" | "onLight";
};

/** InSol Technologies "Sol Orbit" lockup (concept B). */
export function Logo({
  className = "",
  sizeClassName = "h-9",
  variant = "onDark",
}: LogoProps) {
  const file = variant === "onDark" ? "insol-logo-on-dark.svg" : "insol-logo-on-light.svg";
  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 shrink-0 items-center focus-visible:outline-none ${className}`}
      aria-label="InSol Technologies home"
    >
      <Image
        src={`${BASE_PATH}/brand/${file}`}
        alt="InSol Technologies logo"
        width={319}
        height={109}
        className={`${sizeClassName} w-auto`}
        priority
      />
    </Link>
  );
}
