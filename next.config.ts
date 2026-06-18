import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Configure `pageExtensions` to include markdown and MDX files
	pageExtensions: ["md", "mdx", "ts", "tsx"],
	// Optionally, add any other Next.js config below
};

// https://www.fumadocs.dev/docs/headless/mdx
const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
