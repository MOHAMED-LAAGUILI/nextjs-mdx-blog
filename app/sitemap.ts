import type { MetadataRoute } from "next";
import { posts } from "@/data/posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mo-blog-rose.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
   const staticPages: MetadataRoute.Sitemap = [
      { changeFrequency: "monthly", lastModified: new Date(), priority: 1, url: BASE_URL },
      { changeFrequency: "weekly", lastModified: new Date(), priority: 0.8, url: `${BASE_URL}/posts` },
      { changeFrequency: "monthly", lastModified: new Date(), priority: 0.5, url: `${BASE_URL}/about` },
   ];

   const postPages: MetadataRoute.Sitemap = posts.map(post => ({
      changeFrequency: "monthly" as const,
      lastModified: new Date(post.date),
      priority: 0.6,
      url: `${BASE_URL}/post/${post.slug}`,
   }));

   return [...staticPages, ...postPages];
}
