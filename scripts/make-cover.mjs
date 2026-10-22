// Usage: node scripts/make-cover.mjs <slug> "<Title>" ["<Category>"]
// Writes public/insights/covers/<slug>.jpg and .webp (1280x720) in InSol brand colors.
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const [slug, title, category = "Insights"] = process.argv.slice(2);
if (!slug || !title) {
  console.error('Usage: node scripts/make-cover.mjs <slug> "<Title>" ["<Category>"]');
  process.exit(1);
}
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function wrap(text, max) {
  const words = text.split(/\s+/);
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max) { lines.push(cur.trim()); cur = w; }
    else cur += " " + w;
  }
  if (cur.trim()) lines.push(cur.trim());
  return lines;
}

let size = 68, lines = wrap(title, 26);
if (lines.length > 4) { size = 56; lines = wrap(title, 32); }
const lh = size * 1.18;
const startY = 360 - ((lines.length - 1) * lh) / 2 + size * 0.1;
const tspans = lines.map((l, i) => `<tspan x="96" y="${startY + i * lh}">${esc(l)}</tspan>`).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
<defs>
  <linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#772587"/><stop offset=".55" stop-color="#a100ff"/><stop offset="1" stop-color="#d76eeb"/></linearGradient>
  <radialGradient id="r" cx=".9" cy=".1" r=".7"><stop offset="0" stop-color="#a100ff" stop-opacity=".35"/><stop offset="1" stop-color="#161616" stop-opacity="0"/></radialGradient>
</defs>
<rect width="1280" height="720" fill="#161616"/>
<rect width="1280" height="720" fill="url(#r)"/>
<circle cx="1120" cy="600" r="220" fill="none" stroke="url(#g)" stroke-width="3" opacity=".5"/>
<circle cx="1120" cy="600" r="150" fill="none" stroke="#d76eeb" stroke-width="2" opacity=".35"/>
<rect x="96" y="96" width="120" height="8" rx="4" fill="url(#g)"/>
<text x="96" y="160" font-family="Plus Jakarta Sans, DejaVu Sans, sans-serif" font-size="26" font-weight="700" fill="#f26223" letter-spacing="3">${esc(category.toUpperCase())}</text>
<text font-family="Plus Jakarta Sans, DejaVu Sans, sans-serif" font-size="${size}" font-weight="800" fill="#ffffff">${tspans}</text>
<text x="96" y="640" font-family="Plus Jakarta Sans, DejaVu Sans, sans-serif" font-size="28" font-weight="700" fill="#e4e4ea">InSol Technologies</text>
<text x="96" y="674" font-family="Plus Jakarta Sans, DejaVu Sans, sans-serif" font-size="20" fill="#9a9caa">insoltechnologies.com/insights</text>
</svg>`;

mkdirSync("public/insights/covers", { recursive: true });
const base = `public/insights/covers/${slug}`;
const img = sharp(Buffer.from(svg)).resize(1280, 720);
await img.clone().jpeg({ quality: 86, mozjpeg: true }).toFile(`${base}.jpg`);
await img.clone().webp({ quality: 82 }).toFile(`${base}.webp`);
console.log(`Wrote ${base}.jpg and ${base}.webp`);
