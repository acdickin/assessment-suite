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
var Assessment_1 = require("../components/Assessment");
var AssessmentResult_1 = require("./AssessmentResult");
var MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
var getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
var lightBaseTheme_1 = require("material-ui/styles/baseThemes/lightBaseTheme");
var Assessment = (function (_super) {
    __extends(Assessment, _super);
    function Assessment(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSubmitData = function (error, data) {
            var _a = _this.props, onSubmit = _a.onSubmit, item = _a.item;
            onSubmit(error, data, item);
            if (!error) {
                _this.handleSetComplete();
            }
            _this.setState({
                values: data
            });
        };
        _this.handleSetComplete = function () {
            _this.setState({
                isComplete: true
            });
        };
        _this.handleChange = function (values) {
            var item = _this.props.item;
            var newQuestions = _this.props.item.calcQuestions(values);
            console.log(values, newQuestions);
            _this.setState({ values: values });
            if (newQuestions) {
                _this.setState({ questions: _this.props.item.calcQuestions(values) });
            }
        };
        _this.handleResultBack = function () {
            _this.handleSetIncomplete();
        };
        _this.handleSetIncomplete = function () {
            _this.setState({
                isComplete: false
            });
        };
        _this.handleValidateData = function (data) {
            var item = _this.props.item;
            return item.validate(data);
        };
        _this.handleCancel = function () {
            var _a = _this.props, onCancel = _a.onCancel, item = _a.item;
            onCancel(null, item);
        };
        _this.state = {
            isComplete: false,
            values: _this.props.values,
            questions: _this.props.item.calcQuestions({})
        };
        return _this;
    }
    Assessment.prototype.componentDidMount = function () {
        var _a = this.props, setPageTitle = _a.setPageTitle, item = _a.item;
        setPageTitle(item.title);
    };
    Assessment.prototype.render = function () {
        var _a = this.props, item = _a.item, onSubmit = _a.onSubmit;
        var content;
        if (this.state.isComplete) {
            content = React.createElement(AssessmentResult_1.default, { backClick: this.handleResultBack, results: this.state.values, assessment: item });
        }
        else {
            content = React.createElement(Assessment_1.default, { questions: this.state.questions, handleChange: this.handleChange, item: item, values: this.state.values, cancel: this.handleCancel, onSubmit: this.handleSubmitData, validateData: this.handleValidateData });
        }
        return React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(lightBaseTheme_1.default) }, content);
    };
    return Assessment;
}(React.Component));
Assessment.defaultProps = {
    values: {},
    setPageTitle: function (title) { },
    onSubmit: function (error, data, assessment) { }
};
exports.default = Assessment;
