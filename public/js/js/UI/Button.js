import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const Button = (props) => {
    return (_jsx("button", { className: classNames("btn btn-dark btn-lg btn-block", {
            "is-loading": props.isLoading,
        }), type: props.isSubmitType ? "submit" : "button", children: props.isLoading ? "Loading..." : props.label }));
};
export default Button;
//# sourceMappingURL=Button.js.map