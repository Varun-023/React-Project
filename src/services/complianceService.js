import complianceData from "../mocks/compliance.json";
import { mockApi } from "./apiClient";

export async function getComplianceIssues() {

    const response = await mockApi(complianceData, 500);

    return response.data;

}
