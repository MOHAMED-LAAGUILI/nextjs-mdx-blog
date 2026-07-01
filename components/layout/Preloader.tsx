"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Ripples } from "ldrs/react";

import "ldrs/react/Ripples.css";
import { cn } from "@/lib/utils";

export default function Preloader() {
   const [isVisible, setIsVisible] = useState(true);
   const [isFading, setIsFading] = useState(false);

   const { theme } = useTheme();
   const isDark = theme === "dark";

   useEffect(() => {
      const fadeTimer = setTimeout(() => {
         setIsFading(true);
      }, 1000);

      const hideTimer = setTimeout(() => {
         setIsVisible(false);
      }, 1500);

      return () => {
         clearTimeout(fadeTimer);
         clearTimeout(hideTimer);
      };
   }, []);

   if (!isVisible) return null;

   return (
      <div
         className={cn("fixed inset-0 z-9999 flex items-center justify-center transition-opacity duration-500",
             isFading ? "opacity-0" : "opacity-100",
             isDark ? "bg-background" : "bg-white"
      )}
      >
         <Ripples
            size="45"
            speed="2"
            color={isDark ? "#ffffff" : "#09090b"}
         />
      </div>
   );
}