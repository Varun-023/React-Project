import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRisks } from "../services/riskService";

export const fetchRisks = createAsyncThunk(

    "risk/fetchRisks",

    async () => {

        const data = await getRisks();

        return data;

    }

);

const riskSlice = createSlice({

    name: "risk",

    initialState: {

        riskList: [],

        loading: false,

        error: ""

    },

    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(fetchRisks.pending, (state) => {

                state.loading = true;

            })
            .addCase(fetchRisks.fulfilled, (state, action) => {

                state.loading = false;

                state.riskList = action.payload;

            })
            .addCase(fetchRisks.rejected, (state) => {

                state.loading = false;

                state.error = "Failed to load risks";

            });

    }

});

export default riskSlice.reducer;
