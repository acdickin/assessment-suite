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
var _1 = require("../../");
var FriendShip = _1.assessments.FriendShip, MaritalSatisfaction = _1.assessments.MaritalSatisfaction, PostDeploymentSocialSupport = _1.assessments.PostDeploymentSocialSupport, SocialSupport = _1.assessments.SocialSupport, Sleep = _1.assessments.Sleep, Panic = _1.assessments.Panic, PostTraumaticStress = _1.assessments.PostTraumaticStress, Depression = _1.assessments.Depression, AlcoholDrugs = _1.assessments.AlcoholDrugs, Anxiety = _1.assessments.Anxiety, Physical = _1.assessments.Physical, ParentingConfidence = _1.assessments.ParentingConfidence, Anger = _1.assessments.Anger, Stress = _1.assessments.Stress, Stigma = _1.assessments.Stigma, Worry = _1.assessments.Worry;
var Assessments = (function (_super) {
    __extends(Assessments, _super);
    function Assessments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Assessments.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(_1.AssessmentsList, null,
                React.createElement(_1.assessments.Stress, null),
                React.createElement(_1.assessments.PostTraumaticStress, null),
                React.createElement(_1.assessments.Depression, null),
                React.createElement(_1.assessments.Anxiety, null))));
    };
    return Assessments;
}(React.Component));
exports.default = Assessments;
