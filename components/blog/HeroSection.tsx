import Image from "next/image";

export default function HeroSection() {
   return (
      <section className="mb-16">
         <div className="relative h-70 overflow-hidden rounded-2xl md:h-150">
            <Image
               src="/images/hero.png"
               alt="Featured article"
               fill
               priority
               sizes="100vw"
               className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-4 left-4 max-w-xl rounded-xl bg-white/95 p-5 shadow-xl backdrop-blur dark:bg-zinc-900/95 md:bottom-8 md:left-8 md:p-8">
               <span className="inline-flex rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white">Technology</span>

               <h1 className="mt-3 text-xl font-bold leading-tight md:text-4xl">
                  The Impact of Technology on the Workplace: How Technology Is Changing the Modern Workforce
               </h1>

               <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">Jason Francisco • August 20, 2022</p>
            </div>
         </div>
      </section>
   );
}
