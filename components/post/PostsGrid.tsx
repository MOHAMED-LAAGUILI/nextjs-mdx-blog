import PostCard from "./PostCard";

interface PostsGridProps {
   posts: {
      slug: string;
      title: string;
      thumbnail: string;
      category: string;
      date: string;
   }[];
}

export default function PostsGrid({ posts }: PostsGridProps) {
   return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
         {posts.map(post => (
            <PostCard
               key={post.slug}
               post={post}
            />
         ))}
      </div>
   );
}
