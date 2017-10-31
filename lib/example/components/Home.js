"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super.apply(this, arguments) || this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h3", null, "Home Page"),
            React.createElement(react_router_dom_1.Link, { to: '/assessments' }, "To Assessments")));
    };
    return Home;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
