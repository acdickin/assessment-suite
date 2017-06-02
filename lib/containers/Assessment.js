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
        _this.handleSubmitData = function (data) {
            var onSubmit = _this.props.onSubmit;
            onSubmit(null, data);
            _this.handleSetComplete();
            _this.setState({
                values: data
            });
        };
        _this.handleSetComplete = function () {
            _this.setState({
                isComplete: true
            });
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
            var hasErrors = false;
            var reduceCb = function (errors, name) {
                if (data[name].length === 0) {
                    hasErrors = true;
                    errors[name] = 'Required.';
                }
                else {
                    errors[name] = '';
                }
                return errors;
            };
            var errors = Object.keys(data)
                .map(function (propName) { return propName; })
                .reduce(reduceCb, {});
            return {
                data: errors,
                isValid: !hasErrors
            };
        };
        _this.handleCancel = function () {
        };
        _this.handleFormValues = function () {
            var item = _this.props.item;
            var values = _this.state.values;
            values = values || item.questions.reduce(function (acc, question) {
                acc[question.id] = typeof values[question.id] !== 'undefined' ? values[question.id] : "";
                return acc;
            }, {});
            return values;
        };
        console.log(props);
        _this.state = {
            isComplete: false,
            values: false
        };
        return _this;
    }
    Assessment.prototype.render = function () {
        var item = this.props.item;
        var content;
        if (this.state.isComplete) {
            content = React.createElement(AssessmentResult_1.default, { backClick: this.handleResultBack, results: this.state.values, assessment: item });
        }
        else {
            content = React.createElement(Assessment_1.default, { item: item, values: this.handleFormValues(), cancel: this.handleCancel, submitData: this.handleSubmitData, validateData: this.handleValidateData });
        }
        return React.createElement(MuiThemeProvider_1.default, { muiTheme: getMuiTheme_1.default(lightBaseTheme_1.default) }, content);
    };
    return Assessment;
}(React.Component));
Assessment.defaultProps = {
    values: false,
    onSubmit: function (error, data) {
        //default
    }
};
exports.default = Assessment;
