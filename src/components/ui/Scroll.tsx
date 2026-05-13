"use client";

import styles from './../../app/styles/components/ui/Scroll.module.css';

interface ScrollProps {
  text: string;
}

export default function Scroll({ text }: ScrollProps) {
  return (
    // הזרקת הטקסט למאפיין data-text
    <button className={styles.btn} data-text={text}>
      <div className={styles.scroll}></div>
    </button>
  );
}