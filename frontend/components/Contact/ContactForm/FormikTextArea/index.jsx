import { useTranslation } from "next-i18next";
import { useField } from "formik";
import styles from "./formikTextArea.module.css";

export default function FormikTextArea({ ...props }) {
  const [field, meta] = useField(props);
  const { t } = useTranslation("common");

  return (
    <>
      <label className={styles.label} htmlFor={props.id || props.name}>
        {t("contact.message")}
      </label>
      <textarea className={styles.message_input} {...field} {...props} />
      {meta.touched && meta.error ? <div className={styles.field_error}>{meta.error}</div> : null}
    </>
  );
}
