import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { defaultLanguage } from "../../../store/slice/defaultLanguageSlice";
import styles from "./serviceShort.module.css";

export default function ServiceShort({ service }) {
  const { t } = useTranslation("translation", { useSuspense: false });
  const language = useSelector(defaultLanguage);

  const switchLanguage = (languages) => {
    switch (languages) {
      case "ru":
        return 0;
      case "ukr":
        return 1;
      case "en":
        return 2;
      default:
        return 0;
    }
  };

  const valueLanguages = switchLanguage(language);

  return (
    <article className={styles.popular_item}>
      <img className={styles.popular_service_image} src={service.imageUrl} alt='Image' />
      <p className={styles.popular_service_title}>{service.id ? service.title : service.title[valueLanguages]}</p>
      <p className={styles.description}>{service.id ? service.description : service.description[valueLanguages]}</p>
      <button className={styles.popular_service_button}>{t("popular.buttons")}</button>
    </article>
  );
}
