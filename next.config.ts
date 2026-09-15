import type { NextConfig } from "next";

/** Set GITHUB_PAGES=true when building for project Pages (basePath required). */
const isGhPages = process.env.GITHUB_PAGES === "true";
const repoBase = "/insol-technologies-website";

const nextConfig: NextConfig = {
  // Static HTML export → out/ (required for GitHub Pages)
  output: "export",
  // next/image needs this without an image optimization server
  images: { unoptimized: true },
  // Helps GH Pages serve nested routes as .../path/index.html
  trailingSlash: true,
  ...(isGhPages
    ? {
        basePath: repoBase,
        assetPrefix: repoBase,
      }
    : {}),
  // Note: next.config redirects are unsupported with output:'export'.
  // Old paths (/work, renamed services) are not redirected on static hosts.
};

export default nextConfig;
