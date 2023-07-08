import React, { ReactElement } from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import Sidebar from "./Partials/Sidebar";

interface LayoutProps {
    children: ReactElement;
}
const Apple = (props:LayoutProps) => {
    return (
        <React.Fragment>
            <Header />
            <Sidebar />
                {/* props = yeild */}
                <main className="flex-shrink-0">{props.children}</main>
            <Footer />
        </React.Fragment>
    );
};

export default Apple;