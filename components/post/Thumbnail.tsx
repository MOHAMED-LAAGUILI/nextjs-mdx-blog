"use client";

import {
   Briefcase,
   Calendar,
   Code,
   LayoutList,
   type LucideIcon,
   Monitor,
   Palette,
   Server,
   Shield,
   Smartphone,
   Sparkles,
   Wrench,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/data/posts";
import type { IPost } from "@/types/post";

const categoryIcon: Record<string, LucideIcon> = {
   AI: Sparkles,
   All: LayoutList,
   Authentication: Shield,
   Backend: Server,
   Career: Briefcase,
   CSS: Palette,
   Frontend: Monitor,
   Mobile: Smartphone,
   Tools: Wrench,
   TypeScript: Code,
};

const categoryColor: Record<string, string> = {
   AI: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800",
   Authentication: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800",
   Backend: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800",
   Career: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200 dark:border-teal-800",
   CSS: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300 border-pink-200 dark:border-pink-800",
   Frontend: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 border-sky-200 dark:border-sky-800",
   Mobile: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 border-orange-200 dark:border-orange-800",
   Tools: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
   TypeScript: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
};

export default function Thumbnail() {
   const slug = usePathname().split("/")[2];
   const post = posts.find((p: IPost) => p.slug === slug);
   if (!post) return null;

   const Icon = categoryIcon[post.category] || LayoutList;

   return (
      <div className="relative mb-10 aspect-4/3 overflow-hidden rounded-2xl md:aspect-21/9 bg-muted">
         <Image
            src={post.thumbnail || "/images/default.png"}
            alt={post.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 896px"
            className="object-cover"
         />
         <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
         <div className="absolute bottom-0 left-0 right-0 space-y-2 p-4 backdrop-blur-sm md:p-6">
            <Badge
               variant="secondary"
               className={`w-fit gap-1.5 ${categoryColor[post.category] || ""}`}
            >
               <Icon className="size-3" />
               {post.category}
            </Badge>
            <h1 className="text-xl font-bold leading-tight text-foreground md:text-3xl">{post.title}</h1>
            <div className="flex items-center gap-1.5 text-xs text-foreground/70 md:text-sm">
               <Calendar className="size-3.5" />
               <span>{post.date}</span>
            </div>
         </div>
      </div>
   );
}
