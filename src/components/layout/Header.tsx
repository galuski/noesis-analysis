"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo"; // ייבוא קומפוננטת הלוגו
import NavLinks from "./NavLinks";
import LanguageSwitcher from "./LanguageSwitcher";

import styles from "@/app/styles/components/layout/Header.module.css";
import HamburgerButton from "./../ui/HamburgerButton";

export default function Header() {
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
        <NavLinks isOpen={isMenuOpen} closeMenu={closeMenu} />
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
