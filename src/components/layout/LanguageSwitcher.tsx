"use client";
import Image from "next/image";
import { useState } from "react";
import { useLanguage, Language } from "@/context/LanguageContext"; // ייבוא ההוק שלנו

import styles from "@/app/styles/components/layout/LanguageSwitcher.module.css";

const LANGUAGES = [
  { code: "en", label: "English", flag: "/flags/en.png" },
  { code: "es", label: "Español", flag: "/flags/es.png" },
  { code: "it", label: "Italiano", flag: "/flags/it.png" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  
  // שימוש ב-Context במקום ב-useState מקומי
  const { lang, setLang } = useLanguage(); 

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  const handleLanguageChange = (langCode: string) => {
    setLang(langCode as Language); // עדכון השפה הגלובלית
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {currentLang && (
          <Image
            src={currentLang.flag}
            alt={currentLang.label}
            width={20}
            height={15}
            className={styles.flagIcon}
          />
        )}
        <span>{currentLang?.label}</span>
        <span aria-hidden="true">▼</span>
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
        {LANGUAGES.map((languageOption) => (
          <button
            key={languageOption.code}
            className={styles.langOption}
            onClick={() => handleLanguageChange(languageOption.code)}
            style={{
              fontWeight: lang === languageOption.code ? "bold" : "normal",
            }}
          >
            <Image
              src={languageOption.flag}
              alt={languageOption.label}
              width={20}
              height={15}
              className={styles.flagIcon}
            />
            {languageOption.label}
          </button>
        ))}
      </div>
    </div>
  );
}