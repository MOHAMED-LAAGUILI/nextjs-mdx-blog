export interface MetaInfo {
  url: string;
  title: string;
  author: string;
  description: string;
  generator: string;
  favicons: {
    appleTouchIcon: string;
    icon: string;
    maskIcon: string;
  };
  keywords: string[];
  og: {
    image: string;
    imageWidth: number;
    imageHeight: number;
    locale: string;
  };
  twitter: {
    creator: string;
    image: string;
    site: string;
  };
  googleSiteVerification: string;
}