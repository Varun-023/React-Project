import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getNotifications } from "../services/notificationService";

export const fetchNotifications = createAsyncThunk(

    "notifications/fetchNotifications",

    async () => {

        const data = await getNotifications();

        return data;

    }

);

const notificationSlice = createSlice({

    name: "notifications",

    initialState: {

        notifications: [],

        loading: false

    },

    reducers: {

        markAsRead: (state, action) => {

            const item = state.notifications.find(

                (notification) => notification.id === action.payload

            );

            if (item) {
                item.read = true;
            }

        },

        markAllRead: (state) => {

            state.notifications.forEach((notification) => {

                notification.read = true;

            });

        }

    },

    extraReducers: (builder) => {

        builder
            .addCase(fetchNotifications.fulfilled, (state, action) => {

                state.notifications = action.payload;

            });

    }

});

export const { markAsRead, markAllRead } = notificationSlice.actions;

export default notificationSlice.reducer;
