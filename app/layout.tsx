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
  title: {
    default: "Luxury Apartments in Parga & Nafplio",
    template: "%s · Luxury Apartments in Greece",
  },
  description:
    "Direct booking for two amazing stays in Greece: a stone villa in Parga and a boutique apartment in Nafplio.",
  keywords: [
    "Nafplio",
    "Parga",
    "hotel",
    "villa",
    "amazing",
    "luxury apartment Greece",
    "boutique stay Nafplio",
    "stone villa Parga",
    "holiday rental Greece",
    "family villa Parga",
    "couples apartment Nafplio",
    "direct booking Greece",
  ],
  openGraph: {
    type: "website",
    title: "Luxury Apartments in Parga & Nafplio",
    description:
      "Book an amazing villa in Parga or a boutique stay in Nafplio. Photos, amenities, and direct contact.",
    siteName: "Luxury Apartments Greece",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
