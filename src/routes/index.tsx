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
  onCancel?(error: any, assessment: AssessmentInterface): void;
  onSubmit?(error: any, data: any, assessment: AssessmentInterface): void
  loadImages?: boolean;
}

const defaultOnCancel = (error: any, assessment: AssessmentInterface) => {
 
}

const defaultOnSubmit = (error: any, data: any,assessment: AssessmentInterface):void => {
  console.log(error,data);
 
}

interface AdapterProps{
  params?: any;
}

export const createRoutes = (config: AssessmentRoutesConfig,cb?: (assessment: AssessmentInterface) => AssessmentInterface) => {
  const defaultCb = (assessment: AssessmentInterface) => {
    return assessment;
  }
  const assessmentCb = cb || defaultCb;
  const ids = config.ids.length ? config.ids : assessmentIds;
  const onCancel = typeof config['onCancel'] !== 'undefined' ? config['onCancel'] : defaultOnCancel;
  const loadImages = typeof config['loadImages'] !== 'undefined' ? config['loadImages'] : false;

  const assessmentsSubset:AssessmentInterface[] 
                                = ids.filter(aid => typeof assessments[aid] !== 'undefined')
                                      .map(aid => {
                                        assessments[aid].image = loadImages ? require('../' + assessments[aid].image) : '';   
                                        return assessmentCb(assessments[aid]);
                                      });


  AssessmentList.defaultProps = {...AssessmentList.defaultProps, 
                                      itemClick: config.itemClick, 
                                      assessments: assessmentsSubset}; 

  AssessmentPage.defaultProps =  {...AssessmentPage.defaultProps, 
                                      onSubmit: defaultOnSubmit,
                                      onCancel: onCancel};                                 
  const routes = [

    syncRoute('assessment/:id',AssessmentPage),
    syncRoute('assessments',AssessmentList)
  
  ];
  return routes;
};