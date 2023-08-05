import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link, useParams } from "react-router-dom";
import AuthContext from "../store/AuthContext";
const ProductDetailPage = () => {
    const params = useParams();
    const [product, setProduct] = useState();
    const Auth = useContext(AuthContext);
    const { productId } = params;
    useEffect(() => {
        getProductApi();
    }, []);
    const getProductApi = async () => {
        const response = await fetch(`/api/product/${productId}`, {
            headers: {
                Authorization: `Bearer ${Auth.token}`,
            },
        });
        const data = await response.json();
        setProduct(data);
    };
    return (_jsx(Layout, { children: _jsxs("div", { className: "container", children: [_jsx(Link, { to: "/products", children: "Go back to overview" }), _jsx("h1", { className: "my-5", children: product?.name }), _jsxs("div", { className: "row", children: [_jsx("div", { className: "col-sm-12 col-md-4 mb-4", children: _jsx("img", { src: product?.image, className: "rounded d-block img-fluid", alt: "Image" }) }), _jsxs("div", { className: "col-sm-12 col-md-8", children: [_jsx("p", { children: product?.description }), _jsx("h3", { children: product?.price }), _jsxs("div", { className: "product-detail__article-number", children: ["Article number: ", product?.articleNumber] })] })] })] }) }));
};
export default ProductDetailPage;
//# sourceMappingURL=ProducDetailPage.js.map