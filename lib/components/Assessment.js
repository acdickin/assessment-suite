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
var Form_1 = require("./Form");
var Assessment = (function (_super) {
    __extends(Assessment, _super);
    function Assessment(props) {
        return _super.call(this, props) || this;
    }
    Assessment.prototype.componentWillMount = function () {
        //window.scrollTo(0,0);
    };
    Assessment.prototype.render = function () {
        var _a = this.props, item = _a.item, onSubmit = _a.onSubmit, validateData = _a.validateData, cancel = _a.cancel, handleChange = _a.handleChange, values = _a.values, questions = _a.questions;
        return (React.createElement(Form_1.default, { handleChange: handleChange, values: values, items: questions, cancel: cancel, validateData: validateData, onSubmit: onSubmit }));
    };
    Assessment.defaultProps = {
        values: {}
    };
    return Assessment;
}(React.Component));
exports.default = Assessment;
