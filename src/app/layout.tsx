import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Louis Ellis - Expert STEM Tutor | First-Class BEng Graduate",
  description: "First-class Engineering graduate offering online tutoring in Maths, Physics, and Engineering. Build confidence and excel in STEM with personalised lessons.",
  keywords: ["STEM tutor", "online tutoring", "maths tutor", "physics tutor", "engineering tutor", "GCSE", "A-Level", "university"],
  authors: [{ name: "Louis Ellis" }],
  openGraph: {
    title: "Louis Ellis - Expert STEM Tutor",
    description: "First-class Engineering graduate offering online tutoring in Maths, Physics, and Engineering.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
