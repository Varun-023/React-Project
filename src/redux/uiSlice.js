import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({

    name: "ui",

    initialState: {

        darkMode: false,

        profile: {
            name: "Admin User",
            email: "admin@egrcp.com"
        },

        preferences: {
            emailNotifications: true,
            weeklyReports: true
        },

        globalSearch: ""

    },

    reducers: {

        toggleTheme: (state) => {

            state.darkMode = !state.darkMode;

        },

        setGlobalSearch: (state, action) => {

            state.globalSearch = action.payload;

        },

        updateProfile: (state, action) => {

            state.profile = action.payload;

        },

        updatePreferences: (state, action) => {

            state.preferences = action.payload;

        }

    }

});

export const { toggleTheme, setGlobalSearch, updateProfile, updatePreferences } = uiSlice.actions;

export default uiSlice.reducer;
