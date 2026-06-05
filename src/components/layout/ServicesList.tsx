import ServiceCard from "./ServiceCard";
import styles from "./../../app/styles/components/layout/Services.module.css";

// מקבלים את החלק של המילון שרלוונטי רק לרשימה
export default function ServicesList({ dict }: { dict: any }) {
  
  // בונים את המערך בעזרת הנתונים שהגיעו מהשרת
  const servicesData = [
    {
      id: 1,
      title: dict.service1.title,
      description: dict.service1.description,
      imageSrc: "/icons/globe.svg",
    },
    {
      id: 2,
      title: dict.service2.title,
      description: dict.service2.description,
      imageSrc: "/icons/network.svg",
    },
    {
      id: 3,
      title: dict.service3.title,
      description: dict.service3.description,
      imageSrc: "/icons/building.svg",
    },
  ];

  return (
    <div className={styles.servicesSection}>
      <div className={styles.cardsGrid}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}