import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HeaderActions from "../components/HeaderActions";

function Header() {

    return (

        <AppBar
            position="static"
            sx={{
                width: { xs: "calc(100% - 70px)", sm: "calc(100% - 240px)" },
                ml: { xs: "70px", sm: "240px" }
            }}
        >

            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >

                <Typography variant="h5">

                    PRCM SYSTEM

                </Typography>

                <HeaderActions />

            </Toolbar>

        </AppBar>

    );

}

export default Header;