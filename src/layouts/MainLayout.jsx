import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout() {

    return (

        <div>

            <Header />

            <Sidebar />

            <div
                className="main-content"
                style={{
                    marginLeft: "240px",
                    padding: "30px",
                    minHeight: "80vh"
                }}
            >
                <Outlet />
            </div>

            <Footer />

        </div>

    );

}

export default MainLayout;