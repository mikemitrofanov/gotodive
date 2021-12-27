import styles from "./styles/mainScreen.module.css";
import Container from "@/components/shared/Container";
import Image from 'next/image';

export default function MainScreen({t}) {

    return (
        <Container background={styles.background} container={styles.container}>
            <div className={styles.wrap_image}>
                <div className={styles.logo}>
                    <Image alt='logo' src='/img/mainScreen/logo.png' width={200} height={160}/>
                </div>
                <img className={styles.image} alt='diving' src='/img/mainScreen/image.png'/>
            </div>
            <div className={styles.wrap_text}>
                <h1 className={styles.title}>
                    {t("mainScreen.titleStart")} <br/>
                    <span className={styles.title_bold}>{t("mainScreen.titleEnd")}</span>
                </h1>
                <p className={styles.subtitle}>{t("mainScreen.description")}</p>
                <p className={styles.text}>{t("mainScreen.subDescription")}</p>
            </div>
        </Container>
    )
}
