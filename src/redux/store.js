import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
// Custom storage for redux-persist to work flawlessly with Vite
const storage = {
    getItem: (key) => Promise.resolve(window.localStorage.getItem(key)),
    setItem: (key, value) => {
        window.localStorage.setItem(key, value);
        return Promise.resolve(value);
    },
    removeItem: (key) => {
        window.localStorage.removeItem(key);
        return Promise.resolve();
    }
};

import authReducer from "./authSlice";
import dashboardReducer from "./dashboardSlice";
import procurementReducer from "./procurementSlice";
import vendorReducer from "./vendorSlice";
import riskReducer from "./riskSlice";
import complianceReducer from "./complianceSlice";
import auditReducer from "./auditSlice";
import reportReducer from "./reportSlice";
import notificationReducer from "./notificationSlice";
import approvalReducer from "./approvalSlice";
import uiReducer from "./uiSlice";

const rootReducer = combineReducers({

    auth: authReducer,

    dashboard: dashboardReducer,

    procurement: procurementReducer,

    vendors: vendorReducer,

    risk: riskReducer,

    compliance: complianceReducer,

    audit: auditReducer,

    reports: reportReducer,

    notifications: notificationReducer,

    approval: approvalReducer,

    ui: uiReducer

});

const persistConfig = {

    key: "egrcp-root",

    version: 1,

    storage,

    whitelist: ["auth", "ui"]

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>

        getDefaultMiddleware({

            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/PAUSE",
                    "persist/PURGE",
                    "persist/REGISTER",
                    "persist/FLUSH"
                ]
            }

        }),

    devTools: true

});

export const persistor = persistStore(store);
