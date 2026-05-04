import Image from 'next/image';
import styles from "./../../app/styles/components/layout/Services.module.css";


// הגדרת סוגי הנתונים שהקומפוננטה מצפה לקבל
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

export default function ServiceCard({ title, description, imageSrc }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      {/* אזור התמונה */}
      <div className={styles.imageWrapper}>
        <Image 
          src={imageSrc} 
          alt={title} 
          fill /* מאפשר לתמונה למלא את הקונטיינר שלה */
          className={styles.cardImage}
          sizes="(max-width: 768px) 100vw, 33vw"
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