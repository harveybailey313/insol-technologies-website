import Link from "next/link";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { SERVICE_ACCENTS, INDUSTRY_ACCENTS, accentClass, accentAt } from "@/lib/accents";

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Our Approach", href: "/about/approach" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-border-gradient bg-secondary">
      <div className="container-insol section-pad !pb-10 !pt-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-text-secondary">
              InSol Technologies helps organizations build, modernize, and scale —
              software, practical AI, SaaS products, data, cloud, and enterprise
              applications from strategy through production.
            </p>
            <div className="mt-6 space-y-1 text-sm text-text-secondary">
              <p>{SITE.address.full}</p>
              <p>
                <a
                  href={SITE.phoneHref}
                  className="text-accent hover:text-accent-hover"
                >
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            <div>
              <h4 className="mb-4 text-sm font-semibold text-text">What We Do</h4>
              <ul className="space-y-2">
                {services.map((s) => {
                  const accent = SERVICE_ACCENTS[s.slug] ?? "cyan";
                  return (
                    <li key={s.slug} className={accentClass(accent)}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm text-text-secondary transition-colors hover:text-[var(--card-accent)]"
                      >
                        {s.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-text">Industries</h4>
              <ul className="space-y-2">
                {industries.map((i) => {
                  const accent = INDUSTRY_ACCENTS[i.slug] ?? "cyan";
                  return (
                    <li key={i.slug} className={accentClass(accent)}>
                      <Link
                        href={`/industries/${i.slug}`}
                        className="text-sm text-text-secondary transition-colors hover:text-[var(--card-accent)]"
                      >
                        {i.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-text">Company</h4>
              <ul className="space-y-2">
                {aboutLinks.map((l, idx) => (
                  <li key={l.href} className={accentClass(accentAt(idx))}>
                    <Link
                      href={l.href}
                      className="text-sm text-text-secondary transition-colors hover:text-[var(--card-accent)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className={accentClass(accentAt(5))}>
                  <Link
                    href="/case-studies"
                    className="text-sm text-text-secondary transition-colors hover:text-[var(--card-accent)]"
                  >
                    Case Studies
                  </Link>
                </li>
                <li className={accentClass(accentAt(6))}>
                  <Link
                    href="/insights"
                    className="text-sm text-text-secondary transition-colors hover:text-[var(--card-accent)]"
                  >
                    Insights
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-text">Legal</h4>
              <ul className="space-y-2">
                <li className={accentClass("blue")}>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-text-secondary transition-colors hover:text-[var(--card-accent)]"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className={accentClass("coral")}>
                  <Link
                    href="/terms-and-conditions"
                    className="text-sm text-text-secondary transition-colors hover:text-[var(--card-accent)]"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p>Austin, TX</p>
        </div>
      </div>
    </footer>
  );
}
