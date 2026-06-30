import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
   return {
      a: ({ href, children, ...props }) => {
         const isExternal = href?.startsWith("http") || href?.startsWith("//");
         return (
            <a
               href={href}
               target={isExternal ? "_blank" : undefined}
               rel={isExternal ? "noopener noreferrer" : undefined}
               {...props}
            >
               {children}
            </a>
         );
      },
   };
}
