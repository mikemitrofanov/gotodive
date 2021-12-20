import styles from "../service.module.css";
import ContentItem from "./ContentItem";
import {useTranslation} from "next-i18next";

export default function TextContent({service}) {
    const {t} = useTranslation("service");

    return (
        <div className={styles.content_box}>
            <div>
                <h2 className={styles.title}>{service.title}</h2>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.wrap}>
                    <ContentItem title={t("content.duration")} value={service.duration}/>
                    <ContentItem title={t("content.min_age")} value={service.min_age}/>
                    <ContentItem title={t("content.required_experience")} value={service.required_experience}/>
                    <ContentItem title={t("content.max_depth")} value={service.max_depth}/>
                    <ContentItem title={t("content.certification_requirements")}
                                 value={service.certification_requirements}/>
                    <ContentItem title={t("content.min_logged_dives")} value={service.min_logged_dives}/>
                    <ContentItem title={t("content.max_end")} value={service.max_end}/>
                    {service.course_certificate && <p className={styles.style_text}>{service.course_certificate}</p>}
                </div>
            </div>
            <button className={styles.button}>{t("button")}</button>
        </div>
    )
}
