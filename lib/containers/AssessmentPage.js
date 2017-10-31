"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Assessment_1 = require("./Assessment");
var assessments_1 = require("../res/data/assessments");
var AssessmentPage = (function (_super) {
    __extends(AssessmentPage, _super);
    function AssessmentPage() {
        var _this = _super.apply(this, arguments) || this;
        _this.handleSetTitle = function (title) {
            var setPageTitle = _this.props.setPageTitle;
            setPageTitle(title);
        };
        return _this;
    }
    AssessmentPage.prototype.render = function () {
        var _a = this.props, params = _a.params, onCancel = _a.onCancel;
        var assessment = typeof assessments_1.assessments[params.id] !== 'undefined' ? assessments_1.assessments[params.id] : false;
        if (assessment) {
            return React.createElement(Assessment_1.default, { onSubmit: this.props.onSubmit, onCancel: onCancel, setPageTitle: this.handleSetTitle, item: assessment });
        }
        return React.createElement("div", null, "Invalid Assessment Id");
    };
    return AssessmentPage;
}(React.Component));
AssessmentPage.defaultProps = {
    setPageTitle: function (title) { }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AssessmentPage;
