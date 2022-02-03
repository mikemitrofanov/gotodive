import styles from "../footer.module.css";
import Image from 'next/image';

export default function Gallery({photoList = [], title}) {

    return (
        <article className={`${styles.wrapper} ${styles.gallery}`}>
            <h5 className={styles.title}>{title}</h5>
            <div className={styles.link}>
                {photoList.slice(0, 8).map(photo => (
                    <a href={`/gallery#${photo.id}`} key={photo.id}>
                        <div className={styles.imgGallery}>
                            <Image
                                alt={'photo_gallery'}
                                width={500}
                                height={500}
                                src={photo.optimized_photo_url}
                            />
                        </div>
                    </a>
                ))
                }
            </div>
        </article>
    )
}
