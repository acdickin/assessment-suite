"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Resources = (function (_super) {
    __extends(Resources, _super);
    function Resources() {
        return _super.apply(this, arguments) || this;
    }
    Resources.prototype.componentWillMount = function () {
        this.props.appBarTitle('Resources');
    };
    Resources.prototype.render = function () {
        return (React.createElement("h1", null, "Resources"));
    };
    return Resources;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Resources;
