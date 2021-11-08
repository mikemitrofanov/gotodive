import {Swiper, SwiperSlide} from "swiper/react";
import styles from "./contentSlider.module.css";

export default function ContentSlider({ numberOfSlides }) {

    return (
        <div className={styles.container}>
              <Swiper
                        slidesPerView={numberOfSlides}
                        spaceBetween={50}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <img alt='img' src='images/diving/img1.png'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='img' src='images/diving/img2.png'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='img' src='images/diving/img3.png'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='img' src='images/diving/img4.png'/>
                        </SwiperSlide>
                    </Swiper>
        </div>



    )
}
