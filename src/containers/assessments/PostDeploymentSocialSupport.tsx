import * as React from "react";
import AssessmentContainer from '../Assessment';
import {PostDeploymentSocialSupportAssessment as AssessmentInfo} from '../../res/data/assessments';
import {AssessmentProps} from './interfaces';

export default class PostDeploymentSocialSupport extends React.Component<AssessmentProps, null> {
  render(){
     return <AssessmentContainer {...this.props} item={AssessmentInfo} />;
  }
}