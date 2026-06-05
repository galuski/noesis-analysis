"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/styles/components/legal/AccessibilityStatement.module.css";

export default function AccessibilityStatement() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("legal.accessibilityTitle")}</h1>
      
      <section className={styles.section}>
        <p className={styles.text}>{t("legal.accP1")}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("legal.conformanceTitle")}</h2>
        <p className={styles.text}>{t("legal.conformanceP1")}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("legal.feedbackTitle")}</h2>
        <p className={styles.text}>{t("legal.feedbackP1")}</p>
        <div className={styles.contactBox}>
          <p className={styles.text}>Email: lab@noesisanalysis.com</p>
          <p className={styles.text}>Location: Madrid, Spain</p>
        </div>
      </section>
    </div>
  );
}