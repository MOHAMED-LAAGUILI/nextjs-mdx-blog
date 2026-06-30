import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import path from "node:path";
import withPWA from "next-pwa";

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  turbopack: {
    root: path.join(__dirname),
  },
};

const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default withPWAConfig(withMDX(nextConfig));
