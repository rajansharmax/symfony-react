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
        <>
            {/* <Header /> */}
                {/* <!-- Layout wrapper --> */}
                <div className="layout-wrapper layout-content-navbar">
                    <div className="layout-container">
                        {/* <!-- Menu --> */}
                        {/* <!-- Layout container --> */}
                        <Sidebar />
                        <div className="layout-page">
                            {/* <!-- Navbar -->*/}
                                <Navbar />
                                {/* props = yeild */}
                                {/* <!-- Content wrapper --> */}
                                <div className="content-wrapper">
                                    {/* <!-- Content -->*/}
                                    {props.children}
                                    <Footer />
                                    <div className="content-backdrop fade"></div>
                                </div>
                        </div>
                            
                    </div>
                    {/* <!-- Overlay --> */}
                    <div className="layout-overlay layout-menu-toggle"></div>
                    {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
                    <div className="drag-target"></div>
                </div>
        </>
    );
};

export default Apple;