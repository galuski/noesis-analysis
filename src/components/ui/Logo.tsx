import Link from 'next/link';
import Image from 'next/image';

// ייבוא קובץ העיצוב הייעודי של הלוגו
import styles from '@/app/styles/components/ui/Logo.module.css';

export default function Logo() {
  return (
    <Link href="/" className={styles.logoLink}>
      <Image 
        src="/logo.svg" 
        alt="My Company Logo" 
        width={80} 
        height={80} 
        priority // חשוב אם הלוגו מופיע ב-Header
        className={styles.logoImage} 
      />
    </Link>
  );
}