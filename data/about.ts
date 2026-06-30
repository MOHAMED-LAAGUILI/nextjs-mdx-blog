import { SocialLink } from "@/types/about";


export const aboutData = {
   name: "Mohamed Laaguili",
   githubUsername: "MOHAMED-LAAGUILI",
   role: "Full-Stack Developer & Technical Writer",
   avatar: `https://github.com/MOHAMED-LAAGUILI.png`,
   avatarFallback: "ML",
   location: "Remote",
   bio: "Passionate about building clean, performant web applications and sharing knowledge with the developer community. I write comparison articles to help developers make informed technology choices.",

   socials: [
      { label: "GitHub", url: "https://github.com/MOHAMED-LAAGUILI", icon: "Terminal" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mohamedlaaguili2001", icon: "ExternalLink" },
      { label: "Portfolio", url: "https://mohamedlaaguili-v2.vercel.app", icon: "Globe" },
   ] as SocialLink[],
   blogDescription: [
      "Meta Blog is a curated collection of comparison articles focused on helping developers choose the right tools, frameworks, and technologies for their projects. Every article breaks down the strengths, trade-offs, and ideal use cases of each technology so you can make confident decisions.",
      "No fluff, no bias — just honest, practical comparisons drawn from real-world experience.",
   ],
  
};
