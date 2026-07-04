import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function DashboardCharts({ dashboard }) {

    return (

        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                mt: 3
            }}
        >

            <Card sx={{ padding: 2, borderRadius: 2, width: { xs: "100%", sm: 480 } }}>

                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>

                        Monthly Procurement Trend

                    </Typography>

                    <ResponsiveContainer width="100%" height={220}>

                        <LineChart data={dashboard.procurementTrend}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="month" />

                            <YAxis />

                            <Tooltip />

                            <Line type="monotone" dataKey="value" stroke="#1976d2" />

                        </LineChart>

                    </ResponsiveContainer>

                </CardContent>

            </Card>

            <Card sx={{ padding: 2, borderRadius: 2, width: { xs: "100%", sm: 480 } }}>

                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>

                        Risk Trend

                    </Typography>

                    <ResponsiveContainer width="100%" height={220}>

                        <LineChart data={dashboard.riskTrend}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="month" />

                            <YAxis />

                            <Tooltip />

                            <Line type="monotone" dataKey="value" stroke="#9c27b0" />

                        </LineChart>

                    </ResponsiveContainer>

                </CardContent>

            </Card>

            <Card sx={{ padding: 2, borderRadius: 2, width: { xs: "100%", sm: 480 } }}>

                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>

                        Compliance Trend

                    </Typography>

                    <ResponsiveContainer width="100%" height={220}>

                        <LineChart data={dashboard.complianceTrend}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="month" />

                            <YAxis />

                            <Tooltip />

                            <Line type="monotone" dataKey="value" stroke="#2e7d32" />

                        </LineChart>

                    </ResponsiveContainer>

                </CardContent>

            </Card>

            <Card sx={{ padding: 2, borderRadius: 2, width: { xs: "100%", sm: 480 } }}>

                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>

                        Department Spending

                    </Typography>

                    <ResponsiveContainer width="100%" height={220}>

                        <BarChart data={dashboard.departmentSpending}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" />

                            <YAxis />

                            <Tooltip />

                            <Bar dataKey="value" fill="#1976d2" />

                        </BarChart>

                    </ResponsiveContainer>

                </CardContent>

            </Card>

        </Box>

    );

}

export default DashboardCharts;
