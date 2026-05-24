import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { VisitTracker } from "@/components/VisitTracker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BOB",
  description:
    "BOB listens, analyzes, and feeds you the perfect answers in real-time. Zero detection. Maximum confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <VisitTracker />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
