import React from 'react';
import ServiceCard from './ServiceCard';
import styles from "./../../app/styles/components/layout/Services.module.css";


const servicesData = [
  {
    id: 1,
    title: "Country Risk for Travel and Operations",
    description: "Security, stability, and scenarios for international mobility.",
    imageSrc: "/icons/globe.svg", // כאן תשים את הנתיב לתמונה שלך מתוך תיקיית public
  },
  {
    id: 2,
    title: "Applied Intelligence in Electoral and Campaign Processes",
    description: "Political monitoring, analysis of actors, narratives, and risks.",
    imageSrc: "/icons/network.svg",
  },
  {
    id: 3,
    title: "Applied Intelligence for Institutional Security",
    description: "Assessment of physical threats and vulnerabilities in organizations.",
    imageSrc: "/icons/building.svg",
  }
];

export default function ServicesList() {
  return (
    <div className={styles.servicesSection}>
      
      {/* 2. רינדור הכרטיסיות באמצעות map */}
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