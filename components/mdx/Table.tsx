export default function Table({ children }: { children: React.ReactNode }) {
   return (
      <div className="my-6 overflow-x-auto rounded-lg border">
         <table className="w-full caption-bottom text-sm">
            {children}
         </table>
      </div>
   );
}

export function THead({ children }: { children: React.ReactNode }) {
   return (
      <thead className="border-b bg-muted/50">
         <tr>{children}</tr>
      </thead>
   );
}

export function Th({ children }: { children: React.ReactNode }) {
   return (
      <th className="h-10 px-4 text-left align-middle font-semibold text-muted-foreground [&:has([role=checkbox])]:pr-0">
         {children}
      </th>
   );
}

export function TBody({ children }: { children: React.ReactNode }) {
   return <tbody className="[&_tr:last-child]:border-0">{children}</tbody>;
}

export function Tr({ children }: { children: React.ReactNode }) {
   return (
      <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
         {children}
      </tr>
   );
}

export function Td({ children }: { children: React.ReactNode }) {
   return (
      <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
         {children}
      </td>
   );
}
