"use client";

import { usePathname } from "next/navigation";
import PostCard from "@/components/post/PostCard";
import { type IPost, posts } from "@/data/posts";

export default function RelatedPosts() {
   const slug = usePathname().split("/").pop();
   const current = posts.find((p: IPost) => p.slug === slug);
   if (!current) return null;

   const related = posts.filter((p: IPost) => p.category === current.category && p.slug !== current.slug).slice(0, 3);

   if (related.length === 0) return null;

   return (
      <section className="mt-12 border-t pt-8">
         <h2 className="mb-6 text-xl font-bold">Related Posts</h2>
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map(p => (
               <PostCard
                  key={p.slug}
                  post={p}
               />
            ))}
         </div>
      </section>
   );
}
