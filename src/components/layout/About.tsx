"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./../../app/styles/components/layout/About.module.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.about}>
      {/* עטיפה מרכזית כדי לשלוט ברוחב הטקסט */}
      <div className={styles.container}>
        <h3 className={styles.title}>{t("about.title")}</h3>

        <div className={styles.textContent}>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p>{t("about.p4")}</p>

          {/* יצירת רשימת הנקודות האמיתית */}
          <ul className={styles.list}>
            <li>{t("about.bullet1")}</li>
            <li>{t("about.bullet2")}</li>
          </ul>

          {/* פסקת סיום - אפשר לתת לה מחלקה ייעודית אם רוצים להדגיש אותה */}
          <p className={styles.highlightText}>{t("about.p5")}</p>
        </div>
      </div>
    </section>
  );
}