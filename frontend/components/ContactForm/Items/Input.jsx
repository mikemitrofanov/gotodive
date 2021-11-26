import styles from "./input.module.css";
import {ErrorMessage, Field} from "formik";

export default function Input({name, label}) {

    return (
        <>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <Field className={styles.input} name={name}/>
            <ErrorMessage className={styles.error} name={name} component='div'/>
        </>
    )
}
