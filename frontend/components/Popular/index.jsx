import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import Media from "react-media";
import { useGetPopularServicesQuery } from "../../store/categories/action";
import { defaultLanguage } from "../../store/slice/defaultLanguageSlice";
import { data_slider } from "../../js/slider";
import ServiceShort from "./ServiceShort";
import styles from "./popular.module.css";

SwiperCore.use([Navigation]);

export default function Popular() {
  const { t } = useTranslation("translation", { useSuspense: false });
  const language = useSelector(defaultLanguage);
  const { data } = useGetPopularServicesQuery(language);
  const services = Array.isArray(data) ? data : fake_data;
  const fake_data = data_slider.data;

  return (
    <section className={styles.popular_container}>
      <div className={styles.popular_content_container}>
        <div className={styles.popular_header}>{t("popular.popular")}</div>
        <div className={styles.popular_items_container}>
          <Media queries={{ small: "(max-width: 799px)", medium: "(min-width: 800px) and (max-width: 1324px)", large: "(min-width: 1325px)" }}>
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
