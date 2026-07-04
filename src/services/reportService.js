import reportsData from "../mocks/reports.json";
import { mockApi } from "./apiClient";

async function getReports() {

    const response = await mockApi(reportsData, 500);

    return response.data;

}

export { getReports };
