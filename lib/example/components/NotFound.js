"use strict";
var react_router_1 = require("react-router");
var React = require("react");
var NotFound = function () {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Page Not Found"),
        React.createElement("p", null,
            React.createElement(react_router_1.Link, { to: '/' }, "Home"))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotFound;
