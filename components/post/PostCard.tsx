import { Briefcase, Calendar, Code, LayoutList, type LucideIcon, Monitor, Palette, Server, Shield, Smartphone, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

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
      <Link href={`/post/${post.slug}`} className="block">
       <Card className="group overflow-hidden rounded-xl border py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
   <div className="relative aspect-16/10 overflow-hidden">
      <Image
         src={post.thumbnail}
         alt={post.title}
         fill
         sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
         className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-background/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 space-y-1.5 bg-background/70 p-3 backdrop-blur-lg">
         <Badge variant="secondary" className="w-fit gap-1">
            <Icon className="size-3" />
            {post.category}
         </Badge>

         <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground">
            {post.title}
         </h3>

         <div className="flex items-center gap-1 text-xs text-foreground/70">
            <Calendar className="size-2.5" />
            <span>{post.date}</span>
         </div>
      </div>
   </div>
</Card>
      </Link>
   );
}