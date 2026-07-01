"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArticleJsonLd } from "next-seo";
import { useEffect, useState } from "react";
import { posts } from "@/data/posts";
import { BackToTop } from "../layout/BackToTop";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import RelatedPosts from "../post/RelatedPosts";
import Thumbnail from "../post/Thumbnail";
import { LineNav } from "../ui/line-nav";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://mo-blog-rose.vercel.app";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
   const pathname = usePathname();
   const slug = pathname.split("/").pop() || "";
   const post = posts.find(p => p.slug === slug);
   const [headings, setHeadings] = useState<{ id: string; title: string }[]>([]);
   const [activeId, setActiveId] = useState("");

   useEffect(() => {
      const els = document.querySelectorAll<HTMLHeadingElement>(".prose h2");
      const seen = new Set<string>();
      const items: { id: string; title: string }[] = [];

      els.forEach(h => {
         let id = h.id;
         if (!id) {
            id = (h.textContent || "")
               .toLowerCase()
               .replace(/^\d+\.\s*/, "")
               .replace(/[^a-z0-9]+/g, "-")
               .replace(/^-|-$/g, "");
            if (seen.has(id)) {
               let c = 2;
               while (seen.has(`${id}-${c}`)) c++;
               id = `${id}-${c}`;
            }
            seen.add(id);
            h.id = id;
         }
         items.push({ id, title: h.textContent || "" });
      });

      setHeadings(items);

      const observer = new IntersectionObserver(
         entries => {
            for (const e of entries) {
               if (e.isIntersecting) setActiveId(e.target.id);
            }
         },
         { rootMargin: "-80px 0px -80px 0px" }
      );
      els.forEach(h => observer.observe(h));
      return () => observer.disconnect();
   }, []);

   return (
      <div className="min-h-screen">
         <Header />

         {post && (
            <ArticleJsonLd
               type="BlogPosting"
               headline={post.title}
               url={`${BASE_URL}/post/${post.slug}`}
               datePublished={new Date(post.date).toISOString()}
               author={{ "@type": "Person", name: post.author }}
               image={`${BASE_URL}/${post.thumbnail}`}
               description={`Read about ${post.title} on Meta Blog.`}
            />
         )}

         <main className="mx-auto max-w-6xl px-5 py-10 md:px-6">
            <div className="flex flex-col gap-10 lg:flex-row">
               <article
                  className="prose prose-zinc dark:prose-invert min-w-0 flex-1 max-w-none
              prose-code:before:content-none prose-code:after:content-none
              prose-code:rounded prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800
              prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal
            "
               >
                  <Link
                     href="/"
                     className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                     <ArrowLeft className="size-4" />
                     Back to home
                  </Link>

                  <Thumbnail />

                  {children}
               </article>

               {headings.length > 0 && (
                  <div className="hidden w-full shrink-0 self-start lg:sticky lg:top-20 lg:max-w-64 lg:block">
                     <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">On this page</h4>
                     <LineNav
                        activeHref={`#${activeId}`}
                        items={headings.map(h => ({
                           href: `#${h.id}`,
                           title: h.title.replace(/^\d+\.\s*/, ""),
                        }))}
                     />
                  </div>
               )}
            </div>

            <RelatedPosts />
         </main>

         <BackToTop />
         <Footer />
      </div>
   );
}
