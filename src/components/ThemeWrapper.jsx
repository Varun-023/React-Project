import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { getAppTheme } from "../theme/theme";

function ThemeWrapper({ children }) {

    const darkMode = useSelector((state) => state.ui?.darkMode ?? false);

    const theme = getAppTheme(darkMode);

    return (

        <ThemeProvider theme={theme}>

            {children}

        </ThemeProvider>

    );

}

export default ThemeWrapper;
