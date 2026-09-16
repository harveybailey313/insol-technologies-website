# Analytics & Google Search Console

Short setup notes for **insoltechnologies.com** (InSol Technologies Inc.).

## Site note: static export

This Next.js app uses `output: 'export'`. Client-side analytics still work when the static site is hosted on Vercel:

- `@vercel/analytics` (`Analytics` from `@vercel/analytics/react`) — Web Analytics script
- `@vercel/speed-insights` — Speed Insights client collector

Both are wired in `src/components/Analytics.tsx` and mounted from the root layout. Enable the products in the Vercel dashboard so data is collected for the production deployment.

Optional: set `NEXT_PUBLIC_GA_ID` (e.g. `G-XXXXXXXX`) in Vercel Environment Variables if you also want Google Analytics 4. The GA snippet only loads when that variable is set.

Optional: set `NEXT_PUBLIC_GSC_VERIFICATION` to your Google Search Console HTML-tag verification token so `metadata.verification.google` is emitted in the root layout.

## Enable Vercel Analytics

1. Open the project in the [Vercel Dashboard](https://vercel.com/dashboard) (project: `insol-technologies`).
2. Go to **Analytics** (Web Analytics) and enable it for the production project / domain.
3. Optionally enable **Speed Insights** from the Speed Insights section.
4. Redeploy production if prompted so the latest build with the Analytics components is live.
5. Confirm events after visiting `https://insoltechnologies.com/` (may take a few minutes to appear).

## Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add a property for `https://insoltechnologies.com` (URL-prefix property recommended).
3. Verify ownership:
   - **HTML tag**: copy the `content` value from Google’s meta tag and set `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel, then redeploy; or
   - **DNS TXT** / other methods Google offers for the domain.
4. After verification, submit the sitemap: `https://insoltechnologies.com/sitemap.xml`.
5. Monitor Coverage / Pages and fix any crawl issues as they appear.

## Privacy

Contact-form and analytics practices are described in `/privacy-policy`. Do not claim sale of personal data or advertising networks this site does not use.
