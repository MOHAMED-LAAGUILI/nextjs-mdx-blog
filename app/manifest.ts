import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meta Blog",
    short_name: "MetaBlog",
    description: "A modern blog covering web development, TypeScript, React, Next.js, tools, and career insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    icons: [
      { src: "/logo.png", sizes: "192x192", type: "image/png" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
      { src: "/logo.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
    ],
  };
}
