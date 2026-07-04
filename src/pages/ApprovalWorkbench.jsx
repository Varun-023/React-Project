import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { fetchApprovals, setApprovalFilter, updateApprovalStatus } from "../redux/approvalSlice";

function ApprovalWorkbench() {

    const dispatch = useDispatch();

    const queue = useSelector((state) => state.approval.queue);
    const filter = useSelector((state) => state.approval.filter);

    useEffect(() => {

        dispatch(fetchApprovals());

    }, [dispatch]);

    const filteredQueue = filter === "All"
        ? queue
        : queue.filter((item) => item.status === filter);

    function handleAction(id, status) {

        dispatch(updateApprovalStatus({ id, status }));

    }

    return (

        <>

            <Typography variant="h5" sx={{ mb: 3 }}>

                Approval Workbench

            </Typography>

            <TextField
                select
                size="small"
                label="Queue"
                value={filter}
                onChange={(e) => dispatch(setApprovalFilter(e.target.value))}
                sx={{ mb: 2, minWidth: 180 }}
            >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Approved">Approved</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
                <MenuItem value="Escalated">Escalated</MenuItem>
            </TextField>

            <Box sx={{ overflowX: "auto" }}>

                <Table sx={{ border: "1px solid #ddd" }}>

                    <TableHead>

                        <TableRow>

                            <TableCell sx={{ fontWeight: "bold" }}>Request ID</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Vendor</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Amount</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {filteredQueue.map((item) => (

                            <TableRow key={item.id}>

                                <TableCell>{item.requestId}</TableCell>
                                <TableCell>{item.vendorName}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>

                                    <Button
                                        size="small"
                                        onClick={() => handleAction(item.id, "Approved")}
                                    >
                                        Approve
                                    </Button>

                                    <Button
                                        size="small"
                                        onClick={() => handleAction(item.id, "Rejected")}
                                    >
                                        Reject
                                    </Button>

                                </TableCell>

                            </TableRow>

                        ))}

                    </TableBody>

                </Table>

            </Box>

        </>

    );

}

export default ApprovalWorkbench;
