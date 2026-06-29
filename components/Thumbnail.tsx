"use client";

import { Briefcase, Calendar, Code, LayoutList, type LucideIcon, Monitor, Palette, Server, Shield, Smartphone, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { type IPost, posts } from "@/posts";

const categoryIcon: Record<string, LucideIcon> = {
   AI: Sparkles,
   All: LayoutList,
   Authentication: Shield,
   Backend: Server,
   CSS: Palette,
   Frontend: Monitor,
   Mobile: Smartphone,
   Tools: Wrench,
   Career: Briefcase,
   TypeScript: Code,
};

export default function Thumbnail() {
   const slug = usePathname().split("/")[2];

   const post = posts.find((p: IPost) => p.slug === slug);

   if (!post) return null;

   const Icon = categoryIcon[post.category] || LayoutList;

   return (
      <div className="mb-10">
         <div className="mb-8">
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
               <Calendar className="size-4" />
               <span>{post.date}</span>
               <span>&bull;</span>
               <Badge
                  variant="secondary"
                  className="gap-1.5"
               >
                  <Icon className="size-3" />
                  {post.category}
               </Badge>
            </div>
         </div>

         <Card className="relative h-62.5 overflow-hidden md:h-125">
            <Image
               src={post.thumbnail || "/images/hero.png"}
               alt={post.title}
               fill
               priority
               sizes="(max-width:768px) 100vw, 896px"
               className="object-cover"
            />
         </Card>
      </div>
   );
}
