import styles from "./styles/contactForm.module.css";
import Input from "./Input";
import TextArea from "./TextArea";
import FormContainer from "@/components/shared/FormContainer";
import * as Yup from "yup";
import {useTranslation} from "next-i18next";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must contain @ and "."').required("Email is required"),
    phone: Yup.string()
        .matches(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/, "Must contain at least 7 digits"),
    name: Yup.string()
        .matches(/^[A-Z][a-z]{1,64}$/, "The first letter must be capitalized")
        .required("Name is required"),
    message: Yup.string().required("Message required"),
})

const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
}

export default function ContactForm({handleSubmit, setActive}) {
    const {t} = useTranslation("common");

    const handleClosures = (content) => {
        handleSubmit(content);
        setActive && setActive(false)
    }

    return (
        <FormContainer initialValues={initialValues} validationSchema={validationSchema} handleSubmit={handleClosures}>
            <div className={styles.form}>
                <div className={styles.wrapper}>
                    <div className={styles.inner_wrapper}>
                        <Input name='name' label={t("contact.name")}/>
                        <Input name='email' label='Email'/>
                        <Input name='phone' label={t("contact.phone")}/>
                    </div>
                    <TextArea name='message' label={t("contact.message")}/>
                </div>
                <button className={styles.button} type='submit'>{t("contact.send")}</button>
            </div>
        </FormContainer>
    )
}
