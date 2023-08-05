import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import AuthContext from "../../../store/AuthContext";
const Header = () => {
    const Auth = useContext(AuthContext);
    return (_jsx("header", { className: "pb-3 mb-4 mt-5 border-bottom", children: _jsx("div", { className: "container d-flex justify-content-between", children: _jsx("a", { href: "/", className: "d-flex align-items-center text-dark text-decoration-none", children: _jsx("span", { className: "fs-4", children: __APP__.NAME }) }) }) }));
};
export default Header;
//# sourceMappingURL=Header.js.map