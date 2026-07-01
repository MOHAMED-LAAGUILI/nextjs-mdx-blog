import { Calendar, LayoutList } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { categoryColor, categoryIcon } from "./categories";

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
         <Card className="group overflow-hidden rounded-xl border py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative aspect-16/10 overflow-hidden bg-muted">
               <Image
                  //  src={post.thumbnail || "/images/default.png"}
                  src={"/images/default.png"}
                  alt={post.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
               />

               <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />

               <div className="absolute inset-x-0 bottom-0 space-y-2 p-4 backdrop-blur-sm">
                  <Badge
                     variant="secondary"
                     className={`w-fit gap-1.5 ${categoryColor[post.category] || ""}`}
                  >
                     <Icon className="size-3" />
                     {post.category}
                  </Badge>

                  <h3 className="line-clamp-2 text-base font-bold leading-tight text-foreground">{post.title}</h3>

                  <div className="flex items-center gap-1.5 text-xs text-foreground/70">
                     <Calendar className="size-3" />
                     <span>{post.date}</span>
                  </div>
               </div>
            </div>
         </Card>
      </Link>
   );
}
