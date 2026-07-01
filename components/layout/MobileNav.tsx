import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { ANIMATION_CONFIG } from "./animation-config";

export default function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               variants={ANIMATION_CONFIG.container}
               initial="hidden"
               animate="visible"
               exit="exit"
               className="fixed inset-0 z-50 flex min-h-screen flex-col bg-background"
            >
               <nav className="flex flex-1 flex-col items-center justify-center gap-8">
                  {navLinks.map(item => {
                     //  const Icon = iconMap[item.icon];
                     return (
                        <motion.div
                           key={item.href}
                           variants={ANIMATION_CONFIG.item}
                        >
                           <Link
                              href={item.href}
                              onClick={onClose}
                              className="group flex items-start gap-4 text-4xl font-black tracking-tight transition-colors hover:text-primary"
                           >
                              {/* {Icon && <Icon className="size-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />} */}
                              {item.label}
                           </Link>
                        </motion.div>
                     );
                  })}
               </nav>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
