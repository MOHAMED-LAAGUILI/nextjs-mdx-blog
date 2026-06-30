"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
   const [fadeOut, setFadeOut] = useState(false);
   const [hidden, setHidden] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setFadeOut(true);
         setTimeout(() => setHidden(true), 500);
      }, 1000);

      return () => clearTimeout(timer);
   }, []);

   if (hidden) return null;

   return (
      <div
         className={`fixed inset-0 z-100 flex items-center justify-center bg-background transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
         }`}
      >
        
         <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
               <img
                  src="/logo.png"
                  alt="Meta Blog"
                  width={48}
                  height={48}
               />
               <span className="text-3xl tracking-tight">
                  Meta <span className="font-bold">Blog</span>
               </span>
            </div>
         </div>
      </div>
   );
}
