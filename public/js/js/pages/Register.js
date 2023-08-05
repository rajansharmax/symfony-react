import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
const Register = () => {
    const [isLoadingRegister, setLoadingRegister] = useState(false);
    const [errorRegister, setErrorRegister] = useState(null);
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoadingLogin, setLoadingLogin] = useState(false);
    const [errorLogin, setErrorLogin] = useState();
    const Auth = useContext(AuthContext);
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setErrorRegister(null);
        const username = usernameRef.current?.value ?? "";
        const email = emailRef.current?.value ?? "";
        const password = passwordRef.current?.value ?? "";
        try {
            setLoadingRegister(true);
            try {
                // Implement your registration logic here, e.g., sending a request to the server to register the user
                // For example:
                const response = await fetch("/register/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: username,
                        email: email,
                        password: password,
                    }),
                });
                // Check if the registration was successful
                if (response.ok) {
                    // Handle successful registration, e.g., set the token and log the user in
                    const data = await response.json();
                    Auth.login(data.token);
                    return;
                }
                // If the registration failed, get the error message from the response
                const responseData = await response.json();
                setErrorRegister(responseData.error); // Set the error message in the state
            }
            catch (error) {
                console.log(error);
                setErrorRegister("An error occurred during registration. Please try again later.");
                throw error;
            }
            finally {
                setLoadingRegister(false);
            }
            // navigate("admin/dashboard", { replace: true });
        }
        catch (error) {
            setErrorRegister(error.message);
            setLoadingRegister(false);
        }
    };
    const handleClick = (event) => {
        // Prevent the form from submitting
        event.preventDefault();
        return false;
    };
    useEffect(() => {
        if (Auth.isLoggedIn) {
            navigate("/admin/dashboard");
        }
    }, [Auth.isLoggedIn, navigate]);
    return (_jsx("div", { className: "authentication-wrapper authentication-cover authentication-bg", children: _jsxs("div", { className: "authentication-inner row", children: [_jsx("div", { className: "d-none d-lg-flex col-lg-7 p-0", children: _jsxs("div", { className: "auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center", children: [_jsx("img", { src: "../../assets/img/illustrations/auth-register-illustration-light.png", alt: "auth-register-cover", className: "img-fluid my-5 auth-illustration", "data-app-light-img": "illustrations/auth-register-illustration-light.png", "data-app-dark-img": "illustrations/auth-register-illustration-dark.png" }), _jsx("img", { src: "../../assets/img/illustrations/bg-shape-image-light.png", alt: "auth-register-cover", className: "platform-bg", "data-app-light-img": "illustrations/bg-shape-image-light.png", "data-app-dark-img": "illustrations/bg-shape-image-dark.png" })] }) }), _jsx("div", { className: "d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4", children: _jsxs("div", { className: "w-px-400 mx-auto", children: [_jsx("div", { className: "app-brand mb-4", children: _jsx("a", { href: "index.html", className: "app-brand-link gap-2", children: _jsx("span", { className: "app-brand-logo demo", children: _jsxs("svg", { width: "32", height: "22", viewBox: "0 0 32 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z", fill: "#7367F0" }), _jsx("path", { opacity: "0.06", fillRule: "evenodd", clipRule: "evenodd", d: "M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z", fill: "#161616" }), _jsx("path", { opacity: "0.06", fillRule: "evenodd", clipRule: "evenodd", d: "M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z", fill: "#161616" }), _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z", fill: "#7367F0" })] }) }) }) }), _jsx("h3", { className: "mb-1 fw-bold", children: "Adventure starts here \uD83D\uDE80" }), _jsx("p", { className: "mb-4", children: "Make your app management easy and fun!" }), _jsxs("form", { id: "formAuthentication", className: "mb-3", onSubmit: onSubmitHandler, method: "POST", children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { htmlFor: "username", className: "form-label", children: "Username" }), _jsx("input", { type: "text", className: "form-control", id: "username", name: "username", placeholder: "Enter your username", autoFocus: true, ref: usernameRef, required: true })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { htmlFor: "email", className: "form-label", children: "Email" }), _jsx("input", { type: "email", className: "form-control", id: "email", name: "email", placeholder: "Enter your email", ref: emailRef, required: true })] }), _jsxs("div", { className: "mb-3 form-password-toggle", children: [_jsx("label", { className: "form-label", htmlFor: "password", children: "Password" }), _jsxs("div", { className: "input-group input-group-merge", children: [_jsx("input", { type: "password", id: "password", className: "form-control", name: "password", placeholder: "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7", "aria-describedby": "password", ref: passwordRef, required: true }), _jsx("span", { className: "input-group-text cursor-pointer", children: _jsx("i", { className: "ti ti-eye-off" }) })] })] }), _jsx("div", { className: "mb-3", children: _jsxs("div", { className: "form-check", children: [_jsx("input", { className: "form-check-input", type: "checkbox", id: "terms-conditions", name: "terms" }), _jsxs("label", { className: "form-check-label", htmlFor: "terms-conditions", children: ["I agree to", _jsx("a", { href: "#", children: "privacy policy & terms" })] })] }) }), _jsx("button", { className: "btn btn-primary d-grid w-100", children: "Sign up" })] }), errorRegister && _jsx("p", { className: "text-danger", children: errorRegister }), _jsxs("p", { className: "text-center", children: [_jsx("span", { children: "Already have an account?" }), _jsx(Link, { to: `/`, children: _jsx("span", { children: "Sign in instead" }) })] }), _jsx("div", { className: "divider my-4", children: _jsx("div", { className: "divider-text", children: "or" }) }), _jsxs("div", { className: "d-flex justify-content-center", children: [_jsx("a", { href: "#", className: "btn btn-icon btn-label-facebook me-3", children: _jsx("i", { className: "tf-icons fa-brands fa-facebook-f fs-5" }) }), _jsx("a", { href: "#", className: "btn btn-icon btn-label-google-plus me-3", children: _jsx("i", { className: "tf-icons fa-brands fa-google fs-5" }) }), _jsx("a", { href: "#", className: "btn btn-icon btn-label-twitter", children: _jsx("i", { className: "tf-icons fa-brands fa-twitter fs-5" }) })] })] }) })] }) }));
};
export default Register;
//# sourceMappingURL=Register.js.map