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
var AssessmentResult_1 = require("../components/AssessmentResult");
function getDescription(tally, assessment) {
    var score = assessment.scoring.filter(function (criteria) {
        if (criteria.min <= tally && criteria.max >= tally) {
            return true;
        }
        return false;
    });
    return score.length ? score[0] : assessment.scoring[0];
}
var AssessmentResult = (function (_super) {
    __extends(AssessmentResult, _super);
    function AssessmentResult(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAssessmentState = function (assessment, results) {
            var score = assessment.calcScore(results);
            console.log(score);
            return {
                minScore: assessment.minScore,
                maxScore: assessment.maxScore,
                score: score,
                result: getDescription(score, assessment),
                assessment: assessment,
                middleScore: assessment.middleScore,
                highIsGood: assessment.scoringMode === 1,
                id: assessment.id + ''
            };
        };
        _this.state = _this.handleAssessmentState(_this.props.assessment, _this.props.results);
        return _this;
    }
    AssessmentResult.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState(this.handleAssessmentState(nextProps.assessment, nextProps.results));
    };
    AssessmentResult.prototype.render = function () {
        return React.createElement(AssessmentResult_1.default, __assign({ backClick: this.props.backClick }, this.state));
    };
    AssessmentResult.defaultProps = {};
    return AssessmentResult;
}(React.Component));
exports.default = AssessmentResult;
