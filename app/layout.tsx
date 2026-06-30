import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/layout/BackToTop";
import Preloader from "@/components/layout/Preloader";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";

const notoSansHeading = Noto_Sans({
   subsets: ["latin"],
   variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const work_Sans = Work_Sans({
   subsets: ["latin"],
});

const BASE_URL = "https://meta-blog.vercel.app";

export const viewport: Viewport = {
   initialScale: 1,
   themeColor: [
      { color: "#ffffff", media: "(prefers-color-scheme: light)" },
      { color: "#0a0a0a", media: "(prefers-color-scheme: dark)" },
   ],
   width: "device-width",
};

export const metadata: Metadata = {
   alternates: { canonical: BASE_URL },
   authors: [{ name: "Meta Blog" }],
   creator: "Meta Blog",
   description: "A modern blog covering web development, TypeScript, React, Next.js, tools, career insights, and tech comparisons.",
   keywords: ["web development", "blog", "next.js", "react", "typescript", "tutorial", "tech"],
   metadataBase: new URL(BASE_URL),
   openGraph: {
      description: "A modern blog covering web development, TypeScript, React, Next.js, tools, career insights, and tech comparisons.",
      images: [{ height: 630, url: "/logo.png", width: 1200 }],
      locale: "en_US",
      siteName: "Meta Blog",
      title: "Meta Blog — Web Development & Tech Insights",
      type: "website",
      url: BASE_URL,
   },
   robots: { follow: true, index: true },
   title: {
      default: "Meta Blog — Web Development & Tech Insights",
      template: "%s | Meta Blog",
   },
   twitter: {
      card: "summary_large_image",
      description: "A modern blog covering web development, TypeScript, React, Next.js, tools, career insights, and tech comparisons.",
      images: ["/logo.png"],
      title: "Meta Blog — Web Development & Tech Insights",
   },
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
