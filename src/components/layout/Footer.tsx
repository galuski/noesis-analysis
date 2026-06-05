import Link from "next/link";
import styles from "./../../app/styles/components/layout/Footer.module.css"; 

export function Footer({ dict, lang }: { dict: any, lang: string }) {
  return (
    <footer className={styles.footerContainer}>
      <ul className={styles.privacyPolicyAcc}>
        <li>
          {/* הוספנו את השפה לנתיב כדי שהניווט יישאר בשפה הנכונה */}
          <Link href={`/${lang}/privacy`}>{dict.privacyPolicy}</Link>
        </li>
        <li>
          <Link href={`/${lang}/accessibility`}>{dict.accessibilityStatement}</Link>
        </li>
      </ul>

      <p className={styles.footerCredit}>
        {dict.copyright}
        <a 
          href="https://gal-code.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.authorLink}
        >
          Gal-Code
        </a>
      </p>
    </footer>
  );
}