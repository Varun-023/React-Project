import * as yup from "yup";

const loginSchema = yup.object({
    email: yup.string().email("Enter valid email").required("Email Required"),
    password: yup.string().min(8, "Minimum 8 characters").required("Password Required")
});

export default loginSchema;
