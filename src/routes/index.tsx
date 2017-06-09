import {syncRoute,asynRouteMaker} from '../lib/helper';
import {Route} from 'react-router';
import AssessmentResult from '../containers/AssessmentResult';
import AssessmentPage from '../containers/AssessmentPage';
import AssessmentList from '../containers/AssessmentList';
import Home from '../example/components/Home';
import * as React from 'react';
import {assessmentIds,assessments,AssessmentInterface} from '../res/data/assessments';

interface AssessmentRoutesConfig{
  ids: number[]|string[];
  itemClick(assessment: AssessmentInterface): void;
  onCancel?(error: any, assessment: AssessmentInterface): void;
  onSubmit?(error: any, data: any, assessment: AssessmentInterface): void
  loadImages?: boolean;
  plain?: boolean;
}

const defaultOnCancel = (error: any, assessment: AssessmentInterface) => {
 
}

const defaultOnSubmit = (error: any, data: any,assessment: AssessmentInterface):void => {
  //console.log(error,data);
}

interface AdapterProps{
  params?: any;
}

const initConfig = (config: AssessmentRoutesConfig,cb?: (assessment: AssessmentInterface) => AssessmentInterface):{AssessmentList: any,AssessmentPage: any} => {
  const defaultCb = (assessment: AssessmentInterface) => {
    return assessment;
  }
  const assessmentCb = cb || defaultCb;
  const ids = config.ids.length ? config.ids : assessmentIds;
  const usePlainRoutes = typeof config['plain'] !== 'undefined' ? config['plain'] : false;

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
  return {
    AssessmentList,
    AssessmentPage
  }                                                        

};

export const createPlainRoutes = (config: AssessmentRoutesConfig,cb?: (assessment: AssessmentInterface) => AssessmentInterface): {AssessmentPageRoute: any, AssessmentsRoute: any} => {
  const {AssessmentList, AssessmentPage} = initConfig(config,cb);
  const AssessmentPageRoute = syncRoute('assessment/:id',AssessmentPage);
  const AssessmentsRoute = syncRoute('assessments',AssessmentList);
  return  {
    AssessmentPageRoute,
    AssessmentsRoute
  }
}
export const createRoutes = (config: AssessmentRoutesConfig,cb?: (assessment: AssessmentInterface) => AssessmentInterface):JSX.Element => {
    const {AssessmentList, AssessmentPage} = initConfig(config,cb);
    return (
        <Route>
          <Route path="assessment/:id" component={AssessmentPage} />
          <Route path="assessments" component={AssessmentList} />
        </Route>
      );
}




