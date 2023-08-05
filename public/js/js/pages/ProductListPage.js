import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import AuthContext from "../store/AuthContext";
const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const Auth = useContext(AuthContext);
    useEffect(() => {
        getProductsApi();
    }, []);
    const getProductsApi = async () => {
        const response = await fetch("/api/products", {
            headers: {
                Authorization: `Bearer ${Auth.token}`,
            },
        });
        const data = await response.json();
        setProducts(data);
    };
    return (_jsx(Layout, { children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "mb-5", children: "Product list" }), _jsxs("table", { className: "table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Image" }), _jsx("th", { children: "Article number" }), _jsx("th", { children: "Name" }), _jsx("th", { children: "Price" }), _jsx("th", {})] }) }), _jsx("tbody", { children: products.map((product) => (_jsxs("tr", { children: [_jsx("th", { className: "product-list__image", children: _jsx("img", { src: product.image, className: "rounded d-block", alt: "Image" }) }), _jsx("td", { children: product.articleNumber }), _jsx("td", { className: "product-list__name", children: product.name }), _jsx("td", { children: product.price }), _jsx("th", { className: "text-end", children: _jsxs(Link, { to: `/products/${product.id}`, className: "btn btn-primary", children: [_jsx("i", { className: "bi bi-eye-fill" }), " Detail"] }) })] }, product.id))) })] })] }) }));
};
export default ProductListPage;
//# sourceMappingURL=ProductListPage.js.map