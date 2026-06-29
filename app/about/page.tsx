import { BookOpen, Code, ExternalLink, Globe, Mail, MapPin, PenLine, Terminal, Users, X } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { aboutData, type Skill, type SocialLink } from "@/data/about";
import { getGithubUser } from "@/data/github";
import { posts } from "@/posts";

const iconMap: Record<string, typeof Code> = {
   BookOpen,
   Code,
   ExternalLink,
   Globe,
   Mail,
   PenLine,
   Terminal,
   X,
   Users,
};

function SkillBadge({ skill }: { skill: Skill }) {
   const Icon = iconMap[skill.icon] || Code;
   return (
      <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-xs font-medium">
         <Icon className="size-3" />
         {skill.label}
      </Badge>
   );
}

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

export default async function AboutPage() {
   const totalPosts = posts.length;
   const categories = [...new Set(posts.map(p => p.category))].length;

   let github;
   try {
      github = await getGithubUser(aboutData.githubUsername);
   } catch {
      github = null;
   }

   const name = github?.name || aboutData.name;
   const avatar = github?.avatar_url || aboutData.avatar;
   const bio = github?.bio || aboutData.bio;
   const initials = name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);

   const socials: SocialLink[] = [
      { label: "GitHub", url: github?.html_url || aboutData.socials[0].url, icon: "Terminal" },
      { label: "LinkedIn", url: aboutData.socials[1].url, icon: "ExternalLink" },
   ];
   if (github?.blog) {
      socials.push({ label: "Portfolio", url: github.blog.startsWith("http") ? github.blog : `https://${github.blog}`, icon: "Globe" });
   } else {
      socials.push(aboutData.socials[2]);
   }

   const stats = [
      { icon: PenLine, label: "Articles published", value: totalPosts },
      { icon: BookOpen, label: "Categories", value: categories },
      { icon: Users, label: "GitHub followers", value: github?.followers ?? "—" },
   ];

   return (
      <div className="min-h-screen">
         <Header />

        <main className="mx-auto max-w-4xl px-4 py-8 md:px-6">
   <div className="mb-8 space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
      <p className="text-muted-foreground">
         The blog and the person behind it.
      </p>
   </div>

   <div className="space-y-6">
      {/* Profile */}
      <Card>
         <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
               <Avatar className="size-24 shrink-0 border-2 border-border md:size-28">
                  <AvatarImage src={avatar} alt={name} />
                  <AvatarFallback className="text-3xl">
                     {initials}
                  </AvatarFallback>
               </Avatar>

               <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                     <h2 className="text-3xl font-bold tracking-tight">
                        {name}
                     </h2>

                     <p className="leading-7 text-muted-foreground">
                        {bio}
                     </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                     {socials.map(link => (
                        <SocialButton
                           key={link.label}
                           link={link}
                        />
                     ))}
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>

      {/* Stats */}
      <Card>
         <CardContent className="space-y-5 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
               <Globe className="size-5" />
               Stats
            </h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
               {stats.map(stat => {
                  const StatIcon = stat.icon;

                  return (
                     <div
                        key={stat.label}
                        className="flex items-center gap-4 rounded-xl border bg-card p-4"
                     >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                           <StatIcon className="size-5 text-primary" />
                        </div>

                        <div>
                           <p className="text-xl font-bold">
                              {stat.value}
                           </p>
                           <p className="text-sm text-muted-foreground">
                              {stat.label}
                           </p>
                        </div>
                     </div>
                  );
               })}
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
                  <p
                     key={index}
                     className="leading-7 text-muted-foreground"
                  >
                     {text}
                  </p>
               ))}
            </div>
         </CardContent>
      </Card>
   </div>
</main>

         <Footer />
      </div>
   );
}