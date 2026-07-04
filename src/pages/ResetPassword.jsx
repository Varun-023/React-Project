import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import resetSchema from "../validation/resetSchema";
import "./Login.css";

function ResetPassword() {

    const navigate = useNavigate();

    const {

        register,
        handleSubmit,
        formState: { errors }

    } = useForm({
        resolver: yupResolver(resetSchema)
    });

    function onSubmit(data) {

        console.log(data);

        alert("Password reset successful");

        navigate("/login");

    }

    return (

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>

            <h1>Reset Password</h1>

            <p className="subtitle">Create a new password</p>

            <input
                className="input-box"
                type="password"
                placeholder="New Password"
                {...register("password")}
            />

            {errors.password && (
                <p className="error">{errors.password.message}</p>
            )}

            <input
                className="input-box"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
                <p className="error">{errors.confirmPassword.message}</p>
            )}

            <button className="login-btn">Reset Password</button>

            <p style={{ textAlign: "center", marginTop: "12px" }}>

                <Link to="/login">Back to Login</Link>

            </p>

        </form>

    );

}

export default ResetPassword;
