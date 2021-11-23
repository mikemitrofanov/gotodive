import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useGetPopularServicesQuery } from "../../../redux/slices/apiSlice";
import image1 from "../../../public/images/popular/image1.png";
import image2 from "../../../public/images/popular/image2.png";
import image3 from "../../../public/images/popular/image3.png";
import ServiceShort from "../ServiceShort";

export default function Slider({ numberOfSlides }) {
  const router = useRouter();
  const { data } = useGetPopularServicesQuery(router.locale);
  const { t } = useTranslation("common");

  return (
    <Swiper
      slidesPerView={numberOfSlides}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      {data ? (
        data.map((service, index) => (
          <SwiperSlide key={index}>
            <ServiceShort src={service.imageUrl} title={service.title} description={service.description} />
          </SwiperSlide>
        ))
      ) : (
        <>
          <SwiperSlide>
            <ServiceShort src={image1.src} title={t("popular.recreationalCourses")} description={t("popular.description")} />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceShort src={image2.src} title={t("popular.technicalCourses")} description={t("popular.description")} />
          </SwiperSlide>
          <SwiperSlide>
            <ServiceShort src={image3.src} title={t("popular.cave")} description={t("popular.description")} />
          </SwiperSlide>
        </>
      )}
    </Swiper>
  );
}
