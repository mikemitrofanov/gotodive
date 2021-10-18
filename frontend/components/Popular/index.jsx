import { Fragment } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import Media from "react-media";
import { categoriesApi } from "../../store/categories/action";
import { data_slider } from "../../js/slider";
import ServiceShort from "./ServiceShort";
import styles from "./popular.module.css";

SwiperCore.use([Navigation]);

export default function Popular() {
  const { data } = useSelector(categoriesApi.endpoints.getPopularServices.select());
  const fake_data = data_slider.data;
  const services = Array.isArray(data) ? data : fake_data;

  return (
    <section className={styles.popular_container}>
      <div className={styles.popular_content_container}>
        <div data_translate='_popular' className={styles.popular_header}>
          ПОПУЛЯРНОЕ
        </div>
        <div className={styles.popular_items_container}>
          <Media
            queries={{
              small: "(max-width: 799px)",
              medium: "(min-width: 800px) and (max-width: 1324px)",
              large: "(min-width: 1325px)",
            }}
          >
            {(matches) => (
              <Fragment>
                {matches.small && (
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                  >
                    {services.map((service, index) => (
                      <SwiperSlide key={index}>
                        <ServiceShort service={service} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                {matches.medium && (
                  <Swiper
                    slidesPerView={2}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                  >
                    {services.map((service, index) => (
                      <SwiperSlide key={index}>
                        <ServiceShort service={service} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                {matches.large && (
                  <>
                    {services.map((service, index) => (
                      <ServiceShort key={index} service={service} />
                    ))}
                  </>
                )}
              </Fragment>
            )}
          </Media>
        </div>
      </div>
    </section>
  );
}
