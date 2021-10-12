import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import Media from "react-media";
import "swiper/css/navigation";
import { categoriesApi } from "../../store/categories/action";
import { data_slider } from "../../js/slider";
import styles from "./popular.module.css";
// import ServiceShort from "./items/ServiceShort";

SwiperCore.use([Navigation]);

export default function Popular() {
  const { data } = useSelector(categoriesApi.endpoints.getPopularServices.select());

  const fake_data = data_slider.data;
  const services = Array.isArray(data) ? data : fake_data;

  return (
    <section className={styles.popular_container}>
      <div className={styles.popular_content_container}>
        <div className={styles.popular_header}>ПОПУЛЯРНОЕ</div>
        <div className={styles.popular_items_container}>
          <Media queries={{ small: "(max-width: 1324px)" }}>
            {(matches) =>
              matches.small ? (
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  className={styles.slider}
                >
                  {services.map((service) => (
                    <SwiperSlide>
                      <div className={styles.popular_item}>
                        <img className={styles.popular_service_image} src={service.imageUrl} alt='Image' />
                        <p className={styles.popular_service_title}>{service.title}</p>
                        <p className={styles.description}>{service.description}</p>
                        <button className={styles.popular_service_button}>Записаться</button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <>
                  {services.map((service) => (
                    <article className={styles.popular_item}>
                      <img className={styles.popular_service_image} src={service.imageUrl} alt='Image' />
                      <p className={styles.popular_service_title}>{service.title}</p>
                      <p className={styles.description}>{service.description}</p> <button className={styles.popular_service_button}>Записаться</button>
                    </article>
                  ))}
                </>
              )
            }
          </Media>
        </div>
      </div>
    </section>
  );
}
