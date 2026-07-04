import { memo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function KpiCard({ title, value }) {

    return (

        <Card
            sx={{
                padding: 2,
                borderRadius: 2,
                width: { xs: "100%", sm: 250 }
            }}
        >

            <CardContent>

                <Typography variant="h6">

                    {title}

                </Typography>

                <Typography variant="h4">

                    {value}

                </Typography>

            </CardContent>

        </Card>

    );

}

export default memo(KpiCard);