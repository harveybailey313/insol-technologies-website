import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/ai-and-intelligent-automation",
        destination: "/services/ai-intelligent-automation",
        permanent: true,
      },
      {
        source: "/services/software-product-engineering",
        destination: "/services/product-engineering",
        permanent: true,
      },
      {
        source: "/services/cybersecurity",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/case-studies",
        permanent: true,
      },
      {
        source: "/work/:slug*",
        destination: "/case-studies/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
