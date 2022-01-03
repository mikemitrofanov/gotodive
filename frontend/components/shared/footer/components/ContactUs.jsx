import styles from "../footer.module.css";
import Link from "../../Link";

export default function ContactUs({title, data}) {

    return (
        <article className={`${styles.wrapper} ${styles.contact}`}>
            <h5 className={styles.title}>{title}</h5>
            <Link target="_blank" className={styles.location} href='https://www.google.com/maps/place/GoToDive+Diving+Center/@43.5086303,16.4707147,14.75z/data=!4m5!3m4!1s0x13355f63dfafdb15:0x71b1b6f44e20d467!8m2!3d43.5022665!4d16.4698037' children={data.location}/>
            <Link target="_blank" className={styles.phone} href='tel:270-177-6026' children={data.phone}/>
            <Link target="_blank" className={styles.facebook} href='https://www.facebook.com/gotodivedc/' children={data.facebook}/>
            <Link target="_blank" className={styles.email} href='mailto:Divinglive@gmail.com' children={data.email}/>
        </article>
    )
}
