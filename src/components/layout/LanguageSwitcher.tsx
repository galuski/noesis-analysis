"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/components/layout/LanguageSwitcher.module.css"; 

const languages = [
  { code: "en", label: "English", icon: "/flags/en.png" }, 
  { code: "es", label: "Español", icon: "/flags/es.png" },
  { code: "it", label: "Italiano", icon: "/flags/it.png" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const currentLocale = pathname ? pathname.split("/")[1] : "en";
  const currentLanguageData = languages.find(lang => lang.code === currentLocale);

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale; 
    return segments.join("/");
  };

  return (
    <div className={styles.languageSwitcher}>
      <button 
        className={styles.button} 
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        {currentLanguageData && (
          <img 
            src={currentLanguageData.icon} 
            alt={currentLanguageData.label} 
            className={styles.flagIcon} 
            width="20" 
            height="15" 
          />
        )}
        
        {/* התיקון: מציג את המילה המלאה ("English") בלי פונט מודגש או Uppercase */}
        <span>
          {currentLanguageData ? currentLanguageData.label : "English"}
        </span>
        
        {/* החץ במראה נקי וטבעי יותר שמתאים לתמונה */}
        <span style={{ fontSize: "10px", marginLeft: "2px" }}>▼</span>
      </button>

      <div className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
        {languages.map((lang) => (
          <Link
            key={lang.code}
            href={redirectedPathName(lang.code)}
            className={styles.langOption}
            onClick={() => setIsOpen(false)}
          >
            <img 
              src={lang.icon} 
              alt={lang.label} 
              className={styles.flagIcon} 
              width="20" 
              height="15" 
            />
            <span>{lang.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}