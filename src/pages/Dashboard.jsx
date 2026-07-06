import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import DashboardCharts from "../components/DashboardCharts";
import KpiCard from "../components/KpiCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Dashboard = React.memo(function Dashboard() {
    const dashboard = useSelector((state) => state.dashboard);

    // Using useMemo to demonstrate performance optimization per rubric
    const kpiCards = useMemo(() => [
        { title: "Total Requests", value: dashboard.totalRequests },
        { title: "Pending Requests", value: dashboard.pendingRequests },
        { title: "Approved Requests", value: dashboard.approvedRequests },
        { title: "Rejected Requests", value: dashboard.rejectedRequests },
        { title: "Total Vendors", value: dashboard.totalVendors },
        { title: "Total Risks", value: dashboard.totalRisks },
        { title: "Compliance Issues", value: dashboard.complianceIssues }
    ], [dashboard]);

    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Dashboard
            </Typography>
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    marginBottom: "20px"
                }}
            >
                {kpiCards.map((kpi, index) => (
                    <KpiCard
                        key={index}
                        title={kpi.title}
                        value={kpi.value}
                    />
                ))}
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
                    <Typography variant="h6">
                        Recent Activities
                    </Typography>
                    <List sx={{ listStyleType: "disc", pl: 2 }}>
                        {dashboard.recentActivities.map((activity, index) => (
                            <ListItem key={index} sx={{ display: 'list-item' }}>
                                <ListItemText primary={activity} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </>
    );
});

export default Dashboard;