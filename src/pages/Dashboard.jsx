import DashboardExtra from "../components/DashboardExtra";

import KpiCard from "../components/KpiCard";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
function Dashboard() {

    return (

        <>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap"
                }}
            >
                <KpiCard
                    title="Total Vendors"
                    value="24"
                />

                <KpiCard
                    title="High Risks"
                    value="4"
                />

                <KpiCard
                    title="Pending Audits"
                    value="7"
                />
            </div>
            <Card
                sx=
                    {
                        {
                            padding: 2,
                            borderRadius: 2,
                            width: { xs: "100%", sm: 500 },
                            mt: 3
                        }
                    }
            >
                <CardContent>
                    <Typography variant="h6">

                        Recent Activities

                    </Typography>
                    <List sx={{
                        listStyleType: "disc",
                        pl: 2
                    }}>
                        <ListItem>
                            <ListItemText
                                primary="• Vendor Infosys approved"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="• Audit completed"
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="• Risk report generated"
                            />
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
            <DashboardExtra />
        </>

    );

}

export default Dashboard;