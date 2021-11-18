import styles from "./header.module.css";

export default function Header() {

    return (
        <div className={styles.container_img}>
            <img className={styles.img} alt='img' src='/images/innerPages/header.png'/>
            <div className={styles.container_logo}>
                <img className={styles.logo} src='/images/subHeader/logo.png'/>
            </div>
        </div>
    )
}
