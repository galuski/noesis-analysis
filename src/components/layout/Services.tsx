import styles from "./../../app/styles/components/layout/Services.module.css";
import ServicesList from "./ServicesList";

// מקבלים את dict כ-Prop (נניח שהוא מכיל גם את services וגם את serviceslist)
export default function Services({ dict }: { dict: any }) {
  return (
    // שוב, הסרתי את id="services" בהנחה שעטפת את זה ב-<section> ב-page.tsx
    <section id="services" className={styles.services}>
      <h3 className={styles.title}>{dict.services.title}</h3>
      <h4 className={styles.subtitle}>{dict.services.subtitle}</h4>

      {/* מעבירים ל-ServicesList רק את החלק של הרשימה מתוך המילון */}
      <ServicesList dict={dict.serviceslist} />
    </section>
  );
}
