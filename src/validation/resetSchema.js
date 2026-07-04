import * as yup from "yup";

const resetSchema = yup.object({
    password: yup.string().min(8, "Minimum 8 characters").required("Password Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm Password Required")
});

export default resetSchema;
