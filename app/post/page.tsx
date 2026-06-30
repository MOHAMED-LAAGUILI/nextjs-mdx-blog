"use client";

import { Search } from "lucide-react";
import { useState } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CategoryTabs from "@/components/post/CategoryTabs";
import SectionHeading from "@/components/post/SectionHeading";
import { Input } from "@/components/ui/input";

import { posts } from "@/posts";

const categories = [...new Set(posts.map(p => p.category))].sort();

export default function BlogPage() {
   const [search, setSearch] = useState("");

   return (
      <div className="flex min-h-screen flex-col">
         <Header />

         <main className="mx-auto flex-1 w-full max-w-7xl px-4 py-8 md:px-6">
            <SectionHeading
               title="All Posts"
               description="Browse all articles, tutorials, insights, and industry updates."
               search={
                  <div className="relative">
                     <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 text-muted-foreground" />

                     <Input
                        placeholder="Search articles..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-8 sm:w-56"
                     />
                  </div>
               }
            />

            <CategoryTabs
               posts={posts}
               categories={categories}
               search={search}
            />
         </main>

         <Footer />
      </div>
   );
}