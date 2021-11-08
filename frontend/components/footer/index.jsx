import styles from "./footer.module.css";
import Media from "react-media";

export default function Footer() {

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.columns}>
                    <h3 className={styles.title}>
                        Contact Us
                    </h3>
                    <a className={styles.link}>
                        <img className={styles.icon} alt='address'
                             src='images/footer/icons/mapIcon.png'/>
                        999, Моя Улица, Хорватия
                    </a>
                    <a className={styles.link}>
                        <img className={styles.icon} alt='tel'
                             src='images/footer/icons/telIcon.png'/>
                        270-177-6026, 275-198-7978
                    </a>
                    <a className={styles.link}>
                        <img className={styles.icon} alt='facebook'
                             src='images/footer/icons/facebookIcon.png'/>
                        @GotoDive
                    </a>
                    <a className={styles.link}>
                        <img className={styles.icon} alt='email'
                             src='images/footer/icons/mailIcon.png'/>
                        GotoDive@gmail.com
                    </a>
                </div>
                <div className={styles.columns}>
                    <h3 className={styles.title}>
                        Categories
                    </h3>
                    <a>Дайвинг</a>
                    <a>Обучение дайвингу</a>
                    <a> Стань ДАЙВ ПРО</a>
                    <a> Экскурсии</a>
                    <a>Прайс</a>
                </div>
                <div className={styles.columns}>
                    <h3 className={styles.title}>
                        Social
                    </h3>
                    <a className={styles.link}>
                        <img className={styles.icon} alt='contact'
                             src='images/footer/icons/instaIcon.png'/>
                        @GotoDive
                    </a>
                    <a className={styles.link}>
                        <img className={styles.icon} alt='contact'
                             src='images/footer/icons/telegramIcon.png'/>
                        @GotoDive
                    </a>
                    <a className={styles.link}>
                        <img className={styles.icon} alt='contact'
                             src='images/footer/icons/watsupIcon.png'/>
                        @GotoDive
                    </a>
                    <a className={styles.link}>
                        <img className={styles.icon} alt='contact'
                             src='images/footer/icons/viberIcon.png'/>
                        @GotoDive
                    </a>
                </div>
                <div className={styles.columns}>
                    <h3 className={styles.title}>
                        Gallery
                    </h3>
                    <Media queries={{
                        medium: "(min-width: 1450px) and (max-width: 1699px)",
                        large: "(min-width: 1700px)"
                    }}>
                        {matches => (
                            <>
                                {matches.medium && (
                                    <a>
                                        <div className={styles.gallery_img}>
                                            <img alt='img'
                                                 src='images/footer/photo/img1.png'/>
                                            <img alt='img'
                                                 src='images/footer/photo/img2.png'/>
                                        </div>
                                        <div className={styles.gallery_img}>
                                            <img alt='img'
                                                 src='images/footer/photo/img5.png'/>
                                            <img alt='img'
                                                 src='images/footer/photo/img6.png'/>
                                        </div>
                                    </a>
                                )}
                                {matches.large && (
                                    <a>
                                        <div className={styles.gallery_img}>
                                            <img alt='img'
                                                 src='images/footer/photo/img1.png'/>
                                            <img alt='img'
                                                 src='images/footer/photo/img2.png'/>
                                            <img alt='img'
                                                 src='images/footer/photo/img3.png'/>
                                            <img alt='img'
                                                 src='images/footer/photo/img4.png'/>
                                        </div>
                                        <div className={styles.gallery_img}>
                                            <img alt='img'
                                                 src='images/footer/photo/img5.png'/>
                                            <img alt='img'
                                                 src='images/footer/photo/img6.png'/>
                                            <img alt='img'
                                                 src='images/footer/photo/img7.png'/>
                                            <img alt='img'
                                                 src='images/footer/photo/img8.png'/>
                                        </div>
                                    </a>
                                )}
                            </>
                        )}
                    </Media>
                </div>
            </div>
        </div>
    )
}
