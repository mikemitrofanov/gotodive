import styles from "../contactUs.module.css";
import {Form, Formik} from "formik";
import Input from "./Input";
import TextArea from "./TextArea";
import {initialValues, validationSchema} from "../data";
import { useTranslation } from 'next-i18next'

export default function ContactForm() {
    const {t} = useTranslation("common");

    const handleSubmit = async (values) => {
        console.log('ContactForm values', values)
    }

    return (
        <Formik
            validateOnChange={false}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <div className={styles.wrapper}>
                    <div className={styles.inner_wrapper}>
                        <Input name='name' label={t("contact.name")}/>
                        <Input name='email' label='Email'/>
                        <Input name='phone' label={t("contact.phone")}/>
                    </div>
                    <TextArea name='message' label={t("contact.message")}/>
                </div>
                <button className={styles.button} type='submit'>{t("contact.send")}</button>
            </Form>
        </Formik>
    )
}
