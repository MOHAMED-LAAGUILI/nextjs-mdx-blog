"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CategoryTabs from "@/components/post/CategoryTabs";
import HeroSection from "@/components/post/HeroSection";
import SectionHeading from "@/components/post/SectionHeading";
import { Input } from "@/components/ui/input";

import { posts } from "@/posts";

const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const latest = sorted.slice(0, 3);
const categories = [...new Set(posts.map(p => p.category))].sort();

export default function Home() {
   const [search, setSearch] = useState("");

   return (
      <div className="min-h-screen">
         <Header />

         <main className="mx-auto max-w-7xl px-4 py-8 md:px-6">
             <h2 className="mb-4 text-2xl font-bold">Latest 3 Posts</h2>
            <HeroSection posts={latest} />

            <section>
               <SectionHeading
                  title="All Posts"
                  description="Discover insights, tutorials, and industry trends."
                  search={
                     <div className="relative">
                        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                           placeholder="Search articles..."
                           value={search}
                           onChange={e => setSearch(e.target.value)}
                           className="w-full pl-7 sm:w-56"
                        />
                     </div>
                  }
               />
               <CategoryTabs
                  posts={posts}
                  categories={categories}
                  search={search}
               />
            </section>
         </main>

         <Footer />
      </div>
   );
}
