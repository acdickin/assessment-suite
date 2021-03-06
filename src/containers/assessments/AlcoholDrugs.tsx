import * as React from "react";
import AssessmentContainer from '../Assessment';
import {AlcoholDrugsAssessment as AssessmentInfo} from '../../res/data/assessments';
import {AssessmentProps} from './interfaces';

export default class AlcoholDrugs extends React.Component<AssessmentProps, null> {
  render(){
     return <AssessmentContainer {...this.props} item={AssessmentInfo} />;
  }
}