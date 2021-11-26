import styles from "../footer.module.css";
import Link from "next/link";
import {useTranslation} from "next-i18next";

export default function Categories() {
    const {t} = useTranslation("common");

    return (
        <article className={`${styles.wrapper} ${styles.categories}`}>
            <h1 className={styles.title}>Categories</h1>
            <Link href='#'>
                <a className={styles.category}>{t("footer.contactUs")}</a>
            </Link>
            <Link href='#'>
                <a className={styles.category}>{t("footer.contactUs")}</a>
            </Link>
            <Link href='#'>
                <a className={styles.category}>{t("footer.contactUs")}</a>
            </Link>
            <Link href='#'>
                <a className={styles.category}>{t("footer.contactUs")}</a>
            </Link>
            <Link href='#'>
                <a className={styles.category}>{t("footer.contactUs")}</a>
            </Link>
        </article>
    )
}
