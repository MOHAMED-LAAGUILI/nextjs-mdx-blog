import Image from "next/image";
import Link from "next/link";
import { DiaTextReveal } from "../ui/dia-text-reveal";

export default function Logo() {
   return (
      <Link
         href="/"
         className="flex items-center gap-2"
      >
         <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Logo"
            priority
            className="size-8"
         />

         <span className="text-lg">
            <DiaTextReveal
               className="text-lg md:text-xl font-semibold"
               colors={["#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7"]}
               delay={0.35}
               duration={2.4}
               text="Meta Blog"
            />
         </span>
      </Link>
   );
}
