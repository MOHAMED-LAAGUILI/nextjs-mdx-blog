"use client";

import { ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/stores/theme";

export function BackToTop() {
   const [scrollProgress, setScrollProgress] = useState(0);
   const [isVisible, setIsVisible] = useState(false);
   const { theme } = useTheme();
   const resolvedTheme = useThemeStore(s => s.resolvedTheme);
   const isDark = (resolvedTheme ?? theme) === "dark";
   const trackStroke = isDark ? "#27272a" : "#cbd5e1";

   const setResolvedTheme = useThemeStore(s => s.setResolvedTheme);

   useEffect(() => {
      setResolvedTheme(theme);
   }, [theme, setResolvedTheme]);

   useEffect(() => {
      const updateScrollProgress = () => {
         const scrollTop = window.scrollY;
         const docHeight = document.documentElement.scrollHeight - window.innerHeight;
         const scrollPercent = scrollTop / docHeight;
         setScrollProgress(scrollPercent);
         setIsVisible(scrollTop > 100);
      };

      window.addEventListener("scroll", updateScrollProgress, { passive: true });
      updateScrollProgress();

      return () => window.removeEventListener("scroll", updateScrollProgress);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         behavior: "smooth",
         top: 0,
      });
   };

   // Format the percentage for display
   const progressPercentage = Math.min(Math.round(scrollProgress * 100), 100);

   return (
      <div
         className={cn(
            "fixed bottom-5 right-6 z-50 transition-all duration-300",
            isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-10 opacity-0"
         )}
      >
         <div className="flex flex-col items-center">
            {/* Circular progress indicator */}
            <div
               aria-label="Scroll to top"
               className={cn(
                  "relative h-10 w-10 cursor-pointer rounded-full bg-background backdrop-blur-sm transition-colors",

                  "sm:h-12 sm:w-12"
               )}
               onClick={scrollToTop}
               role="button"
            >
               {/* Progress circle */}
               <svg className={cn("absolute top-0 left-0 h-10 w-10 -rotate-90", "sm:h-12 sm:w-12")}>
                  <circle
                     className="sm:hidden"
                     cx="20"
                     cy="20"
                     r="18"
                     fill="none"
                     stroke={trackStroke}
                     strokeWidth="2"
                  />

                  <circle
                     className="hidden sm:block"
                     cx="24"
                     cy="24"
                     r="20"
                     fill="none"
                     stroke={trackStroke}
                     strokeWidth="2"
                  />

                  <circle
                     className="sm:hidden"
                     cx="20"
                     cy="20"
                     r="18"
                     fill="none"
                     stroke="url(#gradient)"
                     strokeDasharray={`${2 * Math.PI * 18}`}
                     strokeDashoffset={`${2 * Math.PI * 18 * (1 - scrollProgress)}`}
                     strokeLinecap="round"
                     strokeWidth="2"
                  />

                  <circle
                     className="hidden sm:block"
                     cx="24"
                     cy="24"
                     r="20"
                     fill="none"
                     stroke="url(#gradient)"
                     strokeDasharray={`${2 * Math.PI * 20}`}
                     strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress)}`}
                     strokeLinecap="round"
                     strokeWidth="2"
                  />

                  <defs>
                     <linearGradient
                        id="gradient"
                        x1="0%"
                        x2="100%"
                        y1="0%"
                        y2="0%"
                     >
                        <stop
                           offset="0%"
                           stopColor="#ab182e"
                        />
                        <stop
                           offset="100%"
                           stopColor="#ab182e"
                        />
                     </linearGradient>
                  </defs>
               </svg>

               {/* Chevron icon */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <ChevronUp className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
               </div>
            </div>

            {/* Percentage label */}
            <div className={cn("mt-1 rounded-md px-2 py-1 text-xs font-medium backdrop-blur-sm", "bg-zinc-800/80 text-white", "sm:mt-2")}>
               {progressPercentage}%
            </div>
         </div>
      </div>
   );
}
