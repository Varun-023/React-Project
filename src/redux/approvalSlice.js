import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getApprovalQueue } from "../services/approvalService";

export const fetchApprovals = createAsyncThunk(

    "approval/fetchApprovals",

    async () => {

        const data = await getApprovalQueue();

        return data;

    }

);

const approvalSlice = createSlice({

    name: "approval",

    initialState: {

        queue: [],

        filter: "All",

        loading: false

    },

    reducers: {

        setApprovalFilter: (state, action) => {

            state.filter = action.payload;

        },

        updateApprovalStatus: (state, action) => {

            const item = state.queue.find(

                (row) => row.id === action.payload.id

            );

            if (item) {
                item.status = action.payload.status;
            }

        }

    },

    extraReducers: (builder) => {

        builder
            .addCase(fetchApprovals.fulfilled, (state, action) => {

                state.queue = action.payload;

            });

    }

});

export const { setApprovalFilter, updateApprovalStatus } = approvalSlice.actions;

export default approvalSlice.reducer;
