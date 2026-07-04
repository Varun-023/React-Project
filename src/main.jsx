import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import ThemeWrapper from "./components/ThemeWrapper";
import ErrorBoundary from "./components/ErrorBoundary";
import Loader from "./components/Loader";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <Provider store={store}>

        <PersistGate loading={<Loader />} persistor={persistor}>

            <ThemeWrapper>

                <ErrorBoundary>

                    <App />

                </ErrorBoundary>

            </ThemeWrapper>

        </PersistGate>

    </Provider>

);
