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
  title: "Suhan Reddy Vanga | AI/ML & Web Developer",
  description:
    "Suhan Reddy Vanga is an AI/ML and web developer, pursuing a master's degree at TU Darmstadt and building intelligent, human-centered software.",
  openGraph: {
    title: "Suhan Reddy Vanga | AI/ML & Web Developer",
    description: "AI/ML, web development, featured projects, research, and education.",
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