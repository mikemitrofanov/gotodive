import styles from "../footer.module.css";
import Link from "../../shared/CustomLink";

export default function ContactUs({title, data}) {

    return (
        <article className={`${styles.wrapper} ${styles.contact}`}>
            <h5 className={styles.title}>{title}</h5>
            <Link className={styles.location} href='#' children={data.location}/>
            <Link className={styles.phone} href='#' children={data.phone}/>
            <Link className={styles.facebook} href='#' children={data.facebook}/>
            <Link className={styles.email} href='#' children={data.email}/>
        </article>
    )
}
