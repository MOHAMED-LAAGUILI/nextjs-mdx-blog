import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
   return {
      background_color: "#ffffff",
      description: "A modern blog covering web development, TypeScript, React, Next.js, tools, and career insights.",
      display: "standalone",
      icons: [
         { sizes: "192x192", src: "/logo.png", type: "image/png" },
         { sizes: "512x512", src: "/logo.png", type: "image/png" },
         { purpose: "maskable", sizes: "192x192", src: "/logo.png", type: "image/png" },
      ],
      name: "Meta Blog",
      short_name: "MetaBlog",
      start_url: "/",
      theme_color: "#0a0a0a",
   };
}
