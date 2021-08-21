"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
require("./App.css");
const HomePage_1 = __importDefault(require("./Components/HomePage/HomePage"));
const Banner_1 = __importDefault(require("./Components/Banner/Banner"));
const App = () => {
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsxs(react_router_dom_1.BrowserRouter, { children: [jsx_runtime_1.jsx(Banner_1.default, {}, void 0), jsx_runtime_1.jsx(react_router_dom_1.Switch, { children: jsx_runtime_1.jsx(react_router_dom_1.Route, Object.assign({ path: "/", exact: true }, { children: jsx_runtime_1.jsx(HomePage_1.default, {}, void 0) }), void 0) }, void 0)] }, void 0) }, void 0));
};
exports.default = App;
//# sourceMappingURL=App.js.map