import styles from "../footer.module.css";
import Image from 'next/image';
import Link from "../../Link";

export default function Gallery({photoList = [], title}) {

    return (
        <article className={`${styles.wrapper} ${styles.gallery}`}>
            <h5 className={styles.title}>{title}</h5>
            
            <Link className={styles.link} href='/gallery'>
                {photoList.slice(0, 8).map(photo => (
                    <div className={styles.imgGallery} key={photo.id}>
                        <Image
                            alt={'photo_gallery'}
                            width={500}
                            height={500}
                            src={photo.optimized_photo_url}
                        />
                    </div>
                ))
                }
            </Link>
        </article>
    )
}
