import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({

    name: "dashboard",

    initialState: {

        totalRequests: 12,

        pendingRequests: 4,

        approvedRequests: 6,

        rejectedRequests: 2,

        totalVendors: 24,

        totalRisks: 8,

        complianceIssues: 5,

        procurementTrend: [
            { month: "Jan", value: 4 },
            { month: "Feb", value: 6 },
            { month: "Mar", value: 5 },
            { month: "Apr", value: 8 },
            { month: "May", value: 7 },
            { month: "Jun", value: 10 }
        ],

        riskTrend: [
            { month: "Jan", value: 2 },
            { month: "Feb", value: 3 },
            { month: "Mar", value: 4 },
            { month: "Apr", value: 3 },
            { month: "May", value: 5 },
            { month: "Jun", value: 4 }
        ],

        complianceTrend: [
            { month: "Jan", value: 1 },
            { month: "Feb", value: 2 },
            { month: "Mar", value: 1 },
            { month: "Apr", value: 3 },
            { month: "May", value: 2 },
            { month: "Jun", value: 2 }
        ],

        departmentSpending: [
            { name: "IT", value: 45000 },
            { name: "HR", value: 20000 },
            { name: "Finance", value: 35000 },
            { name: "Operations", value: 28000 }
        ],

        recentActivities: [
            "Vendor Infosys approved",
            "Audit completed",
            "Risk report generated",
            "Compliance check passed"
        ]

    },

    reducers: {}

});

export default dashboardSlice.reducer;
