import { getVendors } from "../../services/vendorServices";
import { mockApi } from "../../services/apiClient";

jest.mock("../../services/apiClient");

describe("vendorServices", () => {
    it("should fetch all vendors", async () => {
        const mockVendors = [{ id: 1, name: "Vendor A" }, { id: 2, name: "Vendor B" }];
        mockApi.mockResolvedValue({ data: mockVendors });

        const result = await getVendors();
        expect(result).toHaveLength(2);
        expect(result[0].name).toBe("Vendor A");
        expect(mockApi).toHaveBeenCalled();
    });
});
