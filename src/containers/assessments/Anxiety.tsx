import * as React from "react";
import AssessmentContainer from '../Assessment';
import {AnxietyAssessment as AssessmentInfo} from '../../res/data/assessments';
import {AssessmentProps} from './interfaces';

export default class Anxiety extends React.Component<AssessmentProps, null> {
  render(){
     return <AssessmentContainer {...this.props} item={AssessmentInfo} />;
  }
}