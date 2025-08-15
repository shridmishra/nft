import type { Metadata } from "next";
import "./globals.css";

// Optional: Google Fonts with Next.js built-in font loader
import { Orbitron, Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "NFT Collection",
  description: "Explore NFT Collection - Metaverse Ready",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="bg-navy text-textWhite font-[var(--font-body)] antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
