import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for InSol Technologies Inc. — how we collect, use, and protect information when you use insoltechnologies.com or contact us.",
  path: "/privacy-policy",
});

const LAST_UPDATED = "September 16, 2026";

export default function PrivacyPolicyPage() {
  return (
    <Section className="!pt-12">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <h1 className="text-h1">Privacy Policy</h1>
      <p className="mt-3 text-sm text-text-muted">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8 max-w-3xl space-y-8 text-text-secondary">
        <p>
          This Privacy Policy describes how {SITE.legalName} (“InSol,” “we,” “us,”
          or “our”) collects, uses, and shares information in connection with the
          website{" "}
          <a href={SITE.url} className="text-accent hover:text-accent-hover">
            {SITE.url.replace("https://", "")}
          </a>{" "}
          (the “Site”) and related contact channels. This policy is intended for a
          U.S. audience and applies to information we collect as a business
          operating in the United States. It is not legal advice and does not
          create certifications or compliance claims beyond what is stated here.
        </p>

        <section>
          <h2 className="text-h3 text-text">1. Who we are</h2>
          <p className="mt-3">
            {SITE.legalName}
            <br />
            {SITE.address.full}
            <br />
            Phone:{" "}
            <a href={SITE.phoneHref} className="text-accent hover:text-accent-hover">
              {SITE.phone}
            </a>
            <br />
            Contact:{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover">
              Contact page
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">2. Information we collect</h2>
          <p className="mt-3">We may collect:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-text">Contact and inquiry information</strong>{" "}
              you submit through our contact form or by phone/email — such as name,
              company, email address, phone number, and the content of your message
              (including project intent or other details you choose to share).
            </li>
            <li>
              <strong className="text-text">Technical and usage data</strong> that
              may be collected automatically when you visit the Site — such as IP
              address, browser type, device type, referring URL, pages viewed, and
              approximate location derived from IP. This may include information
              gathered through privacy-oriented analytics tools (for example,
              Vercel Web Analytics or Speed Insights when enabled on our hosting
              platform) and, if configured, optional analytics such as Google
              Analytics when a measurement ID is set by us.
            </li>
            <li>
              <strong className="text-text">Communications</strong> you send us
              outside the form (email, phone), which we retain as needed to respond
              and manage the relationship.
            </li>
          </ul>
          <p className="mt-3">
            We do not require you to create an account to browse the Site. We do
            not knowingly collect sensitive personal information through the Site
            beyond what you voluntarily include in a message.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">3. How we use information</h2>
          <p className="mt-3">We use collected information to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Respond to inquiries and provide information about our services</li>
            <li>Operate, maintain, and improve the Site and our communications</li>
            <li>Understand aggregate Site traffic and performance</li>
            <li>Comply with law, enforce terms, and protect our rights and users</li>
            <li>Contact you about an engagement when you have asked us to</li>
          </ul>
        </section>

        <section>
          <h2 className="text-h3 text-text">4. Cookies and similar technologies</h2>
          <p className="mt-3">
            The Site may use cookies, local storage, or similar technologies that
            are necessary for hosting, security, or basic functionality. If we
            enable analytics, those tools may set or read identifiers to measure
            visits and performance. You can control cookies through your browser
            settings; blocking some cookies may affect Site features.
          </p>
          <p className="mt-3">
            We do not use the Site to run third-party advertising networks or
            sell personal information for advertising purposes.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">5. How we share information</h2>
          <p className="mt-3">
            We may share information with service providers who help us operate
            the Site and business (for example, hosting, form delivery, email, or
            analytics providers), under obligations to use the information only to
            perform services for us. We may also disclose information if required
            by law, legal process, or to protect rights, safety, and security.
          </p>
          <p className="mt-3">
            <strong className="text-text">Sale of personal information.</strong>{" "}
            We do not sell personal information as that term is commonly
            understood (exchanging personal information for money). We also do not
            share personal information for cross-context behavioral advertising as
            part of this Site’s design. If that practice ever changes, we will
            update this policy and provide any notices or choices required by
            applicable law.
          </p>
          <p className="mt-3">
            Business transfers: if we are involved in a merger, acquisition, or
            asset sale, information may be transferred as part of that
            transaction, subject to appropriate confidentiality.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">6. Retention</h2>
          <p className="mt-3">
            We retain inquiry and contact records for as long as needed to respond
            to you, manage a business relationship, meet legal obligations, and
            resolve disputes. Analytics data is retained according to the settings
            of the tools we enable and our operational needs.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">7. Security</h2>
          <p className="mt-3">
            We take reasonable administrative and technical measures designed to
            protect information we maintain. No method of transmission or storage
            is completely secure; we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">8. Children’s privacy</h2>
          <p className="mt-3">
            The Site is directed to business audiences and is not intended for
            children under 13. We do not knowingly collect personal information
            from children under 13. If you believe we have done so, contact us and
            we will take appropriate steps to delete it.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">9. Your choices and requests</h2>
          <p className="mt-3">
            Depending on where you live, you may have rights to request access,
            correction, or deletion of personal information we hold about you, or
            to opt out of certain processing. To make a request, use our{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover">
              Contact page
            </Link>{" "}
            or call {SITE.phone}. We may need to verify your identity before
            fulfilling a request. You may also unsubscribe from marketing emails
            if we send them (transactional replies to your inquiries are not
            marketing).
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">10. Third-party links</h2>
          <p className="mt-3">
            The Site may link to third-party websites. We are not responsible for
            the privacy practices of those sites. Review their policies separately.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">11. Changes to this policy</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the top will change when we post revisions. Continued
            use of the Site after changes means you acknowledge the updated
            policy.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">12. Contact</h2>
          <p className="mt-3">
            For privacy questions or requests, contact {SITE.legalName} at{" "}
            {SITE.address.full}, phone{" "}
            <a href={SITE.phoneHref} className="text-accent hover:text-accent-hover">
              {SITE.phone}
            </a>
            , or via the{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover">
              Contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
