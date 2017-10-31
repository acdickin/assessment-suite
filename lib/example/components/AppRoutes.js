"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Home_1 = require("./Home");
var Assessments_1 = require("./Assessments");
var react_router_dom_1 = require("react-router-dom");
var AppRoutes = (function (_super) {
    __extends(AppRoutes, _super);
    function AppRoutes() {
        return _super.apply(this, arguments) || this;
    }
    AppRoutes.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }),
            React.createElement(react_router_dom_1.Route, { path: "/assessments", component: Assessments_1.default })));
    };
    return AppRoutes;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppRoutes;
