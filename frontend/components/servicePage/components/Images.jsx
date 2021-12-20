import styles from "../servicePage.module.css";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const params = {
    modules: [Navigation],
    loop: true,
    pagination: {clickable: true},
    navigation: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        955: {
            slidesPerView: 2,
        }
    }
}

export default function Images({photos = []}) {

    return (
        <div className={`${styles.images}
                ${photos.length === 2 && styles.images2}
                ${photos.length === 3 && styles.images3}
                ${photos.length === 4 && styles.images4}`}
        >
            {photos.map(photo => (
                <img key={photo.id} alt='img' className={styles.img} src={photo.optimized_photo_url}/>
            ))}

            <Swiper {...params} className={styles.swiper}>
                {photos.map(photo => (
                    <SwiperSlide key={photo.id} className={styles.slide}>
                        <img alt='img' className={styles.img} src={photo.optimized_photo_url}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}