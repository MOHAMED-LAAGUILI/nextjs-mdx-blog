"use client";

import { useEffect, useRef, useState } from "react";

function slugify(text: string): string {
   return text
      .toLowerCase()
      .replace(/^\d+\.\s*/, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
}

interface TocItem {
   id: string;
   text: string;
}

export default function TableOfContents() {
   const [items, setItems] = useState<TocItem[]>([]);
   const [activeId, setActiveId] = useState<string>("");
   const idsRef = useRef<Set<string>>(new Set());

   useEffect(() => {
      const headings = document.querySelectorAll<HTMLHeadingElement>(".prose h2");
      const tocItems: TocItem[] = [];
      const seen = idsRef.current;

      headings.forEach(h => {
         let id = h.id;
         if (!id) {
            id = slugify(h.textContent || "");
            if (seen.has(id)) {
               let counter = 2;
               while (seen.has(`${id}-${counter}`)) counter++;
               id = `${id}-${counter}`;
            }
            seen.add(id);
            h.id = id;
         }
         tocItems.push({ id, text: h.textContent || "" });
      });

      setItems(tocItems);

      const observer = new IntersectionObserver(
         entries => {
            for (const entry of entries) {
               if (entry.isIntersecting) {
                  setActiveId(entry.target.id);
               }
            }
         },
         { rootMargin: "-80px 0px -80px 0px" }
      );

      headings.forEach(h => {
         if (h.id) observer.observe(h);
      });

      return () => observer.disconnect();
   }, []);

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
         el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
   };

   if (items.length === 0) return null;

   return (
      <nav className="sticky top-20 hidden max-h-[calc(100vh-5rem)] w-64 shrink-0 self-start overflow-y-auto lg:block">
         <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">On this page</h4>
         <ul className="space-y-2.5 border-l pl-4">
            {items.map(item => (
               <li key={item.id}>
                  <a
                     href={`#${item.id}`}
                     onClick={e => handleClick(e, item.id)}
                     className={`block text-sm leading-snug transition-colors ${
                        activeId === item.id ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground"
                     }`}
                  >
                     {item.text.replace(/^\d+\.\s*/, "")}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
}
