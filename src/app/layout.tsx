import { ScrollToHash } from "@/components/ScrollToHash";
import { SiteLayout } from "@/components/SiteLayout";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/consts";
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
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [{ url: "/favicon.svg" }, { url: "/favicon.ico" }],
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
