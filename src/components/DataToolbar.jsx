import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { filterBySearch, exportToCSV } from "../utils/helpers";

function DataToolbar({ data, searchFields, statusField, onFilteredChange }) {

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");

    function applyFilters() {

        let result = filterBySearch(data, search, searchFields);

        if (status !== "All" && statusField) {

            result = result.filter((item) => item[statusField] === status);

        }

        onFilteredChange(result);

    }

    function handleSearchChange(event) {

        setSearch(event.target.value);

        let result = filterBySearch(data, event.target.value, searchFields);

        if (status !== "All" && statusField) {

            result = result.filter((item) => item[statusField] === status);

        }

        onFilteredChange(result);

    }

    function handleExport() {

        exportToCSV(data, "export-data.csv");

    }

    return (

        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mb: 2
            }}
        >

            <TextField
                size="small"
                label="Search"
                value={search}
                onChange={handleSearchChange}
            />

            {statusField && (

                <TextField
                    select
                    size="small"
                    label="Status"
                    value={status}
                    onChange={(event) => {

                        setStatus(event.target.value);

                        applyFilters();

                    }}
                    sx={{ minWidth: 140 }}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Approved">Approved</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                </TextField>

            )}

            <Button variant="outlined" onClick={handleExport}>

                Export CSV

            </Button>

        </Box>

    );

}

export default DataToolbar;
