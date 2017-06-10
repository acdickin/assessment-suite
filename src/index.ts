import FriendShip from './containers/assessments/FriendShip';
import MaritalSatisfaction from './containers/assessments/MaritalSatisfaction';
import PostDeploymentSocialSupport from './containers/assessments/PostDeploymentSocialSupport';
import SocialSupport from './containers/assessments/SocialSupport';

import Sleep from './containers/assessments/Sleep';
import Panic from './containers/assessments/Panic';
import PostTraumaticStress from './containers/assessments/PostTraumaticStress';
import Depression from './containers/assessments/Depression';
import AlcoholDrugs from './containers/assessments/AlcoholDrugs';
import Anxiety from './containers/assessments/Anxiety';
import Physical from './containers/assessments/Physical';
import ParentingConfidence from './containers/assessments/ParentingConfidence';
import Anger from './containers/assessments/Anger';

import {createRoutes,createPlainRoutes} from './routes';


const assessments = {
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
    Anger
}

export  {
  assessments,
  createRoutes,
  createPlainRoutes
};
