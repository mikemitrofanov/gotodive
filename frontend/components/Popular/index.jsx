import SwiperCore, { Navigation } from "swiper";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Media from "react-media";
import { useGetPopularServicesQuery } from "../../store/api/categories";
import image1 from "../../public/images/popular/image1.png";
import image2 from "../../public/images/popular/image2.png";
import image3 from "../../public/images/popular/image3.png";
import ServiceShort from "./ServiceShort";
import styles from "./popular.module.css";
import Slider from "./Slider";

SwiperCore.use([Navigation]);

export default function Popular() {
  const router = useRouter();
  const { data } = useGetPopularServicesQuery(router.locale);
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
                    {data ? (
                      data.map((service, index) => <ServiceShort key={index} src={service.imageUrl} title={service.title} description={service.description} />)
                    ) : (
                      <>
                        <ServiceShort src={image1.src} title={t("popular.recreationalCourses")} description={t("popular.description")} />
                        <ServiceShort src={image2.src} title={t("popular.technicalCourses")} description={t("popular.description")} />
                        <ServiceShort src={image3.src} title={t("popular.cave")} description={t("popular.description")} />
                      </>
                    )}
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
