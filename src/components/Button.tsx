import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLElement>;
  ariaLabel?: string;
};

const variantClasses: Record<Variant, string> = {
  primary: "btn-gradient",
  secondary:
    "bg-transparent text-text border border-border-strong hover:border-text",
  ghost: "bg-transparent text-accent hover:bg-accent-muted",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.75rem]",
  md: "h-11 px-6 text-[0.8125rem]",
  lg: "h-[52px] px-8 text-[0.8125rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-[0.08em] transition-all duration-200 disabled:opacity-45 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
