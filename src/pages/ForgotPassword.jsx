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
            <h1 style={{ textAlign: "left", color: "#111827", fontSize: "24px", marginTop: "10px", marginBottom: "12px" }}>
                Forgot Password
            </h1>
            <p className="subtitle" style={{ textAlign: "left", color: "#374151", margin: "0 0 24px 0", fontSize: "15px", lineHeight: "1.5" }}>
                Enter your registered email to receive a<br/>password reset link.
            </p>

            <input
                className="input-box"
                style={{ padding: "14px", borderRadius: "4px", borderColor: "#d1d5db" }}
                type="email"
                placeholder="Email Address*"
                {...register("email")}
            />
            {errors.email && (
                <p className="error" style={{ textAlign: "left" }}>{errors.email.message}</p>
            )}

            <button 
                className="login-btn" 
                style={{ 
                    borderRadius: "4px", 
                    backgroundColor: "#1a73e8", 
                    fontWeight: "500", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.5px",
                    marginTop: "24px",
                    padding: "14px"
                }}
            >
                SEND RESET LINK
            </button>

            <div style={{ textAlign: "center", marginTop: "24px", marginBottom: "10px" }}>
                <Link to="/login" style={{ color: "#1a73e8", textDecoration: "none", fontWeight: "500", textTransform: "uppercase", fontSize: "14px", letterSpacing: "0.5px" }}>
                    BACK TO LOGIN
                </Link>
            </div>
        </form>
    );

}

export default ForgotPassword;
