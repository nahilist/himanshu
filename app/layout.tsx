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
  title: "Himanshu Kumar | AI/ML & Frontend Developer",
  description:
    "Portfolio of Himanshu Kumar showcasing Generative AI, RAG, machine learning and modern frontend projects.",
  authors: [{ name: "Himanshu Kumar", url: "https://github.com/himanshux64" }],
  creator: "Himanshu Kumar",
  keywords: [
    "Himanshu Kumar",
    "AI/ML Developer",
    "Frontend Developer",
    "Generative AI",
    "RAG",
    "LangChain",
    "Machine Learning",
    "Next.js",
    "React",
    "Python",
    "PyTorch",
    "TensorFlow",
    "FastAPI",
    "Tailwind CSS",
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Himanshu Kumar | AI/ML & Frontend Developer",
    description:
      "Portfolio of Himanshu Kumar showcasing Generative AI, RAG, machine learning and modern frontend projects.",
    url: "https://himanshukumar.dev",
    siteName: "Himanshu Kumar Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Himanshu Kumar Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Kumar | AI/ML & Frontend Developer",
    description:
      "Portfolio of Himanshu Kumar showcasing Generative AI, RAG, machine learning and modern frontend projects.",
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
