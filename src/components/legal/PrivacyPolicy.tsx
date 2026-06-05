"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "@/app/styles/components/legal/PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{t("legal.privacyTitle")}</h1>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("legal.introTitle")}</h2>
        <p className={styles.text}>{t("legal.privacyP1")}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("legal.dataTitle")}</h2>
        <ul className={styles.list}>
          <li>{t("legal.dataLi1")}</li>
          <li>{t("legal.dataLi2")}</li>
          <li>{t("legal.dataLi3")}</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>{t("legal.rightsTitle")}</h2>
        <p className={styles.text}>{t("legal.rightsP1")}</p>
      </section>

      <div className={styles.contactBox}>
        <h3 className={styles.sectionTitle}>{t("legal.contactTitle")}</h3>
        <p className={styles.text}>Noesis Analysis</p>
        <p className={styles.text}>Madrid, Spain</p>
        <p className={styles.text}>Email: lab@noesisanalysis.com</p>
      </div>
    </div>
  );
}