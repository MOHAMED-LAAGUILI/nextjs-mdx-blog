import { MetaInfo } from "@/types/meta";


export function getMetaInfo(): MetaInfo {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mo-blog-rose.vercel.app";

  return {
    url: baseUrl,
    title: "Meta Blog | Tech Insights",
    author: "Meta Blog",
    description:
      "A modern blog covering web development, TypeScript, React, Next.js, tools, career insights, and tech comparisons.",
    generator: "Next.js",
    favicons: {
      appleTouchIcon: "/logo.png",
      icon: "/logo.png",
      maskIcon: "/logo.png",
    },
    keywords: [
      "web development",
      "blog",
      "next.js",
      "react",
      "typescript",
      "tutorial",
      "tech",
    ],
    og: {
      image: "/logo.png",
      imageWidth: 1200,
      imageHeight: 630,
      locale: "en_US",
    },
    twitter: {
      creator: "@metablog",
      image: "/logo.png",
      site: "@metablog",
    },
    googleSiteVerification: "",
  };
}
