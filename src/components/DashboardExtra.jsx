import { useSelector } from "react-redux";
import KpiCard from "./KpiCard";
import DashboardCharts from "./DashboardCharts";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function DashboardExtra() {

    const dashboard = useSelector((state) => state.dashboard);

    return (

        <>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginTop: "20px"
                }}
            >
                <KpiCard title="Total Requests" value={dashboard.totalRequests} />
                <KpiCard title="Pending Requests" value={dashboard.pendingRequests} />
                <KpiCard title="Approved Requests" value={dashboard.approvedRequests} />
                <KpiCard title="Rejected Requests" value={dashboard.rejectedRequests} />
                <KpiCard title="Compliance Issues" value={dashboard.complianceIssues} />
            </div>

            <DashboardCharts dashboard={dashboard} />

            <Card
                sx={{
                    padding: 2,
                    borderRadius: 2,
                    width: { xs: "100%", sm: 500 },
                    mt: 3
                }}
            >
                <CardContent>

                    <Typography variant="h6">Activity Timeline</Typography>

                    <List>
                        {dashboard.recentActivities.map((activity) => (

                            <ListItem key={activity}>

                                <ListItemText primary={`• ${activity}`} />

                            </ListItem>

                        ))}
                    </List>

                </CardContent>

            </Card>

        </>

    );

}

export default DashboardExtra;
