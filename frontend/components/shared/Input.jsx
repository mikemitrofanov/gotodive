import styles from "./styles/input.module.css";
import {ErrorMessage, Field} from "formik";

export default function Input({name, label}) {

    return (
        <div className={styles.wrap_input}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <Field className={styles.input} name={name} autoComplete="off"/>
            <ErrorMessage className={styles.error} name={name} component='div'/>
        </div>
    )
}
