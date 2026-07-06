import React, { useState, useEffect, useMemo, useCallback } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { getReports } from "../services/reportService";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";
import DataTable from "../components/common/DataTable";

const Reports = React.memo(function Reports() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const filteredReports = useMemo(() => {
        return reports.filter((report) =>
            report.title.toLowerCase().includes(search.toLowerCase()) ||
            report.status.toLowerCase().includes(search.toLowerCase())
        );
    }, [reports, search]);

    const handleSearchChange = useCallback((value) => {
        setSearch(value);
    }, []);

    async function loadReports() {
        try {
            const data = await getReports();
            setReports(data);
        } catch {
            setError("Failed to load reports");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadReports();
    }, []);

    const columns = useMemo(() => [
        { field: "title", headerName: "Report Title" },
        { field: "status", headerName: "Status" }
    ], []);

    const handleExportCSV = useCallback(() => {
        alert("Exporting Reports to CSV...");
    }, []);

    const handleExportExcel = useCallback(() => {
        alert("Exporting Reports to Excel...");
    }, []);

    if (loading) return <Loader />;
    if (error) return <ErrorState message={error} />;

    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Reports
            </Typography>

            <Box sx={{ mb: 3, display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                <input 
                    type="text" 
                    placeholder="Search reports..." 
                    value={search} 
                    onChange={(e) => handleSearchChange(e.target.value)} 
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '250px' }}
                />
                <Button variant="contained" color="primary" onClick={handleExportCSV}>
                    Export CSV
                </Button>
                <Button variant="outlined" color="primary" onClick={handleExportExcel}>
                    Export Excel
                </Button>
            </Box>

            <DataTable columns={columns} rows={filteredReports} />
        </>
    );
});

export default Reports;