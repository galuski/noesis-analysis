"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/app/styles/components/layout/NavLinks.module.css';
import { useLanguage } from '@/context/LanguageContext'; 

const links = [
  { translationKey: 'navigation.home', href: '#home' },
  { translationKey: 'navigation.about', href: '#about' },
  { translationKey: 'navigation.services', href: '#services' },
  { translationKey: 'navigation.contact', href: '#contact' }, 
];

interface NavLinksProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function NavLinks({ isOpen, closeMenu }: NavLinksProps) {
  // 1. מחזירים את הסטייט שמנהל מי הפעיל כרגע
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage(); 

  useEffect(() => {
    // אם יש לך כאן IntersectionObserver, 
    // הוא צריך גם לעדכן את ה-setActiveSection בעת גלילה
  }, []);

  // 2. פונקציה חדשה שמטפלת בלחיצה
  const handleLinkClick = (section: string) => {
    setActiveSection(section); // מעדכן איזה לינק נלחץ (מזיז את החץ)
    closeMenu(); // סוגר את התפריט אם אנחנו במובייל
  };

  return (
    <ul className={`${styles.list} ${isOpen ? styles.open : ''}`}>
      {links.map((link) => {
        // מנקים את ה-# כדי לקבל רק את שם הסקשן (למשל 'about')
        const sectionName = link.href.replace('#', ''); 
        const isActive = activeSection === sectionName;
        
        return (
          <li key={link.href}>
            <Link 
              href={link.href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
              // 3. מפעילים את הפונקציה בלחיצה ומעבירים לה את השם של הסקשן
              onClick={() => handleLinkClick(sectionName)}
            >
              {t(link.translationKey)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}