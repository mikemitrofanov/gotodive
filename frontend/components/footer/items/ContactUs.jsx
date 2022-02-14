import styles from "../footer.module.css";
import ListItemLink from "../../shared/Link";
import {useTranslation} from 'next-i18next'

export default function ContactUs() {
    const {t} = useTranslation("common");

    return (
        <article className={`${styles.wrapper} ${styles.contact}`}>
            <h5 className={styles.title}>{t("footer.contactUs")}</h5>
            <ListItemLink className={styles.location} href='#' children={t("footer.location")}/>
            <ListItemLink className={styles.phone} href='#' children={"+385914888222"}/>
            <ListItemLink className={styles.facebook} href='#' children={"@GotoDive"}/>
            <ListItemLink className={styles.email} href='#' children={"GotoDive@gmail.com"}/>
        </article>
    )
}
