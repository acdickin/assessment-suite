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
var _1 = require("../actions/");
var defaultAssessResults = {};
exports.getMax = function (array) {
    return Math.max.apply(null, array);
};
exports.nextId = function (array) {
    var nextId = array.length ? exports.getMax(array) + 1 : 1;
    return nextId;
};
exports.assessmentResults = function (state, action) {
    if (state === void 0) { state = defaultAssessResults; }
    switch (action.type) {
        case _1.ADD_ASSESSMENT_RESULT:
            state = __assign({}, state, (_a = {}, _a[action.id] = action.data, _a));
            break;
        default:
            // code ...
            break;
    }
    return state;
    var _a;
};
exports.assessmentResultIds = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case _1.ADD_ASSESSMENT_RESULT:
            if (action.id && !(state.indexOf(action.id) > -1)) {
                state.push(action.id);
                state = state.map(function (id) { return id; });
            }
            break;
        default:
            // code ...
            break;
    }
    return state;
};
