import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mo-blog-rose.vercel.app/";

export default function robots(): MetadataRoute.Robots {
   return {
      rules: [{ allow: "/", disallow: "/_next/", userAgent: "*" }],
      sitemap: `${BASE_URL}/sitemap.xml`,
   };
}
