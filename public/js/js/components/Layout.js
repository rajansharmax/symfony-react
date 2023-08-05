import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Layout = (props) => {
    return (_jsxs(React.Fragment, { children: [_jsx(Header, {}), _jsx("main", { className: "flex-shrink-0", children: props.children }), _jsx(Footer, {})] }));
};
export default Layout;
//# sourceMappingURL=Layout.js.map