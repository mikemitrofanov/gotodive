import styles from "../styles/popular.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import ServiceCard from "../../shared/ServiceCard";

const params = {
    modules: [Navigation],
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        1000: {
            slidesPerView: 2,
        }
    },
    navigation: true,
}

export default function ServiceCardSlider({listServices = []}) {

    return (
        <Swiper className={styles.slider} {...params}>
            {listServices.map(item => (
                <SwiperSlide className={styles.slide} key={item.id}>
                    <ServiceCard
                        src={item.photos.photo_url}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
