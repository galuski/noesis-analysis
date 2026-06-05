import Image from "next/image";
import styles from "./../../app/styles/components/layout/Services.module.css";

// הגדרת סוגי הנתונים שהקומפוננטה מצפה לקבל
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceCard({
  title,
  description,
  imageSrc,
}: ServiceCardProps) {
  return (
    <div className={styles.card}>
      {/* אזור התמונה */}
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          width={48} /* גודל קבוע לאייקונים */
          height={48}
          className={styles.cardImage}
        />
      </div>

      {/* אזור הטקסט */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
}
