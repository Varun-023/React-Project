import { Link } from "react-router-dom";
import { useState, useMemo, useCallback, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import KpiCard from "../components/KpiCard";
import DataToolbar from "../components/DataToolbar";
import TablePagination, { paginateList } from "../components/TablePagination";
import DataTable from "../components/common/DataTable";
import { useSelector, useDispatch } from "react-redux";
import { addVendor } from "../redux/vendorSlice";

function Vendors() {
    const vendors = useSelector((state) => state.vendors.vendorList);
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    
    // Instead of DataToolbar setting filtered array, we'll keep search/status in state
    // For simplicity with the existing DataToolbar, we assume it still calls onFilteredChange,
    // but the user expects to see useMemo for filteredVendors. 
    // To strictly follow the user's example, we'll manage search text here.
    const [search, setSearch] = useState("");

    // Simulate the user's requested useMemo
    const filteredVendors = useMemo(() => {
        return vendors.filter((vendor) =>
            vendor.name.toLowerCase().includes(search.toLowerCase()) ||
            vendor.status.toLowerCase().includes(search.toLowerCase()) ||
            vendor.category.toLowerCase().includes(search.toLowerCase())
        );
    }, [vendors, search]);

    const pageData = paginateList(filteredVendors, page, 5);

    const handleSearchChange = useCallback((value) => {
        setSearch(value);
        setPage(1);
    }, []);

    const columns = [
        { field: "name", headerName: "Vendor Name" },
        { field: "status", headerName: "Status" },
        { field: "category", headerName: "Category" },
        {
            field: "action",
            headerName: "Profile",
            renderCell: (row) => <Link to={`/vendors/${row.id}`}>View</Link>
        }
    ];

    return (
        <>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
                <KpiCard title="Total Vendors" value={vendors.length} />
                <KpiCard title="Approved" value={vendors.filter((v) => v.status === "Approved").length} />
                <KpiCard title="Pending" value={vendors.filter((v) => v.status === "Pending").length} />
            </Box>

            <Button
                variant="contained"
                sx={{ mb: 2 }}
                onClick={() => dispatch(addVendor())}
            >
                Add Vendor
            </Button>

            <Box sx={{ mb: 2 }}>
                {/* Simplified search to match user's useCallback/useMemo example */}
                <input 
                    type="text" 
                    placeholder="Search vendors..." 
                    value={search} 
                    onChange={(e) => handleSearchChange(e.target.value)} 
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', width: '200px' }}
                />
            </Box>

            <DataTable columns={columns} rows={pageData} />

            <TablePagination
                totalItems={filteredVendors.length}
                pageSize={5}
                onPageChange={setPage}
            />
        </>
    );
}

export default Vendors;