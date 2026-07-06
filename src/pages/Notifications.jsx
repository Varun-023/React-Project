import React, { useEffect, useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { fetchNotifications, markAsRead, markAsUnread, markAllRead } from "../redux/notificationSlice";
import useNotification from "../hooks/useNotification";
import formatDate from "../utils/formatDate";

const Notifications = React.memo(function Notifications() {
    const dispatch = useDispatch();
    const { notifications } = useNotification();
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchNotifications());
    }, [dispatch]);

    const filteredNotifications = useMemo(() => {
        if (tabIndex === 0) return notifications;
        if (tabIndex === 1) return notifications.filter(n => !n.read);
        return notifications.filter(n => n.read);
    }, [notifications, tabIndex]);

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography variant="h5">Notification Center</Typography>
                <Button variant="outlined" onClick={() => dispatch(markAllRead())}>
                    Mark All Read
                </Button>
            </Box>

            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)}>
                    <Tab label="All" />
                    <Tab label="Unread" />
                    <Tab label="Read" />
                </Tabs>
            </Box>

            {filteredNotifications.length === 0 ? (
                <Typography color="text.secondary">No notifications found.</Typography>
            ) : (
                filteredNotifications.map((item) => (
                    <Card key={item.id} sx={{ mb: 2, maxWidth: 700, backgroundColor: item.read ? '#fafafa' : '#fff' }}>
                        <CardContent>
                            <Typography variant="h6" color={item.read ? "text.secondary" : "text.primary"}>{item.title}</Typography>
                            <Typography variant="body2" sx={{ mb: 1 }} color={item.read ? "text.secondary" : "text.primary"}>
                                {item.message}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {formatDate(item.date)} | Priority: {item.priority} | {item.read ? "Read" : "Unread"}
                            </Typography>
                            <Box sx={{ mt: 1 }}>
                                {!item.read ? (
                                    <Button size="small" onClick={() => dispatch(markAsRead(item.id))}>
                                        Mark Read
                                    </Button>
                                ) : (
                                    <Button size="small" onClick={() => dispatch(markAsUnread(item.id))} color="secondary">
                                        Mark Unread
                                    </Button>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                ))
            )}
        </>
    );
});

export default Notifications;
