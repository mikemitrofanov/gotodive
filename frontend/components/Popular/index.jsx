import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import Media from "react-media";
import { categoriesApi } from "../../store/categories/action";
import { data_slider } from "../../js/slider";
import styles from "./popular.module.css";
import ServiceShort from "../ServiceShort";

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
                >
                  {services.map((service) => (
                    <SwiperSlide key={service.order}>
                      <ServiceShort service={service} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <>
                  {services.map((service) => (
                    <ServiceShort key={service.order} service={service} />
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
