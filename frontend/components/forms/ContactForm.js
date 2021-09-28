import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import styles from '../../styles/contactForm.module.css'
import {FormikTextArea} from "../items/FormikTextArea";

export default function ContactForm({onSubmit}) {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Wrong email format').required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        name: Yup.string().required('Name is required'),
        message: Yup.string().required('Message required'),


    })
    return <Formik validateOnChange={false} initialValues={{
        name: '',
        email: '',
        phone: '',
        message: ''
    }}
                   validationSchema={validationSchema}
                   onSubmit={onSubmit}>
        <Form className={styles.container}>
            <div className={styles.subContainer}>

                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <Field className={styles.input} name="email"/>
                    <ErrorMessage
                        name="email"
                        component="div"
                        className={styles.field_error}
                    />
                </div>
                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="phone">Телефон</label>
                    <Field name="phone" className={styles.input}/>

                    <ErrorMessage
                        name="phone"
                        component="div"
                        className={styles.field_error}
                    />
                </div>
                <div className={styles.input_container}>
                    <label className={styles.label} htmlFor="name">Имя</label>
                    <Field name="name" className={styles.input}/>
                    <ErrorMessage
                        name="name"
                        component="div"
                        className={styles.field_error}
                    />
                </div>
            </div>

            <div className={styles.subContainer}>
                <div className={styles.input_container}>
                    <FormikTextArea
                        label="Сообщение"
                        name="message"
                        rows="6"
                        placeholder="Once upon a time there was a princess who lived at the top of a glass hill."
                    />
                </div>

                <button className={styles.submitBtn} type='submit'>Отправить</button>
            </div>

        </Form>
    </Formik>
}