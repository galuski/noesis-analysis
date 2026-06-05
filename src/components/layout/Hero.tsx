import styles from "./../../app/styles/components/layout/Hero.module.css";
import Button from "../ui/Button";
import Scroll from "../ui/Scroll";
import worldMapIMG from "./../../../public/world-map.svg";

// הרכיב עכשיו מקבל את dict (המילון המלא) כ-Prop מהשרת
export default function Hero({ dict }: { dict: any }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.imageContainer}>
          <img
            src={worldMapIMG.src} /* הוספנו .src בגלל שזה ייבוא סטטי של קובץ */
            alt="Noesis Analysis Visualization"
            className={styles.mapImage}
            style={{ width: "100%", height: "auto", maxWidth: "350px" }}
          />
        </div>

        <div className={styles.contentContainer}>
          {/* שולפים את הטקסטים ישירות מתוך אובייקט המילון */}
          <h1 className={styles.title}>{dict.hero.title}</h1>
          <h2 className={styles.subtitle}>{dict.hero.subtitle}</h2>
          <Button text={dict.button.text} targetId="contact" />
        </div>
      </div>

      <div className={styles.scrollContainer}>
        <Scroll text={dict.scroll.text} />{" "}
      </div>
    </section>
  );
}