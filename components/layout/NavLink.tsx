import { CircleX, FileText, Home, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types/navigation";

export const iconMap: Record<string, typeof FileText> = {
   CircleX,
   FileText,
   Home,
   Info,
};

export function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
   const pathname = usePathname();

   const Icon = iconMap[item.icon] || FileText;

   const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

   return (
      <Link
         href={item.href}
         onClick={onClick}
         className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
            isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
         }`}
      >
         <Icon className="size-4" />
         {item.label}
      </Link>
   );
}
