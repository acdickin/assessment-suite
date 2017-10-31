"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var React = require("react");
var Select_1 = require("./Select");
var RaisedButton_1 = require("material-ui/RaisedButton");
var commonStyles_1 = require("./commonStyles");
var reduceCb = function (acc, value) {
    acc[value.id] = '';
    return acc;
};
var getField = function (item, values, errors, handleChange) {
    var comp = null;
    switch (item.type) {
        case 'select':
            comp = React.createElement(Select_1.default, { key: item.id, error: errors[item.id], value: values[item.id], item: item, handleChange: handleChange(item.id) });
            break;
        case 'label':
            comp = React.createElement("h3", { key: item.id }, item.title);
            break;
        default:
            comp = React.createElement("h3", { key: item.id }, item.title);
    }
    return comp;
};
var Form = (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSubmit = function (event) {
            var _a = _this.props, validateData = _a.validateData, onSubmit = _a.onSubmit;
            var validationResponse = validateData(_this.props.values);
            _this.setState({ errors: validationResponse.data });
            if (validationResponse.isValid) {
                onSubmit(null, _this.props.values);
            }
            else {
                onSubmit(validationResponse, _this.props.values);
            }
            event.preventDefault();
        };
        _this.handleClear = function (event) {
            var handleChange = _this.props.handleChange;
            handleChange({});
        };
        _this.handleCancel = function (event) {
            _this.handleClear(event);
            var cancel = _this.props.cancel;
            cancel();
        };
        _this.handleChange = function (name) {
            var handleChange = _this.props.handleChange;
            return function (event, index, value) {
                var newValues = __assign({}, _this.props.values, (_a = {}, _a[name] = value, _a));
                _this.setState({ errors: __assign({}, _this.state.errors, (_b = {}, _b[name] = '', _b)) });
                handleChange(newValues);
                var _a, _b;
            };
        };
        _this.state = {
            errors: props.items.reduce(reduceCb, {}),
        };
        return _this;
    }
    Form.prototype.render = function () {
        var _this = this;
        var _a = this.props, items = _a.items, values = _a.values;
        var errors = this.state.errors;
        return (React.createElement("div", null,
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("div", null, items.map(function (item) { return getField(item, values, errors, _this.handleChange); })),
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Form;
