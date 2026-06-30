import type { IPost } from "@/data/posts";
import PostCard from "./PostCard";

interface HeroSectionProps {
   posts: IPost[];
}

export default function HeroSection({ posts }: HeroSectionProps) {
   return (
      <section className="mb-8 md:mb-16">
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
               <PostCard
                  key={post.slug}
                  post={post}
               />
            ))}
         </div>
      </section>
   );
}
