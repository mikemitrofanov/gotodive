import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { switchLanguage } from "../../../helpers/switchLanguage";
import styles from "./serviceShort.module.css";

export default function ServiceShort({ service }) {
  const router = useRouter();
  const valueLanguages = switchLanguage(router.locale);
  const { t } = useTranslation("common");

  return (
    <article className={styles.popular_item}>
      <img className={styles.popular_service_image} src={service.imageUrl} alt='Image' />
      <p className={styles.popular_service_title}>{service.id ? service.title : service.title[valueLanguages]}</p>
      <p className={styles.description}>{service.id ? service.description : service.description[valueLanguages]}</p>
      <button className={styles.popular_service_button}>{t("popular.buttons")}</button>
    </article>
  );
}
