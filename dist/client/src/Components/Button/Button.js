"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./Button.css");
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];
const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];
    console.log(checkButtonSize);
    return (jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: '/signup', className: 'btn-mobile' }, { children: jsx_runtime_1.jsx("button", Object.assign({ className: `btn ${checkButtonStyle} ${checkButtonSize}`, onClick: onClick, type: type }, { children: children }), void 0) }), void 0));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map