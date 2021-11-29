import styles from "./contactUs.module.css";
import {useTranslation} from "next-i18next";
import Form from "./Items/ContactForm";

export default function ContactUs() {
    const {t} = useTranslation("common");

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <h2 className={styles.title}>{t("contact.writeToUs")}</h2>
                <Form/>
            </div>
        </section>
    )
}
