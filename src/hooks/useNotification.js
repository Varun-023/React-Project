import { useSelector, useDispatch } from "react-redux";
import { markAsRead, markAllRead } from "../redux/notificationSlice";

function useNotification() {

    const dispatch = useDispatch();

    const notifications = useSelector((state) => state.notifications.notifications);

    const unreadCount = notifications.filter((item) => !item.read).length;

    function readNotification(id) {
        dispatch(markAsRead(id));
    }

    function readAll() {
        dispatch(markAllRead());
    }

    return {
        notifications,
        unreadCount,
        readNotification,
        readAll
    };

}

export default useNotification;
