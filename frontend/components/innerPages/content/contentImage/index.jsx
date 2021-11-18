import styles from "../content.module.css";

export default function ContentImage({className, photos}) {

    return (
        <>
            <div className={className}>
                <img
                    alt='img' className={styles.img}
                    src={`${process.env.NEXT_PUBLIC_URL}/${photos[0].optimized_photo_url}`}
                />
                <img
                    alt='img' className={styles.img}
                    src={`${process.env.NEXT_PUBLIC_URL}/${photos[1]?.optimized_photo_url || photos[0].optimized_photo_url}`}
                />
                <img
                    alt='img' className={styles.img}
                    src={`${process.env.NEXT_PUBLIC_URL}/${photos[2]?.optimized_photo_url || photos[0].optimized_photo_url}`}
                />
                <img
                    alt='img' className={styles.img}
                    src={`${process.env.NEXT_PUBLIC_URL}/${photos[3]?.optimized_photo_url || photos[0].optimized_photo_url}`}
                />
            </div>
        </>
    )
}
