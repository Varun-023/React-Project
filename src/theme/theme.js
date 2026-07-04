import { createTheme } from "@mui/material/styles";

function getAppTheme(darkMode) {

    return createTheme({

        palette: {

            mode: darkMode ? "dark" : "light",

            primary: {
                main: "#1976d2"
            },

            secondary: {
                main: "#9c27b0"
            }

        }

    });

}

const theme = getAppTheme(false);

export { getAppTheme };

export default theme;
