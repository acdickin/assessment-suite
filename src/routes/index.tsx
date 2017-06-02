import {syncRoute,asynRouteMaker} from '../lib/helper';

import AssessmentResult from '../containers/AssessmentResult';
import AssessmentPage from '../containers/AssessmentPage';
import AssessmentList from '../containers/AssessmentList';
import Home from '../example/components/Home';
import * as React from 'react';
import {assessmentIds,assessments,AssessmentInterface} from '../res/data/assessments';

export interface AssessmentRoutesConfig{
  ids: number[]|string[];
  itemClick(assessment: AssessmentInterface): void;
  routesPrefix?: string;
}

export const createRoutes = (config: AssessmentRoutesConfig,cb: (assessment: AssessmentInterface) => AssessmentInterface = null) => {
  const defaultCb = (assessment: AssessmentInterface) => {
    assessment.image = '';
    return assessment;
  }
  const assessmentCb = cb || defaultCb;
  const ids = config.ids.length ? config.ids : assessmentIds;
  const assessmentsSubset:AssessmentInterface[] 
                                = ids.filter(aid => typeof assessments[aid] !== 'undefined')
                                      .map(aid => {
          
                                            
                                            return assessmentCb(assessments[aid]);
                                      });


  AssessmentList.defaultProps = {...AssessmentList.defaultProps, itemClick: config.itemClick, assessments: assessmentsSubset};
  const routes = [
  
    syncRoute('assessment/:id',AssessmentPage),
    syncRoute('assessments',AssessmentList),
  
  ];
  return routes;
};