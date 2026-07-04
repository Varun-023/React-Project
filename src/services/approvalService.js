import approvalData from "../mocks/approvalQueue.json";
import { mockApi } from "./apiClient";

async function getApprovalQueue() {

    const response = await mockApi(approvalData, 400);

    return response.data;

}

export { getApprovalQueue };
