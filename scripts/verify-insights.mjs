// Verify insight articles. Local (after `npm run build`): node scripts/verify-insights.mjs
// Live: node scripts/verify-insights.mjs --live [slug...]
import { readFileSync, existsSync } from "node:fs";

const live = process.argv.includes("--live");
const only = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const SITE = "https://www.insoltechnologies.com";
const src = readFileSync("src/data/insights.ts", "utf8");
const slugs = only.length ? only : [...src.matchAll(/^\s{4}slug: "([^"]+)"/gm)].map((m) => m[1]);
let fail = 0;
const ok = (c, msg) => { if (!c) { fail++; console.log("  FAIL", msg); } };

async function get(path) {
  if (live) {
    const r = await fetch(SITE + path, { redirect: "follow" });
    return { status: r.status, text: await r.text() };
  }
  const f = `out${path}${path.endsWith("/") ? "index.html" : ""}`;
  const f2 = path.endsWith(".xml") ? `out${path}` : f;
  return existsSync(f2) ? { status: 200, text: readFileSync(f2, "utf8") } : { status: 404, text: "" };
}

const sitemap = (await get("/sitemap.xml")).text;
const index = (await get("/insights/")).text;
for (const slug of slugs) {
  const path = `/insights/${slug}/`;
  console.log(path);
  const { status, text } = await get(path);
  ok(status === 200, `status ${status}`);
  const title = text.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const desc = text.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  ok(title && title.length <= 60, `title length ${title.length}: ${title}`);
  ok(desc.length >= 140 && desc.length <= 160, `description length ${desc.length}`);
  ok(text.includes(`<link rel="canonical" href="${SITE}${path}"`), "canonical");
  ok(text.includes('property="og:image"'), "og:image");
  ok(text.includes('"@type":"BlogPosting"'), "BlogPosting JSON-LD");
  ok(text.includes('"@type":"BreadcrumbList"'), "BreadcrumbList JSON-LD");
  ok(text.includes('"@id":"https://www.innamdustgir.com/#person"'), "author Person @id");
  ok((text.match(/<h1[\s>]/g) ?? []).length === 1, "exactly one h1");
  ok(sitemap.includes(`<loc>${SITE}${path}</loc>`), "in sitemap");
  ok(index.includes(`/insights/${slug}/`), "listed on /insights");
  const hasFaq = src.includes(`slug: "${slug}"`) && text.includes('id="faq"');
  if (hasFaq) ok(text.includes('"@type":"FAQPage"'), "FAQPage JSON-LD");
  const cover = text.match(/\/insights\/covers\/[a-z0-9-]+\.jpg/)?.[0];
  if (cover) {
    const c = live ? (await fetch(SITE + cover)).status : existsSync(`out${cover}`) ? 200 : 404;
    ok(c === 200, `cover ${cover} -> ${c}`);
  }
  console.log(`  title="${title}" (${title.length}) desc=${desc.length}`);
}
console.log(fail ? `\n${fail} check(s) failed` : "\nAll checks passed");
process.exit(fail ? 1 : 0);
