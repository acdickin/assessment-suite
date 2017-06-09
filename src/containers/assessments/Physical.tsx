import * as React from "react";
import AssessmentContainer from '../Assessment';
import {PhysicalAssessment as AssessmentInfo} from '../../res/data/assessments';
import {AssessmentProps} from './interfaces';

export default class Physical extends React.Component<AssessmentProps, null> {
  render(){
     return <AssessmentContainer {...this.props} item={AssessmentInfo} />;
  }
}