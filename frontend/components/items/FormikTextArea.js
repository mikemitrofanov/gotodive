import {ErrorMessage, useField} from "formik";
import styles from "../../styles/contactForm.module.css";

export const FormikTextArea = ({label, ...props}) => {
    const [field] = useField(props);
    return (
        <>
            <label className={styles.label} htmlFor={props.id || props.name}>{label}</label>
            <textarea className={styles.message_input} {...field} {...props} />
            <ErrorMessage
                name={label}
                component="div"
                className={styles.field_error}
            />
        </>
    );
};