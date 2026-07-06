import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import requests from "../mocks/requests.json";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`procurement-tabpanel-${index}`}
            aria-labelledby={`procurement-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ pt: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const ProcurementDetails = React.memo(function ProcurementDetails() {
    const { id } = useParams();
    const [tabIndex, setTabIndex] = useState(0);

    const request = requests.find((item) => String(item.id) === String(id));

    if (!request) {
        return (
            <>
                <Typography variant="h6">Request not found</Typography>
                <Button component={Link} to="/procurement" sx={{ mt: 2 }} variant="outlined">
                    Back to Procurement
                </Button>
            </>
        );
    }

    const handleChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Procurement Details - {request.vendorName}
            </Typography>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabIndex} onChange={handleChange} aria-label="procurement tabs">
                    <Tab label="Overview" />
                    <Tab label="Attachments" />
                    <Tab label="Approval History" />
                    <Tab label="Comments" />
                    <Tab label="Audit Logs" />
                </Tabs>
            </Box>

            <TabPanel value={tabIndex} index={0}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Overview</Typography>
                        <Typography><strong>Vendor:</strong> {request.vendorName}</Typography>
                        <Typography><strong>Amount:</strong> {request.amount}</Typography>
                        <Typography><strong>Category:</strong> {request.category}</Typography>
                        <Typography><strong>Status:</strong> {request.status}</Typography>
                        <Typography><strong>Department:</strong> {request.department}</Typography>
                    </CardContent>
                </Card>
            </TabPanel>

            <TabPanel value={tabIndex} index={1}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Attachments</Typography>
                        <Typography color="text.secondary">No attachments uploaded yet.</Typography>
                        <Button variant="contained" size="small" sx={{ mt: 2 }}>Upload Document</Button>
                    </CardContent>
                </Card>
            </TabPanel>

            <TabPanel value={tabIndex} index={2}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Approval History</Typography>
                        <Typography>• Submitted - Pending Review</Typography>
                        <Typography>• Manager Review - In Progress</Typography>
                    </CardContent>
                </Card>
            </TabPanel>

            <TabPanel value={tabIndex} index={3}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Comments</Typography>
                        <Typography color="text.secondary">No comments added yet.</Typography>
                    </CardContent>
                </Card>
            </TabPanel>

            <TabPanel value={tabIndex} index={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>Audit Logs</Typography>
                        <Typography>• Request created by employee</Typography>
                    </CardContent>
                </Card>
            </TabPanel>

            <Button component={Link} to="/procurement" variant="outlined" sx={{ mt: 4 }}>
                Back to Procurement List
            </Button>
        </>
    );
});

export default ProcurementDetails;
