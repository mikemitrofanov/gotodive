import Link from "next/link";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "../styles/error404.module.css";

export default function Error404() {

    return (
        <div className={styles.error}>
            <NavBar/>
            <div className={styles.container}>
                <h1>
                    404 - Page Not Found
                </h1>
                <Link href={'/'}>
                    <a className={styles.btn}>
                        Go home
                    </a>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

