"use client";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./../../app/styles/components/layout/About.module.css";
import Globe from "./Globe";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t, lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const punchlineRef = useRef<HTMLSpanElement>(null);

  // פונקציית פיצול הטקסט (מותאמת משמאל לימין)
  const splitWords = (text: string) => {
    if (!text) return null;
    return text.split(" ").map((word, i) => (
      <span key={i} className={styles.wordWrapper}>
        <span className={`word ${styles.word}`}>
          {word}
        </span>
      </span>
    ));
  };

  useGSAP(() => {
    // אנימציה 1: חשיפת הטקסט
    gsap.to('.word', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      }
    });

    // אנימציה 2: אפקט המרקר (תמיד ירוץ משמאל לימין)
    gsap.to(punchlineRef.current, {
      backgroundSize: "100% 100%",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: punchlineRef.current,
        start: "top 85%",
      }
    });
  }, { 
    scope: containerRef, 
    dependencies: [lang] // מוודא שהאנימציה תתרנדר מחדש אם מחליפים בין אנגלית/ספרדית/איטלקית
  });

  return (
    <section id="about" className={styles.about} ref={containerRef}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t("about.title")}</h3>

        <div className={styles.textContent}>
          <p>{splitWords(t("about.p1"))}</p>
          <p>{splitWords(t("about.p2"))}</p>
          <p>{splitWords(t("about.p3"))}</p>
          <p>{splitWords(t("about.p4"))}</p>

          <ul className={styles.list}>
            <li>{splitWords(t("about.bullet1"))}</li>
            <li>{splitWords(t("about.bullet2"))}</li>
          </ul>

          <p className={styles.highlightText}>
            {/* משפט המחץ */}
            <span ref={punchlineRef} className={styles.markerHighlight}>
              {t("about.p5")}
            </span>
          </p>

          <Globe />
        </div>
      </div>
    </section>
  );
}