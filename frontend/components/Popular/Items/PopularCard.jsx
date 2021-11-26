import styles from "./serviceShort.module.css";
import {useTranslation} from "next-i18next";

export default function PopularCard({src, title, description}) {
    const {t} = useTranslation("common");

    return (
        <div className={styles.card}>
            <img className={styles.image} alt='image' src={src}/>
            <div className={styles.text_wrap}>
                <h4 className={styles.card_title}>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
            <a className={styles.button} href='#'>{t("popular.buttons")}</a>
        </div>
    )
}
