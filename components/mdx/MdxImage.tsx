import Image from "next/image";

export default function MdxImage({ src, alt }: { src: string; alt?: string }) {
   const imgAlt = alt || "";

   return (
      <div className="relative my-6 aspect-video overflow-hidden rounded-lg border bg-muted shadow-md">
         <Image
            src={src}
            alt={imgAlt}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            loading="lazy"
            className="object-cover"
         />
      </div>
   );
}
