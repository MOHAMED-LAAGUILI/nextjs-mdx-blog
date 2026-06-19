import Image from "next/image";
import Link from "next/link";

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
   return (
      <Link
         href={`/blog/${post.slug}`}
         className="group overflow-hidden rounded-md border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
      >
         <div className="relative aspect-16/10 overflow-hidden">
            <Image
               src={post.thumbnail}
               alt={post.title}
               fill
               sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
               className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
         </div>

         <div className="p-5">
            <span className="inline-flex rounded-md bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-400">
               {post.category}
            </span>

            <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-snug">{post.title}</h3>

            <div className="mt-4 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
               <span>{post.date}</span>
            </div>
         </div>
      </Link>
   );
}
