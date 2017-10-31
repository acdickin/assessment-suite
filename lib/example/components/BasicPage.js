"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
var BasicPage = (function (_super) {
    __extends(BasicPage, _super);
    function BasicPage() {
        return _super.apply(this, arguments) || this;
    }
    BasicPage.prototype.componentWillMount = function () {
        var title = this.props.title;
        this.props.appBarTitle && this.props.appBarTitle(title);
    };
    BasicPage.prototype.componentWillReceiveProps = function (nextProps) {
        var title = nextProps.title;
        this.props.appBarTitle && this.props.appBarTitle(title);
    };
    //<CardTitle title={subtitle} />
    BasicPage.prototype.render = function () {
        var page = this.props.page;
        return (React.createElement("div", null, this.props.children));
    };
    return BasicPage;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BasicPage;
