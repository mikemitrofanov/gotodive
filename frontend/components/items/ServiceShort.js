import styles from  '../../styles/popular.module.css'
export default function ServiceShort({service}) {

    return (
        <div className={styles.popular_item}>
            <img className={styles.popular_service_image} src={service.imageUrl} alt='Image'/>
            <p className={styles.popular_service_title}>{service.title}</p>
            <p>{service.description}</p>
            <button className={styles.popular_service_button}>Записаться</button>
        </div>
    )
}