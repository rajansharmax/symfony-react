import React, { ReactElement, useState } from "react";
import axios from "axios";


interface AuthContextProviderProps {
	children: ReactElement;
}

interface IAutoContext {
	token: string | null;
	isLoggedIn: boolean;
	login: (token: string | null) => void;
	logout: () => void;
  	register: (token: string | null) => void;
}

const AuthContext = React.createContext<IAutoContext>({
	token: null,
	isLoggedIn: false,
	login: (token: string | null) => {},
	logout: () => {},
  	register: (token: string | null) => {},
});

export const AuthContextProvider = (props: AuthContextProviderProps) => {
	const [token, setToken] = useState(localStorage.getItem("token"));

	const userIsLoggedIn = !!token;

	const loginHandler = (token: string | null) => {
		setToken(token);
		localStorage.setItem("token", token ?? "");
	};

	const logoutHandler = () => {
		setToken(null);
		localStorage.removeItem("token");
		handleLogout();
	};

	const handleLogout = async () => {
		try {
			const response = await axios.post("/api/logout"); // Send a POST request to the logout endpoint
			// After successful logout, redirect the user to the home page
			// Check the status code to determine if the logout was successful
			if (response.status === 200) {
				console.log("Logout successful.");
				// Optionally, you can redirect the user to the home page after logout
				window.location.href = "/";
			} else {
				console.error("Logout failed. Status code:", response.status);
			}
			
		} catch (error) {
			console.error("Logout failed:", error);
		}
	};

	const registerHandler = (token: string | null) => {
		setToken(token);
		localStorage.setItem("token", token ?? "");
	};

	const contextValue = {
		token: token,
		isLoggedIn: userIsLoggedIn,
		login: loginHandler,
		logout: logoutHandler,
    	register: registerHandler,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
