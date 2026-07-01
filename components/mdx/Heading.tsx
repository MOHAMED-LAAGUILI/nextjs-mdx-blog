import type { ReactNode } from "react";

export default function Heading({ level = 2, number, children }: { level?: 1 | 2 | 3; number?: string; children: ReactNode }) {
   const text = extractText(children);
   const id = text
      .toLowerCase()
      .replace(/^\d+\.\s*/, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

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

   const Tag = `h${level}` as const;

   return <Tag id={id} className={cls}>{content}</Tag>;
}

function extractText(node: ReactNode): string {
   if (typeof node === "string") return node;
   if (Array.isArray(node)) return node.map(extractText).join("");
   if (node && typeof node === "object" && "props" in node) {
      return extractText((node as any).props.children);
   }
   return "";
}
