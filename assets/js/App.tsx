import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProducDetailPage";
import AuthContext from "./store/AuthContext";
import Home from "./pages/Home"
import AdminLogin from "./pages/Admin/Login";
import Dashboard from './pages/Admin/Dashboard'
import Permissions from "./pages/Admin/Permissions";

const App = () => {
	const Auth = useContext(AuthContext);

	return (
		<React.Fragment>
			<Routes>
				{Auth.isLoggedIn ? (
					<React.Fragment>
						<Route path="/products" element={<ProductListPage />} />
						<Route
							path="/products/:productId"
							element={<ProductDetailPage />}
						/>
						<Route path="/admin/dashboard" element={<Dashboard />} />
						<Route path="/admin/rolesPerms/permissions" element={<Permissions />} />
					</React.Fragment>
				) : null}

				<Route path="/login" element={<LoginPage />} />
				<Route path="/admin/login" element={<AdminLogin />} />
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;
