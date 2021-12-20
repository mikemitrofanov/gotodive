import styles from "./styles/serviceCard.module.css";
import {useTranslation} from "next-i18next";
import Link from "@/components/shared/Link";

export default function ServiceCard({src, title, description, id}) {
    const {t} = useTranslation("common");

    return (
        <div className={styles.card}>
            <Link href={{pathname: '/category/[service]', query: {service: id}}}>
                <img className={styles.image} alt='image' src={src}/>
                <h4 className={styles.title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </Link>
            <a className={styles.button} href='#'>{t("popular.buttons")}</a>
        </div>
    )
}
