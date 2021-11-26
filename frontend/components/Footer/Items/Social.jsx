import styles from "../footer.module.css";
import Link from "next/link";

export default function Social() {

    return (
        <article className={`${styles.wrapper} ${styles.social}`}>
            <h1 className={styles.title}>Social</h1>
            <Link href='#'>
                <a className={styles.instagram}>@GotoDive</a>
            </Link>
            <Link href='#'>
                <a className={styles.telegram}>@GotoDive</a>
            </Link>
            <Link href='#'>
                <a className={styles.whatsApp}>@GotoDive</a>
            </Link>
            <Link href='#'>
                <a className={styles.viber}>@GotoDive</a>
            </Link>
        </article>
    )
}
