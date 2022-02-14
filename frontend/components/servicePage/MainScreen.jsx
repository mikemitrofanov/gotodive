import styles from "./servicePage.module.css";
import Image from 'next/image';

export default function MainScreen({service}) {
    return (
        <div className={styles.container_image}>
            {
                (service.background_photo !== undefined && service.background_photo !== '') ?
                    <Image
                        className={styles.image}
                        layout="fill"
                        alt='img'
                        src={service.background_photo} /> :
                    <img src='/img/servicePage/background-1.png' className={styles.image}/>
            }
            <div className={styles.container_logo}>
                <img className={styles.logo} src='/img/mainScreen/logo.png'/>
            </div>
        </div>
    )
}

