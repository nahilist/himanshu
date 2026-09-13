import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "MDX — From Ideas to Impactful Experiences",
  description:
    "Award-winning portfolio and digital experience studio. Industrial design, full-stack creative engineering, and mobile applications.",
  keywords: [
    "Portfolio",
    "Creative Development",
    "Design Engineering",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "MDX",
  ],
  authors: [{ name: "MDX Studio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full w-full bg-white text-neutral-900 overflow-hidden">
        {children}
      </body>
    </html>
  );
}
