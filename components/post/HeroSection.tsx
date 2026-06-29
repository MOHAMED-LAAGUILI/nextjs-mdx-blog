import { Calendar, Code, LayoutList, type LucideIcon, Monitor, Palette, Server, Shield, Smartphone, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { IPost } from "@/posts";

const categoryIcon: Record<string, LucideIcon> = {
   AI: Sparkles,
   All: LayoutList,
   Authentication: Shield,
   Backend: Server,
   CSS: Palette,
   Frontend: Monitor,
   Mobile: Smartphone,
   Tools: Wrench,
   TypeScript: Code,
};

interface HeroSectionProps {
   post: IPost;
}

export default function HeroSection({ post }: HeroSectionProps) {
   const Icon = categoryIcon[post.category] || LayoutList;

   return (
      <section className="mb-8 md:mb-16">
         <Link href={`/post/${post.slug}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-[21/9]">
               <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
               />

               <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

               <Card className="absolute bottom-2 left-2 right-2 border-none bg-white/95 shadow-xl backdrop-blur dark:bg-zinc-900/95 md:bottom-6 md:left-6 md:right-auto md:max-w-lg">
                  <CardContent className="p-3 md:p-6">
                     <Badge
                        variant="default"
                        className="gap-1.5"
                     >
                        <Icon className="size-3" />
                        {post.category}
                     </Badge>

                     <h1 className="mt-2 text-base font-bold leading-tight md:text-2xl">{post.title}</h1>

                     <p className="mt-2 inline-flex items-center gap-1 text-xs text-zinc-600 dark:text-zinc-400 md:text-sm">
                        <Calendar className="size-3.5" />
                        {post.date}
                     </p>
                  </CardContent>
               </Card>
            </div>
         </Link>
      </section>
   );
}
