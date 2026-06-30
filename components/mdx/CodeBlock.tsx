"use client";

import { useMemo } from "react";
import { CodeBlock as UiCodeBlock } from "@/components/ui/code-block";

type CodeBlockProps = {
  language: string;
  filename?: string;
  code?: string;
  highlightLines?: number[];
  tabs?: Array<{
    name: string;
    code: string;
    language?: string;
    highlightLines?: number[];
  }>;
  children?: React.ReactNode;
};

export default function CodeBlock({
  language,
  filename,
  code,
  highlightLines,
  tabs,
  children,
}: CodeBlockProps) {
  const extracted = useMemo(() => children ? extractText(children) : "", [children]);

  if (tabs && tabs.length > 0) {
    return (
      <UiCodeBlock
        language={language || "javascript"}
        filename={filename || ""}
        tabs={tabs}
      />
    );
  }

  return (
    <UiCodeBlock
      language={language || "javascript"}
      filename={filename || ""}
      code={code || extracted}
      highlightLines={highlightLines}
    />
  );
}

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return extractText((node as any).props.children);
  }
  return "";
}
