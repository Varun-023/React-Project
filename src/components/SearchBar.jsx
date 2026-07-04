import React from "react";
import TextField from "@mui/material/TextField";

function SearchBar({ onSearch }) {

    return (

        <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            onChange={(e) => onSearch && onSearch(e.target.value)}
            sx={{
                backgroundColor: "white",
                borderRadius: 1,
                width: "180px"
            }}
        />

    );

}

export default React.memo(SearchBar);