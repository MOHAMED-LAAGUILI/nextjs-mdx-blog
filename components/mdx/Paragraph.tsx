import type { ReactNode } from "react";

export default function Paragraph({ lead, children }: { lead?: boolean; children: ReactNode }) {
  return (
    <p className={`${lead ? "text-lg text-muted-foreground md:text-xl" : "text-base leading-relaxed"}`}>
      {children}
    </p>
  );
}
