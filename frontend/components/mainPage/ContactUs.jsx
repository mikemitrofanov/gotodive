import styles from "./styles/contactUs.module.css";
import ContactForm from "../shared/ContactForm";
import Container from "@/components/shared/Container";

export default function ContactUs({t, handleSubmit}) {

    return (
        <Container background={styles.background} container={styles.container}>
            <h2 className={styles.title}>{t("contact.writeToUs")}</h2>
            <ContactForm t={t} handleSubmit={handleSubmit}/>
        </Container>
    )
}
