import { ScrollToHash } from "@/components/ScrollToHash";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/consts";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const atkinson = localFont({
  src: [
    {
      path: "../../public/fonts/atkinson-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/atkinson-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-atkinson",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "úklid",
    "úklid domácností",
    "úklid kanceláří",
    "úklid Orlickoústecko",
    "generální úklid",
    "tepování",
    "debordelizace",
    "Úklid bez prachu",
  ],
  authors: [{ name: SITE_TITLE }],
  creator: SITE_TITLE,
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: SITE_TITLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, alt: SITE_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon/tab-icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${atkinson.variable} font-sans antialiased`}>
        <ScrollToHash />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
