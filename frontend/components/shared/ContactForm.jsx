import styles from "./styles/contactForm.module.css";
import Input from "./Input";
import TextArea from "./TextArea";
import FormContainer from "@/components/shared/FormContainer";
import * as Yup from "yup";
import {useTranslation} from "next-i18next";

const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
}

export default function ContactForm({handleSubmit, setActive}) {
    const {t} = useTranslation("common");

    const validationSchema = Yup.object().shape({
        email: Yup.string().email(t("error.mail")).required(t("error.mailRequired")),
        phone: Yup.string()
            .matches(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/, t("error.phone")),
        name: Yup.string()
            .matches(/^[A-ZА-ЯЁЇІЄҐ][a-zа-яёїієґ]{1,64}$/, t("error.name"))
            .required(t("error.nameRequired")),
        message: Yup.string().required(t("error.message")),
    })

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
