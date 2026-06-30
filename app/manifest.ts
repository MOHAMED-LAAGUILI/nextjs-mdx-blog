import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
   return {
      background_color: "#ffffff",
      description: "A modern blog built with Next.js, featuring articles on web development, tools, and career insights.",
      display: "standalone",
      icons: [
         { sizes: "32x32", src: "/logo.png", type: "image/png" },
         { sizes: "192x192", src: "/logo.png", type: "image/png" },
         { sizes: "512x512", src: "/logo.png", type: "image/png" },
         {
            sizes: "any",
            src: "/favicon.ico",
            type: "image/x-icon",
         },
      ],
      name: "Meta Blog 0",
      short_name: "MetaBlog0",
      start_url: "/",
      theme_color: "#0a0a0a",
   };
}
