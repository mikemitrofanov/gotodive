import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTextArea from "../ContactForm/FormikTextArea";
import Input from "../ContactForm/Input";
import styles from "./contactForm.module.css";

export default function ContactForm({ onSubmit }) {
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
          <Input data_translate='_name' name='name' label='Имя' />
          <Input name='email' label='Email' />
          <Input data_translate='_phone' name='phone' label='Телефон' />
        </section>
        <section className={styles.sub_container}>
          <article className={styles.input_container}>
            <FormikTextArea name='message' />
          </article>
          <button data_translate='_send' className={styles.submit_btn} type='submit'>
            Отправить
          </button>
        </section>
      </Form>
    </Formik>
  );
}
