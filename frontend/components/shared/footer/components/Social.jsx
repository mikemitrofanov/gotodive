import styles from "../footer.module.css";
import Link from "../../Link";

export default function Social({title, data}) {

    return (
        <article className={`${styles.wrapper} ${styles.social}`}>
            <h5 className={styles.title}>{title}</h5>
            <Link target="_blank" className={styles.instagram} href='https://www.instagram.com/gotodivedc/' children={data.instagram}/>
            <Link target="_blank" className={styles.telegram} href='https://t.me/+385914888222' children={data.telegram}/>
            <Link target="_blank" className={styles.whatsApp} href='https://wa.me/385914888222' children={data.whatsApp}/>
            <Link target="_blank" className={styles.viber} href='viber://chat/?number=%2B385914888222' children={data.viber}/>
        </article>
    )
}
