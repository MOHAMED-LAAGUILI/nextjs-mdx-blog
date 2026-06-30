import type { ReactNode } from "react";

export default function Heading({ level = 2, number, children }: { level?: 1 | 2 | 3; number?: string; children: ReactNode }) {
   const cls =
      level === 1
         ? "text-3xl font-extrabold tracking-tight md:text-4xl"
         : level === 2
           ? "text-2xl font-bold tracking-tight"
           : "text-xl font-semibold";

   const content = (
      <>
         {number && <span className="text-primary">{number}. </span>}
         {children}
      </>
   );

   switch (level) {
      case 1:
         return <h1 className={cls}>{content}</h1>;
      case 2:
         return <h2 className={cls}>{content}</h2>;
      case 3:
         return <h3 className={cls}>{content}</h3>;
   }
}
