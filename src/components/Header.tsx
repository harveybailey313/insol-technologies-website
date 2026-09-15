"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { CTAS, NAV_LINKS, type NavLink } from "@/lib/site";

function DesktopNavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const hasChildren = Boolean(link.children?.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onPointer = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:text-accent"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
      >
        {link.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={menuId}
        role="menu"
        aria-label={link.label}
        className={`absolute left-0 top-full z-50 min-w-[200px] pt-2 transition-opacity ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="rounded-[10px] border border-border bg-surface-elevated py-2 shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
          {link.children!.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-text-secondary transition-colors hover:bg-accent-muted hover:text-accent focus-visible:bg-accent-muted focus-visible:text-accent focus-visible:outline-none"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavItem({
  link,
  onNavigate,
}: {
  link: NavLink;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const hasChildren = Boolean(link.children?.length);

  if (!hasChildren) {
    return (
      <Link
        href={link.href}
        className="rounded-md px-3 py-3.5 text-base font-medium text-text hover:bg-accent-muted hover:text-accent"
        onClick={onNavigate}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Link
          href={link.href}
          className="flex-1 rounded-md px-3 py-3.5 text-base font-medium text-text hover:bg-accent-muted hover:text-accent"
          onClick={onNavigate}
        >
          {link.label}
        </Link>
        <button
          type="button"
          className="mr-1 inline-flex h-11 w-11 items-center justify-center rounded-md text-text-secondary hover:bg-accent-muted hover:text-accent"
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${link.label} submenu`}
          onClick={() => setExpanded((v) => !v)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {expanded && (
        <div id={panelId} className="mb-1 ml-3 flex flex-col border-l border-border pl-2">
          {link.children!.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-accent-muted hover:text-accent"
              onClick={onNavigate}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[rgba(7,17,31,0.85)] backdrop-blur-[12px]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-primary"
      >
        Skip to content
      </a>
      <div className="container-insol flex h-14 items-center justify-between gap-3 sm:h-16 lg:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <DesktopNavItem key={link.label} link={link} />
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button href={CTAS.startProject.href} size="sm" className="hidden sm:inline-flex">
            {CTAS.startProject.label}
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-border-strong text-text transition-colors hover:border-accent-border hover:text-accent lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-border bg-surface sm:max-h-[calc(100dvh-4rem)] lg:hidden"
        >
          <nav className="container-insol flex flex-col gap-1 py-3 sm:py-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <MobileNavItem
                key={link.label}
                link={link}
                onNavigate={() => setOpen(false)}
              />
            ))}
            <div className="mt-2 px-3 pb-3 pt-1">
              <Button
                href={CTAS.startProject.href}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {CTAS.startProject.label}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
