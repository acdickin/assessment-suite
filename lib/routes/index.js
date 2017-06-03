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
/*
export class AssessmentAdapter extends React.Component<AdapterProps, null> {
  public static defaultProps: Partial<AdapterProps> = {
    params: {}
  }

  handleSetTitle = (title: string) => {
    //const {appBarTitle} = this.props;
    alert(title);
    //appBarTitle(title);
  }
  
  render(){
    return (<div>
              {React.cloneElement((this.props as any).children, {setTitle: this.handleSetTitle })}
            </div>);
  }
}*/
exports.createRoutes = function (config, cb) {
    var defaultCb = function (assessment) {
        ///assessment.image = '';
        return assessment;
    };
    var assessmentCb = cb || defaultCb;
    var ids = config.ids.length ? config.ids : assessments_1.assessmentIds;
    var loadImages = typeof config['loadImages'] !== 'undefined' ? config['loadImages'] : false;
    //const componentWrapper = config['componentWrapper'] ? config['componentWrapper'] : AssessmentAdapter;
    var assessmentsSubset = ids.filter(function (aid) { return typeof assessments_1.assessments[aid] !== 'undefined'; })
        .map(function (aid) {
        assessments_1.assessments[aid].image = loadImages ? require('../' + assessments_1.assessments[aid].image) : '';
        return assessmentCb(assessments_1.assessments[aid]);
    });
    AssessmentList_1.default.defaultProps = __assign({}, AssessmentList_1.default.defaultProps, { itemClick: config.itemClick, assessments: assessmentsSubset });
    var routes = [
        /*
            syncRoute('assessment/:id',() => React.createElement(AssessmentPage)),
          syncRoute('assessments',() => React.createElement(AssessmentList))
         */
        helper_1.syncRoute('assessment/:id', AssessmentPage_1.default),
        helper_1.syncRoute('assessments', AssessmentList_1.default)
    ];
    return routes;
};
