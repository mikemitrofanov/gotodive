import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTextArea from "../ContactForm/FormikTextArea";
import Input from "../ContactForm/Input";
import styles from "./contactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email. Must start with a lowercase letter, contain @ and "."').required("Email is required"),
    phone: Yup.string()
      .matches(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/, "Please enter a valid phone number. Must contain at least 7 digits")
      .required("Phone is required"),
    name: Yup.string()
      .matches(/^[A-Z][a-z]{1,64}$/, "Please enter a valid name. The first letter must be capitalized")
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
          <Input name='name' label='Имя' />
          <Input name='email' label='Email' />
          <Input name='phone' label='Телефон' />
        </section>
        <section className={styles.sub_container}>
          <article className={styles.input_container}>
            <FormikTextArea label='Сообщение' name='message' />
          </article>
          <button className={styles.submit_btn} type='submit'>
            Отправить
          </button>
        </section>
      </Form>
    </Formik>
  );
}