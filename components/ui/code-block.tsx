"use client";
import { IconCheck, IconCopy, IconDownload } from "@tabler/icons-react";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
   language: string;
   filename: string;
   highlightLines?: number[];
} & (
   | {
        code: string;
        tabs?: never;
     }
   | {
        code?: never;
        tabs: Array<{
           name: string;
           code: string;
           language?: string;
           highlightLines?: number[];
        }>;
     }
);

export const CodeBlock = ({ language, filename, code, highlightLines = [], tabs = [] }: CodeBlockProps) => {
   const [copied, setCopied] = React.useState(false);
   const [downloading, setDownloading] = React.useState(false);
   const [activeTab, setActiveTab] = React.useState(0);

   const tabsExist = tabs.length > 0;

   const activeCode = tabsExist ? tabs[activeTab].code : code;
   const activeLanguage = tabsExist ? tabs[activeTab].language || language : language;
   const activeHighlightLines = tabsExist ? tabs[activeTab].highlightLines || [] : highlightLines;

   const copyToClipboard = async () => {
      if (activeCode) {
         await navigator.clipboard.writeText(activeCode);
         setCopied(true);
         setTimeout(() => setCopied(false), 2000);
      }
   };

   const downloadFile = () => {
      const extMap: Record<string, string> = {
         bash: "sh",
         c: "c",
         cpp: "cpp",
         csharp: "cs",
         css: "css",
         go: "go",
         html: "html",
         java: "java",
         javascript: "js",
         js: "js",
         json: "json",
         jsx: "jsx",
         kotlin: "kt",
         markdown: "md",
         md: "md",
         php: "php",
         py: "py",
         python: "py",
         ruby: "rb",
         rust: "rs",
         scala: "scala",
         sh: "sh",
         sql: "sql",
         swift: "swift",
         ts: "ts",
         tsx: "tsx",
         typescript: "ts",
         yaml: "yml",
         yml: "yml",
      };
      const ext = extMap[activeLanguage] || "txt";
      const name = filename || `code.${ext}`;
      const blob = new Blob([activeCode || ""], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = name.endsWith(`.${ext}`) ? name : `${name}.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setDownloading(true);
      setTimeout(() => setDownloading(false), 1500);
   };

   return (
      <div className="relative w-full rounded-lg bg-slate-900 p-4 font-mono text-sm">
         <div className="flex flex-col gap-2">
            {tabsExist && (
               <div className="flex justify-between items-center overflow-x-auto">
                  <div className="flex">
                     {tabs.map((tab, index) => (
                        <button
                           key={index}
                           onClick={() => setActiveTab(index)}
                           className={`px-3 !py-2 text-xs transition-colors font-sans ${
                              activeTab === index ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                           }`}
                        >
                           {tab.name}
                        </button>
                     ))}
                  </div>
                  <div className="flex items-center gap-2 pr-2">
                     <button
                        onClick={copyToClipboard}
                        className="text-zinc-400 hover:text-zinc-200 transition-colors"
                        title="Copy"
                     >
                        {copied ? <IconCheck size={15} /> : <IconCopy size={15} />}
                     </button>
                     <button
                        onClick={downloadFile}
                        className="text-zinc-400 hover:text-zinc-200 transition-colors"
                        title="Download"
                     >
                        {downloading ? <IconCheck size={15} /> : <IconDownload size={15} />}
                     </button>
                  </div>
               </div>
            )}
            {!tabsExist && (
               <div className="flex justify-between items-center py-2">
                  <div className="text-xs text-zinc-400">{filename}</div>
                  <div className="flex items-center gap-2">
                     <button
                        onClick={copyToClipboard}
                        className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
                        title="Copy"
                     >
                        {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                     </button>
                     <button
                        onClick={downloadFile}
                        className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
                        title="Download"
                     >
                        {downloading ? <IconCheck size={14} /> : <IconDownload size={14} />}
                     </button>
                  </div>
               </div>
            )}
         </div>
         <SyntaxHighlighter
            language={activeLanguage}
            style={atomDark}
            customStyle={{
               background: "transparent",
               fontSize: "0.875rem", // text-sm equivalent
               margin: 0,
               padding: 0,
            }}
            wrapLines={true}
            showLineNumbers={true}
            lineProps={lineNumber => ({
               style: {
                  backgroundColor: activeHighlightLines.includes(lineNumber) ? "rgba(255,255,255,0.1)" : "transparent",
                  display: "block",
                  width: "100%",
               },
            })}
            PreTag="pre"
         >
            {String(activeCode)}
         </SyntaxHighlighter>
      </div>
   );
};
