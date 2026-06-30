import RelatedPosts from "../post/RelatedPosts";
import TableOfContents from "../post/TableOfContents";
import Thumbnail from "../post/Thumbnail";
import BackToTopButton from "./BackToTop";
import Footer from "./Footer";
import Header from "./Header";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="min-h-screen">
         <Header />

         <main className="mx-auto max-w-6xl px-5 py-10 md:px-6">
            <div className="flex gap-10">
               <article
                  className="prose prose-zinc dark:prose-invert min-w-0 flex-1 max-w-none
                     prose-code:before:content-none prose-code:after:content-none
                     prose-code:rounded prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800
                     prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal
                  "
               >
                  <Thumbnail />

                  {children}
               </article>

               <TableOfContents />
            </div>

            <RelatedPosts />
         </main>

         <BackToTopButton />
         <Footer />
      </div>
   );
}
