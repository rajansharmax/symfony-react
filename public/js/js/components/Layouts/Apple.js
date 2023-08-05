import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Footer from "./Partials/Footer";
import Sidebar from "./Partials/Sidebar";
import Navbar from "./Partials/Navbar";
const Apple = (props) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "layout-wrapper layout-content-navbar", children: [_jsxs("div", { className: "layout-container", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "layout-page", children: [_jsx(Navbar, {}), _jsxs("div", { className: "content-wrapper", children: [props.children, _jsx(Footer, {}), _jsx("div", { className: "content-backdrop fade" })] })] })] }), _jsx("div", { className: "layout-overlay layout-menu-toggle" }), _jsx("div", { className: "drag-target" })] }) }));
};
export default Apple;
//# sourceMappingURL=Apple.js.map