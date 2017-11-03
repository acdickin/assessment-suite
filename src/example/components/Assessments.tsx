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
    Worry,
    Spirituality,
    Hope,
    CaregiverStress,
    Forgiveness,
    mTBI,
    Nicotine,
    Satisfaction,
    SexualTrauma,
    WorkAdjustment
    Stigma,
    Resilience,
    Gratitude,
    Generosity,
    Optimism
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
                    <assessments.Spirituality/>
                    <assessments.Hope/>
                    <assessments.CaregiverStress/>
                    <assessments.Forgiveness/>
                    <assessments.mTBI/>
                    <assessments.Nicotine/>
                    <assessments.Satisfaction/> 
                    <assessments.SexualTrauma/>
                    <assessments.WorkAdjustment/> 

                        <FriendShip />
                        <MaritalSatisfaction />
                        <PostDeploymentSocialSupport />
                        <SocialSupport />
                        <Sleep />
                        <Panic />
                        <AlcoholDrugs />
                        <Physical />
                        <ParentingConfidence />
                        <Anger />
                        <Stigma />
                        <Worry />
                        <Resilience />
                        <Gratitude />
                        <Generosity />
                        <Optimism />

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