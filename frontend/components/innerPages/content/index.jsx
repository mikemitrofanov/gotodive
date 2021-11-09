import styles from "./content.module.css";
import ContentSlider from "../contentSlider";
import Media from "react-media";
import {useGetServiceQuery} from "../../../store/categories/action";
import {useSelector} from "react-redux";
import {defaultLanguage} from "../../../store/slice/defaultLanguageSlice";

export default function Content({id}) {
    const language = useSelector(defaultLanguage);
    const { data: service } = useGetServiceQuery({language, id});

    return (
        <>
            <div className={styles.container__main_img}>
                <img className={styles.main_img} alt='img' src='/images/diving/header.png'/>
            </div>
            <div className={styles.background}>
                <div className={styles.container}>
                    <img className={styles.logo} src='/images/sub_header/logo.png'/>
                    <div className={styles.body}>

                        <div>
                            <Media queries={{large: "(min-width: 1700px)"}}>
                                {(matches) => (
                                    <>
                                        {matches.large && (
                                            <>
                                                <h2 className={styles.title}>Open Water Diver </h2>
                                                <div className={styles.img_box}>
                                                    <img alt='img' src='/images/diving/img1.png'/>
                                                    <img alt='img' src='/images/diving/img2.png'/>
                                                    <img alt='img' src='/images/diving/img3.png'/>
                                                    <img alt='img' src='/images/diving/img4.png'/>
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}
                            </Media>
                        </div>
                        <div className={styles.content_box}>
                            <h2 className={styles.title}>
                                {service.title}
                            </h2>
                            <p>
                                {service.description}
                            </p>
                            <div className={styles.text_wrap}>
                                <p className={styles.text}>
                                    <span className={styles.bold_text}>Продолжительность программы: </span>
                                    {service.duration}
                                </p>
                                <p className={styles.text}>
                                    <span className={styles.bold_text}>Минимальный возраст: </span>
                                    {service.min_age}
                                </p>
                                <p className={styles.text}>
                                    <span className={styles.bold_text}>Предварительный сертифицированный опыт: </span>
                                    {service.required_experience}
                                </p>
                                <p className={styles.text}>
                                    <span className={styles.bold_text}>Максимальная глубина погружений: </span>
                                    {service.max_depth}
                                </p>
                            </div>
                            <p className={styles.style_text}>
                                {service.course_certificate}
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
                                        <img alt='img' src='/images/diving/img1.png'/>
                                        <img alt='img' src='/images/diving/img2.png'/>
                                        <img alt='img' src='/images/diving/img3.png'/>
                                        <img alt='img' src='/images/diving/img4.png'/>
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
