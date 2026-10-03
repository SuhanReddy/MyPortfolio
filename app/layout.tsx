import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vanga Suhan Reddy | Software Engineer",
  description:
    "Vanga Suhan Reddy is an AI/ML master's student at TU Darmstadt building thoughtful software, NLP systems, and useful experiences.",
  openGraph: {
    title: "Vanga Suhan Reddy | Software Engineer",
    description:
      "Software engineering, applied AI, and the work behind useful products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}