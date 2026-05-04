"use client";

import styles from './../../app/styles/components/ui/Scroll.module.css';

export default function Scroll() {
  return (
    <button className={styles.btn}>
      <div className={styles.scroll}></div>
    </button>
  );
}