"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo"; 
import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";

import styles from "@/app/styles/components/layout/Header.module.css";
import HamburgerButton from "./../ui/HamburgerButton";

// 1. מגדירים את הנתונים שה-Header הולך לקבל מה-Layout
interface HeaderProps {
  lang: string;
  dict: any;
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Logo />
        <NavLinks
          isOpen={isMenuOpen}
          closeMenu={closeMenu}
          dict={dict.navigation} // עכשיו dict קיים ומוכר
          lang={lang}            // עכשיו lang קיים ומוכר
        />
        <div className={styles.actions}>
          <LanguageSwitcher />
        </div>
        <div className={styles.hamburgerWrapper}>
          <HamburgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}