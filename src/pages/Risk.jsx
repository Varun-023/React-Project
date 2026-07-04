

import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";

import ErrorState from "../components/ErrorState";
import Loader from "../components/Loader";
import RiskCharts from "../components/RiskCharts";

import { getRisks } from "../services/riskService";

function Risk() {

    const [error, setError] = useState("");
    const [risks, setRisks] = useState([]);
    const [loading, setLoading] = useState(true);

    async function loadRisks() {

        try {

            const data = await getRisks();

            setRisks(data);

        }
        catch {

            setError("Failed to load risks");

        }
        finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadRisks();

    }, []);

    if (loading) {

        return (

            <>

                <Loader />

            </>

        );

    }

    if (error) {

        return (

            <>

                <ErrorState
                    message={error}
                />

            </>

        );

    }

    return (

        <>

            <Typography
                variant="h5"
                sx={{
                    mb: 3
                }}
            >
                Risk Management
            </Typography>

            <RiskCharts risks={risks} />

            <Box sx={{ overflowX: "auto" }}>

                <Table
                    sx={{
                        border: "1px solid #ddd"
                    }}
                >

                    <TableHead>

                        <TableRow>

                            <TableCell
                                sx={{
                                    fontWeight: "bold"
                                }}
                            >
                                Risk Name
                            </TableCell>

                            <TableCell
                                sx={{
                                    fontWeight: "bold"
                                }}
                            >
                                Level
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            risks.map((risk) => (

                                <TableRow
                                    key={risk.id}
                                >

                                    <TableCell>

                                        {risk.riskName}

                                    </TableCell>

                                    <TableCell>

                                        {risk.level}

                                    </TableCell>

                                </TableRow>

                            ))

                        }

                    </TableBody>

                </Table>

            </Box>

        </>

    );

}

export default Risk;