import riskData from "../mocks/riskData.json";
import { mockApi } from "./apiClient";

async function getRisks() {

    const response = await mockApi(riskData, 500);

    return response.data;

}

export { getRisks };
