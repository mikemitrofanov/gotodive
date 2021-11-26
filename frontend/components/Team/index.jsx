import {useTranslation} from "next-i18next";
import styles from "./team.module.css";

export default function Team() {
    const {t} = useTranslation("common");

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t("team.ourTeam")}</h2>
                <div className={styles.card_list}>
                    <div className={styles.card}>
                        <img className={styles.photo} alt='photo' src='/images/team/alexGerman.png'/>
                        <h3 className={styles.name}>{t("team.name2")}</h3>
                        <p className={styles.description}>{t("team.greatAndTerrible")}</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.photo} alt='photo' src='/images/team/yuriiProkhvatilo.png'/>
                        <h3 className={styles.name}>{t("team.name2")}</h3>
                        <p className={styles.description}>{t("team.greatAndTerrible")}</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.photo} alt='photo' src='/images/team/rickSanches.png'/>
                        <h3 className={styles.name}>{t("team.name3")}</h3>
                        <p className={styles.description}>{t("team.justDarling")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
