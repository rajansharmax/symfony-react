import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import "./scss/main.scss";
import App from "./js/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./js/store/AuthContext";
const container = document.getElementById("app");
if (!container) {
    throw new Error("Target container 'app' not found in the DOM.");
}
const root = createRoot(container);
root.render(_jsx(AuthContextProvider, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//# sourceMappingURL=main.js.map