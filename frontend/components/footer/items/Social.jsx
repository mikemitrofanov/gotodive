import styles from "../footer.module.css";
import ListItemLink from "../../ui/ListItemLink";
import { useTranslation } from 'next-i18next'

export default function Social() {
    const {t} = useTranslation("common");

    return (
        <article className={`${styles.wrapper} ${styles.social}`}>
            <h5 className={styles.title}>{t("footer.social")}</h5>
            <ListItemLink className={styles.instagram} href='#' text={'@GotoDive'}/>
            <ListItemLink className={styles.telegram} href='#' text={'@GotoDive'}/>
            <ListItemLink className={styles.whatsApp} href='#' text={'@GotoDive'}/>
            <ListItemLink className={styles.viber} href='#' text={'@GotoDive'}/>
        </article>
    )
}
