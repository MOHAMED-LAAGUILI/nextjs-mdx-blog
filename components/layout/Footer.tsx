"use client";

import { FileText, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
   return (
     <footer className="mt-10 border-t">
   <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-0">
      {/* Logo */}
      <Link
         href="/"
         className="flex items-center gap-2"
      >
         <Image
            src="/logo.png"
            width={36}
            height={36}
            alt="Meta Blog logo"
            priority
         />

         <span className="text-2xl">
            Meta <span className="font-bold">Blog</span>
         </span>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-center gap-6">
         {navLinks.map(item => (
            <FooterNavLink
               key={item.href}
               item={item}
            />
         ))}
      </nav>

      {/* Copyright */}
      <p className="text-center text-sm text-muted-foreground">
         © {new Date().getFullYear()} Meta Blog. All rights reserved.
      </p>
   </div>
</footer>
   );
}