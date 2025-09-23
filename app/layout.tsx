import type { Metadata } from "next";
import { SITE_URL } from "@/site.config";
import { Inter } from "next/font/google";
import "@fontsource/pretendard";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HASIA - AI Native Company",
    template: "%s | HASIA"
  },
  description: "Building tomorrow with AI, today. Transform your business with infinite AI agents. 10x faster execution with unlimited AI agents working 24/7.",
  keywords: ["AI", "Artificial Intelligence", "AI Native", "Digital Transformation", "AI Consulting", "Rapid Prototyping", "AI Development", "No-Code", "AI Agents"],
  authors: [{ name: "HASIA" }],
  creator: "HASIA",
  publisher: "HASIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "HASIA - AI Native Company",
    description: "Building tomorrow with AI, today. Transform your business with infinite AI agents.",
    url: SITE_URL,
    siteName: "HASIA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HASIA - From Idea to Reality",
      }
    ],
    locale: "en_US",
    alternateLocale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HASIA - AI Native Company",
    description: "Building tomorrow with AI, today. Transform your business with infinite AI agents.",
    images: ["/og-image.png"],
    creator: "@hasia_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "구글 서치 콘솔에서 받은 코드를 여기에 입력",
  //   yandex: "얀덱스 웹마스터에서 받은 코드를 여기에 입력",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <JsonLd />
        <LanguageProvider>
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
