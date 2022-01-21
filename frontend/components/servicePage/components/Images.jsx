import styles from "../servicePage.module.css";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from 'next/image';
import { useEffect, useState } from "react";

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
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setLoader(false)
    })

    return (
        <div className={`${styles.images}
                ${photos.length === 2 && styles.images2}
                ${photos.length === 3 && styles.images3}
                ${photos.length === 4 && styles.images4}`}
        >
            {photos.map(photo => (
                <div className={styles.imgContent} key={photo.id}>
                    <Image alt='img' src={photo.optimized_photo_url} width={500} height={500}/>
                </div>
            ))}
            {!loader &&
                <Swiper {...params} className={styles.swiper}>
                    {photos.map(photo => (
                        <SwiperSlide key={photo.id} className={styles.slide}>
                            <div className={styles.imgContent} key={photo.id}>
                                <Image alt='img' src={photo.optimized_photo_url} width={500} height={500}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            }
        </div>
    )
}
