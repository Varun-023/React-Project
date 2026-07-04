import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/uiSlice";

function useTheme() {

    const dispatch = useDispatch();

    const darkMode = useSelector((state) => state.ui.darkMode);

    function switchTheme() {
        dispatch(toggleTheme());
    }

    return {
        darkMode,
        switchTheme
    };

}

export default useTheme;
