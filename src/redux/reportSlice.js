import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getReports } from "../services/reportService";

export const fetchReports = createAsyncThunk(

    "reports/fetchReports",

    async () => {

        const data = await getReports();

        return data;

    }

);

const reportSlice = createSlice({

    name: "reports",

    initialState: {

        reportList: [],

        loading: false,

        error: ""

    },

    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(fetchReports.fulfilled, (state, action) => {

                state.reportList = action.payload;

            });

    }

});

export default reportSlice.reducer;
