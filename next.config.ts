import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      // Most common: if your components folder is in the root
      "@/*": "./*",

      // OR if you have a src/ folder and components inside src
      // '@/*': './src/*',
    },
  },
};

export default nextConfig;
