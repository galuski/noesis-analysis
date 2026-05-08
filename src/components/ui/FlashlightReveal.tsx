"use client";

import React, { useRef } from "react";
import styles from "./../../app/styles/components/ui/Flashlight.module.css";

// 1. הגדרת הטיפוסים עבור ה-Props של הקומפוננטה
interface FlashlightRevealProps {
  children: React.ReactNode;
}

export default function FlashlightReveal({ children }: FlashlightRevealProps) {
  // 2. ציון מפורש שה-Ref מצביע על אלמנט DIV ב-HTML
  const containerRef = useRef<HTMLDivElement>(null);

  // 3. הגדרת האירוע כאירוע עכבר של React שקורה על אלמנט DIV
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    // חישוב מיקום העכבר יחסית לקונטיינר
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // עדכון משתני ה-CSS
    containerRef.current.style.setProperty("--cursor-x", `${x}px`);
    containerRef.current.style.setProperty("--cursor-y", `${y}px`);
  };

  // הפונקציה החדשה: מאפסת את המיקום מחוץ למסך כשהעכבר עוזב
  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    containerRef.current.style.setProperty("--cursor-x", `-1000px`);
    containerRef.current.style.setProperty("--cursor-y", `-1000px`);
  };
  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.baseBackground}></div>
      <div className={styles.strongBackground}></div>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
