import { ErrorMessage, Field } from "formik";
import styles from "./input.module.css";

export default function Input({ name, label }) {
  return (
    <article className={styles.input_container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <Field name={name} className={styles.input} />
      <ErrorMessage name={name} component='div' className={styles.field_error} />
    </article>
  );
}
