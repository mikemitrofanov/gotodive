import styles from "../service.module.css";

export default function MainScreen() {

    return (
        <div className={styles.container_image}>
            <img className={styles.image} alt='img' src='/images/service/background-1.png'/>
            <div className={styles.container_logo}>
                <img className={styles.logo} src='/images/mainScreen/logo.png'/>
            </div>
        </div>
    )
}
