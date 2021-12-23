import styles from "../footer.module.css";
import {useTranslation} from 'next-i18next'
import Image from 'next/image';

export default function Gallery({photoList = []}) {
    const {t} = useTranslation("common");
    return (
        <article className={`${styles.wrapper} ${styles.gallery}`}>
            <h5 className={styles.title}>{t("footer.gallery")}</h5>
            <a className={styles.link} href='/gallery'>
                {
                    photoList.slice(0, 8).map((photo) => (
                        <div className={styles.img} key={photo.id}>
                            <Image
                                alt={'photo_gallery'}
                                width={500}
                                height={500}
                                src={photo.optimized_photo_url}
                            />
                        </div>
                    ))
                }
            </a>
        </article>
    )
}
