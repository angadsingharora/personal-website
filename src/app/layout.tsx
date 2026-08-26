import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  // Next 14 has no metric overrides for Newsreader; skip the synthetic
  // fallback and name a real serif instead.
  adjustFontFallback: false,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://angadsingharora.com"),
  title: "Angad Singh Arora",
  description:
    "Computer science student at the University of Washington. I build things: a language platform, a battery simulation, a prediction market app.",
  authors: [{ name: "Angad Singh Arora" }],
  openGraph: {
    title: "Angad Singh Arora",
    description: "Computer science student at the University of Washington.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Angad Singh Arora",
    description: "Computer science student at the University of Washington.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:border focus:border-rule focus:bg-paper focus:px-3 focus:py-2 focus:text-[13px] focus:text-ink"
        >
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
