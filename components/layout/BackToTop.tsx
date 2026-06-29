"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
      <Button
         variant="outline"
         size="icon"
         onClick={scrollToTop}
         aria-label="Back to top"
         className="fixed bottom-6 right-6 z-50 size-10 shadow-lg"
      >
         <ArrowUp className="size-5" />
      </Button>
   );
}
