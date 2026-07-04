import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";

function RiskCharts({ risks }) {

    const pieData = [
        { name: "High", value: risks.filter((r) => r.level === "High").length },
        { name: "Medium", value: risks.filter((r) => r.level === "Medium").length },
        { name: "Low", value: risks.filter((r) => r.level === "Low").length }
    ];

    const colors = ["#d32f2f", "#ed6c02", "#2e7d32"];

    return (

        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                mb: 3
            }}
        >

            <Card sx={{ padding: 2, borderRadius: 2, width: { xs: "100%", sm: 400 } }}>

                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>

                        Risk Distribution

                    </Typography>

                    <ResponsiveContainer width="100%" height={220}>

                        <PieChart>

                            <Pie
                                data={pieData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={80}
                                label
                            >
                                {pieData.map((entry, index) => (

                                    <Cell
                                        key={entry.name}
                                        fill={colors[index % colors.length]}
                                    />

                                ))}

                            </Pie>

                            <Tooltip />

                        </PieChart>

                    </ResponsiveContainer>

                </CardContent>

            </Card>

            <Card sx={{ padding: 2, borderRadius: 2, width: { xs: "100%", sm: 400 } }}>

                <CardContent>

                    <Typography variant="h6" sx={{ mb: 2 }}>

                        Risk Levels

                    </Typography>

                    <ResponsiveContainer width="100%" height={220}>

                        <BarChart data={risks}>

                            <XAxis dataKey="riskName" hide />

                            <YAxis />

                            <Tooltip />

                            <Bar dataKey="id" fill="#1976d2" />

                        </BarChart>

                    </ResponsiveContainer>

                </CardContent>

            </Card>

        </Box>

    );

}

export default RiskCharts;
