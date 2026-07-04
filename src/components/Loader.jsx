import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Loader() {

    return (

        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 5
            }}
        >

            <CircularProgress />

        </Box>

    );

}

export default React.memo(Loader);