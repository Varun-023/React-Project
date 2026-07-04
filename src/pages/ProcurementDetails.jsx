import { useParams, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import requests from "../mocks/requests.json";

function ProcurementDetails() {

    const { id } = useParams();

    const request = requests.find((item) => String(item.id) === String(id));

    if (!request) {

        return (

            <>

                <Typography variant="h6">Request not found</Typography>

                <Button component={Link} to="/procurement" sx={{ mt: 2 }}>

                    Back to Procurement

                </Button>

            </>

        );

    }

    return (

        <>

            <Typography variant="h5" sx={{ mb: 3 }}>

                Procurement Details

            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 700 }}>

                <Card>

                    <CardContent>

                        <Typography variant="h6">Overview</Typography>

                        <Typography>Vendor: {request.vendorName}</Typography>
                        <Typography>Amount: {request.amount}</Typography>
                        <Typography>Category: {request.category}</Typography>
                        <Typography>Status: {request.status}</Typography>

                    </CardContent>

                </Card>

                <Card>

                    <CardContent>

                        <Typography variant="h6">Approval History</Typography>

                        <Typography>Submitted - Pending Review</Typography>
                        <Typography>Manager Review - In Progress</Typography>

                    </CardContent>

                </Card>

                <Card>

                    <CardContent>

                        <Typography variant="h6">Comments</Typography>

                        <Typography>No comments added yet.</Typography>

                    </CardContent>

                </Card>

                <Card>

                    <CardContent>

                        <Typography variant="h6">Audit Logs</Typography>

                        <Typography>Request created by employee</Typography>

                    </CardContent>

                </Card>

            </Box>

            <Button component={Link} to="/procurement" variant="outlined" sx={{ mt: 2 }}>

                Back to Procurement List

            </Button>

        </>

    );

}

export default ProcurementDetails;
