"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var _1 = require("../../");
var FriendShip = _1.assessments.FriendShip, MaritalSatisfaction = _1.assessments.MaritalSatisfaction, PostDeploymentSocialSupport = _1.assessments.PostDeploymentSocialSupport, SocialSupport = _1.assessments.SocialSupport, Sleep = _1.assessments.Sleep, Panic = _1.assessments.Panic, PostTraumaticStress = _1.assessments.PostTraumaticStress, Depression = _1.assessments.Depression, AlcoholDrugs = _1.assessments.AlcoholDrugs, Anxiety = _1.assessments.Anxiety, Physical = _1.assessments.Physical, ParentingConfidence = _1.assessments.ParentingConfidence, Anger = _1.assessments.Anger, Stress = _1.assessments.Stress, Worry = _1.assessments.Worry, Spirituality = _1.assessments.Spirituality, Hope = _1.assessments.Hope, CaregiverStress = _1.assessments.CaregiverStress, Forgiveness = _1.assessments.Forgiveness;
var Assessments = (function (_super) {
    __extends(Assessments, _super);
    function Assessments() {
        return _super.apply(this, arguments) || this;
    }
    Assessments.prototype.render = function () {
        var _this = this;
        var handleAssessmentLoaded = function (assessment) {
            console.log(assessment.title);
        };
        var handleCancel = function (err, assessment) {
            _this.props.history.push('/assessments');
        };
        return (React.createElement("div", null,
            React.createElement(_1.AssessmentsList, { onCancel: handleCancel, onAssessmentMounted: handleAssessmentLoaded, cols: 2 },
                React.createElement(_1.assessments.Stress, null),
                React.createElement(_1.assessments.PostTraumaticStress, null),
                React.createElement(_1.assessments.Depression, null),
                React.createElement(_1.assessments.Anxiety, null),
                React.createElement(_1.assessments.Spirituality, null),
                React.createElement(_1.assessments.Hope, null),
                React.createElement(_1.assessments.CaregiverStress, null),
                React.createElement(_1.assessments.Forgiveness, null),
                React.createElement(_1.assessments.mTBI, null))));
    };
    return Assessments;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_router_dom_1.withRouter(Assessments);
