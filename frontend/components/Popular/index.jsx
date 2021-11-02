import SwiperCore, { Navigation } from "swiper";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import Media from "react-media";
import { useGetPopularServicesQuery } from "../../store/categories/action";
import { fakeDataPopular } from "../../fakeDatabase/fakeDataPopular";
import { defaultLanguage } from "../../store/slices/defaultLanguage";
import ServiceShort from "./ServiceShort";
import styles from "./popular.module.css";
import Slider from "./Slider";

SwiperCore.use([Navigation]);

export default function Popular() {
  const language = useSelector(defaultLanguage);
  const { data } = useGetPopularServicesQuery(language);
  const services = Array.isArray(data) ? data : fakeDataPopular.data;
  const { t } = useTranslation("common");

  return (
    <section className={styles.popular_container}>
      <div className={styles.popular_content_container}>
        <div className={styles.popular_header}>{t("popular.popular")}</div>
        <div className={styles.popular_items_container}>
          <Media queries={{ small: "(max-width: 799px)", medium: "(min-width: 800px) and (max-width: 1324px)", large: "(min-width: 1325px)" }}>
            {(matches) => (
              <>
                {matches.small && <Slider numberOfSlides={1} />}
                {matches.medium && <Slider numberOfSlides={2} />}
                {matches.large && (
                  <>
                    {services.map((service, index) => (
                      <ServiceShort key={index} service={service} />
                    ))}
                  </>
                )}
              </>
            )}
          </Media>
        </div>
      </div>
    </section>
  );
}
