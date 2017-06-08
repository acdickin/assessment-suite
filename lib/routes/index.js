"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../lib/helper");
var AssessmentPage_1 = require("../containers/AssessmentPage");
var AssessmentList_1 = require("../containers/AssessmentList");
var assessments_1 = require("../res/data/assessments");
var defaultOnCancel = function (error, assessment) {
};
var defaultOnSubmit = function (error, data, assessment) {
    //console.log(error,data);
};
exports.createRoutes = function (config, cb) {
    var defaultCb = function (assessment) {
        return assessment;
    };
    var assessmentCb = cb || defaultCb;
    var ids = config.ids.length ? config.ids : assessments_1.assessmentIds;
    var onCancel = typeof config['onCancel'] !== 'undefined' ? config['onCancel'] : defaultOnCancel;
    var loadImages = typeof config['loadImages'] !== 'undefined' ? config['loadImages'] : false;
    var assessmentsSubset = ids.filter(function (aid) { return typeof assessments_1.assessments[aid] !== 'undefined'; })
        .map(function (aid) {
        assessments_1.assessments[aid].image = loadImages ? require('../' + assessments_1.assessments[aid].image) : '';
        return assessmentCb(assessments_1.assessments[aid]);
    });
    AssessmentList_1.default.defaultProps = __assign({}, AssessmentList_1.default.defaultProps, { itemClick: config.itemClick, assessments: assessmentsSubset });
    AssessmentPage_1.default.defaultProps = __assign({}, AssessmentPage_1.default.defaultProps, { onSubmit: defaultOnSubmit, onCancel: onCancel });
    var routes = [
        helper_1.syncRoute('assessment/:id', AssessmentPage_1.default),
        helper_1.syncRoute('assessments', AssessmentList_1.default)
    ];
    return routes;
};
