import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.REMOTE_PATTERN_HOSTNAME || "",
        port: "",
        pathname: process.env.REMOTE_PATTERN_PATHNAME || "",
      },
    ],
  },
};

export default nextConfig;
