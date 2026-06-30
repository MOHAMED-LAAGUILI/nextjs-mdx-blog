import type { Metadata } from "next";
import { Inter, Noto_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { BackToTop } from "@/components/layout/BackToTop";

const notoSansHeading = Noto_Sans({
   subsets: ["latin"],
   variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const work_Sans = Work_Sans({
   subsets: ["latin"],
});

export const metadata: Metadata = {
   description:
      "Meta Blog is a blog website built with Next.js, TypeScript, and Tailwind CSS. It features a clean and modern design, responsive layout, and supports dark mode.",
   title: "Meta Blog",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         lang="en"
         className={cn("font-sans", inter.variable, notoSansHeading.variable)}
         data-scroll-behavior="smooth"
      >
         <body
            className={`${work_Sans.className} antialiased max-w-7xl mx-auto min-h-screen`}
            suppressHydrationWarning
         >
            <Preloader />
            <ThemeProvider
               attribute="class"
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
               <BackToTop />
            </ThemeProvider>
         </body>
      </html>
   );
}
