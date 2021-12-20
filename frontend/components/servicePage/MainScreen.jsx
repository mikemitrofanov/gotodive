import styles from "./servicePage.module.css";

export default function MainScreen() {

    return (
        <div className={styles.container_image}>
            <img className={styles.image} alt='img' src='/images/servicePage/background-1.png'/>
            <div className={styles.container_logo}>
                <img className={styles.logo} src='/images/mainScreen/logo.png'/>
            </div>
        </div>
    )
}
