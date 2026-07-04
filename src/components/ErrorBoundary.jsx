import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

class ErrorBoundary extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            hasError: false
        };

    }

    static getDerivedStateFromError() {

        return {
            hasError: true
        };

    }

    render() {

        if (this.state.hasError) {

            return (

                <Box
                    sx={{
                        textAlign: "center",
                        mt: 10
                    }}
                >

                    <Typography variant="h5" color="error" sx={{ mb: 2 }}>

                        Something went wrong.

                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => window.location.reload()}
                    >
                        Reload Page
                    </Button>

                </Box>

            );

        }

        return this.props.children;

    }

}

export default ErrorBoundary;
