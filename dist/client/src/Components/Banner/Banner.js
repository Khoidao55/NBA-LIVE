"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const nba_logo_png_1 = __importDefault(require("../../../images/nba-logo.png"));
const Button_1 = __importDefault(require("../Button/Button"));
require("./Banner.css");
const Banner = () => {
    const [click, setClick] = react_1.useState(false);
    const [button, setButton] = react_1.useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    };
    react_1.useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsx("nav", Object.assign({ className: 'navbar' }, { children: jsx_runtime_1.jsxs("div", Object.assign({ className: 'navbar-container' }, { children: [jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: '/', className: 'navbar-logo', onClick: closeMobileMenu }, { children: jsx_runtime_1.jsx("img", { src: nba_logo_png_1.default, className: 'nba-logo' }, void 0) }), void 0), jsx_runtime_1.jsx("div", Object.assign({ className: 'menu-icon', onClick: handleClick }, { children: jsx_runtime_1.jsx("i", { className: click ? 'fas fa-times' : 'fas fa-bars' }, void 0) }), void 0), jsx_runtime_1.jsxs("ul", Object.assign({ className: click ? 'nav-menu active' : 'nav-menu disabled' }, { children: [jsx_runtime_1.jsx("li", Object.assign({ className: 'nav-item' }, { children: jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: '/', className: "nav-links", onClick: closeMobileMenu }, { children: "Home" }), void 0) }), void 0), jsx_runtime_1.jsx("li", Object.assign({ className: 'nav-item' }, { children: jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: '/players', className: "nav-links", onClick: closeMobileMenu }, { children: "Players" }), void 0) }), void 0), jsx_runtime_1.jsx("li", Object.assign({ className: 'nav-item' }, { children: jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: '/news', className: "nav-links", onClick: closeMobileMenu }, { children: "News" }), void 0) }), void 0), jsx_runtime_1.jsx("li", Object.assign({ className: 'nav-item' }, { children: jsx_runtime_1.jsx(react_router_dom_1.Link, Object.assign({ to: '/donate', className: "nav-links-mobile", onClick: closeMobileMenu }, { children: "DONATE" }), void 0) }), void 0)] }), void 0), button && jsx_runtime_1.jsx(Button_1.default, Object.assign({ buttonStyle: 'btn--outline' }, { children: "DONATE" }), void 0)] }), void 0) }), void 0) }, void 0));
};
exports.default = Banner;
//# sourceMappingURL=Banner.js.map