import {Form, Formik} from "formik";

export default function FormContainer({handleSubmit, validationSchema, initialValues, children}) {

    return (
        <Formik
            validateOnChange={false}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                {children}
            </Form>
        </Formik>
    )
}
