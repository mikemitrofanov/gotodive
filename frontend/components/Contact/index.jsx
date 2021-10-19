import ContactForm from "../Contact/ContactForm";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.background_block_title}>
      <h1 data_translate='_write_to_us' className={styles.block_title}>
        ПИШИТЕ НАМ
      </h1>
      <ContactForm />
    </section>
  );
}
