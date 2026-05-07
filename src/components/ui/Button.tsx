'use client'; 

import styles from './../../app/styles/components/ui/Button.module.css';

// עדכנו את הפרופס: במקום onClick, אנחנו מבקשים targetId
interface ButtonProps {
  text: string;
  targetId: string; 
}

export default function Button({ text, targetId }: ButtonProps) {
  
  // הפונקציה שתעשה את הגלילה החלקה לאזור המבוקש
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // הוספנו את פונקציית ה-handleScroll לאירוע הלחיצה
    <button className={styles.button} onClick={handleScroll}>
      <span className={styles.text}>
        {text}
      </span>
    </button>
  );
}