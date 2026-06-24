import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://illyrianmintbot.com"),
  title: {
    default: "Illyrian Minting Bot — NFT Minting Automation for OpenSea Drops",
    template: "%s | Illyrian Minting Bot",
  },
  description:
    "The ultimate NFT minting automation platform for OpenSea Drops on Ethereum and Base. Automate mints, transfers, wallet funding, and profit management with institutional-grade speed.",
  keywords: [
    "NFT minting bot",
    "OpenSea drops",
    "NFT automation",
    "Ethereum",
    "Base",
    "wallet automation",
    "bulk wallet funding",
    "NFT transfer",
  ],
  openGraph: {
    title: "Illyrian Minting Bot — Mint Faster. Scale Smarter.",
    description:
      "Automate NFT mints, transfers, wallet funding, and profit management on Ethereum and Base.",
    url: "https://illyrianmintbot.com",
    siteName: "Illyrian Minting Bot",
    type: "website",
    images: [{ url: "/logo.png", width: 1248, height: 1248, alt: "Illyrian Minting Bot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illyrian Minting Bot — Mint Faster. Scale Smarter.",
    description:
      "The ultimate NFT minting automation platform for OpenSea Drops on Ethereum and Base.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night">{children}</body>
    </html>
  );
}
