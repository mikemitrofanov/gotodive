import styles from "./styles/contactUs.module.css";
import container_styles from "@/components/shared/styles/container.module.css";
import ContactForm from "../shared/ContactForm";
import Container from "@/components/shared/Container";

export default function ContactUs({t, handleSubmit}) {

    return (
        <Container background={styles.background} container={container_styles.container}>
            <h2 className={styles.title}>{t("contact.writeToUs")}</h2>
            <ContactForm t={t} handleSubmit={handleSubmit}/>
        </Container>
    )
}
