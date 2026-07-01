import { ExternalLink, Terminal } from "lucide-react";
import { SocialLink } from "@/types/about";
import { Button } from "../ui/button";

const iconMap: Record<string, typeof Terminal> = {
   ExternalLink,
   Globe: ExternalLink,
   Terminal,
};

export function SocialButton({ link, size = "sm" }: { link: SocialLink; size?: "sm" | "icon" }) {
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
