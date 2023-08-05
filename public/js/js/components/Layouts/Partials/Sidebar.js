import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import menuItems from "./menu/MenuItem";
const Sidebar = () => {
    const location = useLocation();
    const [collapsedItems, setCollapsedItems] = useState({});
    const toggleCollapse = (itemId) => {
        setCollapsedItems((prevState) => ({
            ...prevState,
            [itemId]: !prevState[itemId],
        }));
    };
    const isItemCollapsed = (itemId) => collapsedItems[itemId];
    const menuClasses = (itemId) => {
        const isItemCollapsing = collapsedItems[itemId] && !isItemCollapsed(itemId);
        return `menu-item ${isItemCollapsing ? "menu-item-animating menu-item-closing" : ""}`;
    };
    const isMenuItemActive = (to) => {
        return location.pathname.includes(to);
    };
    return (_jsxs("aside", { id: "layout-menu", className: "layout-menu menu-vertical menu bg-menu-theme", children: [_jsxs("div", { className: "app-brand demo", children: [_jsxs("a", { href: "index.html", className: "app-brand-link", children: [_jsx("span", { className: "app-brand-logo demo", children: _jsxs("svg", { width: "32", height: "22", viewBox: "0 0 32 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z", fill: "#7367F0" }), _jsx("path", { opacity: "0.06", fillRule: "evenodd", clipRule: "evenodd", d: "M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z", fill: "#161616" }), _jsx("path", { opacity: "0.06", fillRule: "evenodd", clipRule: "evenodd", d: "M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z", fill: "#161616" }), _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z", fill: "#7367F0" })] }) }), _jsx("span", { className: "app-brand-text demo menu-text fw-bold", children: "YardSignPlus" })] }), _jsxs(Link, { to: "#", className: "layout-menu-toggle menu-link text-large ms-auto", children: [_jsx("i", { className: "ti menu-toggle-icon d-none d-xl-block ti-sm align-middle" }), _jsx("i", { className: "ti ti-x d-block d-xl-none ti-sm align-middle" })] })] }), _jsx("div", { className: "menu-inner-shadow" }), _jsx("ul", { className: "menu-inner py-1", children: menuItems.map((menuItem) => (_jsxs("li", { className: `menu-item 
            ${menuClasses(menuItem.id)} 
            ${isMenuItemActive(`/${menuItem.url}`) ? "active" : ""} 
            ${isItemCollapsed(menuItem.id) ? "open" : ""}`, onClick: () => toggleCollapse(menuItem.id), children: [_jsxs(Link, { to: "#", className: "menu-link menu-toggle", children: [_jsx("i", { className: `menu-icon tf-icons ti ${menuItem.icon}` }), _jsx("div", { "data-i18n": menuItem.i18, children: menuItem.label }), _jsx("div", { className: "badge bg-label-primary rounded-pill ms-auto", children: menuItem.subItems.length })] }), _jsx("ul", { className: "menu-sub", children: menuItem.subItems.map((subItem) => (_jsx("li", { className: "menu-item", children: _jsx(Link, { to: `/admin/${menuItem.url}/${subItem.url}`, className: "menu-link", children: _jsx("div", { children: subItem.label }) }) }, subItem.id))) })] }, menuItem.id))) })] }));
};
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map