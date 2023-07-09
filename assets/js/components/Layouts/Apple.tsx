import React, { ReactElement } from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import Sidebar from "./Partials/Sidebar";
import Navbar from "./Partials/Navbar";

interface LayoutProps {
    children: ReactElement;
}
const Apple = (props:LayoutProps) => {
    return (
        <React.Fragment>
            <Header />
            {/* <!-- Layout container --> */}
                <div className="layout-page">
                    {/* <!-- Navbar -->*/}
                        <Sidebar />
                        <Navbar />
                        {/* props = yeild */}
                        <main className="">{props.children}</main>
                </div>
            <Footer />
        </React.Fragment>
    );
};

export default Apple;