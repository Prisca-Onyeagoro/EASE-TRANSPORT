const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config (if any)

  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias, // Keep Next.js internal aliases
      "@": path.resolve(__dirname), // If components/ is in root: @/components → ./components
      // OR if components/ is inside src/ folder:
      // '@': path.resolve(__dirname, 'src'),
      // OR more specific:
      // '@/components': path.resolve(__dirname, 'components'),
    };

    return config;
  },
};

module.exports = nextConfig;
