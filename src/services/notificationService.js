import notificationsData from "../mocks/notifications.json";
import { mockApi } from "./apiClient";

async function getNotifications() {

    const response = await mockApi(notificationsData, 300);

    return response.data;

}

export { getNotifications };
