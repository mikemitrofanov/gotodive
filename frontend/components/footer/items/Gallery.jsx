import styles from "../footer.module.css";

export default function Gallery({photoList, t}) {

    return (
        <article className={`${styles.wrapper} ${styles.gallery}`}>
            <h5 className={styles.title}>{t("footer.gallery")}</h5>
            <a className={styles.link} href='/gallery'>
                {photoList.slice(0, 8).map(photo => (
                    <img
                        className={styles.img}
                        alt='photo_gallery'
                        src={photo.optimized_photo_url}
                        key={photo.id}
                    />
                ))}
            </a>
        </article>
    )
}
