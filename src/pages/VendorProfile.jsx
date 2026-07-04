import { useParams, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import vendors from "../mocks/vendors.json";

function VendorProfile() {

    const { id } = useParams();

    const vendor = vendors.find((item) => String(item.id) === String(id));

    if (!vendor) {

        return (

            <>

                <Typography variant="h6">Vendor not found</Typography>

                <Button component={Link} to="/vendors" sx={{ mt: 2 }}>

                    Back to Vendors

                </Button>

            </>

        );

    }

    return (

        <>

            <Typography variant="h5" sx={{ mb: 3 }}>

                Vendor Profile

            </Typography>

            <Card sx={{ mb: 2, maxWidth: 700 }}>

                <CardContent>

                    <Typography variant="h6">Basic Details</Typography>

                    <Typography>Name: {vendor.name}</Typography>
                    <Typography>Status: {vendor.status}</Typography>
                    <Typography>Category: {vendor.category}</Typography>

                </CardContent>

            </Card>

            <Card sx={{ mb: 2, maxWidth: 700 }}>

                <CardContent>

                    <Typography variant="h6">Contacts</Typography>

                    <Typography>Primary Contact: manager@{vendor.name.toLowerCase().replace(" ", "")}.com</Typography>

                </CardContent>

            </Card>

            <Card sx={{ mb: 2, maxWidth: 700 }}>

                <CardContent>

                    <Typography variant="h6">Risk Information</Typography>

                    <Typography>Risk Level: Medium</Typography>

                </CardContent>

            </Card>

            <Button component={Link} to="/vendors" variant="outlined">

                Back to Vendor List

            </Button>

        </>

    );

}

export default VendorProfile;
