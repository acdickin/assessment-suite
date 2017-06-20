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
var RaisedButton_1 = require("material-ui/RaisedButton");
var Assessment = (function (_super) {
    __extends(Assessment, _super);
    function Assessment(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            gage: null
        };
        return _this;
    }
    Assessment.prototype.componentWillMount = function () {
        var _this = this;
        // window.scrollTo(0,0);
        var _a = this.props, minScore = _a.minScore, maxScore = _a.maxScore, middleScore = _a.middleScore, highIsGood = _a.highIsGood, score = _a.score, result = _a.result, backClick = _a.backClick, id = _a.id;
        Promise.resolve().then(function () { return require('local-t2-linear-gage'); }).then(function (LinearGauge) {
            _this.setState({ gage: React.createElement(LinearGauge.default, { id: id, middleScore: middleScore, highIsGood: highIsGood, minScore: minScore, maxScore: maxScore, result: score }) });
        });
    };
    Assessment.prototype.componentWillReceiveProps = function (nextProps) {
    };
    Assessment.prototype.render = function () {
        var _a = this.props, minScore = _a.minScore, maxScore = _a.maxScore, middleScore = _a.middleScore, highIsGood = _a.highIsGood, score = _a.score, result = _a.result, backClick = _a.backClick, id = _a.id;
        console.log(this.props);
        return (React.createElement("div", null,
            this.state.gage,
            React.createElement("h2", null, result.title),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: result.description } }),
            React.createElement("h3", null, "Recommendations"),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: result.recommendations } }),
            React.createElement(RaisedButton_1.default, { label: "Back", onTouchTap: function () { return backClick(); } })));
    };
    return Assessment;
}(React.Component));
exports.default = Assessment;
