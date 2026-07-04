import * as yup from "yup";

const forgotSchema = yup.object({
    email: yup.string().email("Enter valid email").required("Email Required")
});

export default forgotSchema;
