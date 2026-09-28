import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/site";
import { Analytics } from "@/components/Analytics";
import { FOUNDER_ID, LOGO_URL, ORG_ID, WEBSITE_ID } from "@/lib/jsonld";

const brandFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
});

const ogImage = {
  url: `${SITE.url}/brand/insol-og-default.png`,
  width: 1200,
  height: 630,
  alt: "InSol Technologies",
};

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

const defaultTitle = "InSol Technologies | Software Engineering, AI & Cloud";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: "%s | InSol Technologies",
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: "InSol Technologies",
    title: defaultTitle,
    description: SITE.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(gscVerification
    ? { verification: { google: gscVerification } }
    : {}),
};

const address = {
  "@type": "PostalAddress",
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.state,
  postalCode: SITE.address.zip,
  addressCountry: "US",
};

/**
 * Organization + ProfessionalService (a LocalBusiness subtype) for the Austin office.
 * Only verifiable facts: no ratings, reviews, prices, or client claims.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": ORG_ID,
  name: SITE.name,
  legalName: SITE.legalName,
  url: `${SITE.url}/`,
  description: SITE.description,
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
    width: 512,
    height: 512,
  },
  image: LOGO_URL,
  telephone: SITE.phone,
  address,
  hasMap: SITE.mapsHref,
  areaServed: { "@type": "Country", name: "United States" },
  knowsAbout: [
    "Software engineering",
    "SaaS product development",
    "Artificial intelligence and automation",
    "Web and mobile development",
    "Cloud and DevOps",
    "Data and analytics",
    "Enterprise applications",
    "Quality engineering",
  ],
  founder: {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: SITE.founder,
    url: `${SITE.url}/founder/`,
    sameAs: [
      "https://www.innamdustgir.com/",
      "https://www.linkedin.com/in/innam-dustgir-aa18a38a",
      "https://www.wikidata.org/wiki/Q130943937",
    ],
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: SITE.name,
  url: `${SITE.url}/`,
  inLanguage: "en-US",
  publisher: { "@id": ORG_ID },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brandFont.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
