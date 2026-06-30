import type { ReactNode } from "react";

export default function Link({ href, children, external: forceExternal }: { href: string; children: ReactNode; external?: boolean }) {
   const isExternal = forceExternal ?? (href.startsWith("http") || href.startsWith("//"));

   return (
      <a
         href={href}
         target={isExternal ? "_blank" : undefined}
         rel={isExternal ? "noopener noreferrer" : undefined}
         className="font-semibold underline underline-offset-2 hover:no-underline"
      >
         {children}
      </a>
   );
}
