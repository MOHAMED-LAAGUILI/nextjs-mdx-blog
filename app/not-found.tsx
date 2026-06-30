import { ArrowLeftIcon, HomeIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
   title: "404 — Page Not Found",
};

export default function NotFound() {
   return (
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-background">
         <Grid />

         <Header />

         <main className="relative mx-auto flex flex-1 w-full max-w-3xl items-center justify-center px-6 pb-24 text-center">
            <div>
               <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Status · 404</div>

               <BigNumerals />

               <h1 className="mt-10 max-w-md font-heading text-2xl leading-tight md:text-3xl">We can't find that page.</h1>

               <p className="mt-2 max-w-sm text-balance text-sm text-muted-foreground">
                  The link may be old, or the page may have moved. Check the URL or head back to somewhere you know.
               </p>

               <div className="mt-8 flex items-center justify-center gap-2">
                  <Link
                     href="/"
                     rel="home"
                  >
                     <Button variant="outline">
                        <ArrowLeftIcon />
                        Go back
                     </Button>
                  </Link>

                  <Link
                     href="/"
                     rel="home"
                  >
                     <Button>
                        <HomeIcon />
                        Take me home
                     </Button>
                  </Link>
               </div>
            </div>
         </main>

         <Footer />
      </div>
   );
}

function BigNumerals() {
   return (
      <div className="relative font-heading font-bold text-[clamp(8rem,22vw,16rem)] leading-none tracking-tighter">
         <span className="bg-linear-to-b from-foreground to-foreground/30 bg-clip-text text-transparent">404</span>
         <div
            aria-hidden
            className="-bottom-2 pointer-events-none absolute inset-x-0 h-1/2"
            style={{
               background:
                  "radial-gradient(60% 100% at 50% 100%, color-mix(in srgb, var(--background) 80%, transparent) 50%, transparent 100%)",
            }}
         />
      </div>
   );
}

function Grid() {
   return (
      <div
         aria-hidden
         className="pointer-events-none absolute inset-0 opacity-[0.35]"
         style={{
            backgroundImage:
               "linear-gradient(to right, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 8%, transparent) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
         }}
      />
   );
}
