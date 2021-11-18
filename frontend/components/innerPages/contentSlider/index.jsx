import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./contentSlider.module.css";
import SwiperCore, {Navigation} from "swiper";

SwiperCore.use([Navigation]);

export default function ContentSlider({numberOfSlides}) {

    return (
        <div className={styles.container}>
            <Swiper
                slidesPerView={numberOfSlides}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
            >
                <SwiperSlide>
                    <div className={styles.container_img}>
                        <img alt='img' src='/images/innerPages/img1.png'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.container_img}>
                        <img alt='img' src='/images/innerPages/img2.png'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.container_img}>
                        <img alt='img' src='/images/innerPages/img3.png'/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={styles.container_img}>
                        <img alt='img' src='/images/innerPages/img4.png'/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
