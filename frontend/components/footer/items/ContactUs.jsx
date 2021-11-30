import styles from "../footer.module.css";
import ListItemLink from "../../ui/ListItemLink";

export default function ContactUs({t}) {

    return (
        <article className={`${styles.wrapper} ${styles.contact}`}>
            <h5 className={styles.title}>{t("footer.contactUs")}</h5>
            <ListItemLink className={styles.location} href='#' text={t("footer.location")}/>
            <ListItemLink className={styles.phone} href='#' text={"270-177-6026, 275-198-7978"}/>
            <ListItemLink className={styles.facebook} href='#' text={"@GotoDive"}/>
            <ListItemLink className={styles.email} href='#' text={"GotoDive@gmail.com"}/>
        </article>
    )
}
