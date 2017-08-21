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
var react_router_dom_1 = require("react-router-dom");
var GridList_1 = require("material-ui/GridList");
var AssessmentsList = (function (_super) {
    __extends(AssessmentsList, _super);
    function AssessmentsList(props) {
        var _this = _super.call(this, props) || this;
        _this.handleItemClick = function (assessment) {
            var _a = _this.props, history = _a.history, match = _a.match;
            history.push(match.url + '/' + assessment.id);
            // this.setState({
            //   selectedId: assessment.id,
            //   mode: 'item'
            // });
        };
        _this.handleItemCancel = function (err, assessment) {
            var _a = _this.props, history = _a.history, match = _a.match;
            history.push(match.url);
            // this.setState({
            //   selectedId: null,
            //   mode: 'list'
            // });
        };
        _this.renderList = function (rProps) {
            var children = !Array.isArray(_this.props.children) ? [_this.props.children] : _this.props.children;
            var content = children.map(function (item, index) {
                return React.cloneElement(item, { key: index, mode: 'list', onCancel: _this.handleItemCancel, itemClick: _this.handleItemClick, selectedId: null });
            });
            return React.createElement(GridList_1.GridList, { cols: _this.props.cols, cellHeight: 180 }, content);
        };
        _this.renderAssessment = function (rProps) {
            var children = !Array.isArray(_this.props.children) ? [_this.props.children] : _this.props.children;
            var content = children.map(function (item, index) {
                return React.cloneElement(item, { key: index, mode: 'default', setPageTitle: _this.props.setPageTitle, onCancel: _this.handleItemCancel, itemClick: _this.handleItemClick, selectedId: parseInt(rProps.match.params.id) });
            });
            return React.createElement("div", null, content);
        };
        _this.state = {
            selectedId: null,
            mode: 'list'
        };
        return _this;
    }
    AssessmentsList.prototype.componentWillMount = function () {
    };
    AssessmentsList.prototype.componentWillUpdate = function (nextProps, nextState) {
    };
    AssessmentsList.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { path: '*/:id(\\d+)', render: this.renderAssessment }),
                React.createElement(react_router_dom_1.Route, { render: this.renderList })));
    };
    AssessmentsList.defaultProps = {
        cols: 2,
        setPageTitle: function (title) { }
    };
    return AssessmentsList;
}(React.Component));
exports.default = react_router_dom_1.withRouter(AssessmentsList);
