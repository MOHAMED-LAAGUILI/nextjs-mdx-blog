export default function Video({ src, title, poster }: { src: string; title?: string; poster?: string }) {
   return (
      <div className="relative my-6 overflow-hidden rounded-lg border bg-muted shadow-md">
         <video
            src={src}
            title={title}
            poster={poster}
            controls
            preload="metadata"
            className="w-full aspect-video"
         >
            {title ? <track kind="captions" /> : null}
            <p>
               Your browser doesn&apos;t support HTML video.
               <a
                  href={src}
                  className="underline"
               >
                  Download the video
               </a>
               .
            </p>
         </video>
      </div>
   );
}
