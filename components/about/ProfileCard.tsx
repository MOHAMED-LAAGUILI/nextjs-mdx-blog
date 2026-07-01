import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { SocialLink } from "@/types/about";
import { SocialButton } from "./SocialButton";

export function ProfileCard({ name, avatar, bio, socials }: { name: string; avatar: string; bio: string; socials: SocialLink[] }) {
   const initials = name
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

   return (
      <Card>
         <CardContent className="p-6 md:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
               <Avatar className="size-24 shrink-0 border-2 border-border md:size-28">
                  <AvatarImage
                     src={avatar}
                     alt={name}
                  />
                  <AvatarFallback className="text-3xl">{initials}</AvatarFallback>
               </Avatar>

               <div className="flex-1 space-y-3">
                  <div className="space-y-2">
                     <h2 className="text-3xl font-bold tracking-tight">{name}</h2>
                     <p className="leading-7 text-muted-foreground">{bio}</p>
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
   );
}
