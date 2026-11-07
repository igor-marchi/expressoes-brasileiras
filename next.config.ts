import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The dev indicator overlaps bottom-left controls and intercepts clicks in e2e runs.
  devIndicators: process.env.E2E ? false : undefined,
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
