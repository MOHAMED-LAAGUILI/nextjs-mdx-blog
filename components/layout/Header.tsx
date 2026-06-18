"use client";

import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const links = [{ displayName: "Blog", herf: "/blog" }];

export default function Header() {
   const { theme, setTheme } = useTheme();

   const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
   };

   return (
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-background/80 px-5 py-6 backdrop-blur-md md:px-0">
         <Link
            href="/"
            className="flex items-center space-x-2"
         >
            <Image
               src={theme === "light" ? "/light-union.svg" : "/dark-union.svg"}
               width={36}
               height={36}
               alt="logo"
               priority
            />
         </Link>

         <div className="flex items-center space-x-10">
            <nav className="space-x-10">
               {links.map(link => (
                  <Link
                     key={link.herf}
                     href={link.herf}
                  >
                     {link.displayName}
                  </Link>
               ))}
            </nav>

            <Button
               variant="outline"
               size="icon"
               onClick={toggleTheme}
               aria-label="Toggle theme"
            >
               {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
         </div>
      </header>
   );
}
