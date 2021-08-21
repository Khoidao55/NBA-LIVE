"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LiveFeed_1 = __importDefault(require("../LiveFeed/LiveFeed"));
const HomePage = () => {
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx(LiveFeed_1.default, {}, void 0) }, void 0));
};
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map