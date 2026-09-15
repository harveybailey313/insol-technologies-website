# InSol Technologies — Marketing Website MVP

Premium dark-tech marketing site for **InSol Technologies**, built from the insol-remap strategy pack.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Inter (Google Fonts)

## Getting started

```bash
cd /workspace/insol-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Brand & facts (locked)

- Brand: **InSol Technologies**
- Phone: **+1 (480) 918-3323**
- Address: **5900 Balcones Drive, STE 100, Austin, TX 78731, USA**
- Founder (public): **Innam Dustgir** only
- CTAs: Start a Project · Talk to an Expert · Explore Our Capabilities
- Accent: `#00D4FF`

Do **not** invent clients, stats, awards, executives, or case results.

## Routes

| Path | Notes |
|------|--------|
| `/` | Homepage |
| `/about` | Our Story |
| `/about/leadership` | Founder only |
| `/about/approach` | Discover → Scale |
| `/services` | Services hub |
| `/services/[slug]` | 8 service landings |
| `/industries` | Industries hub |
| `/industries/[slug]` | 5 industry pages |
| `/case-studies` | Honest empty state |
| `/insights` | Coming soon |
| `/careers` | Stub |
| `/contact` | NAP + form UI |
| `/privacy-policy` | Draft notice |
| `/terms-and-conditions` | Draft notice |
| `/robots.txt` | Generated |
| `/sitemap.xml` | Generated |

### Service slugs

1. `ai-intelligent-automation`
2. `product-engineering`
3. `web-mobile-development`
4. `cloud-devops`
5. `data-analytics`
6. `enterprise-applications`
7. `quality-engineering`
8. `saas-products`

### Industry slugs

`healthcare` · `financial-services` · `ecommerce` · `travel-hospitality` · `technology`

## Source of truth

Copy and IA aligned to `/workspace/insol-remap/` (verified facts, sitemap, homepage/about/service copy, design system).

## Notes

- Contact form is UI-only (no backend) for this MVP.
- Insights homepage section is hidden when empty (per copy rules).
- Case studies omit invented proof.
- Redirects configured for legacy service/work URLs in `next.config.ts`.
