import HeroSection from "@/components/blog/HeroSection";
import PostsGrid from "@/components/blog/PostsGrid";
import SectionHeading from "@/components/blog/SectionHeading";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { posts } from "@/posts";

export default function Home() {
   return (
      <div className="min-h-screen">
         <Header />

         <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
            <HeroSection />

            <section>
               <SectionHeading
                  title="Latest Posts"
                  description="Discover insights, tutorials, and industry trends."
               />

               <PostsGrid posts={posts} />
            </section>
         </main>

         <Footer />
      </div>
   );
}
