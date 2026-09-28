import type { MetadataRoute } from "next";
import { absUrl } from "@/lib/jsonld";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { insights } from "@/data/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  /** Bump when site-wide content/templates change (keeps lastmod stable between builds). */
  const siteUpdated = new Date("2026-09-28");

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" },
    { path: "/industries", priority: 0.8, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/founder", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about/leadership", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about/approach", priority: 0.7, changeFrequency: "monthly" },
    { path: "/case-studies", priority: 0.6, changeFrequency: "weekly" },
    { path: "/insights", priority: 0.7, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.5, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map(({ path, priority, changeFrequency }) => ({
      url: absUrl(path || "/"),
      lastModified: siteUpdated,
      changeFrequency,
      priority,
    })),
    ...services.map((s) => ({
      url: absUrl(`/services/${s.slug}`),
      lastModified: siteUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...industries.map((i) => ({
      url: absUrl(`/industries/${i.slug}`),
      lastModified: siteUpdated,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...insights.map((article) => ({
      url: absUrl(`/insights/${article.slug}`),
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
