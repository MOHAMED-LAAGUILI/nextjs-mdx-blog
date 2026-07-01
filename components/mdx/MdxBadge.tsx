const variants: Record<string, string> = {
   default: "bg-primary/10 text-primary border-primary/20",
   success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
   danger: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800",
   warning: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800",
   info: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-300 border-sky-200 dark:border-sky-800",
   neutral: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
};

export default function MdxBadge({ variant = "default", children }: { variant?: string; children: React.ReactNode }) {
   return (
      <span
         className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${variants[variant] || variants.default}`}
      >
         {children}
      </span>
   );
}
