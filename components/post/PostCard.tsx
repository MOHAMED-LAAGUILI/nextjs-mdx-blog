import { Calendar, Code, LayoutList, type LucideIcon, Monitor, Palette, Server, Shield, Smartphone, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

interface PostCardProps {
   post: {
      slug: string;
      title: string;
      thumbnail: string;
      category: string;
      author: string;
      date: string;
   };
}

export default function PostCard({ post }: PostCardProps) {
   const Icon = categoryIcon[post.category] || LayoutList;

   return (
      <Link
         href={`/post/${post.slug}`}
         className="block"
      >
         <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-16/10 overflow-hidden">
               <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover/card:scale-105"
               />
            </div>

            <CardContent className="space-y-3 p-5">
               <Badge
                  variant="secondary"
                  className="gap-1.5"
               >
                  <Icon className="size-3" />
                  {post.category}
               </Badge>

               <h3 className="line-clamp-2 text-xl font-bold leading-snug">{post.title}</h3>

               <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
                  <Calendar className="size-3.5" />
                  <span>{post.date}</span>
               </div>
            </CardContent>
         </Card>
      </Link>
   );
}
