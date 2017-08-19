import * as React from "react";
import { Link } from 'react-router-dom';

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

}

export interface State { 

}


export default class Assessments extends React.Component<Props, State> {

    render() {
        return (<div>

                  <AssessmentsList>
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