import { BookOpen, ExternalLink, Globe, PenLine, Terminal, Users } from "lucide-react";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { aboutData, type SocialLink } from "@/data/about";
import { posts } from "@/data/posts";

const iconMap: Record<string, typeof Terminal> = {
   BookOpen,
   ExternalLink,
   Globe,
   PenLine,
   Terminal,
   Users,
};

function SocialButton({ link, size = "sm" }: { link: SocialLink; size?: "sm" | "icon" }) {
   const Icon = iconMap[link.icon] || ExternalLink;
   if (size === "icon") {
      return (
         <a href={link.url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full" aria-label={link.label}>
               <Icon className="size-4" />
            </Button>
         </a>
      );
   }
   return (
      <a href={link.url} target="_blank" rel="noopener noreferrer">
         <Button variant="outline" size="sm" className="gap-1.5 rounded-full">
            <Icon className="size-3.5" />
            {link.label}
         </Button>
      </a>
   );
}

export const metadata: Metadata = {
   description: "Learn more about Meta Blog — the blog and the person behind it.",
   openGraph: { description: "Learn more about Meta Blog — the blog and the person behind it.", title: "About | Meta Blog" },
   title: "About",
};

export default function AboutPage() {
   const totalPosts = posts.length;
   const categories = [...new Set(posts.map(p => p.category))].length;

   const name = aboutData.name;
   const initials = name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

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
               {/* Profile */}
               <Card>
                  <CardContent className="p-6 md:p-8">
                     <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                        <Avatar className="size-24 shrink-0 border-2 border-border md:size-28">
                           <AvatarImage src={aboutData.avatar} alt={name} />
                           <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 space-y-3">
                           <div className="space-y-2">
                              <h2 className="text-3xl font-bold tracking-tight">{name}</h2>
                              <p className="leading-7 text-muted-foreground">{aboutData.bio}</p>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {aboutData.socials.map(link => (
                                 <SocialButton key={link.label} link={link} />
                              ))}
                           </div>

                        </div>
                        
                     </div>
                     
                  </CardContent>
               </Card>

              

               {/* About This Blog */}
               <Card>
                  <CardContent className="space-y-5 p-6 md:p-8">
                     <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <BookOpen className="size-5" />
                        About This Blog
                     </h3>

                     <div className="space-y-4">
                        {aboutData.blogDescription.map((text, index) => (
                           <p key={index} className="leading-7 text-muted-foreground">
                              {text}
                           </p>
                        ))}
                     </div>

                     
                           <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {stats.map(stat => {
                           const StatIcon = stat.icon;
                           return (
                              <div key={stat.label} className="flex items-center gap-4 rounded-xl border bg-card p-4">
                                 <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <StatIcon className="size-5 text-primary" />
                                 </div>
                                 <div>
                                    <p className="text-xl font-bold">{stat.value}</p>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </CardContent>
               </Card>
            </div>
         </main>

         <Footer />
      </div>
   );
}
