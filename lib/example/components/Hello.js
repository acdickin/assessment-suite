"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Hello World Blah Blah!!!"),
            React.createElement(react_router_1.Link, { to: "test" }, "Test asdf")));
    };
    return Hello;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hello;
