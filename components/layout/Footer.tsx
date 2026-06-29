"use client";

import { FileText, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import { type NavItem, navLinks } from "@/data/navigation";

const iconMap: Record<string, typeof FileText> = {
   FileText,
   Info,
};

function FooterNavLink({ item }: { item: NavItem }) {
   const Icon = iconMap[item.icon] || FileText;
   return (
      <Link
         href={item.href}
         className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
         <Icon className="size-4" />
         {item.label}
      </Link>
   );
}

export default function Footer() {
   const { theme } = useTheme();
   return (
      <div className="mt-10 flex items-center justify-between border-t border-gray-300 px-5 py-8 dark:border-gray-600 md:px-0">
         <Link
            href={"/"}
            className="flex items-center space-x-2"
         >
            <Image
               src={theme === "light" ? "/light-union.svg" : "/dark-union.svg"}
               width={36}
               height={36}
               alt="logo"
               priority
            />
            <div className="text-2xl">
               Meta<span className="font-bold">Blog</span>
            </div>
         </Link>

         <nav className="flex items-center gap-6">
            {navLinks.map(item => (
               <FooterNavLink
                  key={item.href}
                  item={item}
               />
            ))}
         </nav>
      </div>
   );
}
