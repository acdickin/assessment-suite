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
var commonStyles_1 = require("./commonStyles");
var IconButton_1 = require("material-ui/IconButton");
var arrow_forward_1 = require("material-ui/svg-icons/navigation/arrow-forward");
var arrow_back_1 = require("material-ui/svg-icons/navigation/arrow-back");
var getNavigation = function (previusButton, nextButton) {
    return (React.createElement("div", { style: commonStyles_1.flexParentRowStyle },
        React.createElement("div", { style: commonStyles_1.flexRowItemStyle }, previusButton),
        React.createElement("div", { style: commonStyles_1.flexRowItemStyle }, nextButton)));
};
var VideosPager = (function (_super) {
    __extends(VideosPager, _super);
    function VideosPager(props) {
        var _this = _super.call(this, props) || this;
        _this.calculateState = function (props) {
            var offset = props.page * props.resultsPerPage;
            return {
                hasPrevious: props.page > 0,
                hasNext: (offset + props.resultsPerPage) < props.videos.length,
                offset: offset,
                pageItems: props.videos.slice(offset, offset + props.resultsPerPage)
            };
        };
        _this.state = _this.calculateState(props);
        return _this;
    }
    VideosPager.prototype.componentWillMount = function () {
        this.props.appBarTitle && this.props.appBarTitle(this.props.title);
    };
    VideosPager.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(this.calculateState(nextProps));
        this.props.appBarTitle && this.props.appBarTitle(this.props.title);
    };
    VideosPager.prototype.render = function () {
        var _this = this;
        var _a = this.props, cols = _a.cols, next = _a.next, prev = _a.prev;
        var pagerClickWrapper = function (action) {
            return function (event) {
                action(_this.props.page);
            };
        };
        var previusButton = React.createElement(IconButton_1.default, { disabled: !this.state.hasPrevious, onTouchTap: pagerClickWrapper(prev) },
            React.createElement(arrow_back_1.default, null));
        var nextButton = React.createElement(IconButton_1.default, { disabled: !this.state.hasNext, onTouchTap: pagerClickWrapper(next) },
            React.createElement(arrow_forward_1.default, null));
        var navigation = getNavigation(previusButton, nextButton);
        return (React.createElement("div", null,
            navigation,
            React.createElement(GridList_1.GridList, { cols: cols }, this.state.pageItems.map(function (tile) { return (React.createElement(react_router_1.Link, { key: tile.id, to: '/main/video/' + tile.id, cols: tile.featured ? 1 : 1 },
                React.createElement(GridList_1.GridTile, { title: tile.title },
                    React.createElement("img", { src: tile.img })))); })),
            navigation));
    };
    return VideosPager;
}(React.Component));
VideosPager.defaultProps = {
    resultsPerPage: 6,
    page: 0
};
exports.default = VideosPager;
;
//# sourceMappingURL=VideosPager.js.map