import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchNotifications } from "./redux/notificationSlice";
import AppRoutes from "./routes/AppRoutes";

function App() {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchNotifications());

    }, [dispatch]);

    return <AppRoutes />;

}

export default App;