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
  metadataBase: new URL("https://himanshukumar.dev"),
  title: "Himanshu | AI/ML & Frontend Developer",
  description:
    "Portfolio of Himanshu showcasing machine learning and modern frontend projects.",
  authors: [{ name: "Himanshu", url: "https://github.com/himanshux64" }],
  creator: "Himanshu Kumar",
  keywords: [
    "Himanshu",
    "AI/ML Developer",
    "Frontend Developer",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Himanshu | AI/ML & Frontend Developer",
    description:
      "Portfolio of Himanshu showcasing machine learning and modern frontend projects.",
    url: "https://himanshukumar.dev",
    siteName: "Himanshu Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Himanshu Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu | AI/ML & Frontend Developer",
    description:
      "Portfolio of Himanshu showcasing machine learning and modern frontend projects.",
    creator: "@himanshux64",
    images: ["/logo.png"],
  },
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
