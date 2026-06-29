"use client";

import { FileText, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { type NavItem, navLinks } from "@/data/navigation";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const iconMap: Record<string, typeof FileText> = {
   FileText,
   Info,
};

function NavLink({ item }: { item: NavItem }) {
   const pathname = usePathname();
   const Icon = iconMap[item.icon] || FileText;
   const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

   return (
      <Link
         href={item.href}
         className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
            isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
         }`}
      >
         <Icon className="size-4" />
         {item.label}
      </Link>
   );
}

export default function Header() {
   const { theme } = useTheme();

   return (
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background/80 px-5 py-4 backdrop-blur-md md:px-8">
         <Link
            href="/"
            className="flex items-center gap-2"
         >
            <Image
               src={theme === "light" ? "/light-union.svg" : "/dark-union.svg"}
               width={32}
               height={32}
               alt="logo"
               priority
            />
            <span className="text-xl">
               Meta <span className="font-bold">Blog</span>
            </span>
         </Link>

         <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navLinks.map(item => (
               <NavLink
                  key={item.href}
                  item={item}
               />
            ))}
         </nav>

         <div className="flex items-center">
            <AnimatedThemeToggler />
         </div>

         <nav className="flex gap-6 md:hidden">
            {navLinks.map(item => (
               <NavLink
                  key={item.href}
                  item={item}
               />
            ))}
         </nav>
      </header>
   );
}
