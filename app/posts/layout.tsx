import type { Metadata } from "next";
import { getMetaInfo } from "@/data/meta";

const metaInfo = getMetaInfo();

export const metadata: Metadata = {
   description: "Browse all articles, tutorials, insights, and industry updates on web development, tools, and career insights.",
   openGraph: {
      description: "Browse all articles, tutorials, insights, and industry updates.",
      images: [
         {
            alt: metaInfo.title,
            height: metaInfo.og.imageHeight,
            url: metaInfo.og.image,
            width: metaInfo.og.imageWidth,
         },
      ],
      title: "All Posts | Meta Blog",
      url: `${metaInfo.url}/posts`,
   },
   title: "All Posts",
   twitter: {
      description: "Browse all articles, tutorials, insights, and industry updates.",
      images: [metaInfo.twitter.image],
      title: "All Posts | Meta Blog",
   },
};

export default function PostsLayout({ children }: { children: React.ReactNode }) {
   return children;
}
