"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./../../app/styles/components/layout/Services.module.css";
import ServicesList from "./ServicesList";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className={styles.services}>
      <h3 className={styles.title}>{t("services.title")}</h3>
      <h4 className={styles.subtitle}>{t("services.subtitle")}</h4>
      <ServicesList />
    </section>
  );
}
