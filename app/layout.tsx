import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/layout/BackToTop";
import Preloader from "@/components/layout/Preloader";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { getMetaInfo } from "@/data/meta";
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

const metaInfo = getMetaInfo();

export const viewport: Viewport = {
   colorScheme: "dark light",
   initialScale: 1,
   maximumScale: 5,
   themeColor: [
      { color: "#ffffff", media: "(prefers-color-scheme: light)" },
      { color: "#09090b", media: "(prefers-color-scheme: dark)" },
   ],
   viewportFit: "cover",
   width: "device-width",
};

export const metadata: Metadata = {
   alternates: { canonical: metaInfo.url },
   appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Meta Blog",
   },
   applicationName: metaInfo.title,
   authors: [{ name: metaInfo.author, url: metaInfo.url }],
   creator: metaInfo.author,
   description: metaInfo.description,
   formatDetection: {
      address: false,
      email: false,
      telephone: false,
   },
   generator: metaInfo.generator,
   icons: {
      apple: metaInfo.favicons.appleTouchIcon,
      icon: metaInfo.favicons.icon,
      other: {
         rel: "mask-icon",
         url: metaInfo.favicons.maskIcon,
      },
      shortcut: metaInfo.favicons.icon,
   },
   keywords: metaInfo.keywords,
   metadataBase: new URL(metaInfo.url),
   openGraph: {
      description: metaInfo.description,
      images: [
         {
            alt: metaInfo.title,
            height: metaInfo.og.imageHeight,
            url: metaInfo.og.image,
            width: metaInfo.og.imageWidth,
         },
      ],
      locale: metaInfo.og.locale,
      siteName: metaInfo.title,
      title: metaInfo.title,
      type: "website",
      url: metaInfo.url,
   },
   publisher: metaInfo.author,
   robots: {
      follow: true,
      googleBot: {
         follow: true,
         index: true,
         "max-image-preview": "large",
         "max-snippet": -1,
         "max-video-preview": -1,
      },
      index: true,
      nocache: false,
   },
   title: {
      default: metaInfo.title,
      template: `%s | ${metaInfo.title.split(" — ")[0]}`,
   },
   twitter: {
      card: "summary_large_image",
      creator: metaInfo.twitter.creator,
      description: metaInfo.description,
      images: [metaInfo.twitter.image],
      site: metaInfo.twitter.site,
      title: metaInfo.title,
   },
   verification: {
      google: metaInfo.googleSiteVerification,
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
            className={`${work_Sans.className} antialiased max-w-7xl mx-auto min-h-screen `}
            suppressHydrationWarning
         >
            <ThemeProvider
               attribute="class"
               defaultTheme="light"
               disableTransitionOnChange
            >
               <Preloader />
               <div className="relative bg-background/40">
                  <InteractiveGridPattern
                     className="fixed inset-0 -z-10 pointer-events-none blur-[1px] opacity-90 mask-[radial-gradient(800px_circle_at_center,white,transparent)]"
                     squares={[50, 50]}
                  />
                  {children}
               </div>
               <BackToTop />
            </ThemeProvider>
         </body>
      </html>
   );
}
