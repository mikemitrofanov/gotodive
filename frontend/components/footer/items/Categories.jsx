import styles from "../footer.module.css";
import ListItemLink from "../../ui/ListItemLink";
import { useTranslation } from 'next-i18next'

export default function Categories() {
    const {t} = useTranslation("common");

    return (
        <article className={`${styles.wrapper} ${styles.categories}`}>
            <h5 className={styles.title}>{t("footer.categories")}</h5>
            <ListItemLink href='#' text={t("footer.category-1")} className={styles.category}/>
            <ListItemLink href='#' text={t("footer.category-2")} className={styles.category}/>
            <ListItemLink href='#' text={t("footer.category-3")} className={styles.category}/>
            <ListItemLink href='#' text={t("footer.category-4")} className={styles.category}/>
            <ListItemLink href='/file/price.pdf'
                          text={t("footer.category-5")}
                          className={styles.category}
                          target='_blank'/>
        </article>
    )
}
