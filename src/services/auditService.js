import auditData from "../mocks/audit.json";
import { mockApi } from "./apiClient";

export async function getAudits() {

    const response = await mockApi(auditData, 500);

    return response.data;

}
