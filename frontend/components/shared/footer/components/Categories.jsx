import styles from "../footer.module.css";
import Link from "../../Link";

export default function Categories({title, recentServices}) {

    return (
        <article className={`${styles.wrapper} ${styles.categories}`}>
            <h5 className={styles.title}>{title}</h5>
            {recentServices && recentServices.map((item, i) => {
                return   <Link href={{pathname: '/category/[service]', query: {service: item.id}}} children={item.title} className={styles.category} key={i}/>            
            })}
        </article>
    )
}
