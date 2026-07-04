import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProcurementRequests } from "../services/procurementService";

export const fetchProcurement = createAsyncThunk(

    "procurement/fetchProcurement",

    async () => {

        const data = await getProcurementRequests();

        return data;

    }

);

const procurementSlice = createSlice({

    name: "procurement",

    initialState: {

        requests: [],

        loading: false,

        error: ""

    },

    reducers: {

        addRequest: (state, action) => {

            state.requests.push(action.payload);

        }

    },

    extraReducers: (builder) => {

        builder
            .addCase(fetchProcurement.pending, (state) => {

                state.loading = true;

                state.error = "";

            })
            .addCase(fetchProcurement.fulfilled, (state, action) => {

                state.loading = false;

                state.requests = action.payload;

            })
            .addCase(fetchProcurement.rejected, (state) => {

                state.loading = false;

                state.error = "Failed to load procurement requests";

            });

    }

});

export const { addRequest } = procurementSlice.actions;

export default procurementSlice.reducer;
