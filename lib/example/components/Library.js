"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var Library = (function (_super) {
    __extends(Library, _super);
    function Library() {
        return _super.apply(this, arguments) || this;
    }
    Library.prototype.componentWillMount = function () {
        this.props.appBarTitle('Home');
    };
    Library.prototype.render = function () {
        return (React.createElement("h1", null, "Library"));
    };
    return Library;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Library;
