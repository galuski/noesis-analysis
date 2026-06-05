"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/components/layout/NavLinks.module.css';

// הוספנו את dict ו-lang לפראופס
interface NavLinksProps {
  isOpen: boolean;
  closeMenu: () => void;
  dict: any;
  lang: string;
}

// פשוט רשימה של המזהים שלנו (הנתיבים)
const sections = ['home', 'about', 'services', 'contact'];

export default function NavLinks({ isOpen, closeMenu, dict, lang }: NavLinksProps) {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // מנגנון ה-IntersectionObserver שלך (אם יש) נשאר כאן
  }, []);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    closeMenu();
  };

  return (
    <ul className={`${styles.list} ${isOpen ? styles.open : ''}`}>
      {sections.map((section) => {
        // התיקון הקריטי: מוסיפים את השפה ל-URL כדי שניווט מעמודים פנימיים יעבוד פרפקט!
        // למשל: /es/#about
        const href = `/${lang}/#${section}`; 
        const isActive = activeSection === section;
        
        return (
          <li key={section}>
            <Link 
              href={href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
              onClick={() => handleLinkClick(section)}
            >
              {/* מושכים את הטקסט מהמילון */}
              {dict[section]} 
            </Link>
          </li>
        );
      })}
    </ul>
  );
}