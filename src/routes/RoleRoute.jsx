import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

function RoleRoute({ children, allowedRoles }) {

    const user = useSelector((state) => state.auth.user);

    return (

        <ProtectedRoute>

            {allowedRoles.includes(user?.role) ? children : <Navigate to="/dashboard" />}

        </ProtectedRoute>

    );

}

export default RoleRoute;
