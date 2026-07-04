import { Link } from "react-router-dom";
import { useState, useEffect, useMemo, useCallback } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import DataToolbar from "../components/DataToolbar";
import TablePagination, { paginateList } from "../components/TablePagination";
import DataTable from "../components/common/DataTable";
import { getProcurementRequests } from "../services/procurementService";

function Procurement() {
    const [vendorName, setVendorName] = useState("");
    const [amt, setAmt] = useState("");
    const [cat, setCat] = useState("");

    const [error, setError] = useState("");
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const filteredRequests = useMemo(() => {
        return requests.filter((req) =>
            req.vendorName.toLowerCase().includes(search.toLowerCase()) ||
            req.category.toLowerCase().includes(search.toLowerCase()) ||
            req.status.toLowerCase().includes(search.toLowerCase())
        );
    }, [requests, search]);

    const pageData = paginateList(filteredRequests, page, 5);

    const handleSearchChange = useCallback((value) => {
        setSearch(value);
        setPage(1);
    }, []);

    async function loadRequests() {
        try {
            const data = await getProcurementRequests();
            setRequests(data);
        } catch {
            setError("Failed to load procurement requests");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadRequests();
    }, []);

    function handleSubmit() {
        const newReq = {
            id: Date.now(),
            vendorName,
            amount: amt,
            category: cat,
            status: "Pending"
        };
        setRequests([...requests, newReq]);
        setVendorName("");
        setAmt("");
        setCat("");
    }

    const columns = [
        { field: "vendorName", headerName: "Vendor Name" },
        { field: "amount", headerName: "Amount" },
        { field: "category", headerName: "Category" },
        { field: "status", headerName: "Status" },
        {
            field: "action",
            headerName: "Details",
            renderCell: (row) => <Link to={`/procurement/${row.id}`}>View</Link>
        }
    ];

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
            <Card sx={{ width: { xs: "90%", sm: "400px" }, mx: { xs: "auto", sm: 0 }, padding: 3, borderRadius: 2, mb: 4 }}>
                <CardContent>
                    <Typography variant="h6">Procurement Form</Typography>
                    <TextField label="Vendor Name" type="text" fullWidth value={vendorName} onChange={(e) => setVendorName(e.target.value)} sx={{ mt: 2 }} />
                    <TextField label="Amount" type="number" fullWidth value={amt} onChange={(e) => setAmt(e.target.value)} sx={{ mt: 2 }} />
                    <TextField label="Category" type="text" fullWidth value={cat} onChange={(e) => setCat(e.target.value)} sx={{ mt: 2 }} />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="contained" sx={{ mt: 3 }} onClick={handleSubmit}>Submit</Button>
                    </div>
                </CardContent>
            </Card>

            <Typography variant="h6" sx={{ mb: 2 }}>Procurement List</Typography>

            <Box sx={{ mb: 2 }}>
                <input 
                    type="text" 
                    placeholder="Search requests..." 
                    value={search} 
                    onChange={(e) => handleSearchChange(e.target.value)} 
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
                />
            </Box>

            <DataTable columns={columns} rows={pageData} />

            <TablePagination
                totalItems={filteredRequests.length}
                pageSize={5}
                onPageChange={setPage}
            />
        </>
    );
}

export default Procurement;