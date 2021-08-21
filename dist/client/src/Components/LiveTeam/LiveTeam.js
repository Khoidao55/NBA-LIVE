"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./LiveTeam.css");
const LiveTeam = ({ teamName, logo }) => {
    return (jsx_runtime_1.jsxs("div", Object.assign({ className: 'team-stat' }, { children: [jsx_runtime_1.jsx("img", { src: logo, className: 'team-logo' }, void 0), jsx_runtime_1.jsx("p", { children: teamName }, void 0)] }), void 0));
};
exports.default = LiveTeam;
//# sourceMappingURL=LiveTeam.js.map