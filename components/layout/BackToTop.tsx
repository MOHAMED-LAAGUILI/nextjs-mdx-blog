"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTopButton() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsVisible(window.scrollY > 400);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({
         behavior: "smooth",
         top: 0,
      });
   };

   if (!isVisible) return null;

   return (
      <button
         type="button"
         aria-label="Back to top"
         onClick={scrollToTop}
         className="
  fixed
  bottom-6
  right-6
  z-50
  flex
  h-10
  w-10
  items-center
  justify-center
  rounded-md
  border
  bg-foreground
  text-background
  shadow-lg
  backdrop-blur
  transition-all
  duration-300
 

"
      >
         <ArrowUp className="h-5 w-5" />
      </button>
   );
}
