import styles from "../footer.module.css";
import Link from "../../Link";

export default function ContactUs({title, data}) {

    return (
        <article className={`${styles.wrapper} ${styles.contact}`}>
            <h5 className={styles.title}>{title}</h5>
            <Link target="_blank" className={styles.location} href='https://www.google.com.ua/maps/place/5404+13th+St+NW,+Washington,+DC+20011,+%D0%A1%D0%A8%D0%90/@38.9552021,-77.0297197,321m/data=!3m1!1e3!4m13!1m7!3m6!1s0x40dc66d36fed7f07:0x8bce8b7fa87221d4!2z0YPQuy4g0J_QvtCx0LXQtNGLLCAzLCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY5MDAw!3b1!8m2!3d47.850532!4d35.1012338!3m4!1s0x89b7c868f236f62d:0x3bc123ddc228ffea!8m2!3d38.9554091!4d-77.0300301?hl=ru&authuser=0' children={data.location}/>
            <Link target="_blank" className={styles.phone} href='tel:385914888222' children={data.phone}/>
            <Link target="_blank" className={styles.facebook} href='https://www.facebook.com/gotodivedc/' children={data.facebook}/>
            <Link target="_blank" className={styles.email} href='mailto:Divinglive@gmail.com' children={data.email}/>
        </article>
    )
}
