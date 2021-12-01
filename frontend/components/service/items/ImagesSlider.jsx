import styles from "../service.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

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

export default function ImagesSlider({photos}) {

    return (
        <div className={styles.swiper_container}>
            <Swiper
                {...params}
                className={styles.swiper}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
            >
                {photos.map(photo => (
                    <SwiperSlide key={photo.id} className={styles.slide}>
                        <div className={styles.slide_container}>
                            <img alt='img' src={photo.optimized_photo_url} className={styles.slide_img}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
