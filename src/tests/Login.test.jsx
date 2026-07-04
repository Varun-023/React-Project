import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import authReducer from "../redux/authSlice";

function renderLogin() {

    const store = configureStore({
        reducer: {
            auth: authReducer
        }
    });

    return render(

        <Provider store={store}>

            <BrowserRouter>

                <Login />

            </BrowserRouter>

        </Provider>

    );

}

describe("Login Page", () => {

    test("renders login form", () => {

        renderLogin();

        expect(screen.getByText("PRCM System")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Enter Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

    });

});
