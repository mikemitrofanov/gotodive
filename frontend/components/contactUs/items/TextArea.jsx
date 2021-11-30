import styles from "../contactUs.module.css";
import {useTranslation} from "next-i18next";
import {useField} from "formik";

export default function TextArea({...props}) {
    const [field, meta] = useField(props);
    const {t} = useTranslation("common");

    return (
        <div className={styles.inner_wrapper}>
            <div className={styles.wrap_textarea}>
                <label className={styles.label} htmlFor={props.id || props.name}>
                    {t("contact.message")}
                </label>
                <textarea className={styles.textarea} {...field} {...props} />
                {(meta.touched && meta.error) && <div className={styles.error}>{meta.error}</div>}
            </div>
        </div>
    )
}
