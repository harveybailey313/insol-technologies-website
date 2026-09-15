import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions draft notice for InSol Technologies.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Section className="!pt-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />
      <h1 className="text-h1">Terms & Conditions</h1>
      <div className="mt-8 max-w-3xl space-y-4 text-text-secondary">
        <p className="rounded-[10px] border border-accent-border bg-accent-muted px-4 py-3 text-sm text-text">
          <strong>Draft notice:</strong> This page is a placeholder for InSol
          Technologies website terms. Final legal language is pending review and is
          not yet published as binding terms of use.
        </p>
        <p>
          Use of this marketing site is subject to applicable law. For engagement
          terms on projects, refer to the executed agreement between the parties.
        </p>
        <p>
          {SITE.name}
          <br />
          {SITE.address.full}
          <br />
          <a href={SITE.phoneHref} className="text-accent">
            {SITE.phone}
          </a>
        </p>
      </div>
    </Section>
  );
}
