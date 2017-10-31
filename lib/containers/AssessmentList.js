"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
        _this.registerWidthListenter = function () {
            var _timeOutResizeId = null;
            window.onresize = function () {
                if (_timeOutResizeId) {
                    clearTimeout(_timeOutResizeId);
                }
                _timeOutResizeId = setTimeout(function () {
                    var newCols = _this.handleGetCols();
                    if (_this.state.numCols !== newCols) {
                        _this.setState({
                            numCols: newCols
                        });
                    }
                }, 300);
            };
        };
        _this.handleGetCols = function () {
            var cols = _this.props.numCols;
            if (!cols) {
                cols = _this.handleColCount();
            }
            console.log(cols);
            return cols;
        };
        _this.handleColCount = function () {
            var width = window.innerWidth;
            if (!width) {
                return 1;
            }
            if (width > 900) {
                return 4;
            }
            if (width > 600) {
                return 2;
            }
            return 1;
        };
        _this.state = {
            numCols: _this.handleGetCols()
        };
        return _this;
    }
    AssessmentList.prototype.componentDidMount = function () {
        var setPageTitle = this.props.setPageTitle;
        setPageTitle("Assessments");
        !this.props.numCols && this.registerWidthListenter();
    };
    AssessmentList.prototype.render = function () {
        var _this = this;
        var assessments = this.props.assessments;
        return React.createElement("div", null,
            React.createElement(GridList_1.GridList, { cols: this.state.numCols, cellHeight: 200 }, assessments.map(function (assess) {
                return (React.createElement(GridList_1.GridTile, { onTouchTap: _this.handleItemClick(assess), title: assess.title, key: "assess" + assess.id },
                    React.createElement("img", { src: assess.image })));
            })));
    };
    return AssessmentList;
}(React.Component));
AssessmentList.defaultProps = {
    setPageTitle: function (title) { },
    numCols: null
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AssessmentList;
