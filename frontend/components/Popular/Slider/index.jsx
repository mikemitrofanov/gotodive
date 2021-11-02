import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { useGetPopularServicesQuery } from "../../../store/categories/action";
import { defaultLanguage } from "../../../store/slices/defaultLanguage";
import { fakeDataPopular } from "../../../fakeDatabase/fakeDataPopular";
import ServiceShort from "../ServiceShort";

export default function Slider({ numberOfSlides }) {
  const language = useSelector(defaultLanguage);
  const { data } = useGetPopularServicesQuery(language);
  const services = Array.isArray(data) ? data : fakeDataPopular.data;

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
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <ServiceShort service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
