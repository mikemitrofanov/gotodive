import styles from "./serviceShort.module.css";

export default function ServiceShort({ service }) {
  return (
    <div className={styles.popular_item}>
      <img className={styles.popular_service_image} src={service.imageUrl} alt='Image' />
      <p className={styles.popular_service_title}>{service.title}</p>
      <p className={styles.description}>{service.description}</p>
      <button className={styles.popular_service_button}>Записаться</button>
    </div>
  );
}
