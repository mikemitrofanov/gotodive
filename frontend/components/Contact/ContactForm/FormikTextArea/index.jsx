import { useField } from "formik";
import styles from "./formikTextArea.module.css";

export default function FormikTextArea({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <textarea className={styles.message_input} {...field} {...props} />
      {meta.touched && meta.error ? <div className={styles.field_error}>{meta.error}</div> : null}
    </>
  );
}
