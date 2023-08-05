import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heart } from "react-feather";
const Footer = () => {
    return (
    // <!-- Footer -->
    _jsx("footer", { className: "content-footer footer bg-footer-theme", children: _jsx("div", { className: "container-xxl", children: _jsxs("p", { className: 'clearfix mb-0', children: [_jsxs("span", { className: 'float-md-start d-block d-md-inline-block mt-25', children: ["COPYRIGHT \u00A9 ", new Date().getFullYear(), ' ', _jsx("a", { href: '#', target: '_blank', rel: 'noopener noreferrer', children: "YardSignPlus" }), _jsx("span", { className: 'd-none d-sm-inline-block', children: ", All rights Reserved" })] }), _jsxs("span", { className: 'float-md-end d-none d-md-block', children: ["Hand-crafted & Made with", _jsx(Heart, { size: 14 })] })] }) }) }));
};
export default Footer;
//# sourceMappingURL=Footer.js.map