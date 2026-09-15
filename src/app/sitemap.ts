import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/founder",
    "/about/leadership",
    "/about/approach",
    "/services",
    "/industries",
    "/case-studies",
    "/insights",
    "/careers",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...industries.map((i) => ({
      url: `${SITE.url}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
