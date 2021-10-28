import { useTranslation } from "next-i18next";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTextArea from "../ContactForm/FormikTextArea";
import styles from "./contactForm.module.css";
import Input from "../ContactForm/Input";

export default function ContactForm({ onSubmit }) {
  const { t } = useTranslation("common");

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must contain @ and "."').required("Email is required"),
    phone: Yup.string()
      .matches(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/, "Must contain at least 7 digits")
      .required("Phone is required"),
    name: Yup.string()
      .matches(/^[A-Z][a-z]{1,64}$/, "The first letter must be capitalized")
      .required("Name is required"),
    message: Yup.string().required("Message required"),
  });

  return (
    <Formik
      validateOnChange={false}
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form_container}>
        <section className={styles.sub_container}>
          <Input name='name' label={t("contact.name")} />
          <Input name='email' label='Email' />
          <Input name='phone' label={t("contact.phone")} />
        </section>
        <section className={styles.sub_container}>
          <article className={styles.input_container}>
            <FormikTextArea name='message' />
          </article>
          <button className={styles.submit_btn} type='submit'>
            {t("contact.send")}
          </button>
        </section>
      </Form>
    </Formik>
  );
}
