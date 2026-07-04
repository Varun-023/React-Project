import { Link } from "react-router-dom";
import "./Login.css";

function SessionExpired() {

    return (

        <div className="login-form">

            <h1>Session Expired</h1>

            <p className="subtitle">

                Your session has expired. Please login again.

            </p>

            <Link to="/login" className="login-btn" style={{ textAlign: "center", textDecoration: "none" }}>

                Go to Login

            </Link>

        </div>

    );

}

export default SessionExpired;
