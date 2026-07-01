"use client";

import Logo from "./Logo";

export default function Footer() {
   return (
      <footer className="mt-10 border-t relative right-0 bottom-0 left-0 z-50 bg-background">
         <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-0">
            {/* Logo */}
            <Logo />

            {/* Copyright */}
            <p className="text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Meta Blog. All rights reserved.</p>
         </div>
      </footer>
   );
}
