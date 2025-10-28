import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Make It Whole Again",
  description:
    "Buy, sell, or trade missing gadget parts to complete your gear, reduce waste, and save money.",
  metadataBase: new URL("https://makeitwholeagainmvp.vercel.app"),
  alternates: {
    canonical: "https://makeitwholeagainmvp.vercel.app",
  },
  openGraph: {
    title: "Make It Whole Again",
    description:
      "Complete your gadgets, find missing parts, reduce waste, and join a circular economy for technology.",
    url: "https://makeitwholeagainmvp.vercel.app",
    siteName: "Make It Whole Again",
    images: [
      {
        url: "/FullLogo_NoBuffer.jpg",
        width: 1200,
        height: 630,
        alt: "Make It Whole Again Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer /> {/* 👇 Footer with email + WhatsApp contact */}
        <Analytics />
      </body>
    </html>
  );
}
