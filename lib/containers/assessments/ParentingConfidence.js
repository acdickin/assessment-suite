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
var Assessment_1 = require("../Assessment");
var assessments_1 = require("../../res/data/assessments");
var ParentingConfidence = (function (_super) {
    __extends(ParentingConfidence, _super);
    function ParentingConfidence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParentingConfidence.prototype.render = function () {
        return React.createElement(Assessment_1.default, __assign({}, this.props, { item: assessments_1.ParentingConfidenceAssessment }));
    };
    return ParentingConfidence;
}(React.Component));
exports.default = ParentingConfidence;
