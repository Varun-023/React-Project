import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

function useAuth() {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const user = useSelector((state) => state.auth.user);

    function handleLogout() {
        dispatch(logout());
    }

    return {
        isLoggedIn,
        user,
        handleLogout
    };

}

export default useAuth;
