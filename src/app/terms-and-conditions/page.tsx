import Link from "next/link";
import { Section } from "@/components/Section";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for use of the InSol Technologies Inc. website at insoltechnologies.com.",
  path: "/terms-and-conditions",
});

const LAST_UPDATED = "September 16, 2026";

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
      <p className="mt-3 text-sm text-text-muted">Last updated: {LAST_UPDATED}</p>

      <div className="mt-8 max-w-3xl space-y-8 text-text-secondary">
        <p>
          These Terms & Conditions (“Terms”) govern your access to and use of the
          website operated by {SITE.legalName} (“InSol,” “we,” “us,” or “our”) at{" "}
          <a href={SITE.url} className="text-accent hover:text-accent-hover">
            {SITE.url.replace("https://", "")}
          </a>{" "}
          (the “Site”). By accessing or using the Site, you agree to these Terms.
          If you do not agree, do not use the Site. These Terms are intended for a
          U.S. audience. They govern use of this marketing website and are not a
          substitute for a signed statement of work or master services agreement
          for client engagements.
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
          <h2 className="text-h3 text-text">2. Informational purpose of the Site</h2>
          <p className="mt-3">
            The Site provides general information about {SITE.name}, our
            capabilities, and how to contact us. Content on the Site — including
            insights articles — is for informational purposes and does not
            constitute professional, legal, financial, or technical advice for
            your specific situation. Outcomes depend on scope, constraints, and
            execution under a separate written agreement.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">3. No client engagement via browsing alone</h2>
          <p className="mt-3">
            Submitting a contact form or browsing the Site does not create a
            client–provider relationship or obligate us to perform services.
            Project terms, fees, IP, confidentiality, and deliverables are
            governed only by a written agreement signed by authorized parties.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">4. Acceptable use</h2>
          <p className="mt-3">You agree not to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Use the Site in violation of applicable law</li>
            <li>
              Attempt to gain unauthorized access to the Site, related systems, or
              data
            </li>
            <li>
              Interfere with or disrupt the Site’s operation, security, or other
              users
            </li>
            <li>
              Scrape, harvest, or systematically copy Site content in a manner that
              burdens our infrastructure or violates these Terms, except for
              ordinary search-engine indexing of publicly available pages
            </li>
            <li>
              Submit unlawful, harmful, or misleading content through forms or
              communications channels linked from the Site
            </li>
            <li>
              Impersonate {SITE.name}, our personnel, or any other person or
              entity
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-h3 text-text">5. Intellectual property</h2>
          <p className="mt-3">
            The Site and its content — including text, graphics, logos, layout,
            and branding — are owned by {SITE.legalName} or its licensors and are
            protected by intellectual property laws. You may view and print pages
            for your personal or internal business evaluation of our services. You
            may not copy, modify, distribute, or create derivative works from Site
            content for commercial publication without our prior written consent,
            except for brief quotations with attribution in ordinary business
            communication.
          </p>
          <p className="mt-3">
            “InSol,” “InSol Technologies,” and related marks are used to identify{" "}
            {SITE.legalName}. Unauthorized use of our marks is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">6. Third-party links</h2>
          <p className="mt-3">
            The Site may link to third-party websites or resources. We do not
            control and are not responsible for their content, policies, or
            practices. Links do not imply endorsement.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">7. Disclaimer of warranties</h2>
          <p className="mt-3">
            THE SITE AND ITS CONTENT ARE PROVIDED “AS IS” AND “AS AVAILABLE”
            WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR
            STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT
            WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF
            HARMFUL COMPONENTS, OR THAT CONTENT IS COMPLETE, ACCURATE, OR
            CURRENT.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">8. Limitation of liability</h2>
          <p className="mt-3">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, {SITE.legalName.toUpperCase()}{" "}
            AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR
            PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING
            OUT OF OR RELATED TO YOUR USE OF (OR INABILITY TO USE) THE SITE,
            WHETHER BASED IN WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR
            ANY OTHER LEGAL THEORY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
            DAMAGES. OUR TOTAL LIABILITY FOR CLAIMS ARISING OUT OF THE SITE SHALL
            NOT EXCEED ONE HUNDRED U.S. DOLLARS (US $100). SOME JURISDICTIONS DO
            NOT ALLOW CERTAIN LIMITATIONS; IN THOSE CASES, OUR LIABILITY IS
            LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW.
          </p>
          <p className="mt-3">
            This section applies to Site use only. Liability for paid professional
            services is governed by the applicable client agreement.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">9. Indemnity</h2>
          <p className="mt-3">
            You agree to defend, indemnify, and hold harmless {SITE.legalName} and
            its personnel from claims, damages, losses, and expenses (including
            reasonable attorneys’ fees) arising from your misuse of the Site or
            violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">10. Privacy</h2>
          <p className="mt-3">
            Our collection and use of personal information through the Site is
            described in our{" "}
            <Link
              href="/privacy-policy"
              className="text-accent hover:text-accent-hover"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">11. Changes</h2>
          <p className="mt-3">
            We may update these Terms from time to time. The “Last updated” date
            will change when we post revisions. Continued use of the Site after
            changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">12. Governing law</h2>
          <p className="mt-3">
            These Terms are governed by the laws of the State of Texas, without
            regard to conflict-of-law principles, except where mandatory consumer
            protections of your jurisdiction apply. Courts located in Travis
            County, Texas, shall have exclusive jurisdiction over disputes
            arising from these Terms or the Site, subject to applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-h3 text-text">13. Contact</h2>
          <p className="mt-3">
            Questions about these Terms: {SITE.legalName}, {SITE.address.full},
            phone{" "}
            <a href={SITE.phoneHref} className="text-accent hover:text-accent-hover">
              {SITE.phone}
            </a>
            , or the{" "}
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
