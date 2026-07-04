import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import { getComplianceIssues } from "../services/complianceService";

function Compliance() {
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

    if (loading) {
        return (
            <>
                <Loader />
            </>
        );
    }

    if (error) {
        return (
            <>
                <ErrorState message={error} />
            </>
        );
    }

    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Compliance Management
            </Typography>
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
}

export default Compliance;