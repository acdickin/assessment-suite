import {Component} from 'React';
interface AssessmentInterface{
  onSubmit?(error: any, data: any): void;
  values?: any;
}


export class FriendShip extends Component<null, null> implements AssessmentInterface{

}

export class MaritalSatisfaction extends Component<null, null> implements AssessmentInterface{
  
}

export class PostDeploymentSocialSupport extends Component<null, null> implements AssessmentInterface{
  
}

export class SocialSupport extends Component<null, null> implements AssessmentInterface{
  
}

export default {
  FriendShip,
  MaritalSatisfaction,
  PostDeploymentSocialSupport,
  SocialSupport
}