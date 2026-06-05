"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "@/locales/en";
import es from "@/locales/es";
import it from "@/locales/it";

// טיפוסי נתונים עבור TypeScript
const dictionaries = { en, es, it };
export type Language = keyof typeof dictionaries;
type Dictionary = typeof en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  // פונקציה שמקבלת מפתח (לדוגמה 'navigation.home') ומחזירה את המחרוזת
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en"); // שפת ברירת המחדל

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = dictionaries[lang];

    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key "${path}" not found in language "${lang}"`);
        return path; // מחזיר את המפתח עצמו אם התרגום חסר
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// הוק מותאם אישית לשימוש נוח בקומפוננטות
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};