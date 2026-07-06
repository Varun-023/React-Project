import * as yup from "yup";

const signupSchema = yup.object({
    name: yup.string().required("Name Required"),
    email: yup.string().email("Enter valid email").required("Email Required"),
    password: yup.string()
        .min(8, "Minimum 8 characters")
        .matches(/[A-Z]/, "Must contain at least one uppercase letter")
        .matches(/[0-9]/, "Must contain at least one number")
        .matches(/[^A-Za-z0-9]/, "Must contain at least one special character")
        .required("Password Required"),
    role: yup.string().required("Role Required")
});

export default signupSchema;
