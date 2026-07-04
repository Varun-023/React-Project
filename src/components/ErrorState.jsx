import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ErrorState({ message }) {

    return (

        <Box
            sx={{
                textAlign: "center",
                mt: 5
            }}
        >

            <Typography
                variant="h6"
                color="error"
            >

                {message}

            </Typography>

        </Box>

    );

}

export default ErrorState;