import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import Button from "../UI/Button";
const LoginPage = () => {
    const navigate = useNavigate();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const [isLoadingLogin, setLoadingLogin] = useState(false);
    const [errorLogin, setErrorLogin] = useState();
    const Auth = useContext(AuthContext);
    const getLoginApi = async () => {
        setErrorLogin(null);
        setLoadingLogin(true);
        try {
            const response = await fetch(`/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: loginRef.current?.value,
                    password: passwordRef.current?.value,
                }),
            });
            if (401 === response.status) {
                throw new Error("Wrong access. Try again!");
            }
            if (200 !== response.status) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            Auth.login(data.token);
            navigate("/products", { replace: true });
        }
        catch (error) {
            setErrorLogin(error.message);
            setLoadingLogin(false);
        }
    };
    const onSubmitHandler = (event) => {
        event.preventDefault();
        getLoginApi();
    };
    return (_jsx("section", { className: "vh-100", children: _jsx("div", { className: "container py-5 h-100", children: _jsx("div", { className: "row d-flex justify-content-center align-items-center h-100", children: _jsx("div", { className: "col col-xl-10", children: _jsx("div", { className: "card", children: _jsxs("div", { className: "row g-0", children: [_jsx("div", { className: "col-md-6 d-none d-md-block", children: _jsx("img", { src: "https://picsum.photos/1000/1200", alt: "login form", className: "img-fluid" }) }), _jsx("div", { className: "col-md-6 d-flex align-items-center", children: _jsx("div", { className: "card-body p-4 p-lg-5 text-black", children: _jsxs("form", { onSubmit: onSubmitHandler, children: [_jsx("div", { className: "d-flex align-items-center mb-3 pb-1", children: _jsx("span", { className: "h1 fw-bold mb-0", children: __APP__.NAME }) }), !!errorLogin ? (_jsx("div", { className: "text-danger", children: errorLogin })) : null, _jsx("h5", { className: "fw-normal mb-3 pb-3", style: { letterSpacing: "1px" }, children: "Sign into your account" }), _jsx("div", { className: "form-outline mb-4", children: _jsx("input", { type: "text", className: "form-control form-control-lg", placeholder: "Username", ref: loginRef }) }), _jsx("div", { className: "form-outline mb-4", children: _jsx("input", { type: "password", className: "form-control form-control-lg", placeholder: "Password", ref: passwordRef }) }), _jsx("div", { className: "pt-1 mb-4", children: _jsx(Button, { label: 'Login', isLoading: isLoadingLogin, isSubmitType: true }) })] }) }) })] }) }) }) }) }) }));
};
export default LoginPage;
//# sourceMappingURL=LoginPage.js.map