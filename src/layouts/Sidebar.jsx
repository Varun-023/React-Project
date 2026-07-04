import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Sidebar() {

    return (

        <Drawer
            variant="permanent"
            anchor="left"
            sx={{

                width: { xs: 70, sm: 240 },

                "& .MuiDrawer-paper": {

                    width: { xs: 70, sm: 240 },

                    boxSizing: "border-box",

                    backgroundColor: "#f5f5f5",

                    borderRight: "none",

                    boxShadow: "2px 0px 5px rgba(0,0,0,0.1)"

                }

            }}
        >

            <List>

                <ListItem>

                    <Link
                        to="/dashboard"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Dashboard"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/audit"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Audit"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/compliance"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Compliance"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/procurement"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Procurement"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/reports"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Reports"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/risk"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Risk"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/approvals"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Approvals"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/notifications"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Notifications"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/settings"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Settings"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

                <ListItem>

                    <Link
                        to="/vendors"
                        style={{
                            textDecoration: "none",
                            color: "black"
                        }}
                    >
                        <ListItemText
                            primary="Vendors"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        />
                    </Link>

                </ListItem>

            </List>

        </Drawer>

    );

}

export default Sidebar;