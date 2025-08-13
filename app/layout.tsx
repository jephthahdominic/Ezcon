import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
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
  title: "Ezcon",
  description: "Ezcon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <title>eZcon Advisory Limited | Global Business Solutions & Strategic Consulting</title>
        <meta name="description" content="eZcon Advisory Limited - A global business solutions provider with a worldwide network spanning multiple continents. Since 2012, we've been delivering innovative services including business intelligence, corporate investigations, and strategic consulting to international clients." />
        <meta name="keywords" content="global business advisory, corporate investigations, international business intelligence, strategic consulting, risk management, worldwide business solutions, corporate services" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph for social sharing */}
        <meta property="og:title" content="eZcon Advisory Limited | Global Business Solutions & Strategic Consulting" />
        <meta property="og:description" content="Empowering businesses worldwide through innovative solutions and strategic advisory services. A trusted global partner delivering excellence since 2012." />
        <meta property="og:image" content="/public/images/hero_img.png" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
