import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComplianceIssues } from "../services/complianceService";

export const fetchCompliance = createAsyncThunk(

    "compliance/fetchCompliance",

    async () => {

        const data = await getComplianceIssues();

        return data;

    }

);

const complianceSlice = createSlice({

    name: "compliance",

    initialState: {

        complianceList: [],

        loading: false,

        error: ""

    },

    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(fetchCompliance.fulfilled, (state, action) => {

                state.complianceList = action.payload;

            });

    }

});

export default complianceSlice.reducer;
