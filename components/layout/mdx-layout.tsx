import Thumbnail from "../Thumbnail";
import BackToTopButton from "./BackToTop";
import Footer from "./Footer";
import Header from "./Header";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
   const isProduction = process.env.NODE_ENV === "production";

   return (
      <div className="min-h-screen">
         <Header />

         <main className="mx-auto max-w-4xl px-5 py-10 md:px-0">
            <div
               className="
                  prose
                  prose-zinc
                  dark:prose-invert
                  max-w-none

                  prose-pre:overflow-x-auto
                  prose-pre:rounded-xl
                  prose-pre:border
                  prose-pre:border-zinc-200
                  dark:prose-pre:border-zinc-800

                  prose-code:before:content-none
                  prose-code:after:content-none
               "
            >
               <Thumbnail />

               {children}
            </div>
         </main>

         <BackToTopButton />
         <Footer />
      </div>
   );
}
