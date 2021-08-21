"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const LiveTeam_1 = __importDefault(require("../LiveTeam/LiveTeam"));
const axios_1 = __importDefault(require("axios"));
require("./LiveFeed.css");
const LiveFeed = () => {
    const [data, setData] = react_1.useState([]);
    react_1.useEffect(() => {
        const fetchLiveData = async () => {
            let liveData = await axios_1.default.get('/getLiveData');
            setData(liveData.data);
        };
        fetchLiveData();
    }, []);
    console.log(data);
    if (data.length !== 0) {
        const homeTeam = data.games[0].hTeam;
        const awayTeam = data.games[0].vTeam;
        return (jsx_runtime_1.jsxs("div", Object.assign({ className: "livefeed-container" }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: "home-team" }, { children: jsx_runtime_1.jsx(LiveTeam_1.default, { teamName: homeTeam.fullName, logo: homeTeam.logo }, void 0) }), void 0), jsx_runtime_1.jsx("h1", Object.assign({ className: 'home-points' }, { children: homeTeam.score.points }), void 0), jsx_runtime_1.jsx("h2", { children: "VS" }, void 0), jsx_runtime_1.jsx("h1", Object.assign({ className: 'away-points' }, { children: awayTeam.score.points }), void 0), jsx_runtime_1.jsx("div", Object.assign({ className: "away-team" }, { children: jsx_runtime_1.jsx(LiveTeam_1.default, { teamName: awayTeam.fullName, logo: awayTeam.logo }, void 0) }), void 0)] }), void 0));
    }
    else {
        return (jsx_runtime_1.jsx("div", { children: "Loading..." }, void 0));
    }
};
exports.default = LiveFeed;
//# sourceMappingURL=LiveFeed.js.map