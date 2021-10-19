import styles from "./serviceShort.module.css";

export default function ServiceShort({ service, language }) {
  const switchLanguage = (languages) => {
    switch (languages) {
      case "russian":
        return 0;
      case "ukrainian":
        return 1;
      case "english":
        return 2;
      default:
        return 0;
    }
  };

  const valueLanguages = switchLanguage(language);

  return (
    <div className={styles.popular_item}>
      <img className={styles.popular_service_image} src={service.imageUrl} alt='Image' />
      <p className={styles.popular_service_title}>{service.title[valueLanguages]}</p>
      <p className={styles.description}>{service.description[valueLanguages]}</p>
      <button className={styles.popular_service_button}>Записаться</button>
    </div>
  );
}
