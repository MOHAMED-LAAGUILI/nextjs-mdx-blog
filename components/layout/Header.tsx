"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/navigation";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { NavLink } from "./NavLink";

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

   useEffect(() => {
      document.body.style.overflow = menuOpen ? "hidden" : "";
      return () => {
         document.body.style.overflow = "";
      };
   }, [menuOpen]);

   return (
      <>
         <header className="fixed inset-x-0 top-0 z-60 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-backdrop-filter:bg-background/70">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
               <Logo />

               {/* Desktop Navigation */}
               <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
                  {navLinks.map(item => (
                     <NavLink
                        key={item.href}
                        item={item}
                     />
                  ))}
               </nav>

               {/* Right Actions */}
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
         </header>

         {/* Spacer for fixed header */}
         <div className="h-16" />

         {/* Mobile Menu */}
         <MobileNav
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
         />
      </>
   );
}
