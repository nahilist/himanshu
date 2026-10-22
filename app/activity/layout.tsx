import React from "react";
import type { Metadata } from "next";
import { ActivityLanguageProvider } from "@/context/ActivityLanguageContext";

export const metadata: Metadata = {
  title: "Reading Activity",
  description: "A personal reading archive of philosophy, stories, and poetry.",
  robots: { index: false, follow: true },
};

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ActivityLanguageProvider>{children}</ActivityLanguageProvider>;
}
