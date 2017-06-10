import * as React from "react";
import { Link } from 'react-router';

import {
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
    Stress
} = assessments;


export interface Props { 

}

export interface State { 

}


export default class Home extends React.Component<Props, State> {
    handleCancel = (error: any, assessment: any) => {
          alert("you clicked cancel");
    }

    handleSubmit = (error: any, assessment: any) => {
          alert("you clicked SUBMIT");
    }

    render() {
        return (<div>
                  <h1>Home Page</h1>
                  <Link to="/main/assessments">Assessments List</Link>
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
                      <Physical />*/}
                      <ParentingConfidence />
                      <Anger />
                      <assessments.Stress />
                </div>
                  );
    }
}