import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            }
        ],
        domains: [
            "images.unsplash.com",
            "assets.aceternity.com"
        ]
    }
};

export default nextConfig;
