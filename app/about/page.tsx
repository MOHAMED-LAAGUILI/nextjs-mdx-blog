import { BookOpen, PenLine } from "lucide-react";
import type { Metadata } from "next";
import { BlogDescriptionCard, ProfileCard, StatsCard } from "@/components/about";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import { aboutData } from "@/data/about";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
   description: "Learn more about Meta Blog — the blog and the person behind it.",
   openGraph: { description: "Learn more about Meta Blog — the blog and the person behind it.", title: "About | Meta Blog" },
   title: "About",
};

export default function AboutPage() {
   const totalPosts = posts.length;
   const categories = [...new Set(posts.map(p => p.category))].length;

   const stats = [
      { icon: PenLine, label: "Articles published", value: totalPosts },
      { icon: BookOpen, label: "Categories", value: categories },
   ];

   return (
      <div className="min-h-screen">
         <Header />

         <main className="mx-auto max-w-4xl px-4 py-8 md:px-6">
            <div className="mb-8 space-y-2">
               <h1 className="text-3xl font-bold tracking-tight">About</h1>
               <p className="text-muted-foreground">The blog and the person behind it.</p>
            </div>

            <div className="space-y-6">
               <ProfileCard
                  name={aboutData.name}
                  avatar={aboutData.avatar}
                  bio={aboutData.bio}
                  socials={aboutData.socials}
               />

               <StatsCard stats={stats} />

               <BlogDescriptionCard descriptions={aboutData.blogDescription} />
            </div>
         </main>

         <Footer />
      </div>
   );
}
