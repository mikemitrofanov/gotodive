import { ErrorMessage, Field } from "formik";
import styles from '../../styles/input.module.css'

export default function Input({ name, info }) {
  return (
    <article className={styles.input_container}>
      <label className={styles.label} htmlFor={name}>{info}</label>
      <Field name={name} className={styles.input} />
      <ErrorMessage
        name={name}
        component="div"
        className={styles.field_error}
      />
    </article>
  )
}