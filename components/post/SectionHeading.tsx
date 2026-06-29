interface SectionHeadingProps {
   title: string;
   description?: string;
   search?: React.ReactNode;
}

export default function SectionHeading({ title, description, search }: SectionHeadingProps) {
   return (
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
         <div>
            <h2 className="text-3xl font-bold">{title}</h2>
            {description && <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>}
         </div>
         {search && <div className="shrink-0">{search}</div>}
      </div>
   );
}
