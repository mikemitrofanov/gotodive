import styles from "../service.module.css";

export default function Images({photos = []}) {

    return (
        <div className={styles.images_wrap}>
            {photos.map(photo => (
                <img
                    key={photo.id}
                    alt='img' className={styles.img}
                    src={photo.optimized_photo_url}
                />
            ))}
        </div>
    )
}
