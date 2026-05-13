import Image from "next/image";
// ייבוא הקובץ של ה-CSS Module (וודא שהנתיב תואם למיקום הקובץ שלך)
import styles from './../../app/styles/components/ui/WhatsApp.module.css'; 

export function WhatsApp() {
    return (
        <a 
            className={styles.whatsapp} 
            aria-label="Chat on WhatsApp" 
            href="https://wa.me/31657164489"
            target="_blank"
            rel="noopener noreferrer"
        >
            {/* שימוש בסוגריים מרובעים בגלל המקף בשם המחלקה */}
            <span className={styles['whatsapp-pulse']}></span>
            <Image 
                src="/icons/whatsapp.svg" 
                alt="Chat on WhatsApp" 
                width={40} 
                height={40} 
                className={styles['whatsapp-icon']} 
            />
        </a>
    );
}