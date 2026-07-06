import React, { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import RiskCharts from "../components/RiskCharts";
import { getRisks } from "../services/riskService";

const Risk = React.memo(function Risk() {
    const [error, setError] = useState("");
    const [risks, setRisks] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadRisks() {
        try {
            const data = await getRisks();
            setRisks(data);
        } catch {
            setError("Failed to load risks");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadRisks();
    }, []);

    const heatMapData = useMemo(() => {
        const counts = { High: 0, Medium: 0, Low: 0 };
        risks.forEach(r => {
            if (counts[r.level] !== undefined) counts[r.level]++;
        });
        return counts;
    }, [risks]);

    if (loading) return <Loader />;
    if (error) return <ErrorState message={error} />;

    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Risk Management
            </Typography>

            <RiskCharts risks={risks} />

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Risk Matrix Heat Map
            </Typography>
            <Box sx={{ maxWidth: 400, mb: 4, display: 'flex', flexDirection: 'column', border: '1px solid #ccc' }}>
                <Box sx={{ display: 'flex', height: 100 }}>
                    <Box sx={{ flex: 1, backgroundColor: '#ffebee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                        <Typography variant="h6" color="error">High ({heatMapData.High})</Typography>
                    </Box>
                    <Box sx={{ flex: 1, backgroundColor: '#fff3e0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #ccc' }}>
                        <Typography variant="h6" color="warning.main">Med ({heatMapData.Medium})</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', height: 100 }}>
                    <Box sx={{ flex: 1, backgroundColor: '#e8f5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid #ccc' }}>
                        <Typography variant="h6" color="success.main">Low ({heatMapData.Low})</Typography>
                    </Box>
                    <Box sx={{ flex: 1, backgroundColor: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography variant="body2" color="text.secondary">Resolved</Typography>
                    </Box>
                </Box>
            </Box>

            <Typography variant="h6" sx={{ mb: 2 }}>
                Risk Registry
            </Typography>
            <Box sx={{ overflowX: "auto" }}>
                <Table sx={{ border: "1px solid #ddd" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Risk Name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Level</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {risks.map((risk) => (
                            <TableRow key={risk.id}>
                                <TableCell>{risk.riskName}</TableCell>
                                <TableCell>{risk.level}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </>
    );
});

export default Risk;