import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./contentSlider.module.css";
import {Navigation} from "swiper";

export default function ContentSlider({photos}) {
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
        <div className={styles.container}>
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
                        <div className={styles.container_img}>
                            <img
                                alt='img'
                                src={`${process.env.NEXT_PUBLIC_URL}/${photo.optimized_photo_url}`}
                                className={styles.img}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
