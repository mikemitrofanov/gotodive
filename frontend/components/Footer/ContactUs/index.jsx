import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "./contactUs.module.css";

export default function ContactUs() {
  const { t } = useTranslation("common");

  return (
    <article className={styles.contact_us_wrapper}>
      <h1 className={styles.contact_us_heading}>Contact Us</h1>
      <Link href='#'>
        <a className={styles.contact_us}>
          <img className={styles.icon} src='/images/footer/icons/map.png' />
          999, {t("footer.contactUs")}
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.contact_us}>
          <img className={styles.icon} src='/images/footer/icons/phone.png' />
          270-177-6026, 275-198-7978
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.contact_us}>
          <img className={styles.icon} src='/images/footer/icons/facebook.png' />
          @GotoDive
        </a>
      </Link>
      <Link href='#'>
        <a className={styles.contact_us}>
          <img className={styles.icon} src='/images/footer/icons/mail.png' />
          GotoDive@gmail.com
        </a>
      </Link>
    </article>
  );
}
