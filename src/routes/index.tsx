import {syncRoute,asynRouteMaker} from '../lib/helper';
import AssessmentResult from '../containers/AssessmentResult';
import Assessment from '../containers/Assessment';
import AssessmentList from '../containers/AssessmentList';
import * as React from 'react';
import {assessmentIds,assessments,AssessmentInterface} from '../res/data/assessments';

export interface AssessmentRoutesConfig{
  ids: number[]|string[];
  itemClick(assessment: AssessmentInterface): void;
}




export const createRoutes = (config: AssessmentRoutesConfig) => {

  const ids = config.ids.length ? config.ids : assessmentIds;
  const assessmentsSubset:AssessmentInterface[]  = ids.map(aid => assessments[aid]);
  const routes = [
  
    syncRoute('assessment/:id',Assessment),
    syncRoute('assessments',<AssessmentList itemClick={config.itemClick} assessments={assessmentsSubset} />),
  
  ];
  return routes;
};