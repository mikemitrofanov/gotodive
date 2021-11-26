import styles from "./content.module.css";
import ContentSlider from "./contentSlider";
import Media from "react-media";
import {useGetServicesQuery} from "../../../redux/slices/apiSlice";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import ContentImage from "./contentImage";
import ContentItem from "./contentItem";

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
                            <ContentImage className={styles.img_box} photos={service.photos}/>
                        </div>
                        <div className={styles.content_box}>
                            <h2 className={styles.title_medium}>{title}</h2>
                            <p>{description}</p>
                            <div className={styles.text_wrap}>
                                {duration && <ContentItem title={t("content.duration")} value={duration}/>}
                                {min_age && <ContentItem title={t("content.min_age")} value={min_age}/>}
                                {required_experience &&
                                <ContentItem title={t("content.required_experience")} value={required_experience}/>}
                                {max_depth && <ContentItem title={t("content.max_depth")} value={max_depth}/>}
                                {certification_requirements &&
                                <ContentItem title={t("content.certification_requirements")}
                                             value={certification_requirements}/>}
                                {min_logged_dives &&
                                <ContentItem title={t("content.min_logged_dives")} value={min_logged_dives}/>}
                                {max_end && <ContentItem title={t("content.max_end")} value={max_end}/>}
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
                            medium: "(max-width: 1341px)",
                            large: "(min-width: 1341px) and (max-width: 1699px)"
                        }}
                    >
                        {(matches) => (
                            <>
                                {matches.medium && <ContentSlider photos={service.photos}/>}
                                {matches.large && <ContentImage className={styles.img_box_row} photos={service.photos}/>}
                            </>
                        )}
                    </Media>
                </div>
            </div>
        </>
    )
}
