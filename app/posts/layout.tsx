import type { Metadata } from "next";

export const metadata: Metadata = {
   description: "Browse all articles, tutorials, insights, and industry updates on web development, tools, and career insights.",
   openGraph: {
      description: "Browse all articles, tutorials, insights, and industry updates.",
      title: "All Posts | Meta Blog",
   },
   title: "All Posts",
};

export default function PostsLayout({ children }: { children: React.ReactNode }) {
   return children;
}
