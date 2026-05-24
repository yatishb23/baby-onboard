import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { VisitTracker } from "@/components/VisitTracker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "BOB Stealth Pilot — Interview Co-Pilot",
  description:
    "BOB listens, analyzes, and feeds you the perfect answers in real-time. Zero detection. Maximum confidence.",
  icons: { icon: "/bob.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="bg-gray-50 font-sans text-gray-900 antialiased">
        <Analytics />
        <VisitTracker />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
