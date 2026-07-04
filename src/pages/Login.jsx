import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../redux/authSlice";
import loginSchema from "../validation/loginSchema";

import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const authError = useSelector((state) => state.auth.error);

    const {

        register,
        handleSubmit,
        formState: { errors }

    } = useForm({
        resolver: yupResolver(loginSchema)
    });

    async function onSubmit(data) {

        const result = await dispatch(loginAsync(data));

        if (loginAsync.fulfilled.match(result)) {
            navigate("/dashboard");
        }

    }

    return (

        <form
            className="login-form"
            onSubmit={handleSubmit(onSubmit)}
        >

            <h1>PRCM System</h1>

            <p className="subtitle">

                Procurement Risk & Compliance Management

            </p>

            <input
                className="input-box"
                type="email"
                placeholder="Enter Email"
                {...register("email")}
            />

            {

                errors.email && (

                    <p className="error">

                        {errors.email.message}

                    </p>

                )

            }

            <input
                className="input-box"
                type="password"
                placeholder="Password"
                {...register("password")}
            />

            {

                errors.password && (

                    <p className="error">

                        {errors.password.message}

                    </p>

                )

            }

            {authError && (
                <p className="error">{authError}</p>
            )}

            <button className="login-btn">

                Login

            </button>

            <p style={{ textAlign: "center", marginTop: "12px" }}>

                <Link to="/forgot-password">Forgot Password?</Link>

            </p>

        </form>

    );

}

export default Login;