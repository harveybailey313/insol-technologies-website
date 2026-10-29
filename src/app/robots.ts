import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // AI search and assistant crawlers are explicitly welcome.
      { userAgent: ["OAI-SearchBot", "ChatGPT-User", "GPTBot", "PerplexityBot", "Perplexity-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai", "Google-Extended", "Applebot", "Applebot-Extended", "Bingbot", "CCBot", "Amazonbot", "meta-externalagent", "meta-externalfetcher", "Bytespider", "DuckAssistBot", "MistralAI-User", "cohere-ai", "YouBot"], allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
