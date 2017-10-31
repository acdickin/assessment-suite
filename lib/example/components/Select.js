"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SelectField_1 = require("material-ui/SelectField");
var MenuItem_1 = require("material-ui/MenuItem");
var Select = (function (_super) {
    __extends(Select, _super);
    function Select() {
        return _super.apply(this, arguments) || this;
    }
    Select.prototype.render = function () {
        var _a = this.props, item = _a.item, value = _a.value, error = _a.error, handleChange = _a.handleChange;
        return (React.createElement("div", null,
            React.createElement("h3", null, item.title),
            React.createElement(SelectField_1.default, { hintText: 'Select One', value: value, fullWidth: true, onChange: handleChange, 
                // ref={(input) => { (this as any).textInput = input; }}
                errorText: error }, item.choices.map(function (choice) { return React.createElement(MenuItem_1.default, { key: choice.title, value: choice.value, primaryText: choice.title }); }))));
    };
    return Select;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Select;
