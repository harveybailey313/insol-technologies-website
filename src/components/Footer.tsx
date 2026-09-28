import Link from "next/link";
import { Logo } from "./Logo";
import { Arrow } from "./Arrow";
import { CTAS, SITE } from "@/lib/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

const companyLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Founder", href: "/founder" },
  { label: "Leadership", href: "/about/leadership" },
  { label: "Our Approach", href: "/about/approach" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </h2>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="theme-dark footer-border-gradient">
      <div className="container-insol pb-10 pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo sizeClassName="h-9 lg:h-10" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-text-secondary">
              InSol Technologies is a software engineering and AI partner. We help
              organizations design, build, modernize, and run the systems their
              business depends on.
            </p>
            <address className="mt-8 space-y-4 text-sm not-italic text-text-secondary">
              <a
                href={SITE.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-white"
              >
                <span className="block font-semibold text-white">{SITE.legalName}</span>
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip},{" "}
                {SITE.address.country}
              </a>
              <a
                href={SITE.phoneHref}
                className="block font-semibold text-white transition-colors hover:text-accent"
              >
                {SITE.phone}
              </a>
            </address>
            <Link
              href={CTAS.startProject.href}
              className="link-arrow mt-8"
            >
              {CTAS.startProject.label} <Arrow />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn
              title="Services"
              links={services.map((s) => ({ label: s.title, href: `/services/${s.slug}` }))}
            />
            <FooterColumn
              title="Industries"
              links={industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` }))}
            />
            <FooterColumn title="Company" links={companyLinks} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName} All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span>Austin, Texas, USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
