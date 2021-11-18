import styles from "./content.module.css";
import ContentSlider from "../contentSlider";
import Media from "react-media";
import {useGetServicesQuery} from "../../../store/api/categories";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import ContentImage from "./contentImage";

export default function Content({id}) {
    const router = useRouter();
    const language = router.locale === 'uk' ? 'ukr' : router.locale;
    const {data: service} = useGetServicesQuery({language, id});
    const {
        title,
        description,
        duration,
        min_age,
        required_experience,
        max_depth,
        certification_requirements,
        min_logged_dives,
        max_end,
        course_certificate
    } = service || {};
    const {t} = useTranslation("inner_page");

    return (
        <>
            <div className={styles.background}>
                <div className={styles.container}>
                    <div className={styles.wrapper}>

                        <div className={styles.large}>
                            <h2 className={styles.title}>{title}</h2>
                            <ContentImage className={styles.img_box}/>
                        </div>

                        <div className={styles.content_box}>
                            <h2 className={styles.title_medium}>{title}</h2>
                            <p>{description}</p>
                            <div className={styles.text_wrap}>
                                {duration && (
                                    <p className={styles.text}>
                                    <span className={styles.bold_text}>
                                      {t("content.duration")}
                                    </span>
                                        {duration}
                                    </p>
                                )}
                                {min_age && (
                                    <p className={styles.text}>
                                    <span className={styles.bold_text}>
                                      {t("content.min_age")}
                                    </span>
                                        {min_age}
                                    </p>
                                )}
                                {required_experience && (
                                    <p className={styles.text}>
                                    <span className={styles.bold_text}>
                                        {t("content.required_experience")}
                                    </span>
                                        {required_experience}
                                    </p>
                                )}
                                {max_depth && (
                                    <p className={styles.text}>
                                    <span className={styles.bold_text}>
                                           {t("content.max_depth")}
                                    </span>
                                        {max_depth}
                                    </p>
                                )}
                            </div>
                            {course_certificate && (
                                <p className={styles.style_text}>
                                    {course_certificate}
                                </p>
                            )}
                            <button className={styles.btn}>
                                {t("button")}
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
                                    <ContentImage className={styles.img_box_row}/>
                                )}
                            </>
                        )}
                    </Media>

                </div>
            </div>
        </>
    )
}
