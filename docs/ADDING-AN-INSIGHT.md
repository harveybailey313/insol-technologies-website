# Adding an Insights (blog) article

1. Add an object at the TOP of `insights` in `src/data/insights.ts`:
   slug, title (keyword first), description (140-160 chars), category, date (YYYY-MM-DD, today),
   seoTitle (so "<seoTitle> | InSol Technologies" <= 60 chars), cover `/insights/covers/<slug>`, coverAlt,
   relatedServices (service slugs), relatedIndustries, body (H2 sections; optional `subsections` = H3,
   `bullets`, `ordered`, `table`), faq (3-5). Inline links: `[text](/services/cloud-devops)`.
2. Cover: `npm run cover -- <slug> "<Title>" "<Category>"` -> public/insights/covers/<slug>.jpg/.webp (1280x720).
3. `npm run build && npm run verify:insights -- <slug>`
4. Commit and push to main; Vercel auto-deploys production. Then `node scripts/verify-insights.mjs --live <slug>`.

Rules: spell "InSol Technologies" exactly; no invented stats, clients or results; no investor wording.
