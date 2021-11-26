import styles from "./contact.module.css";
import {useTranslation} from "next-i18next";
import ContactForm from "./Items";

export default function Contact() {
    const {t} = useTranslation("common");

    return (
        <section className={styles.background}>
            <div className={styles.container}>
                <h1 className={styles.title}>{t("contact.writeToUs")}</h1>
                <ContactForm/>
            </div>
        </section>
    )
}
