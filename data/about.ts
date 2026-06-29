export interface SocialLink {
   label: string;
   url: string;
   icon: string;
}

export interface Skill {
   label: string;
   icon: string;
}

export const aboutData = {
   name: "Meta Blog Developer",
   role: "Full-Stack Developer & Technical Writer",
   avatar: "/images/hero.png",
   avatarFallback: "MB",
   location: "Remote",
   bio: "Passionate about building clean, performant web applications and sharing knowledge with the developer community. I write comparison articles to help developers make informed technology choices.",
   skills: [
      { label: "React", icon: "Code" },
      { label: "Next.js", icon: "Code" },
      { label: "TypeScript", icon: "Terminal" },
      { label: "Node.js", icon: "Terminal" },
   ] as Skill[],
   socials: [
      { label: "GitHub", url: "https://github.com", icon: "Terminal" },
      { label: "LinkedIn", url: "https://linkedin.com", icon: "ExternalLink" },
      { label: "Portfolio", url: "https://metablog.dev", icon: "Globe" },
   ] as SocialLink[],
   blogDescription: [
      "Meta Blog is a curated collection of comparison articles focused on helping developers choose the right tools, frameworks, and technologies for their projects. Every article breaks down the strengths, trade-offs, and ideal use cases of each technology so you can make confident decisions.",
      "No fluff, no bias — just honest, practical comparisons drawn from real-world experience.",
   ],
   contact: {
      email: "hello@metablog.dev",
      socials: [
         { label: "X", url: "https://x.com", icon: "X" },
         { label: "GitHub", url: "https://github.com", icon: "Terminal" },
      ] as SocialLink[],
   },
};
