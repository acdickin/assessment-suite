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
var GridList_1 = require("material-ui/GridList");
var react_router_1 = require("react-router");
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(props) {
        return _super.call(this, props) || this;
    }
    HomePage.prototype.componentWillMount = function () {
        this.props.appBarTitle('Home');
    };
    HomePage.prototype.render = function () {
        var categories = this.props.categories;
        var cols = 2;
        return (React.createElement("div", null,
            React.createElement(GridList_1.GridList, { cols: cols, cellHeight: 250 }, categories.map(function (tile) { return (React.createElement(react_router_1.Link, { to: tile.path },
                React.createElement(GridList_1.GridTile, { key: tile.id, title: tile.title, titlePosition: 'bottom' },
                    React.createElement("img", { src: tile.img })))); }))));
    };
    return HomePage;
}(React.Component));
exports.default = HomePage;
;
