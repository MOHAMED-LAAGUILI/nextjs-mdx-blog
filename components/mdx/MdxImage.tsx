import Image from "next/image";

export default function MdxImage({ src, alt }: { src: string; alt: string }) {
   return (
      <div className="relative my-6 aspect-video overflow-hidden rounded-lg border shadow-md">
         <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
         />
      </div>
   );
}
