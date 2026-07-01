import {
   Briefcase,
   Calendar,
   Code,
   LayoutList,
   type LucideIcon,
   Monitor,
   Palette,
   Server,
   Shield,
   Smartphone,
   Sparkles,
   Wrench,
} from "lucide-react";

export const categoryColor: Record<string, string> = {
   AI: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800",
   Authentication: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200 dark:border-amber-800",
   Backend: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800",
   Career: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200 dark:border-teal-800",
   CSS: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300 border-pink-200 dark:border-pink-800",
   Frontend: "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300 border-sky-200 dark:border-sky-800",
   Mobile: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 border-orange-200 dark:border-orange-800",
   Tools: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
   TypeScript: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
};

export const categoryIcon: Record<string, LucideIcon> = {
   AI: Sparkles,
   All: LayoutList,
   Authentication: Shield,
   Backend: Server,
   Career: Briefcase,
   CSS: Palette,
   Frontend: Monitor,
   Mobile: Smartphone,
   Tools: Wrench,
   TypeScript: Code,
};
