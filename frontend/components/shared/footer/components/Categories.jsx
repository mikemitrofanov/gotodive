import styles from "../footer.module.css";
import Link from "../../Link";

export default function Categories({title, data}) {
    const links = [ // <= Заглушка для ссылок
        {link: '#', target: ''},
        {link: '#', target: ''},
        {link: '#', target: ''},
        {link: '#', target: ''},
        {link: '/file/price.pdf', target: '_blank'},
    ]
    return (
        <article className={`${styles.wrapper} ${styles.categories}`}>
            <h5 className={styles.title}>{title}</h5>
            {data.map((item, i) => {
                return <Link href={links[i].link} target={links[i].target} children={item.category} className={styles.category} key={i}/>
            })}
        </article>
    )
}
