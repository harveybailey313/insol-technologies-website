"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Arrow } from "./Arrow";
import { CTAS, NAV_LINKS, SITE, type NavChild, type NavLink } from "@/lib/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

function withChildren(link: NavLink): NavLink {
  if (link.href === "/services") {
    return {
      ...link,
      children: services.map((s) => ({
        label: s.title,
        href: `/services/${s.slug}`,
        description: s.businessOutcome,
      })),
    };
  }
  if (link.href === "/industries") {
    return {
      ...link,
      children: industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` })),
    };
  }
  return link;
}

const LINKS = NAV_LINKS.map(withChildren);

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopNavItem({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const children = link.children ?? [];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  const base =
    "inline-flex h-[76px] items-center gap-1.5 border-b-2 text-[0.9375rem] font-medium transition-colors";
  const idle = "border-transparent text-white/80 hover:text-white";

  if (!children.length) {
    return (
      <Link href={link.href} className={`${base} ${idle}`}>
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
        className={`${base} ${open ? "border-[var(--brand-purple)] text-white" : idle} focus-visible:outline-none focus-visible:text-white`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        onFocus={() => setOpen(true)}
      >
        {link.label}
        <Chevron open={open} />
      </button>
      <div
        id={menuId}
        role="menu"
        aria-label={link.label}
        className={`absolute top-full z-50 transition-opacity duration-150 ${
          link.mega ? "-left-40 w-[760px]" : "left-0 min-w-[240px]"
        } ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="overflow-hidden rounded-b-[12px] border border-t-0 border-[#e4e4ea] bg-white text-[#161616] shadow-[0_24px_60px_rgba(22,22,22,0.28)]">
          {link.mega ? (
            <div className="grid grid-cols-[1fr_220px]">
              <div className="grid grid-cols-2 gap-1 p-4">
                {children.map((child) => (
                  <MenuLink key={child.href} child={child} onClick={() => setOpen(false)} rich />
                ))}
              </div>
              <div className="flex flex-col justify-between bg-[#f6f6f8] p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand-purple)]">
                    Services
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#4a4d5a]">
                    Eight connected service lines, delivered through one Discover-to-Scale model.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="link-arrow mt-6 !text-[var(--brand-purple)]"
                  onClick={() => setOpen(false)}
                >
                  All services <Arrow />
                </Link>
              </div>
            </div>
          ) : (
            <div className="py-2">
              {children.map((child) => (
                <MenuLink key={child.href} child={child} onClick={() => setOpen(false)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MenuLink({ child, onClick, rich = false }: { child: NavChild; onClick: () => void; rich?: boolean }) {
  return (
    <Link
      href={child.href}
      role="menuitem"
      onClick={onClick}
      className={
        rich
          ? "group block rounded-[8px] p-3 transition-colors hover:bg-[#f6f6f8] focus-visible:bg-[#f6f6f8] focus-visible:outline-none"
          : "block px-5 py-2.5 text-sm font-medium text-[#4a4d5a] transition-colors hover:bg-[#f6f6f8] hover:text-[var(--brand-purple)] focus-visible:bg-[#f6f6f8] focus-visible:outline-none"
      }
    >
      {rich ? (
        <>
          <span className="block text-sm font-semibold text-[#161616] group-hover:text-[var(--brand-purple)]">
            {child.label}
          </span>
          {child.description && (
            <span className="mt-1 block text-xs leading-relaxed text-[#6b6e7b]">{child.description}</span>
          )}
        </>
      ) : (
        child.label
      )}
    </Link>
  );
}

function MobileNavItem({ link, onNavigate }: { link: NavLink; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const children = link.children ?? [];

  if (!children.length) {
    return (
      <Link
        href={link.href}
        className="border-b border-white/10 py-4 text-lg font-medium text-white"
        onClick={onNavigate}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-white"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((v) => !v)}
      >
        {link.label}
        <Chevron open={expanded} />
      </button>
      {expanded && (
        <div id={panelId} className="flex flex-col pb-3">
          <Link href={link.href} className="py-2 pl-3 text-sm font-semibold text-[var(--brand-orchid)]" onClick={onNavigate}>
            {link.label} overview
          </Link>
          {children.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              className="py-2 pl-3 text-[0.9375rem] text-white/75 hover:text-white"
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
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="theme-dark sticky top-0 z-50 border-b border-white/10 !bg-[rgba(22,22,22,0.95)] backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <div className="container-insol flex h-16 items-center justify-between gap-6 lg:h-[76px]">
        <div className="flex items-center gap-10">
          <Logo sizeClassName="h-7 sm:h-8 lg:h-9" />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {LINKS.map((link) => (
              <DesktopNavItem key={link.label} link={link} />
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden text-sm font-semibold text-white/80 transition-colors hover:text-white xl:inline"
          >
            {SITE.phone}
          </a>
          <Button href={CTAS.startProject.href} size="sm" className="hidden sm:inline-flex">
            {CTAS.startProject.label}
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-[var(--brand-ink)] lg:hidden"
        >
          <nav className="container-insol flex flex-col py-4" aria-label="Mobile">
            {LINKS.map((link) => (
              <MobileNavItem key={link.label} link={link} onNavigate={() => setOpen(false)} />
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Button href={CTAS.startProject.href} className="w-full" onClick={() => setOpen(false)}>
                {CTAS.startProject.label}
              </Button>
              <a href={SITE.phoneHref} className="py-2 text-center text-sm font-semibold text-white/80">
                {SITE.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
