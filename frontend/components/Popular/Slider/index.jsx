import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import { useGetPopularServicesQuery } from "../../../store/categories/action";
import { fakeDataPopular } from "../../../fakeDatabase/fakeDataPopular";
import ServiceShort from "../ServiceShort";

export default function Slider({ numberOfSlides }) {
  const router = useRouter();
  const { data } = useGetPopularServicesQuery(router.locale);
  const services = data ? data : fakeDataPopular;

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
