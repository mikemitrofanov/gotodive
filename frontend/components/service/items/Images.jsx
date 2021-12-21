import styles from "../service.module.css";
import Image from 'next/image'

export default function Images({photos = []}) {

    return (
        <div className={styles.images_wrap}>
            {photos.map(photo => (
                <div className={styles.img} key={photo.id}>
                    <Image alt='img' src={photo.optimized_photo_url} width={500} height={500}/>
                </div>
            ))}
        </div>
    )
}
