import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { paginateList } from "../utils/helpers";

function TablePagination({ totalItems, pageSize, onPageChange }) {

    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(totalItems / pageSize) || 1;

    function goToPage(newPage) {

        if (newPage < 1 || newPage > totalPages) {
            return;
        }

        setPage(newPage);

        onPageChange(newPage);

    }

    return (

        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 2
            }}
        >

            <Button variant="outlined" onClick={() => goToPage(page - 1)}>

                Previous

            </Button>

            <Typography variant="body2">

                Page {page} of {totalPages}

            </Typography>

            <Button variant="outlined" onClick={() => goToPage(page + 1)}>

                Next

            </Button>

        </Box>

    );

}

export { paginateList };

export default TablePagination;
