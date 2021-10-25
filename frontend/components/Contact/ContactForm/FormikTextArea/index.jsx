import { useTranslation } from "react-i18next";
import { useField } from "formik";
import styles from "./formikTextArea.module.css";

export default function FormikTextArea({ ...props }) {
  const { t } = useTranslation("translation", { useSuspense: false });
  const [field, meta] = useField(props);

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
