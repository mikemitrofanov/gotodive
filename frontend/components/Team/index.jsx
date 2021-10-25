import { useTranslation } from "react-i18next";
import styles from "./team.module.css";

export default function Team() {
  const { t } = useTranslation("translation", { useSuspense: false });

  return (
    <section className={styles.background_block_title}>
      <h1 className={styles.block_title}>{t("team.ourTeam")}</h1>
      <div className={styles.main_container}>
        <div className={styles.content_container}>
          <article className={styles.wrapper_user}>
            <img src='/images/ourteam/alexGerman.png' className={styles.img_team} />
            <p className={styles.team_member_name}>Alex German</p>
            <p className={styles.team_member_description}>{t("team.greatAndTerrible")}</p>
          </article>
          <article className={styles.wrapper_user}>
            <img src='/images/ourteam/yuriyPrihvatilo.png' className={styles.img_team} />
            <p className={styles.team_member_name}>{t("team.name2")}</p>
            <p className={styles.team_member_description}>{t("team.greatAndTerrible")}</p>
          </article>
          <article className={styles.wrapper_user}>
            <img src='/images/ourteam/rickSanches.png' className={styles.img_team} />
            <p className={styles.team_member_name}>{t("team.name3")}</p>
            <p className={styles.team_member_description}>{t("team.justDarling")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
