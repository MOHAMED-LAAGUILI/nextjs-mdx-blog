"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { type IPost, posts } from "@/posts";

export default function Thumbnail() {
   const slug = usePathname().split("/")[2];

   const post = posts.find((p: IPost) => p.slug === slug);

   if (!post) return null;

   return (
      <div className="mb-10">
         {/* Post Meta */}
         <div className="mb-8">
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
               <span>{post.date}</span>
               <span>•</span>
               <span>{post.category}</span>
            </div>
         </div>

         {/* Thumbnail */}
         <div className="relative h-62.5 overflow-hidden rounded-2xl md:h-125">
            <Image
               src={post.thumbnail || "/images/hero.png"}
               alt={post.title}
               fill
               priority
               sizes="(max-width:768px) 100vw, 896px"
               className="object-cover"
            />
         </div>
      </div>
   );
}
