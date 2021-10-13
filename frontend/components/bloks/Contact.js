import ContactForm from "../forms/ContactForm";
import styles from "../../styles/contact.module.css"

export default function Contact() {

    return (
        <section className={styles.background_block_title}>
            <h1 className={styles.block_title}>ПИШИТЕ НАМ</h1>
            <ContactForm />
        </section>
    )
}