import styles from "../servicePage.module.css";
import ContentItem from "./ContentItem";
import {useTranslation} from "next-i18next";
import ModalForm from "@/components/servicePage/components/ModalForm";

export default function TextContent({service, setActive, active, onSubmit}) {
    const {t} = useTranslation("service");

    const handleSubmit = (content) => {
        onSubmit(content, service.id)
        setActive(false)
    }

    return (
        <div className={styles.text_box}>
            <div className={styles.inner_wrap}>
                <p className={styles.description}>{service.description}</p>
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
            <button className={styles.button} onClick={() => setActive(true)}>{t("button")}</button>
            {active && <ModalForm onClose={() => setActive(false)} onActive={setActive} handleSubmit={handleSubmit}/>}
        </div>
    )
}
