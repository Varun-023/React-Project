import { getReports } from "../../services/reportService";
import { mockApi } from "../../services/apiClient";

jest.mock("../../services/apiClient");

describe("reportService", () => {
    it("should fetch all reports", async () => {
        const mockReports = [{ id: 1, title: "Report 1" }, { id: 2, title: "Report 2" }];
        mockApi.mockResolvedValue({ data: mockReports });

        const result = await getReports();
        expect(result).toHaveLength(2);
        expect(result[1].title).toBe("Report 2");
        expect(mockApi).toHaveBeenCalled();
    });
});
