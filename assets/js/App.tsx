import React, { useContext } from "react";
import LoginPage from "./pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProducDetailPage";
import AuthContext from "./store/AuthContext";
import Home from "./pages/Home"

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
					</React.Fragment>
				) : null}

				<Route path="/login" element={<LoginPage />} />
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<LoginPage />} />

				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</React.Fragment>
	);
};

export default App;
