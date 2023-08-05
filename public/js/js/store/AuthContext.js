import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import axios from "axios";
const AuthContext = React.createContext({
    token: null,
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { },
    register: (token) => { },
});
export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const userIsLoggedIn = !!token;
    const loginHandler = (token) => {
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
            }
            else {
                console.error("Logout failed. Status code:", response.status);
            }
        }
        catch (error) {
            console.error("Logout failed:", error);
        }
    };
    const registerHandler = (token) => {
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
    return (_jsx(AuthContext.Provider, { value: contextValue, children: props.children }));
};
export default AuthContext;
//# sourceMappingURL=AuthContext.js.map