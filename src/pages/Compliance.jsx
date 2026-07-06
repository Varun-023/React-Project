import React, { useState, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import { getComplianceIssues } from "../services/complianceService";

const Compliance = React.memo(function Compliance() {
    const [error, setError] = useState("");
    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadIssues() {
        try {
            const data = await getComplianceIssues();
            setIssues(data);
        } catch {
            setError("Failed to load compliance issues");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadIssues();
    }, []);

    const violationsSummary = useMemo(() => {
        const summary = { Total: issues.length, Critical: 0, High: 0, Open: 0, Closed: 0 };
        issues.forEach(issue => {
            if (issue.severity === 'Critical') summary.Critical++;
            if (issue.severity === 'High') summary.High++;
            if (issue.status === 'Open') summary.Open++;
            if (issue.status === 'Closed') summary.Closed++;
        });
        return summary;
    }, [issues]);

    if (loading) return <Loader />;
    if (error) return <ErrorState message={error} />;

    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Compliance Management
            </Typography>

            <Typography variant="h6" sx={{ mb: 2 }}>
                Violations Tracking
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                <Card sx={{ minWidth: 150, backgroundColor: '#ffebee' }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>Total Issues</Typography>
                        <Typography variant="h4">{violationsSummary.Total}</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 150, backgroundColor: '#fff3e0' }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>Critical</Typography>
                        <Typography variant="h4" color="error">{violationsSummary.Critical}</Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 150, backgroundColor: '#e3f2fd' }}>
                    <CardContent>
                        <Typography color="text.secondary" gutterBottom>Open Status</Typography>
                        <Typography variant="h4" color="primary">{violationsSummary.Open}</Typography>
                    </CardContent>
                </Card>
            </Box>

            <Box sx={{ overflowX: "auto" }}>
                <Table sx={{ border: "1px solid #ddd" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Issue</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Vendor</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Severity</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {issues.map((issue) => (
                            <TableRow key={issue.id}>
                                <TableCell>{issue.issue}</TableCell>
                                <TableCell>{issue.vendor}</TableCell>
                                <TableCell>{issue.severity}</TableCell>
                                <TableCell>{issue.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </>
    );
});

export default Compliance;