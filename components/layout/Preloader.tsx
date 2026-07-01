"use client";

import { Ripples } from "ldrs/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import "ldrs/react/Ripples.css";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/stores/theme";
import { DiaTextReveal } from "../ui/dia-text-reveal";

export default function Preloader() {
   const [isVisible, setIsVisible] = useState(true);
   const [isFading, setIsFading] = useState(false);

   const { theme } = useTheme();
   const resolvedTheme = useThemeStore(s => s.resolvedTheme);
   const setResolvedTheme = useThemeStore(s => s.setResolvedTheme);

   const isDark = (resolvedTheme ?? theme) === "dark";

   useEffect(() => {
      setResolvedTheme(theme);
   }, [theme, setResolvedTheme]);

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
         className={cn(
            "fixed inset-0 z-9999 flex flex-col items-center justify-center gap-6 transition-opacity duration-500",
            isFading ? "opacity-0" : "opacity-100",
            isDark ? "bg-background" : "bg-white"
         )}
      >
         <Ripples
            size="45"
            speed="2"
            color={isDark ? "#ffffff" : "#09090b"}
         />
         <DiaTextReveal
            text={["Loading..."]}
            startOnView={false}
            duration={1}
            textColor={isDark ? "#ffffff" : "#09090b"}
            className="text-lg font-medium tracking-wide"
         />
      </div>
   );
}
