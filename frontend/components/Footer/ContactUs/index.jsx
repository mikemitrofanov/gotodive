import Link from "next/link";
import styles from "./contactUs.module.css";

export default function ContactUs() {
  return (
    <article className={styles.contact_us_wrapper}>
      <h1 className={styles.contact_us_heading}>Contact Us</h1>
      <Link href='#'>
        <a className={styles.contact_us}>
          <img className={styles.icon} src='images/footer/icons/mapIcon.png' />
          999, Моя Улица, Хорватия
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.contact_us}>
          <img className={styles.icon} src='images/footer/icons/TelIcon.png' />
          270-177-6026, 275-198-7978
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.contact_us}>
          <img className={styles.icon} src='images/footer/icons/facebookIcon.png' />
          @GotoDive
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.contact_us}>
          <img className={styles.icon} src='images/footer/icons/mailIcon.png' />
          GotoDive@gmail.com
        </a>
      </Link>
    </article>
  );
}
