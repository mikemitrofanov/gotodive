import { useTranslation } from "next-i18next";
import styles from "./serviceShort.module.css";

export default function ServiceShort({ src, title, description }) {
  const { t } = useTranslation("common");

  return (
    <article className={styles.popular_item}>
      <img className={styles.popular_service_image} src={src} alt='Image' />
      <p className={styles.popular_service_title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <button className={styles.popular_service_button}>{t("popular.buttons")}</button>
    </article>
  );
}
