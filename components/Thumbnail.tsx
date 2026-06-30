"use client";

import { Briefcase, Calendar, Code, LayoutList, type LucideIcon, Monitor, Palette, Server, Shield, Smartphone, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
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
      <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[21/9]">
         <Image
            src={post.thumbnail || "/images/hero.png"}
            alt={post.title}
            fill
            priority
            sizes="(max-width:768px) 100vw, 896px"
            className="object-cover"
         />
         <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
         <div className="absolute bottom-0 left-0 right-0 space-y-2 p-4 backdrop-blur-sm md:p-6">
            <Badge variant="secondary" className="w-fit gap-1.5">
               <Icon className="size-3" />
               {post.category}
            </Badge>
            <h1 className="text-xl font-bold leading-tight text-foreground md:text-3xl">
               {post.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs text-foreground/70 md:text-sm">
               <Calendar className="size-3.5" />
               <span>{post.date}</span>
            </div>
         </div>
      </div>
   );
}