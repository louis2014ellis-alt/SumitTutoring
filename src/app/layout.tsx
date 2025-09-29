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
  title: "Summit Tutoring - Expert GCSE & A-Level Tutor | First-Class Graduate",
  description: "First-class graduate offering expert GCSE & A-Level tutoring in Maths, Physics, Chemistry, and more. Build confidence and excel with personalized lessons.",
  keywords: ["GCSE tutor", "A-Level tutor", "online tutoring", "maths tutor", "physics tutor", "chemistry tutor", "exam preparation", "UK tutoring"],
  authors: [{ name: "Summit Tutoring" }],
  openGraph: {
    title: "Summit Tutoring - Expert GCSE & A-Level Tutor",
    description: "First-class graduate offering expert GCSE & A-Level tutoring in Maths, Physics, Chemistry, and more.",
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
