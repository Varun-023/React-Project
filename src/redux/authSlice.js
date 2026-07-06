import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signupUser } from "../services/authService";

export const signupAsync = createAsyncThunk(

    "auth/signupAsync",

    async (userData, { rejectWithValue }) => {

        try {

            const user = await signupUser(userData.name, userData.email, userData.password, userData.role);

            return user;

        }
        catch (error) {

            return rejectWithValue(error.message);

        }

    }

);

export const loginAsync = createAsyncThunk(

    "auth/loginAsync",

    async ({ email, password }, { rejectWithValue }) => {

        try {

            const user = await loginUser(email, password);

            return user;

        }
        catch (error) {

            return rejectWithValue(error.message);

        }

    }

);

const authSlice = createSlice({

    name: "auth",

    initialState: {

        isLoggedIn: false,

        user: null,

        error: ""

    },

    reducers: {

        login: (state, action) => {

            state.isLoggedIn = true;

            state.user = action.payload || {
                name: "Admin User",
                email: "admin@egrcp.com",
                role: "Administrator"
            };

            state.error = "";

        },

        logout: (state) => {

            state.isLoggedIn = false;

            state.user = null;

            state.error = "";

        },

        sessionExpired: (state) => {

            state.isLoggedIn = false;

            state.user = null;

        }

    },

    extraReducers: (builder) => {

        builder
            .addCase(loginAsync.fulfilled, (state, action) => {

                state.isLoggedIn = true;

                state.user = action.payload;

                state.error = "";

            })
            .addCase(loginAsync.rejected, (state, action) => {

                state.error = action.payload;

            })
            .addCase(signupAsync.fulfilled, (state, action) => {

                state.isLoggedIn = true;

                state.user = action.payload;

                state.error = "";

            })
            .addCase(signupAsync.rejected, (state, action) => {

                state.error = action.payload;

            });

    }

});

export const { login, logout, sessionExpired } = authSlice.actions;

export default authSlice.reducer;
