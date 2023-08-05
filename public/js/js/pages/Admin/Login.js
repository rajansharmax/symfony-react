import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
const Login = () => {
    const navigate = useNavigate();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoadingLogin, setLoadingLogin] = useState(false);
    const [errorLogin, setErrorLogin] = useState();
    const Auth = useContext(AuthContext);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        getloginApi();
    };
    const getloginApi = async () => {
        setErrorLogin(null);
        console.log(loginRef, passwordRef);
        try {
            const response = await fetch('/api/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginRef.current?.value,
                    password: passwordRef.current?.value
                }),
            });
            if (401 === response.status) {
                throw new Error('Wrong access. Try Again!');
            }
            if (200 !== response.status) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            Auth.login(data.token);
            navigate('admin/dashboard', { replace: true });
        }
        catch (error) {
            setErrorLogin(error.message);
            setLoadingLogin(false);
        }
    };
    useEffect(() => {
        if (Auth.isLoggedIn) {
            navigate("/admin/dashboard");
        }
    }, [Auth.isLoggedIn, navigate]);
    return (_jsx("div", { className: "container-xxl", children: _jsx("div", { className: "authentication-wrapper authentication-basic container-p-y", children: _jsx("div", { className: "authentication-inner py-4", children: _jsx("div", { className: "card", children: _jsxs("div", { className: "card-body", children: [_jsx("div", { className: "app-brand justify-content-center mb-4 mt-2", children: _jsxs("a", { href: "index.html", className: "app-brand-link gap-2", children: [_jsx("span", { className: "app-brand-logo demo", children: _jsxs("svg", { width: "32", height: "22", viewBox: "0 0 32 22", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z", fill: "#7367F0" }), _jsx("path", { opacity: "0.06", fillRule: "evenodd", clipRule: "evenodd", d: "M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z", fill: "#161616" }), _jsx("path", { opacity: "0.06", fillRule: "evenodd", clipRule: "evenodd", d: "M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z", fill: "#161616" }), _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z", fill: "#7367F0" })] }) }), _jsx("span", { className: "app-brand-text demo text-body fw-bold ms-1", children: "Vuexy" })] }) }), _jsx("h4", { className: "mb-1 pt-2", children: "Welcome to Vuexy! \uD83D\uDC4B" }), _jsx("p", { className: "mb-4", children: "Please sign-in to your account and start the adventure" }), _jsxs("form", { id: "formAuthentication", className: "mb-3", onSubmit: onSubmitHandler, children: [_jsxs("div", { className: "mb-3", children: [!!errorLogin ? (_jsx("div", { className: "text-danger", children: errorLogin })) : null, _jsx("label", { htmlFor: "email", className: "form-label", children: "Email or Username" }), _jsx("input", { type: "text", className: "form-control", id: "email", name: "email-username", placeholder: "Enter your email or username", ref: loginRef, autoFocus: true })] }), _jsxs("div", { className: "mb-3 form-password-toggle", children: [_jsxs("div", { className: "d-flex justify-content-between", children: [_jsx("label", { className: "form-label", htmlFor: "password", children: "Password" }), _jsx("a", { href: "auth-forgot-password-basic.html", children: _jsx("small", { children: "Forgot Password?" }) })] }), _jsxs("div", { className: "input-group input-group-merge", children: [_jsx("input", { type: "password", id: "password", className: "form-control", name: "password", placeholder: "\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7\u00B7", "aria-describedby": "password", ref: passwordRef }), _jsx("span", { className: "input-group-text cursor-pointer", children: _jsx("i", { className: "ti ti-eye-off" }) })] })] }), _jsx("div", { className: "mb-3", children: _jsxs("div", { className: "form-check", children: [_jsx("input", { className: "form-check-input", type: "checkbox", id: "remember-me" }), _jsxs("label", { className: "form-check-label", htmlFor: "remember-me", children: [" ", "Remember Me", " "] })] }) }), _jsx("div", { className: "mb-3", children: _jsx("button", { className: "btn btn-primary d-grid w-100", type: "submit", children: "Sign in" }) })] }), _jsxs("p", { className: "text-center", children: [_jsx("span", { children: "New on our platform?" }), _jsx(Link, { to: "/register", children: _jsx("span", { children: "Create an account" }) })] }), _jsx("div", { className: "divider my-4", children: _jsx("div", { className: "divider-text", children: "or" }) }), _jsxs("div", { className: "d-flex justify-content-center", children: [_jsx("a", { href: "#", className: "btn btn-icon btn-label-facebook me-3", children: _jsx("i", { className: "tf-icons fa-brands fa-facebook-f fs-5" }) }), _jsx("a", { href: "#", className: "btn btn-icon btn-label-google-plus me-3", children: _jsx("i", { className: "tf-icons fa-brands fa-google fs-5" }) }), _jsx("a", { href: "#", className: "btn btn-icon btn-label-twitter", children: _jsx("i", { className: "tf-icons fa-brands fa-twitter fs-5" }) })] })] }) }) }) }) }));
};
export default Login;
//# sourceMappingURL=Login.js.map