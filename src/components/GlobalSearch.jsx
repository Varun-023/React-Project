import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { setGlobalSearch } from "../redux/uiSlice";
import vendors from "../mocks/vendors.json";
import requests from "../mocks/requests.json";
import reports from "../mocks/reports.json";

function GlobalSearch() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    function handleChange(event) {

        const value = event.target.value;

        setQuery(value);

        dispatch(setGlobalSearch(value));

        if (!value) {
            setResults([]);
            return;
        }

        const searchText = value.toLowerCase();

        const vendorResults = vendors
            .filter((item) => item.name.toLowerCase().includes(searchText))
            .map((item) => ({ type: "Vendor", label: item.name, path: `/vendors/${item.id}` }));

        const requestResults = requests
            .filter((item) => item.vendorName.toLowerCase().includes(searchText))
            .map((item) => ({ type: "Procurement", label: item.vendorName, path: `/procurement/${item.id}` }));

        const reportResults = reports
            .filter((item) => item.title.toLowerCase().includes(searchText))
            .map((item) => ({ type: "Report", label: item.title, path: "/reports" }));

        setResults([...vendorResults, ...requestResults, ...reportResults].slice(0, 5));

    }

    function goToResult(path) {

        navigate(path);

        setQuery("");

        setResults([]);

    }

    return (

        <Box sx={{ position: "relative" }}>

            <TextField
                placeholder="Search..."
                variant="outlined"
                size="small"
                value={query}
                onChange={handleChange}
                sx={{
                    backgroundColor: "white",
                    borderRadius: 1,
                    width: "180px"
                }}
            />

            {results.length > 0 && (

                <Paper
                    sx={{
                        position: "absolute",
                        top: "40px",
                        right: 0,
                        width: 240,
                        zIndex: 10,
                        p: 1
                    }}
                >
                    {results.map((item) => (

                        <Typography
                            key={`${item.type}-${item.label}`}
                            sx={{
                                p: 1,
                                cursor: "pointer",
                                "&:hover": { backgroundColor: "#f5f5f5" }
                            }}
                            onClick={() => goToResult(item.path)}
                        >
                            {item.type}: {item.label}
                        </Typography>

                    ))}

                </Paper>

            )}

        </Box>

    );

}

export default GlobalSearch;
