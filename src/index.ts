import FriendShip from './containers/assessments/FriendShip';
import MaritalSatisfaction from './containers/assessments/MaritalSatisfaction';
import PostDeploymentSocialSupport from './containers/assessments/PostDeploymentSocialSupport';
import SocialSupport from './containers/assessments/SocialSupport';
import {createRoutes,createPlainRoutes} from './routes';


const assessments = {
    FriendShip,
    MaritalSatisfaction,
    PostDeploymentSocialSupport,
    SocialSupport 
}

export  {
  assessments,
  createRoutes,
  createPlainRoutes
};
