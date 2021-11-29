import styles from "../contactUs.module.css";
import {useTranslation} from "next-i18next";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import Input from "./Input";
import TextArea from "./TextArea";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must contain @ and "."').required("Email is required"),
    phone: Yup.string()
        .matches(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/, "Must contain at least 7 digits")
        .required("Phone is required"),
    name: Yup.string()
        .matches(/^[A-Z][a-z]{1,64}$/, "The first letter must be capitalized")
        .required("Name is required"),
    message: Yup.string().required("Message required"),
});

export default function ContactForm() {
    const {t} = useTranslation("common");

    const handleSubmit = async (values) => {
        console.log('ContactForm values', values)
    }

    return (
        <Formik
            validateOnChange={false}
            initialValues={{
                name: "",
                email: "",
                phone: "",
                message: "",
            }}
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
                    <TextArea name='message'/>
                </div>
                <button className={styles.button} type='submit'>{t("contact.send")}</button>
            </Form>
        </Formik>
    )
}
