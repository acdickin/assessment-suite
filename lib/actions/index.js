"use strict";
exports.ADD_ASSESSMENT_RESULT = 'T2.SET_ASSESSMENT_RESULT';
exports.addAssessmentResult = function (id, data) {
    return {
        type: exports.ADD_ASSESSMENT_RESULT,
        id: id,
        data: data
    };
};
