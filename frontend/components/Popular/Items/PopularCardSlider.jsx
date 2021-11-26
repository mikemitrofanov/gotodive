import styles from "../popular.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRouter} from "next/router";
import PopularCard from "./PopularCard";
import {Navigation} from "swiper";

export default function PopularCardSlider(props) {
    const router = useRouter();

    const params = {
        modules: [Navigation],
        breakpoints: {
            0: {
                slidesPerView: 1,
            },

            722: {
                slidesPerView: 2,
            },

            1100: {
                slidesPerView: 3,
            }
        }
    }

    return (
        <Swiper className={styles.slider} {...params} loop={true} navigation={true}>
            <SwiperSlide className={styles.slide}>
                <PopularCard {...props}/>
            </SwiperSlide>
        </Swiper>
    )
}
