"use client";

import { FileText, Info, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { type NavItem, navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

const iconMap: Record<string, typeof FileText> = {
   FileText,
   Info,
};

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
   const pathname = usePathname();
   const Icon = iconMap[item.icon] || FileText;
   const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

   return (
      <Link
         href={item.href}
         onClick={onClick}
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
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
         <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
            <Link href="/" className="flex items-center gap-2">
               <Image
                  src={"/logo.png"}
                  width={32}
                  height={32}
                  alt="logo"
                  priority
                  className="size-7 md:size-8"
               />
               <span className="hidden sm:inline md:text-xl">
                  Meta <span className="font-bold">Blog</span>
               </span>
            </Link>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
               {navLinks.map(item => (
                  <NavLink key={item.href} item={item} />
               ))}
            </nav>

            <div className="flex items-center gap-2">
               <AnimatedThemeToggler />
               <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
               >
                  {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
               </Button>
            </div>
         </div>

         {menuOpen && (
            <div className="border-t px-4 pb-4 md:hidden">
               <nav className="flex flex-col gap-3 pt-3">
                  {navLinks.map(item => (
                     <NavLink
                        key={item.href}
                        item={item}
                        onClick={() => setMenuOpen(false)}
                     />
                  ))}
               </nav>
            </div>
         )}
      </header>
   );
}