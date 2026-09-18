import React from "react";
import { ActivityLanguageProvider } from "@/context/ActivityLanguageContext";

export default function ActivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ActivityLanguageProvider>{children}</ActivityLanguageProvider>;
}
