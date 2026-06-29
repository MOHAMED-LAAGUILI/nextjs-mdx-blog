import { BookOpen, Code, ExternalLink, Globe, Mail, MapPin, PenLine, Terminal, X } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { aboutData, type Skill, type SocialLink } from "@/data/about";
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
};

function SkillBadge({ skill }: { skill: Skill }) {
   const Icon = iconMap[skill.icon] || Code;
   return (
      <Badge
         variant="secondary"
         className="gap-1.5 px-3 py-1 text-xs font-medium"
      >
         <Icon className="size-3" />
         {skill.label}
      </Badge>
   );
}

function SocialButton({ link, size = "sm" }: { link: SocialLink; size?: "sm" | "icon" }) {
   const Icon = iconMap[link.icon] || ExternalLink;
   if (size === "icon") {
      return (
         <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
         >
            <Button
               variant="outline"
               size="icon"
               className="rounded-full"
               aria-label={link.label}
            >
               <Icon className="size-4" />
            </Button>
         </a>
      );
   }
   return (
      <a
         href={link.url}
         target="_blank"
         rel="noopener noreferrer"
      >
         <Button
            variant="outline"
            size="sm"
            className="gap-1.5 rounded-full"
         >
            <Icon className="size-3.5" />
            {link.label}
         </Button>
      </a>
   );
}

const statCards = [
   { icon: PenLine, label: "Articles published", value: 0 },
   { icon: BookOpen, label: "Categories", value: 0 },
   { icon: Globe, label: "Honest reviews", value: "100%" },
];

export default function AboutPage() {
   const totalPosts = posts.length;
   const categories = [...new Set(posts.map(p => p.category))].length;
   const stats = statCards.map(s => ({
      ...s,
      value: typeof s.value === "number" ? (s.label === "Articles published" ? totalPosts : categories) : s.value,
   }));

   return (
      <div className="min-h-screen">
         <Header />

         <main className="mx-auto max-w-5xl px-4 py-8 md:px-6">
            <h1 className="mb-2 text-3xl font-bold">About</h1>
            <p className="mb-8 text-muted-foreground">The blog and the person behind it.</p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
               {/* Profile */}
               <Card className="md:col-span-2">
                  <CardContent className="p-6 sm:p-8">
                     <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                        <Avatar className="size-24 shrink-0 border-2 border-border sm:size-28 lg:size-32">
                           <AvatarImage
                              src={aboutData.avatar}
                              alt={aboutData.name}
                           />
                           <AvatarFallback className="text-3xl">{aboutData.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-3">
                           <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">{aboutData.name}</h1>
                           <p className="text-sm text-muted-foreground sm:text-base">{aboutData.role}</p>
                           <div className="flex flex-wrap gap-2">
                              {aboutData.skills.map(skill => (
                                 <SkillBadge
                                    key={skill.label}
                                    skill={skill}
                                 />
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="mt-6 space-y-4 border-t pt-6">
                        <p className="max-w-2xl leading-7 text-muted-foreground">{aboutData.bio}</p>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                           <MapPin className="size-4" />
                           <span>{aboutData.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                           {aboutData.socials.map(link => (
                              <SocialButton
                                 key={link.label}
                                 link={link}
                              />
                           ))}
                        </div>
                     </div>
                  </CardContent>
               </Card>

               {/* Stats */}
               <Card>
                  <CardContent className="space-y-4 p-6">
                     <h3 className="flex items-center gap-2 text-base font-semibold">
                        <Globe className="size-4" />
                        Blog Stats
                     </h3>
                     <div className="grid gap-3">
                        {stats.map((stat, i) => {
                           const StatIcon = stat.icon;
                           return (
                              <div
                                 key={stat.label}
                                 className="flex items-center gap-4 rounded-xl border bg-card p-4"
                              >
                                 <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                    <StatIcon className="size-4 text-primary" />
                                 </div>
                                 <div className="min-w-0">
                                    <p className="text-xl font-bold">{stat.value}</p>
                                    <p className="truncate text-xs text-muted-foreground">{stat.label}</p>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </CardContent>
               </Card>

               {/* About This Blog */}
               <Card className="md:col-span-2">
                  <CardContent className="space-y-4 p-6 sm:p-8">
                     <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <BookOpen className="size-5" />
                        About This Blog
                     </h3>
                     <div className="space-y-4">
                        {aboutData.blogDescription.map((text, i) => (
                           <p
                              key={i}
                              className="leading-7 text-muted-foreground"
                           >
                              {text}
                           </p>
                        ))}
                     </div>
                  </CardContent>
               </Card>

               {/* Contact */}
               <Card className="bg-gradient-to-br from-primary/5 to-background">
                  <CardContent className="flex flex-col items-center gap-5 p-6 text-center sm:p-8">
                     <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 shadow-sm">
                        <Mail className="size-6 text-primary" />
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold">Get in touch</h3>
                        <p className="mt-1 text-sm text-muted-foreground">Suggestions or collaboration?</p>
                     </div>
                     <a
                        href={`mailto:${aboutData.contact.email}`}
                        className="w-full"
                     >
                        <Button className="w-full gap-2 rounded-full">
                           <Mail className="size-4" />
                           Contact me
                        </Button>
                     </a>
                     <div className="flex gap-3">
                        {aboutData.contact.socials.map(link => (
                           <SocialButton
                              key={link.label}
                              link={link}
                              size="icon"
                           />
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
