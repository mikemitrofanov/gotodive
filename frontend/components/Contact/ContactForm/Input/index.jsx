import { ErrorMessage, Field } from "formik";
import styles from "./input.module.css";

export default function Input({ name, label, data_translate }) {
  return (
    <article className={styles.input_container}>
      <label data_translate={data_translate} className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field name={name} className={styles.input} />
      <ErrorMessage name={name} component='div' className={styles.field_error} />
    </article>
  );
}
