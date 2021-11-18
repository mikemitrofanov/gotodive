import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./contentSlider.module.css";
import {Navigation} from "swiper";

export default function ContentSlider() {
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
                <SwiperSlide className={styles.slide}>
                    <div className={styles.container_img}>
                        <img alt='img' src='/images/innerPages/img1.png'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.container_img}>
                        <img alt='img' src='/images/innerPages/img2.png'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.container_img}>
                        <img alt='img' src='/images/innerPages/img3.png'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>
                    <div className={styles.container_img}>
                        <img alt='img' src='/images/innerPages/img4.png'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
