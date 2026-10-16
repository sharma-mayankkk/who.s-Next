/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [1, 25, 50, 75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "wallpapercave.com" //it will load images from external source
      }
    ]
  },

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