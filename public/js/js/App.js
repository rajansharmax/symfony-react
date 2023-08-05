import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProducDetailPage";
import AuthContext from "./store/AuthContext";
import Home from "./pages/Home";
import AdminLogin from "./pages/Admin/Login";
import Dashboard from './pages/Admin/Dashboard';
import Permissions from "./pages/Admin/Permissions";
const App = () => {
    const Auth = useContext(AuthContext);
    return (_jsx(React.Fragment, { children: _jsxs(Routes, { children: [Auth.isLoggedIn ? (_jsxs(React.Fragment, { children: [_jsx(Route, { path: "/products", element: _jsx(ProductListPage, {}) }), _jsx(Route, { path: "/products/:productId", element: _jsx(ProductDetailPage, {}) }), _jsx(Route, { path: "/admin/dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/admin/rolesPerms/permissions", element: _jsx(Permissions, {}) })] })) : null, _jsx(Route, { path: "/login", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/superadmin/login", element: _jsx(AdminLogin, {}) }), _jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }) }));
};
export default App;
//# sourceMappingURL=App.js.map