import styles from "../footer.module.css";
import {useTranslation} from "next-i18next";
import Link from "next/link";

export default function ContactUs() {
    const {t} = useTranslation("common");

    return (
        <article className={`${styles.wrapper} ${styles.contact}`}>
            <h5 className={styles.title}>Contact Us</h5>
            <Link href='#'>
                <a className={styles.location}>{t("footer.contactUs")}</a>
            </Link>
            <Link href='#'>
                <a className={styles.phone}>270-177-6026, 275-198-7978</a>
            </Link>
            <Link href='#'>
                <a className={styles.facebook}>@GotoDive</a>
            </Link>
            <Link href='#'>
                <a className={styles.email}>GotoDive@gmail.com</a>
            </Link>
        </article>
    )
}
