import * as React from "react";
import { Link , withRouter } from 'react-router-dom';

import {
  AssessmentsList,
  assessments,
  createRoutes
} from '../../';
const {
    FriendShip,
    MaritalSatisfaction,
    PostDeploymentSocialSupport,
    SocialSupport,
    Sleep,
    Panic,
    PostTraumaticStress,
    Depression,
    AlcoholDrugs,
    Anxiety,
    Physical,
    ParentingConfidence,
    Anger,
    Stress,
    Stigma,
    Worry
} = assessments;


export interface Props { 
  history: {push: (path: string) => any}
}

export interface State { 

}


class Assessments extends React.Component<Props, State> {

    render() {
        const handleAssessmentLoaded = (assessment) => {
          console.log(assessment.title);
        }
        const handleCancel = (err,assessment) => {
          this.props.history.push('/assessments');
        }
        return (<div>

                  <AssessmentsList onCancel={handleCancel} onAssessmentMounted={handleAssessmentLoaded} cols={2}>
                    <assessments.Stress />
                    <assessments.PostTraumaticStress />
                    <assessments.Depression />
                    <assessments.Anxiety />
                  </AssessmentsList>
                      {/*<FriendShip />
                      <MaritalSatisfaction />
                      <PostDeploymentSocialSupport />
                      <SocialSupport />
                      <Sleep />
                      <Panic />
                      <PostTraumaticStress />
                      <Depression />
                      <AlcoholDrugs />
                      <Anxiety />
                      <Physical />
                      <ParentingConfidence />
                      <Anger />
                      <assessments.Stress />
                      <assessments.Worry /> 
                      <assessments.Optimism /> */}
                </div>
                  );
    }
}

export default withRouter(Assessments);