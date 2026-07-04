import vendorsData from "../mocks/vendors.json";
import { mockApi } from "./apiClient";

async function getVendors() {

    const response = await mockApi(vendorsData, 500);

    return response.data;

}

export { getVendors };