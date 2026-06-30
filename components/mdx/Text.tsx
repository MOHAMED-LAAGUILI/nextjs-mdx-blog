import type { ReactNode } from "react";

export default function Text({
  bold,
  muted,
  italic,
  small,
  code,
  children,
}: {
  bold?: boolean;
  muted?: boolean;
  italic?: boolean;
  small?: boolean;
  code?: boolean;
  children: ReactNode;
}) {
  const Tag = code ? "code" : "span";
  return (
    <Tag
      className={`${bold ? "font-semibold" : ""} ${muted ? "text-muted-foreground" : ""} ${italic ? "italic" : ""} ${small ? "text-sm" : ""} ${code ? "rounded bg-zinc-100 px-1.5 py-0.5 text-sm font-normal dark:bg-zinc-800" : ""}`}
    >
      {children}
    </Tag>
  );
}
