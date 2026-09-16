import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { insights } from "@/data/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...services.map((s) => ({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...industries.map((i) => ({
      url: `${SITE.url}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
    ...insights.map((article) => ({
      url: `${SITE.url}/insights/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
