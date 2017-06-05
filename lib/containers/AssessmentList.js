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
var AssessmentList = (function (_super) {
    __extends(AssessmentList, _super);
    function AssessmentList(props) {
        var _this = _super.call(this, props) || this;
        _this.handleItemClick = function (assessment) {
            var itemClick = _this.props.itemClick;
            return function (event) {
                event.preventDefault();
                event.stopPropagation();
                itemClick(assessment);
            };
        };
        console.log(props);
        return _this;
    }
    AssessmentList.prototype.componentDidMount = function () {
        var setPageTitle = this.props.setPageTitle;
        setPageTitle("Assessments");
    };
    AssessmentList.prototype.render = function () {
        var _this = this;
        var assessments = this.props.assessments;
        return React.createElement("div", null,
            React.createElement(GridList_1.GridList, { cols: 2, cellHeight: 200 }, assessments.map(function (assess) {
                return (React.createElement(GridList_1.GridTile, { onTouchTap: _this.handleItemClick(assess), title: assess.title, key: "assess" + assess.id },
                    React.createElement("img", { src: assess.image })));
            })));
    };
    return AssessmentList;
}(React.Component));
AssessmentList.defaultProps = {
    setPageTitle: function (title) { }
};
exports.default = AssessmentList;
