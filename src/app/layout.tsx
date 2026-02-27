import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angad Arora — CS @ UW | Builder & Founder",
  description:
    "Computer Science student at the University of Washington. Building products at the intersection of AI, startups, and systems.",
  keywords: [
    "Angad Arora",
    "UW",
    "Computer Science",
    "Software Engineer",
    "Startup",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Angad Arora" }],
  openGraph: {
    title: "Angad Arora — CS @ UW | Builder & Founder",
    description:
      "Computer Science student at the University of Washington. Building products at the intersection of AI, startups, and systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angad Arora — CS @ UW | Builder & Founder",
    description:
      "Computer Science student at the University of Washington. Building products at the intersection of AI, startups, and systems.",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
