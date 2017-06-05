"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var _1 = require("../../");
var FriendShip = _1.assessments.FriendShip;
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCancel = function (error, assessment) {
            alert("you clicked cancel");
        };
        _this.handleSubmit = function (error, assessment) {
            alert("you clicked SUBMIT");
        };
        return _this;
    }
    Home.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Home Page"),
            React.createElement(react_router_1.Link, { to: "/main/assessments" }, "Assessments List"),
            React.createElement(FriendShip, { onSubmit: this.handleSubmit, onCancel: this.handleCancel })));
    };
    return Home;
}(React.Component));
exports.default = Home;
