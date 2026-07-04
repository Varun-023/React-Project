import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import GlobalSearch from "./GlobalSearch";
import useAuth from "../hooks/useAuth";
import useNotification from "../hooks/useNotification";
import useTheme from "../hooks/useTheme";

function HeaderActions() {

    const navigate = useNavigate();

    const { user, handleLogout } = useAuth();
    const { unreadCount } = useNotification();
    const { darkMode, switchTheme } = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    function openMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function closeMenu() {
        setAnchorEl(null);
    }

    function logoutUser() {
        handleLogout();
        closeMenu();
        navigate("/login");
    }

    return (

        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "25px"
            }}
        >

            <Box sx={{ display: { xs: "none", sm: "block" } }}>

                <GlobalSearch />

            </Box>

            <IconButton color="inherit" onClick={switchTheme}>

                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}

            </IconButton>

            <IconButton
                color="inherit"
                component={Link}
                to="/notifications"
            >

                <Badge badgeContent={unreadCount} color="error">

                    <NotificationsIcon />

                </Badge>

            </IconButton>

            <IconButton color="inherit" onClick={openMenu}>

                <AccountCircleIcon />

            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>

                <MenuItem disabled>

                    <Typography variant="body2">

                        {user?.name || "User"}

                    </Typography>

                </MenuItem>

                <MenuItem onClick={() => { closeMenu(); navigate("/settings"); }}>

                    Profile Settings

                </MenuItem>

                <MenuItem onClick={logoutUser}>

                    Logout

                </MenuItem>

            </Menu>

        </Box>

    );

}

export default HeaderActions;
