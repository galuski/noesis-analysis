import styles from "./../../app/styles/components/layout/About.module.css";
import Image from "next/image";
import aboutImg1 from "./../../../public/imgs/about3.jpg";

// מקבלים את המילון (dict) בתור Prop
export default function About({ dict }: { dict: any }) {
  return (
    // הורדתי מכאן את id="about" בהנחה שעטפת את הרכיב ב-<section id="about"> ב-page.tsx
    // כדי למנוע כפילות של IDs שעלולה לבלבל את מנגנון הגלילה שלנו
    <section id="about" className={styles.about}>
      {" "}
      <div className={styles.container}>
        {/* תמונה ראשית פותחת את הסקשן */}

        {/* הפריסה המפוצלת */}
        <div className={styles.splitLayout}>
          {/* צד שמאל - כותרת דביקה */}
          <div className={styles.leftColumn}>
            {/* שולפים מתוך dict.about */}
            <h3 className={styles.title}>{dict.about.title}</h3>
            <div className={styles.imageWrapper}>
              <Image
                src={aboutImg1}
                alt="About Noesis Analysis"
                className={styles.aboutImg1}
              />
            </div>
          </div>

          {/* צד ימין - תוכן זורם */}
          <div className={styles.rightColumn}>
            <p className={styles.leadText}>{dict.about.p1}</p>
            <p className={styles.paragraph}>{dict.about.p2}</p>

            {/* אזור עקרונות העבודה עם קווים מפרידים */}
            <div className={styles.valuesSection}>
              <p className={styles.valuesIntro}>{dict.about.p3}</p>

              <ul className={styles.minimalList}>
                <li>{dict.about.p4}</li>
                <li>{dict.about.bullet1}</li>
                <li>{dict.about.bullet2}</li>
              </ul>
            </div>

            {/* משפט מחץ */}
            <p className={styles.punchlineText}>{dict.about.p5}</p>

            <div className={styles.globeWrapper}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
