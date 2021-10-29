import { useTranslation } from "next-i18next";
import ContactForm from "../Contact/ContactForm";
import styles from "./contact.module.css";

export default function Contact() {
  const { t } = useTranslation("common");

  return (
    <section className={styles.background_block_title}>
      <h1 className={styles.block_title}>{t("contact.writeToUs")}</h1>
      <ContactForm />
    </section>
  );
}
