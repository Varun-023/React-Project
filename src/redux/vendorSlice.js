import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vendors from "../mocks/vendors.json";
import { getVendors } from "../services/vendorServices";

export const fetchVendors = createAsyncThunk(

    "vendors/fetchVendors",

    async () => {

        const data = await getVendors();

        return data;

    }

);

const vendorSlice = createSlice({

    name: "vendors",

    initialState: {

        vendorList: vendors,

        loading: false,

        error: ""

    },

    reducers: {

        addVendor: (state) => {

            const exists = state.vendorList.find(

                (vendor) => vendor.name === "IBM"

            );

            if (!exists) {

                state.vendorList.push({

                    id: 4,

                    name: "IBM",

                    status: "New",

                    category: "IT"

                });

            }

        }

    },

    extraReducers: (builder) => {

        builder
            .addCase(fetchVendors.fulfilled, (state, action) => {

                state.vendorList = action.payload;

            });

    }

});

export const { addVendor } = vendorSlice.actions;

export default vendorSlice.reducer;
