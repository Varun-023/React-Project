import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import Vendors from "../pages/Vendors";
import vendorReducer from "../redux/vendorSlice";
import authReducer from "../redux/authSlice";
import notificationReducer from "../redux/notificationSlice";
import uiReducer from "../redux/uiSlice";

function renderVendors() {

    const store = configureStore({
        reducer: {
            vendors: vendorReducer,
            auth: authReducer,
            notifications: notificationReducer,
            ui: uiReducer
        }
    });

    return render(

        <Provider store={store}>

            <BrowserRouter>

                <Vendors />

            </BrowserRouter>

        </Provider>

    );

}

describe("Vendors Page", () => {

    test("renders vendor table headers", () => {

        renderVendors();

        expect(screen.getByText("Vendor Name")).toBeInTheDocument();
        expect(screen.getByText("Add Vendor")).toBeInTheDocument();

    });

});
