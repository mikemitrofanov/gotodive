import styles from "./mainScreen.module.css";
import {useTranslation} from "next-i18next";

export default function MainScreen() {
    const {t} = useTranslation("common");

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <div className={styles.wrap_image}>
                    <img className={styles.logo} alt='logo' src='/images/mainScreen/logo.png'/>
                    <img className={styles.image} alt='diving' src='/images/mainScreen/scuba.png'/>
                </div>
                <div className={styles.wrap_text}>
                    <h1 className={styles.title}>
                        {t("mainScreen.titleStart")} <br/>
                        <span className={styles.title_bold}>{t("mainScreen.titleEnd")}</span>
                    </h1>
                    <p className={styles.subtitle}>{t("mainScreen.description")}</p>
                    <p className={styles.text}>{t("mainScreen.subDescription")}</p>
                </div>
            </div>
        </section>
    )
}
