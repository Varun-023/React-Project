import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { fetchNotifications, markAsRead, markAllRead } from "../redux/notificationSlice";
import useNotification from "../hooks/useNotification";
import formatDate from "../utils/formatDate";

function Notifications() {

    const dispatch = useDispatch();

    const { notifications } = useNotification();

    useEffect(() => {

        dispatch(fetchNotifications());

    }, [dispatch]);

    return (

        <>

            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>

                <Typography variant="h5">Notification Center</Typography>

                <Button variant="outlined" onClick={() => dispatch(markAllRead())}>

                    Mark All Read

                </Button>

            </Box>

            {notifications.map((item) => (

                <Card key={item.id} sx={{ mb: 2, maxWidth: 700 }}>

                    <CardContent>

                        <Typography variant="h6">{item.title}</Typography>

                        <Typography variant="body2" sx={{ mb: 1 }}>

                            {item.message}

                        </Typography>

                        <Typography variant="caption">

                            {formatDate(item.date)} | Priority: {item.priority} | {item.read ? "Read" : "Unread"}

                        </Typography>

                        {!item.read && (

                            <Button
                                size="small"
                                sx={{ ml: 2 }}
                                onClick={() => dispatch(markAsRead(item.id))}
                            >
                                Mark Read
                            </Button>

                        )}

                    </CardContent>

                </Card>

            ))}

        </>

    );

}

export default Notifications;
