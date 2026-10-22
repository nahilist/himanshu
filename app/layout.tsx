import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: `${SITE.personName} | ${SITE.role} | ${SITE.name}`,
    template: `%s | ${SITE.personName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.personName, url: SITE.github }],
  creator: SITE.personName,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${SITE.personName} | ${SITE.role} | ${SITE.name}`,
    description: SITE.description,
    url: "/",
    siteName: SITE.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE.personName}, ${SITE.role}` }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.personName} | ${SITE.role} | ${SITE.name}`,
    description: SITE.description,
    images: ["/twitter-image"],
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
      className="min-h-full antialiased"
    >
      <body className="min-h-full w-full bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
