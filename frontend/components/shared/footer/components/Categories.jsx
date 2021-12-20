import styles from "../footer.module.css";
import Link from "../../Link";

export default function Categories({title, data}) {

    return (
        <article className={`${styles.wrapper} ${styles.categories}`}>
            <h5 className={styles.title}>{title}</h5>
            {data.map((item, i) => (
                <Link href='#' children={item} className={styles.category} key={i}/>
            ))}
        </article>
    )
}
