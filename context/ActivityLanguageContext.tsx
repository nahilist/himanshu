"use client";

import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "hi";

interface ActivityLanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const ActivityLanguageContext = createContext<
  ActivityLanguageContextType | undefined
>(undefined);

export const ActivityLanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("activity_lang");
        if (saved === "en" || saved === "hi") return saved;
      } catch {
        // Ignore localStorage read errors
      }
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("activity_lang", lang);
    } catch {
      // Ignore write errors
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <ActivityLanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </ActivityLanguageContext.Provider>
  );
};

export function useActivityLanguage() {
  const context = useContext(ActivityLanguageContext);
  if (!context) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
      toggleLanguage: () => {},
    };
  }
  return context;
}
