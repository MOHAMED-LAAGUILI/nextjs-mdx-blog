import PostsGrid from "@/components/blog/PostsGrid";
import SectionHeading from "@/components/blog/SectionHeading";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { posts } from "@/posts";

export default function BlogPage() {
   return (
      <div className="min-h-screen">
         <Header />

         <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
            <SectionHeading
               title="All Posts"
               description="Browse all articles, tutorials, insights, and industry updates."
            />

            <PostsGrid posts={posts} />
         </main>

         <Footer />
      </div>
   );
}
