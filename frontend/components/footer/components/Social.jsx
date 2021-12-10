import styles from "../footer.module.css";
import Link from "../../shared/CustomLink";

export default function Social({title, data}) {

    return (
        <article className={`${styles.wrapper} ${styles.social}`}>
            <h5 className={styles.title}>{title}</h5>
            <Link className={styles.instagram} href='#' children={data.instagram}/>
            <Link className={styles.telegram} href='#' children={data.telegram}/>
            <Link className={styles.whatsApp} href='#' children={data.whatsApp}/>
            <Link className={styles.viber} href='#' children={data.viber}/>
        </article>
    )
}
