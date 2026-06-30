"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="mt-10 border-t relative right-0 bottom-0 left-0 z-50">
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

            {/* Copyright */}
            <p className="text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Meta Blog. All rights reserved.</p>
         </div>
      </footer>
   );
}
