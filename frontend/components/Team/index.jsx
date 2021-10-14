import styles from "./team.module.css";

export default function Team() {
  return (
    <section className={styles.background_block_title}>
      <h1 className={styles.block_title}>НАША КОМАНДА</h1>
      <div className={styles.main_container}>
        <div className={styles.content_container}>
          <article className={styles.wrapper_user}>
            <img src={"/images/ourteam/alexGerman.png"} className={styles.img_team} />
            <p className={styles.team_member_name}>Alex German</p>
            <p className={styles.team_member_description}>великий и ужасный</p>
          </article>
          <article className={styles.wrapper_user}>
            <img src={"/images/ourteam/yuriyPrihvatilo.png"} className={styles.img_team} />
            <p className={styles.team_member_name}>Юрии Прохватило</p>
            <p className={styles.team_member_description}>великий и ужасный</p>
          </article>
          <article className={styles.wrapper_user}>
            <img src={"/images/ourteam/rickSanches.png"} className={styles.img_team} />
            <p className={styles.team_member_name}>Рик Санчес</p>
            <p className={styles.team_member_description}>просто душка</p>
          </article>
        </div>
      </div>
    </section>
  );
}
