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
import { getAudits } from "../services/auditService";

function Audit() {
    const [error, setError] = useState("");
    const [audits, setAudits] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadAudits() {
        try {
            const data = await getAudits();
            setAudits(data);
        } catch {
            setError("Failed to load audit logs");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadAudits();
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
                Audit Management
            </Typography>
            <Box sx={{ overflowX: "auto" }}>
                <Table sx={{ border: "1px solid #ddd" }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>Activity</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>User</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Timestamp</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {audits.map((audit) => (
                            <TableRow key={audit.id}>
                                <TableCell>{audit.activity}</TableCell>
                                <TableCell>{audit.user}</TableCell>
                                <TableCell>{audit.timestamp}</TableCell>
                                <TableCell>{audit.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </>
    );
}

export default Audit;