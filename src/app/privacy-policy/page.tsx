import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy draft notice for InSol Technologies.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <Section className="!pt-12">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <h1 className="text-h1">Privacy Policy</h1>
      <div className="mt-8 max-w-3xl space-y-4 text-text-secondary">
        <p className="rounded-[10px] border border-accent-border bg-accent-muted px-4 py-3 text-sm text-text">
          <strong>Draft notice:</strong> This page is a placeholder for the InSol
          Technologies Privacy Policy. Final legal language is pending review and is
          not yet published as binding policy.
        </p>
        <p>
          Until the full policy is published, contact us regarding personal data
          inquiries using the details below.
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
