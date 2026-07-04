import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import forgotSchema from "../validation/forgotSchema";
import "../pages/Login.css";

function ForgotPassword() {

    const {

        register,
        handleSubmit,
        formState: { errors }

    } = useForm({
        resolver: yupResolver(forgotSchema)
    });

    function onSubmit(data) {

        console.log(data);

        alert("Password reset link sent to your email");

    }

    return (

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

            <h1>Forgot Password</h1>

            <p className="subtitle">Enter your registered email</p>

            <input
                className="input-box"
                type="email"
                placeholder="Enter Email"
                {...register("email")}
            />

            {errors.email && (
                <p className="error">{errors.email.message}</p>
            )}

            <button className="login-btn">Send Reset Link</button>

            <p style={{ textAlign: "center", marginTop: "12px" }}>

                <Link to="/login">Back to Login</Link>

            </p>

        </form>

    );

}

export default ForgotPassword;
