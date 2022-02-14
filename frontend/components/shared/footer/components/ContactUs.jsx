import styles from "../footer.module.css";
import Link from "../../Link";

export default function ContactUs({title, data}) {

    return (
        <article className={`${styles.wrapper} ${styles.contact}`}>
            <h5 className={styles.title}>{title}</h5>
            <Link target="_blank" className={styles.location} href='https://goo.gl/maps/7eHgPXxWWrQwufNy8' children={data.location}/>
            <Link target="_blank" className={styles.phone} href='tel:385914888222' children={data.phone}/>
            <Link target="_blank" className={styles.facebook} href='https://www.facebook.com/gotodivedc/' children={data.facebook}/>
            <Link target="_blank" className={styles.email} href='mailto:Divinglive@gmail.com' children={data.email}/>
        </article>
    )
}
