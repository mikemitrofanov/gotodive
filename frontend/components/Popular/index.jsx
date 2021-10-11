import { useSelector } from "react-redux";
import { categoriesApi } from "../../store/categories/action";
// import ServiceShort from "./items/ServiceShort";
import styles from "./popular.module.css";

export default function Popular() {
  const { data } = useSelector(categoriesApi.endpoints.getPopularServices.select());
  const services = Array.isArray(data) ? data : [];

  return (
    <div className={styles.popular_container}>
      <div className={styles.popular_content_container}>
        <div className={styles.popular_header}>ПОПУЛЯРНОЕ</div>
        <div className={styles.popular_items_container}>
          {services.map((service) => (
            <div className={styles.popular_item}>
              <img className={styles.popular_service_image} src={service.imageUrl} alt='Image' />
              <p className={styles.popular_service_title}>{service.title}</p>
              <p>{service.description}</p>
              <button className={styles.popular_service_button}>Записаться</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
