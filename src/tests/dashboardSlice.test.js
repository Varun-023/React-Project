import dashboardReducer from "../redux/dashboardSlice";

describe("dashboardSlice", () => {
    it("should handle initial state properly", () => {
        const actual = dashboardReducer(undefined, { type: "unknown" });
        expect(actual.totalRequests).toEqual(12);
        expect(actual.pendingRequests).toEqual(4);
        expect(actual.departmentSpending.length).toBeGreaterThan(0);
    });
});
