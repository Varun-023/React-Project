import requestsData from "../mocks/requests.json";
import { mockApi } from "./apiClient";

export async function getProcurementRequests() {

    const response = await mockApi(requestsData, 500);

    return response.data;

}
