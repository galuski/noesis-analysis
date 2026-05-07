"use client";

import Image from "next/image";
import styles from "./../../app/styles/components/layout/Hero.module.css";
import { useLanguage } from "@/context/LanguageContext";
import Button from "../ui/Button";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/world-map.svg"
          alt="Noesis Analysis Visualization"
          width={350}
          height={350}
          priority
          className={styles.mapImage}
        />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{t("hero.title")}</h1>
        <h2 className={styles.subtitle}>{t("hero.subtitle")}</h2>
        <Button text={t("button.text")} targetId="contact" />
      </div>
    </section>
  );
}
