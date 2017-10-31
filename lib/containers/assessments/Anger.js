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
var Assessment_1 = require("../Assessment");
var assessments_1 = require("../../res/data/assessments");
var Anger = (function (_super) {
    __extends(Anger, _super);
    function Anger() {
        return _super.apply(this, arguments) || this;
    }
    Anger.prototype.render = function () {
        return React.createElement(Assessment_1.default, __assign({}, this.props, { item: assessments_1.AngerAssessment }));
    };
    return Anger;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Anger;
