"use client";

import styles from "./../../app/styles/components/ui/Hamburger.module.css";

interface HamburgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerButton({ isOpen, toggleMenu }: HamburgerProps) {
  return (
    <button 
      // משלב את מחלקת הבסיס, ואם isOpen שווה true, מוסיף גם את מחלקת open
      className={`${styles.toggle} ${isOpen ? styles.open : ''}`} 
      onClick={toggleMenu}
      aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
      aria-expanded={isOpen}
    >
      <div className={`${styles.bar} ${styles.bar1}`}></div>
      <div className={`${styles.bar} ${styles.bar2}`}></div>
      <div className={`${styles.bar} ${styles.bar3}`}></div>
    </button>
  );
}