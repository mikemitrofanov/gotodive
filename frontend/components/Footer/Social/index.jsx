import Link from "next/link";
import styles from "./social.module.css";

export default function Social() {
  return (
    <article className={styles.social_wrapper}>
      <h1 className={styles.social_heading}>Social</h1>
      <Link href='#'>
        <a className={styles.social}>
          <img className={styles.icon} src='/images/footer/icons/instagram.png' />
          @GotoDive
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.social}>
          <img className={styles.icon} src='/images/footer/icons/telegram.png' />
          @GotoDive
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.social}>
          <img className={styles.icon} src='/images/footer/icons/whatsApp.png' />
          @GotoDive
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.social}>
          <img className={styles.icon} src='/images/footer/icons/viber.png' />
          @GotoDive
        </a>
      </Link>
    </article>
  );
}
