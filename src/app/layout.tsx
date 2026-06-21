import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/images/Bshuyentrang.png", width: 800, height: 1000, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/Bshuyentrang.png"],
  },
  robots: { index: true, follow: true },
  category: "healthcare",
  icons: {
    icon: [{ url: "/images/doctor-logo.svg", type: "image/svg+xml" }],
    shortcut: "/images/doctor-logo.svg",
    apple: "/images/doctor-logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0360d9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="min-h-screen bg-[#f4f7fb] font-sans text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
