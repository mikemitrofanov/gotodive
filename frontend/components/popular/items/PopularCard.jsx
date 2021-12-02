import styles from "../popular.module.css";
import {useTranslation} from "next-i18next";
import Link from "next/link";

export default function PopularCard({src, title, description, id}) {
    const {t} = useTranslation("common");

    return (
        <div className={styles.card}>
            <Link href={{pathname: '/category/[service]', query: {service: id}}}>
                <a className={styles.link}>
                    <img className={styles.image} alt='image' src={src}/>
                    <div className={styles.text_wrap}>
                        <h4 className={styles.card_title}>{title}</h4>
                        <p className={styles.description}>{description}</p>
                    </div>
                </a>
            </Link>
            <a className={styles.button} href='#'>{t("popular.buttons")}</a>
        </div>
    )
}
