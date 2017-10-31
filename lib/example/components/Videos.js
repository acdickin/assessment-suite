"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var GridList_1 = require("material-ui/GridList");
var react_router_1 = require("react-router");
var Videos = (function (_super) {
    __extends(Videos, _super);
    function Videos() {
        return _super.apply(this, arguments) || this;
    }
    Videos.prototype.componentWillMount = function () {
        this.props.appBarTitle && this.props.appBarTitle(this.props.title);
    };
    Videos.prototype.componentWillReceiveProps = function (nextProps) {
        this.props.appBarTitle && this.props.appBarTitle(this.props.title);
    };
    Videos.prototype.render = function () {
        var _a = this.props, videos = _a.videos, cols = _a.cols;
        return (React.createElement("div", null,
            React.createElement(GridList_1.GridList, { cols: cols }, videos.map(function (tile) { return (React.createElement(react_router_1.Link, { key: tile.id, to: '/main/videos/' + tile.id, cols: tile.featured ? 1 : 1 },
                React.createElement(GridList_1.GridTile, { title: tile.title },
                    React.createElement("img", { src: tile.img })))); }))));
    };
    return Videos;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Videos;
;
