import { useLanguage } from "@/context/LanguageContext";
import ServiceCard from "./ServiceCard";
import styles from "./../../app/styles/components/layout/Services.module.css";

export default function ServicesList() {
  // 1. הקריאה ל-Hook חייבת להיות בתוך הקומפוננטה
  const { t } = useLanguage();

  // 2. העברת המערך לתוך הקומפוננטה כדי שתהיה לו גישה ל-t
  const servicesData = [
    {
      id: 1,
      title: t("serviceslist.service1.title"),
      description: t("serviceslist.service1.description"),
      imageSrc: "/icons/globe.svg",
    },
    {
      id: 2,
      title: t("serviceslist.service2.title"),
      description: t("serviceslist.service2.description"),
      imageSrc: "/icons/network.svg",
    },
    {
      id: 3,
      title: t("serviceslist.service3.title"),
      description: t("serviceslist.service3.description"),
      imageSrc: "/icons/building.svg",
    },
  ];

  return (
    <div className={styles.servicesSection}>
      {/* רינדור הכרטיסיות באמצעות map */}
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
