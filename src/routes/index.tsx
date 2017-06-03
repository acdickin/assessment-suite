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
  loadImages?: boolean;
}

interface AdapterProps{
  params?: any;
}
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


export const createRoutes = (config: AssessmentRoutesConfig,cb?: (assessment: AssessmentInterface) => AssessmentInterface) => {
  const defaultCb = (assessment: AssessmentInterface) => {
    ///assessment.image = '';
    return assessment;
  }
  const assessmentCb = cb || defaultCb;
  const ids = config.ids.length ? config.ids : assessmentIds;
  const loadImages = typeof config['loadImages'] !== 'undefined' ? config['loadImages'] : false;
  //const componentWrapper = config['componentWrapper'] ? config['componentWrapper'] : AssessmentAdapter;

  const assessmentsSubset:AssessmentInterface[] 
                                = ids.filter(aid => typeof assessments[aid] !== 'undefined')
                                      .map(aid => {
                                        assessments[aid].image = loadImages ? require('../' + assessments[aid].image) : '';   
                                        return assessmentCb(assessments[aid]);
                                      });


  AssessmentList.defaultProps = {...AssessmentList.defaultProps, 
                                      itemClick: config.itemClick, 
                                      assessments: assessmentsSubset}; 
  const routes = [
  /*
      syncRoute('assessment/:id',() => React.createElement(AssessmentPage)),
    syncRoute('assessments',() => React.createElement(AssessmentList))
   */
    syncRoute('assessment/:id',AssessmentPage),
    syncRoute('assessments',AssessmentList)
  
  ];
  return routes;
};