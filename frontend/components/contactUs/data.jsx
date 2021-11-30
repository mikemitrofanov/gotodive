import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    email: Yup.string().email('Must contain @ and "."').required("Email is required"),
    phone: Yup.string()
        .matches(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/, "Must contain at least 7 digits")
        .required("Phone is required"),
    name: Yup.string()
        .matches(/^[A-Z][a-z]{1,64}$/, "The first letter must be capitalized")
        .required("Name is required"),
    message: Yup.string().required("Message required"),
})

export const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
}

