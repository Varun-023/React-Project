import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAudits } from "../services/auditService";

export const fetchAudits = createAsyncThunk(

    "audit/fetchAudits",

    async () => {

        const data = await getAudits();

        return data;

    }

);

const auditSlice = createSlice({

    name: "audit",

    initialState: {

        audits: [],

        loading: false,

        error: ""

    },

    reducers: {},

    extraReducers: (builder) => {

        builder
            .addCase(fetchAudits.fulfilled, (state, action) => {

                state.audits = action.payload;

            });

    }

});

export default auditSlice.reducer;
