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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Select_1 = require("./Select");
var RaisedButton_1 = require("material-ui/RaisedButton");
var commonStyles_1 = require("./commonStyles");
var reduceCb = function (acc, value) {
    acc[value.id] = '';
    return acc;
};
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSubmit = function (event) {
            var _a = _this.props, validateData = _a.validateData, onSubmit = _a.onSubmit;
            var validationResponse = validateData(_this.state.values);
            _this.setState({ errors: validationResponse.data });
            if (validationResponse.isValid) {
                onSubmit(null, _this.state.values);
            }
            else {
                onSubmit(validationResponse, _this.state.values);
            }
            event.preventDefault();
        };
        _this.handleClear = function (event) {
            _this.setState({ values: _this.props.items.reduce(reduceCb, {}) });
        };
        _this.handleCancel = function (event) {
            _this.handleClear(event);
            var cancel = _this.props.cancel;
            cancel();
        };
        _this.handleChange = function (name) {
            return function (event, index, value) {
                _this.setState({ errors: __assign({}, _this.state.errors, (_a = {}, _a[name] = '', _a)) });
                _this.setState({ values: __assign({}, _this.state.values, (_b = {}, _b[name] = value, _b)) });
                var _a, _b;
            };
        };
        _this.state = {
            errors: props.items.reduce(reduceCb, {}),
            values: props.values ? props.values : props.items.reduce(reduceCb, {})
        };
        return _this;
    }
    Form.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        var _a = this.state, values = _a.values, errors = _a.errors;
        return (React.createElement("div", null,
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("div", null, items.map(function (item) { return React.createElement(Select_1.default, { key: item.id, error: errors[item.id], value: values[item.id], item: item, handleChange: _this.handleChange(item.id) }); })),
                React.createElement("div", { style: commonStyles_1.flexParentRowStyle },
                    React.createElement("span", { style: commonStyles_1.flexRowItemStyle },
                        React.createElement(RaisedButton_1.default, { primary: true, type: "submit", label: "Submit" })),
                    React.createElement("span", { style: commonStyles_1.flexRowItemStyle },
                        React.createElement(RaisedButton_1.default, { onTouchTap: this.handleCancel, secondary: true, type: "button", label: "Cancel" })),
                    React.createElement("span", { style: commonStyles_1.flexRowItemStyle },
                        React.createElement(RaisedButton_1.default, { onTouchTap: this.handleClear, type: "button", label: "Clear" }))))));
    };
    return Form;
}(React.Component));
exports.default = Form;
