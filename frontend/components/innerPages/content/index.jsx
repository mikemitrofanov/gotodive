import styles from "./content.module.css";
import ContentSlider from "../contentSlider";
import Media from "react-media";

export default function Content() {

    return (
        <>
            <div className={styles.container__main_img}>
                <img className={styles.main_img} alt='img' src='/images/diving/header.png'/>
            </div>
            <div className={styles.background}>
                <div className={styles.container}>
                    <img className={styles.logo} src='images/sub_header/logo.png'/>
                    <div className={styles.body}>

                        <div>
                            <Media queries={{large: "(min-width: 1700px)"}}>
                                {(matches) => (
                                    <>
                                        {matches.large && (
                                            <>
                                                <h2 className={styles.title}>Open Water Diver </h2>
                                                <div className={styles.img_box}>
                                                    <img alt='img' src='images/diving/img1.png'/>
                                                    <img alt='img' src='images/diving/img2.png'/>
                                                    <img alt='img' src='images/diving/img3.png'/>
                                                    <img alt='img' src='images/diving/img4.png'/>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </Media>
                        </div>
                        <div className={styles.content_box}>
                            <h2 className={styles.title}>Open Water Diver </h2>
                            <p>
                                Курс Open Water Diver – это первая базовая ступень во время обучения
                                дайвингу. Во время курса
                                Open Water Diver закладываются фундаментальные навыки и знания, благодаря которым ваши
                                подводные
                                приключения будут проходить безопасно и весело. За 3 дня обучения вы совершите 6
                                погружений,
                                отработаете все базовые навыки дайвера и сможете насладится подводными красотами
                                Адриатического
                                моря Хорватии. <br/>
                                Если вас интересует более подробная информация свяжитесь с нами или же записывайтесь на
                                курс
                                Опен Вотер Дайвер (Open Water Diver) в Сплите, Хорватия прямо сейчас!
                            </p>
                            <div className={styles.text_wrap}>
                                <p className={styles.text}>
                                    <span className={styles.bold_text}>Продолжительность программы: </span>
                                    3 дня (6 погружений)
                                </p>
                                <p className={styles.text}>
                                    <span className={styles.bold_text}>Минимальный возраст: </span>
                                    10 лет
                                </p>
                                <p className={styles.text}>
                                    <span className={styles.bold_text}>Предварительный сертифицированный опыт: </span>
                                    не требуется
                                </p>
                                <p className={styles.text}>
                                    <span className={styles.bold_text}>Максимальная глубина погружений: </span>
                                    18 метров
                                </p>
                            </div>
                            <p className={styles.style_text}>
                                После успешного прохождения курса вы получаете международный
                                дайверский сертификат с правом
                                погружений на глубину 18 метров под контролем инструктора
                            </p>
                            <button className={styles.btn}>
                                Записаться
                            </button>
                        </div>
                    </div>
                    <Media
                        queries={{
                            small: "(max-width: 1099px)",
                            medium: "(min-width: 1100px) and (max-width: 1340px)",
                            large: "(min-width: 1341px) and (max-width: 1699px)"
                        }}
                    >
                        {(matches) => (
                            <>
                                {matches.small && <ContentSlider numberOfSlides={1}/>}
                                {matches.medium && <ContentSlider numberOfSlides={3}/>}
                                {matches.large && (
                                    <div className={styles.img_box_row}>
                                        <img alt='img' src='images/diving/img1.png'/>
                                        <img alt='img' src='images/diving/img2.png'/>
                                        <img alt='img' src='images/diving/img3.png'/>
                                        <img alt='img' src='images/diving/img4.png'/>
                                    </div>
                                )}
                            </>
                        )}
                    </Media>
                </div>
            </div>
        </>
    )
}