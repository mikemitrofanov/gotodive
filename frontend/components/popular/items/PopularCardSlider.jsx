import styles from "../popular.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import PopularCard from "./PopularCard";
import {useRouter} from "next/router";
import {useGetPopularServicesQuery} from "../../../redux/slices/apiSlice";

const params = {
    modules: [Navigation],
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        722: {
            slidesPerView: 2,
        }
    }
}

export default function PopularCardSlider() {
    const router = useRouter();
    const {data: popular} = useGetPopularServicesQuery(router.locale);

    return (
        <Swiper className={styles.slider} {...params} loop={true} navigation={true}>
            {popular && (
                popular.map(item => (
                    <SwiperSlide className={styles.slide} key={item.id}>
                        <PopularCard
                            src={`${process.env.NEXT_PUBLIC_URL}/${item.photos[0].photo_url}`}
                            title={item.title}
                            description={item.description}
                        />
                    </SwiperSlide>
                )))
            }
        </Swiper>
    )
}
